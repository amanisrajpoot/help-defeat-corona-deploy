import Link from 'next/link';
import { useState } from 'react';
import History from './components/History';
import { useSelector, useDispatch} from "react-redux"
import { addMedicalHistory, removeMedicalHistory, removeAllMedicalHistory } from "./redux/reducers/MedicalHistory"

export default function MedicalHistory () {
  const [active, setActive] = useState(false);

  const medicalHistory = useSelector(state => state.MedicalHistory);
  const dispatch = useDispatch()

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
    <div className="flex justify-center items-center space-x-32">
      
      <div className="flex items-center w-3/5 m-4 p-4 border-2 
         text-xl bg-white h-18">
        
        <div className="">
          <div className="ml-6 w-full">
            <div className="w-full text-4xl font-bold my-2 py-2 p-2" >MEDICAL HISTORY</div>
            <div className="w-full text-sm my-2 p-2" >Click the boxes for any of the items that apply for you</div>
          </div>

          
          <div class="flex text-sm uppercase rounded-lg ml-4 flex-wrap w-full flex-around">
            <History present={medicalHistory.find(history=>history== "Heart Disease")}
              history="Heart Disease"/>
            <History present={medicalHistory.find(allergy=>allergy== "High Blood Pressure")}
              history="High Blood Pressure"/>
            <History present={medicalHistory.find(allergy=>allergy== "Lung Disease")}
              history="Lung Disease"/> 
            <History present={medicalHistory.find(allergy=>allergy== "Diabetes")}
              history="Diabetes"/> 
            <History present={medicalHistory.find(allergy=>allergy== "NEUROLOGICAL DISEASE")}
              history="NEUROLOGICAL DISEASE"/> 
            <History present={medicalHistory.find(allergy=>allergy== "KIDNEY/LIVER FAILURE")}
              history="KIDNEY/LIVER FAILURE"/> 
            <History present={medicalHistory.find(allergy=>allergy== "CANCER")}
              history="CANCER"/>
            <History present={medicalHistory.find(allergy=>allergy== "WEAKENED IMMUNITY DUE TO DISEASE (HIV)")}
              history="WEAKENED IMMUNITY DUE TO DISEASE (HIV)"/>
            <History present={medicalHistory.find(allergy=>allergy== "SMOKER")}
              history="SMOKER"/> 
            <History present={medicalHistory.find(allergy=>allergy== "PREGNANT")}
              history="PREGNANT"/> 
            <History present={medicalHistory.find(allergy=>allergy== "SEVERE OBESITY")}
              history="SEVERE OBESITY"/>
          </div>

          <div className="flex flex-wrap justify-center ml-4 text-sm w-full">
            <History present={medicalHistory.find(history=>history== "NONE OF THE ABOVE")}
              history="NONE OF THE ABOVE"/>
          </div>

        </div> 
        
      </div>

    </div>

    <div className="flex justify-center items-center space-x-32">
      
      <Link href="/Settings">
        <a>
          <button className="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Done</button>
        </a>
      </Link>

    </div>
    </>
  );
};

