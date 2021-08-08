import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux"
import { addMedicalHistory, removeMedicalHistory, removeAllMedicalHistory } from "../redux/reducers/MedicalHistory"

export default function History({history, present})  {
  const [active, setActive] = useState(false);
  const [btn, setBtn] = useState("hover:bg-blue-500 bg-gray-200");

  const medicalHistory = useSelector(state => state.MedicalHistory);
  const dispatch = useDispatch()

  const handleClick = () => {    
    if(!present && history == "NONE OF THE ABOVE"){
      setBtn("hover:bg-green-500 bg-green-500")
      dispatch(removeAllMedicalHistory())
      dispatch(addMedicalHistory(history))
    }else if(present && history == "NONE OF THE ABOVE"){
      setBtn("hover:bg-blue-500 bg-gray-200")
      dispatch(removeMedicalHistory(history))
    }else if(!present && !(medicalHistory.find(history => history == "NONE OF THE ABOVE"))){
      setBtn("hover:bg-purple-500 bg-purple-500")
      dispatch(addMedicalHistory(history))
    }else if(present){
      setBtn("hover:bg-blue-500 bg-gray-200")
      dispatch(removeMedicalHistory(history))
    }
  };

  return (
    <>
        <button className={history == "NONE OF THE ABOVE"? "w-3/5 rounded-xl p-4 m-4 mr-10 " + btn : "w-2/5 rounded-xl p-4 m-4 l-0 " + btn} 
        onClick={handleClick}>{history}</button>

    </>
  );
};