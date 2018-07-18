import { USER_LIST, USER_NAME, USER_DETAIL, DETAIL_LIST, DETAIL_MONY, COMPUTED_LIST, INSERT } from "../action/index"
let Obj = {
    [USER_NAME](state, action) {
        let arr = []
        action.data.forEach((item, key) => {
            arr.push({
                label: item.userName,
                value: item.userName,
                id: item.id
            })
        })
        state.userName = arr
    },
    [USER_LIST](state, action) {
        state.list = action.data
    },

    [USER_DETAIL](state, action) {
        state.userDeteil = action.data
    },

    [DETAIL_LIST](state, action) {
        state.userDetailList = action.data

    },
    // 单个用户提交金额总数
    [DETAIL_MONY](state, action) {
        state.userMoney = action.userMoney
    },
    [COMPUTED_LIST](state, action) {
        console.log(action.data)
        let num = action.data.reduce((pre, next) => {
            return pre + (next.allMoney * 1)
        }, 0) / action.data.length
        state.computedList = action.data
        state.computedList.forEach((item) => {
            item.Average = Math.floor(num)
            if (num > item.allMoney) {
                item.copeWith = Math.floor(num - item.allMoney)
                item.receivable = 0
            } else {
                item.copeWith = 0
                item.receivable = Math.floor(item.allMoney - num)
            }
        })
    },
    [INSERT](state, action) {
        state.str = action.str
    }
}
export function submit(state = { list: null, userName: [], userDeteil: null, userDetailList: null, userMoney: 0, computedList: null, str: null }, action) {
    Obj[action.type] && Obj[action.type](state, action)
    return {...state }
}