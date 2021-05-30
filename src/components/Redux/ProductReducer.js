import {actionType} from "./actionTypes"

export const AddProduct = (products) => {
  return {
    type: actionType.ADD_PRODUCT,
    payload: products
  }
}

export const SelectProduct = (product) => {
  return {
    type: actionType.SELECT_PRODUCT,
    payload: product
  }
}

export const RemoveProduct = () => {
  return {
    type: actionType.REMOVE_PRODUCT
  }
}