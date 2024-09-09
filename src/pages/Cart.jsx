import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
import {removeFromCart,increaseQuantity,dcreaseQuantity} from './../redux/cartSlice'
import {  useNavigate } from 'react-router-dom'


const Cart = () => {
    // const products=useSelector((store)=>store.cart.products)
    const products=useSelector((store)=>store.cart.products)
    const cart =useSelector((store)=>store.cart)
    const [address,setAddress]=useState('main street,0012')
    const [isOpenModal,setIsOpenModal]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    console.log("cart:"+products)
  return (
  <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
     <div className='grid grid-cols-1 sm:grid-cols-3 md:gris-cols-4 lg:grid-cols-5 gap-6'>
        <div>
{/*      
     {products.map((product)=>{
       return  <ProductCard product={product}/>

     })} */}
     {
      products.length > 0?
      <div className='w-screen'>
        <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
        <div className='flex space-x-60'>
        <table border="1">
       <tr>
          <th>PRODUCTS</th>
         
         <th>PRICE</th>
         <th>QUANTITY</th>
         <th>SUBTOTAL</th>
         <th>REMOVE</th>
          </tr>

          {products.map((product)=>(
        
           
            <tr className='space-x-4'>
              <td className='flex'><p>{product.name} </p><img src={product.image}/></td>
              <td>${product.price}</td>
              <td className='flex'>
              <button onClick={()=>dispatch(dcreaseQuantity(product.id))}>-</button>
              <p>{product.quantity}</p>
              <button onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>

              </td>
              <td>
              ${(product.quantity * product.price).toFixed(2)}
              </td>
              <td> <button onClick={()=>dispatch(removeFromCart(product.id))}>
               <FaTrashAlt/>
                </button></td>
           
            </tr>
          
        
            
           
        
  
        
          
          
        ))
        }
       </table>

        <div  className='shadow-lg p-4 space-y-4'>
        <h3 className='font-semibold'>CART TOTAL</h3>
        <div className='flex justify-between border-b'>
          <span>Total Items:</span>
          <span>{cart.totalQuanity}</span>
        </div>
        <div className='border-b'>
          <p>Shipping:</p>
          <p>Shipping to: <span className='font-bold'> {address}</span></p>
      
          <button className='text-blue-600 hover:underline'  onClick={()=>setIsOpenModal(true)}>change address</button>
        </div>
        <div className='flex justify-between'>
          <span>Total Price:</span>
          <span>{cart.totalPrice.toFixed(2)}</span>
        </div>
        <button className='w-full bg-red-500 text-white' onClick={()=>navigate('/checkout')}>Proced to checkout</button>
       </div>
          
        </div>
       
      
          
         
      {/* <Modal 
       isOpenModal={isOpenModal}
       setIsOpenModal={setIsOpenModal}
      ></Modal> */}
      {isOpenModal?(<Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} setAddress={setAddress}><ChangeAddress setAddress={setAddress} setIsOpenModal={setIsOpenModal}/></Modal>):null}
    
       
      </div>:<div className='flex justify-center items-center w-screen h-screen'><h2 className='text-6xl '>Empty</h2></div>
     }
   </div>
    </div>
  </div>
   
    
  )
}

export default Cart
//1:42
