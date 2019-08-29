import {createAction} from "redux-actions"
import {home_iconList} from "@api/home"

export const home_iconListAction = createAction("HOME_ICONLIST",(val)=>val)
export const home_iconListAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await home_iconList();
        dispatch(home_iconListAction(data))
    }
}



// export const searchAction = createAction("",()=>{})
// export const searchAsyncAction = ()=>{
//     return async (dispatch)=>{
//         let data = await 接口不能用
//     }
// }