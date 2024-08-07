import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';
const Restaurant = () => {
        const [slide, setSlide] = useState(0);
      
        const [ resData, setresData] = useState([]);
      
        const fetchCategory = async() => {
              const response = await fetch (" http://localhost:5000/top-restaurant-chains");
              const data = await response.json();
              setresData(data);
        } 
      
        useEffect(
          ()=>{
            fetchCategory();
          }
        )
        const nextslide = ()=>{
          if(resData.length - 4 == slide) return false;
          setSlide(slide + 2);
        }
        const previousSlide = ()=>{
          if(slide == 0) return false;
          setSlide(slide - 2);
        }
  return (
    <div className='max-w-[1200px] mx-auto mb-[100px] '>
       <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Top restaurant chains in Aurangabad</div>
        <div className='flex'>
            <div className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'onClick={previousSlide}>
               <FaArrowLeft /></div>
            <div className='flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextslide}>
              <FaArrowRight/></div>
        </div>
        </div>
        <div className='flex overflow-hidden gap-6   '>

                {
                resData.map(
                    (d , i ) =>{
                      return(
                        <div style={{

                          transform :` translateX(-${slide * 100}%)`
      
                        }} className=' shrink-0 duration-500'>
                          <Card {...d} key= {i}/>
                        </div>
                     
                      )
                        
                    }
                )
                }
              
          
        </div>
        <hr className='my-12 border-[px] mb-[-60px] '/>
    </div>
    
  )
}

export default Restaurant
