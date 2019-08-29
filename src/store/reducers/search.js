import {handleActions} from "redux-actions"

const defaultState = {
    text:""
}

export default handleActions({
    "AAA":(state,action)=>{
        let newState = Object.assign({},state);
            newState.text = action.value;
            return newState;
    }
},defaultState)

