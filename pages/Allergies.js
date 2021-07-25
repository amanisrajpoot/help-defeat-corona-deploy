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
      
      <Link href="/AccountDetails">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Previous</button>
        </a>
      </Link>

      <div className="flex items-center w-2/5 m-4 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div>
          <div class="ml-6 w-full">
            <div class="w-full text-4xl font-bold my-2 py-2 p-2 uppercase" >Allergies</div>
            <div class="w-full text-sm my-2 p-2" >You would be surprised how much this information helps.</div>
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

          <div class="flex flex-wrap items-center ml-4 text-sm w-full">
            <AllergyNone allergyNone="NONE OF THE ABOVE" />
          </div>

        </div> 
        
      </div>

      <Link href="/MedicalHistory">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Next</button>
        </a>
      </Link>

    </div>

    <div className="flex justify-center items-center space-x-32">
      
      <Link href="/AccountDetails">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Previous</button>
        </a>
      </Link>
      <Link href="/MedicalHistory">
        <a>
          <button class="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Next</button>
        </a>
      </Link>

    </div>
    </>
  );
};

