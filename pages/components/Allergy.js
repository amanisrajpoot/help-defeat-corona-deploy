import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux"
import { addAllergy, removeAllergy, removeAllAllergies } from "../redux/reducers/Allergies"

export default function Allergy({allergy, present})  {
  const [active, setActive] = useState(false);
  const [btn, setBtn] = useState("hover:bg-blue-500 bg-gray-200");

  const dispatch = useDispatch()
  const allergies = useSelector(state => state.Allergies)

  const handleClick = () => {    
    if(!present && allergy == "NONE OF THE ABOVE"){
      setBtn("hover:bg-green-500 bg-green-500")
      dispatch(removeAllAllergies())
      dispatch(addAllergy(allergy))
    }else if(present && allergy == "NONE OF THE ABOVE"){
      setBtn("hover:bg-blue-500 bg-gray-200")
      dispatch(removeAllergy(allergy))
    }else if(!present && !(allergies.find(allergy => allergy == "NONE OF THE ABOVE"))){
      setBtn("hover:bg-purple-500 bg-purple-500")
      dispatch(addAllergy(allergy))
    }else if(present){
      setBtn("hover:bg-blue-500 bg-gray-200")
      dispatch(removeAllergy(allergy))
    }
  };

  return (
    <>
        <button className={allergy == "NONE OF THE ABOVE"? "w-3/5 rounded-xl p-4 m-4 mr-10 " + btn : "w-2/5 rounded-xl p-4 m-4 l-0 " + btn} 
        onClick={handleClick}>{allergy}</button>

    </>
  );
};