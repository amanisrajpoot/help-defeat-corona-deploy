import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Reminder = () => {
  const [active, setActive] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const today = new Date();
  
  const months = today.getMonth();
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
        <div className="flex-row space-y-2 h-auto m-8 p-4 border-2 shadow bg-white rounded-lg h-18 text-xl">
          <div className="flex space-x-4 items-center shadow-md bg-white rounded-lg">
          <div className="flex-col text-purple-500">
            <p className="text-xl">{day + 1}</p>
            <p className="text-xs">{month}</p>
            </div>
          <div className="text-red-500 text-2xl"><Link href="/"><a>Incomplete</a></Link></div> 
          </div>

          <div className="flex space-x-4 items-center shadow-md bg-white rounded-lg">
          <div className="flex-col text-purple-500 ">
            <p className="text-xl">{day + 2}</p>
            <p className="text-xs">{month}</p>
            </div>
          <div className="text-red-500 text-2xl"><Link href="/"><a>Incomplete</a></Link></div> 
          </div>

          <div className="flex space-x-4 items-center shadow-md bg-white rounded-lg">
          <div className="flex-col text-purple-500 ">
            <p className="text-xl">{day +3}</p>
            <p className="text-xs">{month}</p>
            </div>
          <div className="text-red-500 text-2xl"><Link href="/"><a>Incomplete</a></Link></div> 
          </div>
          
          
        </div>
    </>
  );
};

