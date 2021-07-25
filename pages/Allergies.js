import Link from 'next/link';
import { useState } from 'react';

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

          
          <div class="flex text-sm uppercase rounded-lg ml-4 flex-wrap w-full flex-around">
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4 l-0 ">Heart Disease</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> High Blood Pressure</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> Lung Disease</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> Diabetes</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> NEUROLOGICAL DISEASE</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> KIDNEY/LIVER FAILURE</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> CANCER</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> WEAKENED IMMUNITY DUE TO DISEASE (HIV)</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> SMOKER</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> PREGNANT</button>
            <button class="w-2/5 bg-gray-200 rounded-xl p-4 m-4"> SEVERE OBESITY </button>
          </div>

          <div class="flex flex-wrap items-center ml-4 text-sm w-full">
            <button class="w-full bg-gray-200 rounded-xl p-4 m-4 mr-10">
            NONE OF THE ABOVE</button>
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

