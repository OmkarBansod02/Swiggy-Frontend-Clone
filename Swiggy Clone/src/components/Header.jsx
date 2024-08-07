import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
    const [toggle, setToggle]= useState(false);

    const showSideMenu = () =>{
        console.log("hii")
        setToggle(true);
    }
    const hideSideMenu = () =>{
        setToggle(false);
    }

    const links = [
        {
            icon:<CiSearch />,
            name: "Search"
        },
        {
            icon:<CiDiscount1 />,
            name: "Offers"
        },
        {
            icon:<IoMdHelpBuoy />,
            name: "Help"
        },
        {
            icon:<MdOutlineAssignmentInd />,
            name: "Sign In"
        },
        {
            icon:<CiShoppingCart />,
            name: "Cart"
        },
        
    ]
  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu}  style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? 'visible' : 'hidden'
    }}>
        <div onClick={(e) =>{
            e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[600ms]' 
        style={{
            left: toggle ? "0%" : "-100%"
        }}
        
        ></div>
    </div>
     <header className='p-2 shadow-xl'>
        <div className='max-w-[1200px] mx-auto  flex items-center'>
            <div className='w-[100px]'>
                <img src="images/logo.png" className='w-full hover:scale-110 transition-transform duration-300 cursor-pointer' alt="" />
            </div>
            <div className=''>
            <span className='font-bold border-b-[3px] border-black hover:text-orange-500 cursor-pointer hover:border-b-[3px] hover:border-orange-500'>Aurangabad</span>, Maharashtra, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline  font-bold text-[#fc8019]'/>
        </div>
            <nav className='flex list-none gap-10 ml-auto font-semi-bold text-[18px]'>
            {
                links.map(
                    (link, index) =>{
                     return  <li key={index} className='flex items-center gap-2 hover:text-orange-500 cursor-pointer'>
                            {link.icon}
                            {link.name}
                        </li>
                    }
                )
            }    
            </nav>
        </div>   
     </header>
    
    </>
  )
}

export default Header
