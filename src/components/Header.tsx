import React from 'react'
import Container from './Container'
import Logo from './Logo';
import { IoMdCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  return (
    <div className='bg-bodyColor h-20'>
        <Container className='h-full flex items-center md:gap-x-5 
        justify-between md:justify-start'>
            <Logo />
            {/* {search field} */}
            <div className='w-full bg-white hidden md:flex items-center 
            gap-x-1 border-[1px] border-lightText/50 rounded-full 
            px-4 py-1.5 focus-within:border-red-600 
            group'>
                <FiSearch 
                className="text-gray-500 group-focus-within:text-darkText 
                duration-200"
                />
                <input 
                autoComplete='off'
                type='text'
                placeholder='Search for Products...'
                className='placeholder:text-sm flex-1 outline-none'
                />
            </div>
            {/* {Login/register} */}

            <div className='headerDiv'>
                <AiOutlineUser className='text-2xl'/>
                <p className='text-sm font-semibold'>
                    Login/register
                </p>
            </div>

            {/* {Cart Button} */}

            <div className='bg-black hover:bg-slate-950 rounded-full 
            text-slate-100 hover:text-white flex items-center 
            justify-center gap-x-1 px-3 py-1.5 border-[4px] 
            border-black hover:border-red-600 duration-200 relative'>
                <IoMdCart className='text-2xl'/>
                <p className='text-sm font-semibold'>
                    $0.00
                </p>
                <span
                className='bg-white text-red-600 rounded-full text-xs 
                font-semibold absolute -right-2 -top-1 w-5 h-5 
                flex items-center justify-center shadow-xl shadow-black'
                >
                    40
                </span>
            </div>
        </Container>
    </div>
  )
}

export default Header