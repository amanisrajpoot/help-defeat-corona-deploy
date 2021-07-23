import { useState } from 'react';

export const Questions = ({question}) => {
  const [active, setActive] = useState(false);
  const [btnYes, setYes] = useState("hover:bg-red-500 bg-white");
  const [btnNo, setNo] = useState("hover:bg-white bg-green-200");

  const handleYes = () => {
    if(btnYes === "hover:bg-red-500 bg-white"){
      setYes("hover:bg-white bg-red-500")
      setNo("hover:bg-green-500 bg-white")
    }else{
      setYes("hover:bg-red-500 bg-white")
      setNo("hover:bg-white bg-green-200")
    }
    console.log("this happened")
  };

  const handleNo = () => {
    setActive(!active);
    if(btnNo === "hover:bg-white bg-green-200"){
      setNo("hover:bg-white bg-green-500")
      setYes("hover:bg-red-500 bg-white")
    }else{
      setNo("hover:bg-white bg-green-200")
      setYes("hover:bg-red-500 bg-white")
    }
    console.log("this happened")
  };

  

  return (
    <>
        <div className="space-x-2 mb-4">
            <h2>{question}</h2>
            <button name="Yes" value="Yes" onClick= {handleYes} 
            className={"mt-4 p-2 text-xl w-20 shadow rounded-lg h-18" + btnYes}  >
                Yes</button>
            <button name="No" value="No" onClick= {handleNo}
            className={"mt-4 p-2 text-xl w-20 shadow rounded-lg h-18" + btnNo}>
                No</button>
            </div>
    </>
  );
};

