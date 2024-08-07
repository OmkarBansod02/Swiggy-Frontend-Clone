import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
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
  return (
    <div className='max-w-[1200px] mx-auto mb-[100px] '>
        <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>
        Restaurants with online food delivery in Aurangabad</div>
     </div>
     <div className='grid grid-cols-4 gap-3'>
      {
        resData.map(
            (d, i) => {
                return <Card {...d} key = {i}/>
            }
        )
      }
     </div>
    </div>
  )
}
