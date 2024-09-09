import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CheckOut = ({setorder}) => {
    const [showBilling,setShowBilling]=useState(false)
    const [showShipping,setShowShipping]=useState(false)
    const [showPayment,setShowPayement]=useState(false)
    const [paymentMethod,setPayementmethod]=useState("cod")
    const navigate =useNavigate()

    const [shippinInfo,setShippingInfo]=useState({
         address:"",
         city:"",
         zipcode:""
    })
    const cart=useSelector((store)=>store.cart)
    
    const handlePlaceHolder=()=>{
        navigate('/summary',{state:{shippinInfo}})
    }
    const handleorder=()=>{
        const newOrder={
            products:cart.products,
            orderNumber:"12345"  ,
             shippingInformation:shippinInfo,
            totalPrice:cart.totalPrice
        }
        setorder(newOrder)
        navigate('/order-confimation')
    }


    const handleBillinngInfo=()=>{
        setShowBilling(true)

    }
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
       <div className='md:w-2/3'>
          <div className=' border p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>Billing Information</h3>
            {!showBilling ?<FaAngleUp onClick={handleBillinngInfo}/>:(<FaAngleDown onClick={()=>setShowBilling(false)}/> )}    
            </div>
           <div className={`${showBilling ?'block':'hidden'} w-full`}>
                <div  className='flex flex-col w-full'>
                <label htmlFor="">Name</label>
                <input type="text"  name="name" placeholder="Enter name" className='w-full border'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder='Enter email' className='w-full border'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Phone</label>
                <input type="text" name="phone" placeholder='Enter Phone' className='w-full border'/>
            </div>
            </div>
          </div>
{/* shipping */}
          <div className=' border p-5 mt-2'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>Shipping Information </h3>
            {!showShipping ?<FaAngleUp onClick={()=> setShowShipping(true)}/>:(<FaAngleDown onClick={()=>setShowShipping(false)}/> )}    
            </div>
           <div className={`${showShipping ?'block':'hidden'} w-full`}>
                <div  className='flex flex-col w-full'>
                <label htmlFor="">Address</label>
                <input type="text"  name="name" placeholder="Enter Address" className='w-full border' onChange={(e)=>setShippingInfo({...shippinInfo,address: e.target.value})}/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">City</label>
                <input type="email" name="email" placeholder='Enter City' className='w-full border' onChange={(e)=>setShippingInfo({...shippinInfo,city: e.target.value})}/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">ZipCode</label>
                <input type="text" name="phone" placeholder='Enter zipcode' className='w-full border' onChange={(e)=>setShippingInfo({...shippinInfo,zipcode: e.target.value})}/>
            </div>
            {shippinInfo.city}
            </div>
          </div>
           {/* payement method */}
           <div className=' border p-5 mt-2'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>Payment Method</h3>
            {!showPayment ?<FaAngleUp onClick={()=> setShowPayement(true)}/>:(<FaAngleDown onClick={()=>setShowPayement(false)}/> )}    
            </div>
           <div className={`${showPayment ?'block':'hidden'} w-full`}>
                <div  className='flex w-full'>
               
                <input type="radio"  name="name" checked={paymentMethod==="cod"} onChange={()=>setPayementmethod("cod")} />
                <label htmlFor="" className='ml-2'>Cash on Delivery</label>
            </div>
                <div  className='flex w-full'>
               
                <input type="radio"  name="name" checked={paymentMethod==="dc"} onChange={()=>setPayementmethod("dc")} />
                <label htmlFor="" className='ml-2'>Debit Card</label>
            </div>
            {paymentMethod==="dc" && (
                <div className='mt-3  bg-gray-200 p-3'>
                    <h3 className='font-semibold'>  Debit Card Information</h3>
                    <div className='mt-2'>
                        <label htmlFor=""> Card Number</label>
                        <input type="text" placeholder='Enter Cart Number' className='w-full border'/>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor=""> Card Holder Name</label>
                        <input type="text" placeholder='Enter Holder name' className='w-full border'/>
                    </div>
                    <div className='mt-2'>
                        <label htmlFor=""> Expire Date</label>
                        <input type="text" placeholder='expire Date' className='w-full border' />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor=""> CVV</label>
                        <input type="text" placeholder='Enter CVV'  className='w-full border'/>
                    </div>
                    

                </div>
                
            )}
            
           
           
            </div>
          </div>
       </div>
      
       
       <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
        <h3>Order Summary</h3>
        <div>
          {cart.products.map((product)=>{
            return(
               <div>
                <img src={product.image}/>
                <div>
                    <h4>{product.name}</h4>
                    <p>${product.price} * {product.quantity}</p>
                </div>
               </div> 
            )
          })}
        </div>
        <div>
            <span>
              Total Price  :<span>{cart.totalPrice.toFixed(2)}</span>
            </span>
        </div>
        <button onClick={handleorder}>
            Place order
        </button>
       </div>
      </div>
    </div>
  )
}

export default CheckOut
