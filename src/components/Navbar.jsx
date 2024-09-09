import { useState } from "react"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Modal from "./Modal"
import Login from "./Login"
import Register from "./Register"
import { setSearchTerm } from "../redux/productSlice"

const Navbar=()=>{
    const [isModelOpen,setIsModelOpen]=useState(false)
     const [isLogin,setIsLogin]=useState(false)
    const products=useSelector((store)=>store.cart.products)
    const [search,setSearch]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const openSignUP=()=>{
        setIsLogin(false)
        setIsModelOpen(true)
    }

    const openLogin=()=>{
        setIsLogin(true)
        setIsModelOpen(true) 
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }

    return(
        <nav className="shadow-lg">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to='/'>e-SHOP</Link>
                </div>
                <div className="relative flex-1  mx-4">
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" placeholder="Search Product" className="w-full border py-2 px-4" onChange={(e)=>setSearch(e.target.value)} />
                        
                        <FaSearch className="absolute top-3 right-3"/>
                    </form>
                </div>
                <div className="relative flex items-center space-x-4">
                    <Link to='/cart'>
                    <div className="absolute top-[-5px] left-4 bg-red-600 rounded-full flex items-center justify-center px-1 w-4 h-4 text-xs">{products.length>0 ?products.length:null}</div>
                    
                    <FaShoppingCart className="text-lg "/>
                    </Link>
                    <button className="hidden md:block" onClick={()=>setIsModelOpen(true)}>
                        Login | Register
                    </button >
                    <button className="hidden md:block"><FaUser/></button>
                </div>
            </div>
            <div className="flex items-center justify-center  space-x-10 py-4 text-sm font-bold">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/shop" className="hover:underline">Shop</Link>
                <Link className="hover:underline">Cantact</Link>
                <Link className="hover:underline">About</Link>
            </div>

           {isModelOpen?<Modal isOpenModal={isModelOpen} setIsOpenModal={setIsModelOpen}>
             {isLogin?<Login openSignUP={openSignUP}/>:<Register openLogin={openLogin}/>}
           </Modal>:null}
       
        </nav>
    )
}

export default Navbar