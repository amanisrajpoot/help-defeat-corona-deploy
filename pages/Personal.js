import Link from 'next/link';
import { useState } from 'react';
import { Questions } from './components/Questions';
import {Sidebar} from './components/Sidebar'

export default function Personal() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col items-center w-2/4 h-full space-y-2  m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div>
          <div class="flex fles-start w-full shadow-sm">
            <div class="w-full text-xl font-bold my-2 py-2 p-2" >Personal</div>
          </div>

          
          <div class="flex fles-start flex-col justify-center text-sm uppercase rounded-lg ml-4 w-full">
            
            <Questions handleClick = {handleClick} question="Did you Travel Today?"/>
            <Questions handleClick = {handleClick} question="Were you exposed to a high risk situtaion?"/>
            <Questions handleClick = {handleClick} question="Did anyone in your circle found to be Covid Positive?"/>
            <Questions handleClick = {handleClick} question="How are you feeling now?"/>
            <Questions handleClick = {handleClick} question="Import Picture"/>
          </div>

        </div> 
          
        <div>
          <Link href="/">
            <a >
            <button class="border-1 p-4 m-4 text-2xl shadow-md rounded-xl p-2">Next -></button>
            </a>
          </Link>
        </div>

      </div>

    </div>
  );
};

