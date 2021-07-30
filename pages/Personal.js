import Link from 'next/link';
import { useState, useEffect } from 'react';
import Questions from './components/Questions';
import Sidebar from './components/Sidebar'

export default function Personal() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const today = new Date();
  
  const months = today.getMonth();
  const monthsStr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days =  today.getDate();

  useEffect(() => {
    setDay(days);
    setMonth(monthsStr[months]);
    console.log(month)
  }, [])


  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col items-center w-2/4 h-full space-y-2  m-6 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div className="w-full">
          <div className="flex fles-start w-full shadow-sm">
            <div className="w-3/4 text-xl font-bold my-2 py-2 p-2" >Personal</div>
            <div className="text-xl font-bold my-2 py-2 p-2" >{month} {day}</div>
          </div>

          
          <div className="flex fles-start flex-col justify-center text-sm uppercase rounded-lg ml-4 w-full">
            
            
            <Questions handleClick = {handleClick} question="WERE YOU EXPOSED TO ANYONE WHO HAS COVID-19?"/>
            <Questions handleClick = {handleClick} question="How are you feeling now?"/>
          </div>

        </div> 
          
        <div>
          <Link href="/DailySymptoms">
            <a >
            <button className="border-1 p-4 m-4 text-2xl shadow-md rounded-xl p-2">Next</button>
            </a>
          </Link>
        </div>

      </div>

    </div>
  );
};

