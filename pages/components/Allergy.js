import { useState } from 'react';

export default function Allergy({allergy})  {
  const [active, setActive] = useState(false);
  const [btn, setBtn] = useState("hover:bg-blue-500 bg-gray-200");

  const handleClick = () => {
    if(btn === "hover:bg-blue-500 bg-gray-200"){
      setBtn("hover:bg-red-500 bg-red-500")
    }else{
      setBtn("hover:bg-blue-500 bg-gray-200")
    }
    console.log("this happened")
  };

  return (
    <>
        <button className={"w-2/5 rounded-xl p-4 m-4 l-0 " + btn} 
        onClick={handleClick}>{allergy}</button>

    </>
  );
};