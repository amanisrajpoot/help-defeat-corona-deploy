import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Reminder()  {
  const [active, setActive] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const today = new Date();
  
  const months = today.getMonth();
  const year = today.getFullYear();
  const monthsStr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const days =  today.getDate();


  useEffect(() => {
    setDay(days);
    setMonth(monthsStr[months]);
    console.log(month)
  }, [])

  const handleClick = () => {
    setActive(!active);
  };



  return (
    <>
        <div className="flex-row space-y-2 h-auto m-8 p-4 border-2 bg-white text-xl font-roboto">
        
          <div className="flex-col text-gray-900 p-2 m-2 ">
            <p className="text-2xl">{day} {month}, {year}</p>
            <p className="text-sm text-gray-600">You can update the data by clicking on date below</p>
            </div>

          <div className="flex space-x-4 items-center  bg-white ">
          <div className="flex-col text-purple-500 ">
            <p className="text-xl shadow-md rounded-full p-2 m-2">{day}</p>
            </div>
          <div className="text-red-500 text-xl"><Link href="/"><a>INCOMPLETE</a></Link></div> 
          </div>

          <div className="flex space-x-4 items-center  bg-white ">
          <div className="flex-col text-purple-500 ">
            <p className="text-xl shadow-md rounded-full p-2 m-2">{day +1}</p>
            </div>
          <div className="text-red-500 text-xl"><Link href="/"><a>INCOMPLETE</a></Link></div> 
          </div>

          <div className="flex space-x-4 items-center  bg-white ">
          <div className="flex-col text-purple-500 ">
            <p className="text-xl shadow-md rounded-full p-2 m-2">{day +2}</p>
            </div>
          <div className="text-red-500 text-xl"><Link href="/"><a>INCOMPLETE</a></Link></div> 
          </div>
          
          
        </div>
    </>
  );
};

