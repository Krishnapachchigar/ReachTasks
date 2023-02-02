import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'


const ProductList = () => {
  const {id} = useParams()
  // console.log(data[0], 'data')
  return(
    <div>
          <h1 style={{color:'purple'}}>Product {id}</h1>
          <h2 style={{color:'purple'}}>{data[(id - 1)].name} and {data[(id-1)].author}</h2>
      </div>
    
  )
}
export default ProductList