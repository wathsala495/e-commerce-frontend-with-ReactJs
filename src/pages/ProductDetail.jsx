import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
    const {id} =useParams()
    const products=useSelector((store)=>store.product)
    // console.log("ss"+productss)
    // const products=useSelector((store)=>store.product.products)
     console.log("products:"+products.products)
    const [product,setProduct]=useState(null)

    // console.log(product)


    useEffect(()=>{
        const newProduct = products.products.find((product) => product.id ===parseInt(id)); 
          console.log(newProduct)
        // setProduct(newProduct)
    },[id])  
  return (
    <div>
        {/* {product.name} */}
       {/* <ProductCard product={product}/> */}
    </div>
  )
}

export default ProductDetail
