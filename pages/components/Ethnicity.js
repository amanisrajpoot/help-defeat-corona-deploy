import { useState } from 'react';

export default function Ethnicity({ethnicity})  {
  const [active, setActive] = useState(false);
  const [btn, setBtn] = useState("hover:bg-blue-500 bg-gray-200");

  const handleClick = () => {

    if(btn === "hover:bg-blue-500 bg-gray-200"){
      setBtn("hover:bg-purple-500 bg-purple-500")
    }else{
      setBtn("hover:bg-blue-500 bg-gray-200")
    }
    console.log("this happened")
  };

  return (
    <>
        <button className={"w-auto h-16 bg-gray-200 rounded-xl m-2 p-4 m l-0 text-5xl" + btn} 
        onClick={handleClick}>{ethnicity}</button>

    </>
  );
};