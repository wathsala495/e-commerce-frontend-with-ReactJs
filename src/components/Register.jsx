import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
      <h2 className='text-center font-bold text-xl'>Sign Up</h2>
        <form action="">
            <div className='flex flex-col'>
                <label htmlFor="" className='font-semibold'>Name</label>
                <input type="text" className='border border-black mt-1' />
            </div>
            <div className='mt-2 flex flex-col'>
                <label htmlFor=""  className='font-semibold'>Password</label>
                <input type="text" className='border border-black mt-1'/>
            </div>
            
            <div className='mt-4'>
                <button className='bg-green-400 w-full p-1 rounded'>Sign Up</button>
            </div>
        </form>
        <div className='flex justify-center mt-3'>
            <span>Already have an Account?</span>
            <button onClick={openLogin}  className='font-semibold'>Login</button>
        </div>
      
    </div>
  )
}

export default Register
