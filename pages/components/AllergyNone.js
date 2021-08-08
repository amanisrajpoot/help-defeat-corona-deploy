import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { removeAllAllergies } from "../redux/reducers/Allergies"


export default function AllergyNone({allergyNone})  {
  const [active, setActive] = useState(false);
  const [btn, setBtn] = useState("hover:bg-blue-500 bg-gray-200");

  const dispatch = useDispatch()

  const handleClick = () => {
    if(!active){
      setBtn("hover:bg-green-500 bg-green-500")
      dispatch(removeAllAllergies())
      setActive(true)
    }else{
      setBtn("hover:bg-blue-500 bg-gray-200")
      setActive(false)
    }
    console.log("this happened")
  };

  return (
    <>
        <button className={"w-3/5 rounded-xl p-4 m-4 mr-10 " + btn} 
        onClick={handleClick}>{allergyNone}</button>

    </>
  );
};