import PORT, { testPort } from "../api/index"
import axios from "axios"
// 添加用户
export let add_user = (dataObj) => {
    let { userID, userName, money } = dataObj
    return axios.get(testPort + "/userList", { params: { userID, userName, money } })
}

// 删除用户
export let remove_user = (id) => {
    return axios.get(testPort + "/removeUser", { params: { id } })
}

export let user_detail = (id) => {
    return axios.get(testPort + "/userDetail", { params: { id } })
}

// 提交用户
export let detail_list = (obj) => {
    let { time, money, remarks, name, id } = obj
    return axios.get(testPort + "/detaiList", { params: { time, money, remarks, name, id } })
}

// 修改用户
export let modify_user = (id) => {
    return axios.get(testPort + "/modifyUser", { params: { id } })
}

// 获取所有用户信息
export let computed_list = () => {
    return axios.get(testPort + "/computed")
}

export let computed_user_list = () => {
    return axios.get(testPort + "/computedList")
}