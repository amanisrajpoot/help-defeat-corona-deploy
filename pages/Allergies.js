import Link from 'next/link';
import Allergy from './components/Allergy';
import { useState } from 'react';
import AllergyNone from './components/AllergyNone';
import { useSelector, useDispatch} from "react-redux"


export default function Allergies () {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
  };

  const allergies = useSelector(state => state.Allergies);
  const dispatch = useDispatch()

  return (
    <>
    <div className="flex justify-center items-center space-x-32">
      
      <div className="flex items-center w-3/5 m-4 p-4 border-2 
         text-xl bg-white h-18">
        
        <div>
          <div className="ml-6 w-full">
            <div className="w-full text-4xl font-bold my-2 py-2 p-2 uppercase" >Allergies</div>
            <div className="w-full text-sm my-2 p-2" >You would be surprised how much this information helps.</div>
          </div>

          
          <div className="flex text-sm uppercase rounded-lg ml-4 flex-wrap w-full flex-around">
            <Allergy present={allergies.find(allergy=>allergy== "Heart Disease")} 
              allergy="Heart Disease"/>
            <Allergy present={allergies.find(allergy=>allergy== "High Blood Pressure")} 
              allergy="High Blood Pressure"/>
            <Allergy present={allergies.find(allergy=>allergy== "Lung Disease")}
              allergy="Lung Disease"/> 
            <Allergy present={allergies.find(allergy=>allergy== "Diabetes")}
              allergy="Diabetes"/> 
            <Allergy present={allergies.find(allergy=>allergy== "NEUROLOGICAL Disorder")}
              allergy="NEUROLOGICAL Disorder"/> 
            <Allergy present={allergies.find(allergy=>allergy== "KIDNEY/LIVER FAILURE")}
              allergy="KIDNEY/LIVER FAILURE"/> 
            <Allergy present={allergies.find(allergy=>allergy== "CANCER")}
              allergy="CANCER"/>
            <Allergy present={allergies.find(allergy=>allergy== "WEAKENED IMMUNITY DUE TO DISEASE (HIV)")}
              allergy="WEAKENED IMMUNITY DUE TO DISEASE (HIV)"/>
            <Allergy present={allergies.find(allergy=>allergy== "SMOKER")}
              allergy="SMOKER"/> 
            <Allergy present={allergies.find(allergy=>allergy== "PREGNANT")}
              allergy="PREGNANT"/> 
            <Allergy present={allergies.find(allergy=>allergy== "SEVERE OBESITY")} 
              allergy="SEVERE OBESITY"/>
          </div>

          <div className="flex flex-wrap justify-center ml-4 text-sm w-full">
            <Allergy present={allergies.find(allergy=>allergy== "NONE OF THE ABOVE")} 
              allergy="NONE OF THE ABOVE"/>
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

