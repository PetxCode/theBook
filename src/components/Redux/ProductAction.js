import {actionType} from "./actionTypes"
import {AddProduct, SelectProduct, RemoveProduct} from "./ProductReducer"


const initState = {
  product: [
    // {id: 1, name: "Peter"}
  ]
}

export const AddProductReducer = (state=initState, {type, payload}) => {
  switch (type) {
    case actionType.ADD_PRODUCT:
      return{ ...state, product: payload }
  
    default:
      return  state
  }
}

export const SelectProductReducer = (state={}, {type, payload}) => {
  switch (type) {
    case actionType.SELECT_PRODUCT:
      return{ ...state, ...payload }
  
    default:
      return  state
  }
}