import Link from 'next/link';
import { useState } from 'react';
import History from './components/History';
import HistoryNone from './components/HistoryNone';

export default function MedicalHistory () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };



  return (
    <>
    <div className="flex justify-center items-center space-x-32 w-full">
      
      <Link href="/Allergies">
        <a>
          <button className="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Previous</button>
        </a>
      </Link>
      
      
      <div className="flex items-center w-2/4 m-4 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div>
          <div className="ml-6 w-full">
            <div className="w-full text-4xl font-bold my-2 py-2 p-2" >MEDICAL HISTORY</div>
            <div className="w-full text-sm my-2 p-2" >Click the boxes for any of the items that apply for you</div>
          </div>

          
          <div class="flex text-sm uppercase rounded-lg ml-4 flex-wrap w-full flex-around">
            <History history="Heart Disease"/>
            <History history="High Blood Pressure"/>
            <History history="Lung Disease"/> 
            <History history="Diabetes"/> 
            <History history="NEUROLOGICAL DISEASE"/> 
            <History history="KIDNEY/LIVER FAILURE"/> 
            <History history="CANCER"/>
            <History history="WEAKENED IMMUNITY DUE TO DISEASE (HIV)"/>
            <History history="SMOKER"/> 
            <History history="PREGNANT"/> 
            <History history="SEVERE OBESITY"/>
          </div>

          <div className="flex flex-wrap items-center ml-4 text-sm w-full">
            <HistoryNone historyNone="NONE OF THE ABOVE" />
          </div>

        </div> 
        
      </div>
      
      <Link href="/DailySymptoms">
        <a>
          <button className="border-1 p-4 text-2xl shadow-md rounded-xl p-2"> Next</button>
        </a>
      </Link>

    </div>
    </>
  );
};

