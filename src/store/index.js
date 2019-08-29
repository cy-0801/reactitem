import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import home_header from "./reducers/home_header"
import search from "./reducers/search"

const reducer = combineReducers({
    home_header,
    search
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;

