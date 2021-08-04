import { useState } from 'react';

export default function HistoryNone({historyNone})  {
  const [active, setActive] = useState(false);
  const [btn, setBtn] = useState("hover:bg-blue-500 bg-gray-200");

  const handleClick = () => {
    if(btn === "hover:bg-blue-500 bg-gray-200"){
      setBtn("hover:bg-green-500 bg-green-500")
    }else{
      setBtn("hover:bg-blue-500 bg-gray-200")
    }
    console.log("this happened")
  };

  return (
    <>
        <button className={"w-3/5 rounded-xl p-4 m-4 mr-10 " + btn} 
        onClick={handleClick}>{historyNone}</button>

    </>
  );
};