import { useState } from 'react';
import Link from 'next/dist/client/link';
import Sidebar from './components/Sidebar';
import Symptom from './components/Symptom';
import { useSelector, useDispatch} from "react-redux"
import { removeSymptom} from "./redux/DailySymptoms"

export default function DailySymptoms () {
  const [active, setActive] = useState(false);
  const [symptomOptionsOne, setSymptomOptionsOne] = useState(["PERSISTANT PAIN/PRESSURE IN CHEST",
                                                        "NEW CONFUSION",
                                                        "BLUISH LIPS/FACE",
                                                        "INABILITY TO WAKE/STAY AWAKE",
                                                        "DIFFICULTY IN BREATHING",
                                                        "Slurred speech or difficulty speaking(new or worsening)",
                                                        "Dehydration(dry lips and mouth, noturinating much, sunken eyes)",
                                                        "Signs of low blood pressure(too weak to stand, dizziness, lightheaded, feeling cold,pale, clammy skin)",
                                                        "New or worsening seizures"
                                                   ])
  
  const [symptomOptionsTwo, setSymptomOptionsTwo] = useState(["FEVER or CHILLS",
                                                              "COUGH",
                                                              "MUSCLE or BODY ACHE",
                                                              "NAUSEA or VOMITING",
                                                              "NEW LOSS OF TASTE OR SMELL",
                                                              "SHORTNESS OF BREATH",
                                                              "NASAL CONGESTION",
                                                              "SORE THROAT",
                                                              "DIARRHEA",
                                                              "HEADACHE",
                                                              "FATIGUE"
                                              ])

  const handleClick = () => {
    setActive(!active);
  };

  const dispatch = useDispatch();
  const dailySymptoms = useSelector(state => state.DailySymptoms)

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
            {symptomOptionsOne.map(option => <Symptom present={dailySymptoms.find(symptom=>symptom== option)} 
              symptom={option}/> )}
            
            
          </div>

        </div> 

        <div>
          <div className="ml-6 w-full">
          <div className="w-full text-sm my-2 p-2 text-red-500" >Other symptoms</div>
            
          </div>

          
          <div className="flex text-sm rounded-lg ml-4 flex-wrap w-full flex-around">
            {symptomOptionsTwo.map(option => <Symptom present={dailySymptoms.find(symptom=>symptom== option)} 
              symptom={option}/> )}
            <div>
              <div className="w-full text-sm my-2 mx-4 p-4 text-gray-700" >
                Please search for your symptoms below if not listed above</div>
              <input className="w-full text-sm my-2 mx-4 p-4 text-gray-700 border-2" 
                type="text" placeholder="Search Other Symptoms"> 
              </input>
            </div>
            
            <div className="flex flex-wrap justify-start m-2 text-sm w-full">
            <Symptom present={dailySymptoms.find(symptom=>symptom== "NONE OF THE ABOVE")} 
              symptom="NONE OF THE ABOVE"/>
            </div>
            
          </div>

        </div>

        <div>
          <Link href="/VitalSigns">
            <a >
            <button className="border-1 p-4 m-4 text-2xl shadow-md rounded-xl p-2"
              onClick={()=>dispatch(removeSymptom("NONE OF THE ABOVE"))}>Next</button>
            </a>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

