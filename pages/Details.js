import Link from 'next/link';
import { useState } from 'react';

export default function Details () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col">

      <div className="flex flex-col ">
        <div className="flex w-full h-full space-y-2 m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
      
        <div>
          <div class="w-full space-y-4">
            <div class="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" >First Name</div> 
            <div class="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" >Last Name</div>
            <div class="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" >Email</div>
            <div class="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" >Change Password</div>
          </div>

          <div class="flex flex-wrap pt-6 pl-2 space-x-8">
            <label class="w-1/3" name="Age">Age</label>
            <label class="w-1/3" name="ZipCode">Zip Code</label>
          </div>
          

          <div class="w-full pt-6"><label  name="Gender">Gender</label></div>
          <div class="flex text-sm m-2 rounded-lg pt-2 space-x-4 justify-start">
            <label class="w-1.5/4 bg-gray-200 rounded-xl p-2"> Prefer Not to Say</label>
          </div>
        
        </div> 
        
      </div>
      <Link href="/Allergies">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2">Next -></button>
        </a>
      </Link>
    
      </div>
    </div>
  );
};

