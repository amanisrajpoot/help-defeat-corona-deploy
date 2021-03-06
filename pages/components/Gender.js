import { useState } from 'react';

export default function Gender({gender})  {
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
        <button className={"w-1/4 h-16 bg-gray-200 rounded-xl m-2 p-2 m l-0" + btn} 
        onClick={handleClick}>{gender}</button>

    </>
  );
};