import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    const products=useSelector((store)=>store.product)
  return (
    <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:gris-cols-4 lg:grid-cols-5 gap-6'>
        {
        products.products.map((product)=>{
            return(
                <div>
                  <ProductCard product={product}/>
                </div>
            )
        })
      }
        </div>
     
      </div>
  )
}

export default Shop
