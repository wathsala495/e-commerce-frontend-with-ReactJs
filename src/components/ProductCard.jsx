import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addTOCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    const [show,setShow]=useState(false)
    const dispatch=useDispatch()

    const handleAddTOCart=(e,product)=>{
        console.log("add to cart")
        e.stopPropagation()
        e.preventDefault()
        dispatch(addTOCart(product))
        alert("Product Added Successfully")
    }
  return (
    <Link to='/product/${product.id}'>
    <div className="bg-white p-4 shadow rounded realtive border">
      <img src={product.image} alt=""  className='w-full h-48 object-contain mb-4'/>
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>${product.price}</p>
      <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-500' />
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
      </div>
      <div className="abosolute bottom-6 right-2 flex item justify-center w-8 bg-red-600
      group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 t  transform transition-transform duration-300 hover:scale-105 "
      >
      {/* <button onClick={()=>setShow(true)} className={`${show ? "hidden" : "block"}`}>+</button>
      {show? <button onClick={()=>setShow(false)}>Add To Cart</button>:null} */}
      <span className='group-hover:hidden'>+</span>
      <span className='hidden group-hover:block' onClick={(e)=>handleAddTOCart(e,product)} >Add to Cart</span>
      </div>
      
    </div>
    </Link>
  )
}

export default ProductCard
