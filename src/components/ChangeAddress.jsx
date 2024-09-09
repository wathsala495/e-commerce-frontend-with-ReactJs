import React, { useState } from 'react'

const ChangeAddress = ({setIsOpenModal, setAddress}) => {
    const [newAddress,setNewAdress]=useState()
    const saveAddress=()=>{
        setAddress(newAddress)
        setIsOpenModal(false)
    }
  return (
    <div className='w-full'>
       <input type="text" className='w-full border' onChange={(e)=>setNewAdress(e.target.value)} />
       <div className='flex justify-end space-x-3 mt-5'>
        <button className='bg-red-500 text-white px-3 py-1 rounded-md' onClick={()=>setIsOpenModal(false)}>Cancel</button>
    <button className='bg-green-400 text-white px-3 py-1 rounded-md' onClick={saveAddress}>Save Address</button>
       </div>
    </div>
  )
}

export default ChangeAddress
