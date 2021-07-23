import Link from 'next/link';
import { useState } from 'react';
import {Profile} from './Profile';
import { Reminder } from './Reminder';

export const Sidebar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className=" flex-row w-1/4 h-full">
        <div className="text-xl pt-2 mt-4 flex justify-center items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
           </svg>
          <Link href="/"><a>Back to Home</a></Link>
        </div>

        <Profile />

        <Reminder />
        
      </div>

    </>
  );
};

