import React from 'react'
import Manategory from '../assets/images/man.jpeg'
import WomanCAtegory from '../assets/images/woman.jpeg'
import KidsCategory from '../assets/images/kid.jpeg'

const CategotySection = () => {
 const categories=[
    {
        title:'Men',
        imageurl:Manategory
    },
    {
        title:'Woman',
        imageurl:WomanCAtegory
    },
    {
        title:'kids',
        imageurl:KidsCategory
    },
 ]

  return (
    
      <div className=' container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer' >
        {categories.map(({title,imageurl},index)=>{
            return(
                <div className='relative h-64   transform transition-transform duration-300 hover:scale-105 ' key={index}>
                       <img src={imageurl} alt=""  className='w-full h-full object-cover rounded-lg shadow-md'/>
                     <div className='absolute top-20 left-12'>
                     <p className='text-xl font-bold'>{title}</p>
                     <p className='text-gray-600'>View All</p>
                     </div>
                  
                </div>


               
            )
        })}

   
    </div>
  )
}

export default CategotySection
