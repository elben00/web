import Mock from "mockjs"
import { userList } from "../data/index"
// 添加数据
Mock.mock("/userList", (req, res) => {
    let {
        userID,
        userName,
        money
    } = JSON.parse(req.body).dataObj
    let index = userList.findIndex((item) => {
        return item.id === userID
    })
    if (index === -1) {
        userList.push({
            userID,
            userName,
            money
        })
    } else {
        userList[index].money += money
    }
    return userList
})

// 删除数据
Mock.mock("/removeUser", (req, res) => {
    let { id } = JSON.parse(req.body)
    userList.forEach((item) => {
        if (item.userID === id) {
            userList.splice(userList.indexOf(item), 1)
        }
    })
    return userList
})


let detailUserList = []
Mock.mock("/detaiList", (req, res) => {
    let { time, money, remarks, name, id } = JSON.parse(req.body).obj
    let index = detailUserList.findIndex((item) => {
        return item.name === name
    })
    if (index === -1) {
        detailUserList.push({
            name: name,
            id: id,
            allMoney: money * 1,
            list: [{
                time,
                money,
                remarks
            }]
        })
    } else {
        detailUserList[index].allMoney += money * 1
        detailUserList[index].list.push({
            time,
            money,
            remarks,
        })
    }
    let num = detailUserList.filter((item) => {
        return item.name === name ? item.allMoney : 0
    })
    return num[0].allMoney
})

//用户详情
let detailt = null
Mock.mock("/userDetail", (req, res) => {
    let { id } = JSON.parse(req.body)
    detailUserList.forEach((item) => {
        if (item.name === id) {
            detailt = item
        }
    })
    return detailt
})

// 修改数据
Mock.mock("/modifyUser", (req, res) => {
    let { modifyId, userN } = JSON.parse(req.body).id
    userList.forEach((item, key) => {
        if (item.userID === modifyId) {
            item.userName = userN
        }
    })
    return userList
})


Mock.mock("/computed", () => {
    return detailUserList
})