import Link from 'next/link';
import { useState } from 'react';

export default function Settings () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col items-center font-roboto">

      <div className="flex justify-center w-2/4 h-full space-y-2  m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        

        
        <form>
          <div className="w-full space-y-4">
            <input className="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" placeholder="First Name" />
            <input className="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="text" placeholder="Last Name" />
            <input className="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="email" placeholder="Email" />
            <input className="w-full shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="password" placeholder="Password" />
          </div>

          <div className="flex flex-wrap pt-6 pl-2 space-x-8">
            <label className="w-1/3" name="Age">Age</label>
            <label className="w-1/3" name="ZipCode">Zip Code</label>
          </div>
          <div className="flex flex-wrap pt-2 space-x-8 items-center">
            <input className="w-1/3 shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="number" name="Age" placeholder="Age" />
            <input className="w-1/3 shadow-md border-gray-200 border-2 my-2 py-2 p-2" type="text" placeholder="ZipCode" />
          </div>

          <div className="w-full pt-6"><label  name="Gender">Gender</label></div>
          <div className="flex text-sm m-2 rounded-lg pt-2 space-x-4 justify-start">
            <button className="w-1/4 bg-gray-200 rounded-xl p-2 m l-0"> Male</button>
            <button className="w-1/4 bg-gray-200 rounded-xl p-2"> Female</button>
            <button className="w-1.5/4 bg-gray-200 rounded-xl p-2"> Prefer Not to Say</button>
          </div>
        
        </form> 
        
      </div>
      <Link href="/Allergies">
        <a>
          <button className="border-1 p-4 text-2xl shadow-md rounded-xl p-2">Next</button>
        </a>
      </Link>
    </div>
  );
};

