import Link from 'next/link';
import { useState, useEffect } from 'react';
import Questions from './components/Questions';

export default function Details ({month, day}) {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col w-2/4 h-full space-y-2  m-6 p-4 border-2 
         text-xl bg-white h-18">
        
        <div>
          <div className="flex fles-starT shadow-sm ml-6">
            <div className=" text-xl font-bold my-2 py-2 p-2" >{month} {day}</div>
          </div>

          
          <div className="flex flex-col uppercase rounded-lg m-4 p-4">
            
            <div className="flex w-full my-2 py-2 p-2">
                <div className="w-full text-2xl tracking-loose m-2 p-2 text-purple-500">
                  Please enter your vitals and other details to view the prediction.</div>
                <div className="w-full shadow-md my-2 py-2 p-2">Photo</div>
            </div>
            
            <div className="flex justify-center">
              <Link href="/Personal">
                <button className="w-2/6 shadow-md bg-purple-500 
                text-white text-3xl m-4 p-4 rounded-full">Let's Go! 
                </button>
              </Link>
            </div>

          </div>

        </div> 

      </div>
        
      
  );
};

