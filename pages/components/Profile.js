import Link from 'next/link';
import { useState } from 'react';
import { Options } from './Options';

export const Profile = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
        <div className="flex-row space-y-2 h-auto m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
           
          <div className="border-b-2"><Link href="/"><a>Account Details</a></Link>
            <p className="text-xs justify-center text-red-500">50% Complete</p>
            </div>
          
          <Options opt="Daily Vitals" 
            optSub="Input daily Measurement like Body temperature and Spo2 Level" />
          <Options opt="Daily Symptoms" 
            optSub="Enter any recent medical complication like uneasy breathing."/>

          <div className="border-b-2"><Link href="/"><a className="text-red-500">Personal</a></Link>
            <p className="text-xs justify-center">Change any Personal Information</p>
            </div>

        </div>
    </>
  );
};

