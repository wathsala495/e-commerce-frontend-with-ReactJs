import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { RiH1 } from 'react-icons/ri'

const FilterData = () => {
     const filterData=useSelector((store)=>store.product.filterData)
  return (
    <div className='container mx-auto py-12'>
    <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
    {filterData.length>0?(
        <div className='grid grid-cols-1 sm:grid-cols-3 md:gris-cols-4 lg:grid-cols-5 gap-6'>
        {
        filterData.map((product)=>{
            return(
                <div>
                  <ProductCard product={product}/>
                </div>
            )
        })
      }
        </div>
    ):(<h1>No Search Product</h1>)}
    
 
  </div>
  )
}

export default FilterData
