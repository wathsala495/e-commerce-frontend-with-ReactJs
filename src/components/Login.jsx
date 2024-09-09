import React from 'react'

const Login = ({openSignUP}) => {
  return (
    <div>
      <h2 className='text-center font-bold text-xl'>Login</h2>
        <form action="">
            <div className='flex flex-col '>
                <label htmlFor="" className='font-semibold'>Email</label>
                <input type="text" className='border w-full mt-1 border-black' />
            </div>
            <div className='flex flex-col mt-2'>
                <label htmlFor="" className='font-semibold'>Password</label>
                <input type="text" className='w-full border border-black mt-1' />
            </div>
            <div className='mt-2 flex flex-col'>
                <label htmlFor="">
                    <input type="checkbox" />
                    <span className='ml-1'>Remember Me</span>
                   
                </label>
                <a href="" className='text-s'>Forget Password</a>
            </div>
            <div className='mt-2'> 
                <button className='bg-green-400 w-full p-1 rounded'>Login</button>
            </div>
        </form>
        <div className='flex justify-center mt-1'>
            <span>Don't have an Account?</span>
            <button onClick={openSignUP} className='hover:underline ml-1 font-semibold'>Sign Up</button>
        </div>
      
    </div>
  )
}

export default Login
