import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white pt-8 px-4 md:px-16 lg:px-24  w-full '>
       <div className='container mx-auto grid grid-cols-1 md:grid-cols-3  gap-8'>
        <div>
            <h3 className='text-xl font-semibold'>e-Shop</h3>
            <p className='mt-4'>You one-stop fpr all your needs.Shop with use and experiance the best online shopping experiance</p>
        </div>
        <div className='flex flex-col md:items-center'>
           <h4 className='text-lg font-semibold'> Quick Links</h4>
            <ul className='mt-4 space-y-2' >
                <li>
                    <Link to="/" className='hover:underline'>Home</Link>
                </li>
                <li>
                    <Link to="/shp" className='hover:underline'>Shop</Link>
                </li>
                <li>
                    <Link className='hover:underline'>Contact</Link>
                </li>
                <li>
                    <Link className='hover:underline'>About</Link>
                </li>
            </ul>
        </div>
    
        <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-semibold'>Follow us</h4>
            <div className='flex gap-3'>
                <a href="" className='hover:text-gray-400'><FaFacebook/></a>
                <a href="" className='hover:text-gray-400'><FaTwitter/></a>
                <a href="" className='hover:text-gray-400'><FaGithub/></a>
                <a href="" className='hover:text-gray-400'><FaLinkedin/></a>
            </div>
            <form action="" className='flex items-center justify-center mt-8'>
                <input type="email" placeholder='Enter Email' className='w-full p-2 rounded-lg bg-gray-800 border border-gray-600' />
                <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg '>Subscribe</button>
            </form>
        </div>
       </div>
       <div className="mt-8 border-t border-gray-700 pt-4">
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <p>&copy;2024 e-shop All rights reserved</p>
        <div className='flex space-x-4 mt-4 md:mt-0' >
            <a href="" className='hover:underline'>Privacy Policy</a>
            <a href=""className='hover:underline'> Terms & Conditions</a>
        </div>
        </div>
        
       </div>
    </footer>
  )
}

export default Footer
