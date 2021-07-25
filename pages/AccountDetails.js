import Link from 'next/link';
import { useState } from 'react';

export default function AccountDetails () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col items-center">

      <div className="flex justify-center w-2/5 h-full space-y-2  m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <form>
          <div class="w-full space-y-4">
            <input class="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" placeholder="First Name" />
            <input class="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="text" placeholder="Last Name" />
            <input class="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="email" placeholder="Email" />
            <input class="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="password" placeholder="Password" />
          </div>

          <div class="flex flex-wrap pt-6 pl-2 space-x-8">
            <label class="w-1/3" name="Age">Age</label>
            <label class="w-1/3" name="ZipCode">Zip Code</label>
          </div>
          <div class="flex flex-wrap pt-2 space-x-8 items-center">
            <input class="w-1/3 shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="number" name="Age" placeholder="Age" />
            <input class="w-1/3 shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="text" placeholder="ZipCode" />
          </div>

          <div class="w-full pt-6"><label  name="Gender">Gender</label></div>
          <div class="flex text-sm m-2 rounded-lg pt-2 space-x-4 justify-start">
            <button class="w-1/4 bg-gray-200 rounded-xl p-2 m l-0"> Male</button>
            <button class="w-1/4 bg-gray-200 rounded-xl p-2"> Female</button>
            <button class="w-1.5/4 bg-gray-200 rounded-xl p-2"> Prefer Not to Say</button>
          </div>
        
        </form> 
        
      </div>
      <Link href="/Allergies">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2">Next</button>
        </a>
      </Link>
    </div>
  );
};

