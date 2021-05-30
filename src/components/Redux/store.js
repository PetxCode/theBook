import {createStore} from "redux"
import {myReducer} from "./myReducer"
import {composeWithDevTools} from "redux-devtools-extension"

export const store = createStore(myReducer, {}, composeWithDevTools())