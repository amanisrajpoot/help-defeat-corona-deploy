import Link from 'next/link';
import Allergy from './components/Allergy';
import { useState } from 'react';
import AllergyNone from './components/AllergyNone';

export default function Allergies () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };



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
            <Allergy allergy="Heart Disease"/>
            <Allergy allergy="High Blood Pressure"/>
            <Allergy allergy="Lung Disease"/> 
            <Allergy allergy="Diabetes"/> 
            <Allergy allergy="NEUROLOGICAL DISEASE"/> 
            <Allergy allergy="KIDNEY/LIVER FAILURE"/> 
            <Allergy allergy="CANCER"/>
            <Allergy allergy="WEAKENED IMMUNITY DUE TO DISEASE (HIV)"/>
            <Allergy allergy="SMOKER"/> 
            <Allergy allergy="PREGNANT"/> 
            <Allergy allergy="SEVERE OBESITY"/>
          </div>

          <div className="flex flex-wrap items-center ml-4 text-sm w-full">
            <AllergyNone allergyNone="NONE OF THE ABOVE" />
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

