import { AsyncAble, Loading } from "../tools/Async"
let routerData = [{
        path: "/manger",
        component: AsyncAble(() => { return import ("../components/manger/Manger") }, Loading)
    },
    {
        path: "/",
        component: AsyncAble(() => { return import ("../components/main/Main") }, Loading),
        children: [{
            path: "/home",
            component: AsyncAble(() => { return import ("../components/main/home/Home") }, Loading),
            title: "首页",
            src: "../imgs/home1.png",
            src1: "../imgs/home.png"
        }, {
            path: "/detail",
            component: AsyncAble(() => { return import ("../components/main/detail/Detail") }, Loading),
            title: "详情",
            src: "../imgs/detail1.png",
            src1: "../imgs/detail.png"
        }, {
            path: "/submit",
            component: AsyncAble(() => { return import ("../components/main/submit/Submit") }, Loading),
            title: "提交",
            src: "../imgs/submit1.png",
            src1: "../imgs/submit.png"
        }, {
            path: "/computed",
            component: AsyncAble(() => { return import ("../components/main/computed/Computed") }, Loading),
            title: "结算",
            src: "../imgs/computed1.png",
            src1: "../imgs/computed.png"
        }]
    }
]
export default routerData