import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { SelectProductReducer } from './Redux/ProductAction'
import { SelectProduct } from './Redux/ProductReducer'

const ProductDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const choice = useSelector(r => r.select)
  console.log("the choice: ", choice)

  const getData = async() => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    if(res){
      dispatch(SelectProduct(res.data))
    }
  }

useEffect(()=>{
  getData()
}, [id])

  return (
    <div>
      <div>All The Product Page </div>
      <div>{id}</div>
      <div>{choice.title}</div>
    </div>
  )
}

export default ProductDetail
