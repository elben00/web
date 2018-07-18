import { add_user, remove_user, user_detail, detail_list, modify_user, computed_list, computed_user_list } from "./Axios"

export const POST_SUBMIT = "POST_SUBMIT"

// 用户列表
export const USER_LIST = "USER_LIST"
export const USER_NAME = "USER_NAME"
export const USER_DETAIL = "USER_DETAIL"
export const DETAIL_LIST = "DETAIL_LIST"
export const DETAIL_MONY = "DETAIL_MONY"
export const COMPUTED_LIST = "COMPUTED_LIST"

// 插入数据
export const INSERT = "INSERT"

// 添加数据
export let addUser = (obj, dispatch) => {
    add_user(obj).then(res => {
        if (res.data.code === "1") {
            let str = res.data.mag
            let data = res.data.data
            dispatch({ type: INSERT, str })
            dispatch({ type: USER_LIST, data })
            dispatch({ type: USER_NAME, data })
        }
    })
}

// 请求所有数据
export let addListUser = (dispatch) => {
    computed_list().then(res => {
        if (res.data.code === "1") {
            let data = res.data.data
            dispatch({ type: USER_LIST, data })
            dispatch({ type: USER_NAME, data })
        }
    })
}

// 删除数据
export let removeUser = (id, dispatch) => {
    remove_user(id).then(res => {
        let data = res.data.data
        dispatch({ type: USER_LIST, data })
    })
}

// 详情
export let userDetail = (id, dispatch) => {
    user_detail(id).then(res => {
        let data = res.data.data
        dispatch({ type: USER_DETAIL, data })
    })
}

// 提交数据
export let detaiList = (obj, dispatch) => {
    detail_list(obj).then(res => {
        let data = res.data.data
        dispatch({ type: DETAIL_MONY, userMoney: data })
    })
}

// 修改数据
export let modifyUser = (id, dispatch) => {
    modify_user(id).then(res => {
        let data = res.data.data
        dispatch({ type: USER_LIST, data })
    })
}

//结算数据
export let computedList = (dispatch) => {
    computed_user_list().then(res => {
        let data = res.data.data
        dispatch({ type: COMPUTED_LIST, data })
    })
}