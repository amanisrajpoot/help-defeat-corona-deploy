import { useState } from 'react';

export default function Symptom({symptom})  {
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
        <button className={symptom === "None of the Above"? "w-full bg-gray-200 rounded-xl p-4 m-4 mr-16 " + btn :"w-2/5 bg-gray-200 rounded-xl p-4 m-4 " + btn} 
        onClick={handleClick}>{symptom}</button>

    </>
  );
};