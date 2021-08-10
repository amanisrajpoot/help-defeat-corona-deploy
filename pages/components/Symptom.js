import { useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import {addSymptom, removeSymptom, removeAllSymptom} from "../redux/DailySymptoms"

export default function Symptom({symptom, present})  {
  const [active, setActive] = useState(false);
  const [btn, setBtn] = useState("hover:bg-blue-500 bg-gray-200");

  const dispatch = useDispatch()
  const dailySymptoms = useSelector(state => state.DailySymptoms)

  const handleClick = () => {    
    if(!present && symptom == "NONE OF THE ABOVE"){
      setBtn("hover:bg-green-500 bg-green-500")
      dispatch(removeAllSymptom())
      dispatch(addSymptom(symptom))
    }else if(present && symptom == "NONE OF THE ABOVE"){
      setBtn("hover:bg-blue-500 bg-gray-200")
      dispatch(removeSymptom(symptom))
    }else if(!present && !(dailySymptoms.find(symptom => symptom == "NONE OF THE ABOVE"))){
      setBtn("hover:bg-purple-500 bg-purple-500")
      dispatch(addSymptom(symptom))
    }else if(present){
      setBtn("hover:bg-blue-500 bg-gray-200")
      dispatch(removeSymptom(symptom))
    }
  };

  return (
    <>
        <button className={symptom === "NONE OF THE ABOVE"? 
          "w-3/5 rounded-xl p-4 m-4 mr-10 " + btn :
          "w-2/5 rounded-xl p-4 m-4 l-0 " + btn} 
        onClick={handleClick}>{symptom}</button>

    </>
  );
};