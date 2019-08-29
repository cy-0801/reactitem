import { Home, Find, Order, Mine, Login, Detail ,Search } from "@pages"
import Menu from "@components/menu"
import Assess from "@components/assess"
import Business from "@components/business"

export const tabBarRoute = [
    {
        path: "/home",
        component: Home,
        meta: {
            flag: true
        },
        name: "首页",
        icon: "\ue603"
    },
    {
        path: "/find",
        component: Find,
        meta: {
            flag: true
        },
        name: "发现",
        icon: "\ue663"
    },
    {
        path: "/order",
        component: Order,
        meta: {
            flag: true
        },
        name: "订单",
        icon: "\ue631"
    },
    {
        path: "/mine",
        component: Mine,
        meta: {
            flag: true
        },
        name: "我的",
        icon: "\ue632"
    }
]

export const notabBarRoute = [
    {
        path: "/login",
        component: Login,
        meta: {
            flag: false
        },
        name: "登录",
    },
    {
        path: "/detail/:id",
        component: Detail,
        meta: {
            flag: false
        },
        name: "详情",
        children:[
            {
                path: "/menu",
                component: Menu,
                name: "aaa",
            },{
                path: "/assess",
                component: Assess,
                name: "bbb",
            },{
                path: "/business",
                component: Business,
                name: "aaa",
            }
        ]
    },
    {
        path: "/search",
        component: Search,
        meta: {
            flag: false
        },
        name: "搜索",
    }
]

export const routeConfig = tabBarRoute.concat(notabBarRoute)





