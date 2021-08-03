import Link from 'next/link';
import { useState } from 'react';

export default function Settings () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col items-center">

      <div className="flex w-3/5 h-full space-y-2 m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div className="space-y-8">
          <div className="w-full border-b-2 m-2 p-2 pl-16">
            <div>YOUR PROFILE</div>
          </div>

          <div>
          <div className="flex items-center pt-6 pl-16 space-x-8 text-3xl text-purple-500">
            <div>Personal Details</div>
            <Link href="AccountDetails">
              <a class="text-sm text-gray-700 hover:text-purple-500">Edit</a>  
            </Link>
          </div> 

           <div className="p-2 space-y-2 pl-16">
              <div>Mayank Dubey </div>
              <div>Email: dmayank0@gmail.com</div>
              <div className="flex space-x-8">
                <div>DOB: 2017-08-29</div>
                <div>Location: 110016</div>
              </div>
              <div>Gender:Male</div>
              <div>Race:</div>
              <div>Ethnicity:</div>
            </div>
          </div>

          <div>
          <div className="flex items-center flex-wrap pt-6 pl-16 space-x-8 text-3xl text-purple-500">
            <div>Allergies</div>
            <Link href="/Allergies">
              <a class="text-sm text-gray-700 hover:text-purple-500">Edit</a>  
            </Link>
          </div> 

           <div className="p-2 space-y-2 pl-16">
              <div>CANCER </div>
              <div>SMOKER</div>
              
            </div>
          </div>

          <div>
          <div className="flex items-center pt-6 pl-16 space-x-8 text-3xl text-purple-500">
            <div>Medical History</div>
            <Link href="/MedicalHistory">
              <a class="text-sm text-gray-700 hover:text-purple-500">Edit</a>  
            </Link>
          </div> 

           <div className="p-2 space-y-2 pl-16">
              <div>HEART DISEASE </div>
              <div>KIDNEY/LIVER FAILURE</div>
              
            </div>
          </div>

          
        
        </div> 
        
      </div>
      <Link href="/">
        <a>
          <button className="border-1 p-4 text-2xl shadow-md rounded-xl p-2">Done</button>
        </a>
      </Link>
    </div>
  );
};

