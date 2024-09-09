import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSection = () => {

    const infoItems=[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:'Free Shipping',
            description:'Get your orders delivered with no extra cost',
        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/>,
            title:'Free Shipping',
            description:'Get your orders delivered with no extra cost',
        },
        {
            icon:<FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title:'100% Money Back',
            description:'full refend if you are not satisfied',
        },
        
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:'Payment Secure',
            description:' your payment information is safe with us',
        },
        {
            icon:<FaTag className='text-3xl text-red-600'/>,
            title:'Discount',
            description:'Enjoy the prices on our product',
        },
    ]

  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {infoItems.map(({icon,title,description},index)=>{
        return(
            <div key={index} className='flex flex-col items-center  transform transition-transform duration-300 hover:scale-105 text-center p-4 border  rounded-lg shadow-lg
           cursor-pointer'>
                 {icon}
                <h3 className='mt-4 text-xl font-semibold'>{title}</h3>
                <p className='mt-2 text-gray-600'>{description}</p>
            </div>
        )
       })}
        </div>
       
    </div>
  )
}

export default InfoSection
