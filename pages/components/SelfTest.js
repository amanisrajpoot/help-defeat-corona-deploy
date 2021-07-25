import { useState } from 'react';
import Questions from './Questions';


export default function SelfTest()  {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };



  return (
    <>
      <div className="flex-row w-2/4 h-full space-y-2  m-8 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
          <Questions handleClick = {handleClick} question="Did you Travel Today?"/>
          <Questions handleClick = {handleClick} question="Were you exposed to a high risk situtaion?"/>
          <Questions handleClick = {handleClick} question="Did anyone in your circle found to be Covid Positive?"/>
          <Questions handleClick = {handleClick} question="How are you feeling now?"/>
          <Questions handleClick = {handleClick} question="Import Picture"/>
      </div>

    </>
  );
};

