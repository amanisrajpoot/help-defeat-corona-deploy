import { useState } from 'react';
import Link from 'next/dist/client/link';
import Sidebar from './components/Sidebar';
import Symptom from './components/Symptom';

export default function DailySymptoms () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex flex-col items-center w-2/4 h-full space-y-2 m-6 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div>
          <div class="ml-6 w-full">
            <div class="w-full text-4xl font-bold my-2 py-2 p-2" >DO YOU HAVE ANY OF THESE SYMPTOMS (Y/N)</div>
          </div>

          
          <div class="flex text-sm uppercase rounded-lg ml-4 flex-wrap w-full flex-around">
            <Symptom symptom="Fever"/>
            <Symptom symptom="Headache" />
            <Symptom symptom="CHILLS OR SWEATING" />
            <Symptom symptom="Vomiting" />
            <Symptom symptom="DIFFICULTY BREATHING" />
            <Symptom symptom="Diarrhea" />
            <Symptom symptom="SORE THROAT" />
            <Symptom symptom="Fatique/Tiredness" />
            <Symptom symptom="Body Aches</button" />
          </div>

        </div> 

        <div>
          <Link href="/VitalSigns">
            <a >
            <button class="border-1 p-4 m-4 text-2xl shadow-md rounded-xl p-2">Next</button>
            </a>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

