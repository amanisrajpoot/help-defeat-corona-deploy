import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="flex-row w-auto shadow-md bg-white rounded-lg h-auto uppercase">
        <div className="text-3xl font-bold font-roboto p-2 flex justify-center text-purple-700">
          <Link href="/AccountDetails"><a>HelpDefeatCorona.org</a></Link>
        </div>

        <div className="p-2 flex justify-center space-x-8 space-x-12 text-xl text-gray-900">
            <div className="hover:text-purple-500 hover:border-b-2 border-purple-500">
              <Link className="" href="/">
              <a>Dashboard</a></Link></div>
            <div className="hover:text-purple-500 hover:border-b-2 border-purple-500">
                <Link className="pl-2 ml-4" href="/OurUniqueApproach">
              <a>Our Unique Approach</a></Link></div>
            <div className="hover:text-purple-500 hover:border-b-2 border-purple-500">
              <Link className="pl-2 ml-4" href="/Settings">
              <a>Settings</a></Link></div>
          
            <div className="hover:text-purple-500 hover:border-b-2 border-purple-500">
              <Link className="" href="/"><a>Sign Out</a></Link> 
            </div>
        </div>
        
      </div>

    </>
  );
};

