import Link from 'next/link';
import { useState } from 'react';

export default function Allergies () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };



  return (
    <>
    <div className="flex justify-center items-center space-x-32">
      
      <Link href="/AccountDetails">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Previous</button>
        </a>
      </Link>

      <div className="flex justify-center w-2/5 m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div>
          <div class="w-full">
            <div class="w-full text-4xl font-bold my-2 py-2 p-2" >Allergies</div>
            <div class="w-full text-sm my-2 p-2" >You would be surpised how much this information helps</div>
          </div>

          
          <div class="flex text-sm rounded-lg flex-wrap ">
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4 l-0 "> Male</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Female</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Prefer Not to Say</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Prefer Not to Say</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Prefer Not to Say</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Prefer Not to Say</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Prefer Not to Say</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Prefer Not to Say</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Prefer Not to Say</button>
            <button class="w-1/3 bg-gray-200 rounded-xl p-4 m-4"> Prefer Not to Say</button>
          </div>

          <div class="flex flex-wrap pt-2 items-center">
            <div class="w-full text-sm my-2 p-2" >ADD ADDITIONAL ALLERGIES</div>
            <input class="w-full h-1/4 shadow-md border-gray-200 border-2 my-2 p-2 ml-4 placeholder-text-xs" 
            type="text" placeholder="List them here and click enter - they should show up above" />
          </div>

        </div> 
        
      </div>

      <Link href="/MedicalHistory">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Next</button>
        </a>
      </Link>

    </div>

    <div className="flex justify-center items-center space-x-32">
      
      <Link href="/AccountDetails">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Previous</button>
        </a>
      </Link>
      <Link href="/MedicalHistory">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Next</button>
        </a>
      </Link>

    </div>
    </>
  );
};

