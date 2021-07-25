import Link from 'next/link';
import { useState } from 'react';
import Questions from './components/Questions';

export default function Details () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col w-2/4 h-full space-y-2  m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div>
          <div class="flex fles-starT shadow-sm ml-6">
            <div class=" text-xl font-bold my-2 py-2 p-2" >Personal Details</div>
          </div>

          
          <div class="flex fles-start flex-col text-sm uppercase rounded-lg m-4 p-4">
            
            <div class="w-full shadow-md my-2 py-2 p-2">Full Name</div>
            <div class="w-full shadow-md my-2 py-2 p-2">Email</div>
            <div class="w-full shadow-md my-2 py-2 p-2">Phone Number</div>
            <div class="w-full shadow-md my-2 py-2 p-2">Location</div>
            <div class="w-full shadow-md my-2 py-2 p-2">Health Status</div>

          </div>

        </div> 
          
        <div>
          <Link href="/AccountDetails">
            <a >
            <button class="border-1 p-4 m-4 ml-8 text-2xl shadow-md rounded-xl p-2">Next</button>
            </a>
          </Link>
        </div>

      </div>
        
      
  );
};

