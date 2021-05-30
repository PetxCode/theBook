import {combineReducers} from "redux"

import {AddProductReducer, SelectProductReducer,} from "./ProductAction"


export const myReducer = combineReducers({
  add: AddProductReducer, 
  select: SelectProductReducer
})