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
    <div className="flex pl-24">
      <Sidebar />
      
      <div className="flex flex-col items-center w-2/4 h-full space-y-2 m-6 p-4 border-2 
         text-xl bg-white h-18">
        
        <div>
          <div className="ml-6 w-full">
            <div className="w-full text-2xl my-2 py-2 p-2 text-gray-500" >DO YOU HAVE ANY OF THESE SYMPTOMS? (Y/N)</div>
            <div className="w-full text-xl my-2 p-2" >Click the boxes that apply to you</div>
            <div className="w-full text-sm my-2 p-2 text-red-500" >Severe symptoms</div>
          </div>

          
          <div className="flex text-sm uppercase rounded-lg ml-4 flex-wrap w-full flex-around">
          <Symptom symptom="PERSISTANT PAIN/PRESSURE IN CHEST"/>
            <Symptom symptom="NEW CONFUSION" />
            <Symptom symptom="BLUISH LIPS/FACE" />
            <Symptom symptom="INABILITY TO WAKE/STAY AWAKE" />
            <Symptom symptom="DIFFICULTY IN BREATHING" />
            <Symptom symptom="Slurred speech or difficulty speaking(new or worsening)" />
            <Symptom symptom="Dehydration(dry lips and mouth, noturinating much, sunken eyes)" />
            <Symptom symptom="Signs of low blood pressure(too weak to stand, dizziness, lightheaded, feeling cold,pale, clammy skin)" />
            <Symptom symptom="New or worsening seizures" />
            
          </div>

        </div> 

        <div>
          <div className="ml-6 w-full">
          <div className="w-full text-sm my-2 p-2 text-red-500" >Other symptoms</div>
            
          </div>

          
          <div className="flex text-sm rounded-lg ml-4 flex-wrap w-full flex-around">
            <Symptom symptom="FEVER or CHILLS"/>
            <Symptom symptom="COUGH" />
            <Symptom symptom="MUSCLE or BODY ACHE" />
            <Symptom symptom="NAUSEA or VOMITING" />
            <Symptom symptom="NEW LOSS OF TASTE OR SMELL" />
            <Symptom symptom="SHORTNESS OF BREATH" />
            <Symptom symptom="NASAL CONGESTION" />
            <Symptom symptom="SORE THROAT" />
            <Symptom symptom="DIARRHEA" />
            <Symptom symptom="HEADACHE" />
            <Symptom symptom="FATIGUE" />

            <div>
              <div className="w-full text-sm my-2 mx-4 p-4 text-gray-700" >
                Please search for your symptoms below if not listed above</div>
              <input className="w-full text-sm my-2 mx-4 p-4 text-gray-700 border-2" 
                type="text" placeholder="Search Other Symptoms"> 
              </input>
            </div>

            <Symptom symptom="None of the Above" />

          </div>

        </div>

        <div>
          <Link href="/VitalSigns">
            <a >
            <button className="border-1 p-4 m-4 text-2xl shadow-md rounded-xl p-2">Next</button>
            </a>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

