import Link from 'next/link';
import { useState, useEffect } from 'react';
import Questions from './components/Questions';
import Sidebar from './components/Sidebar'

export default function OurUniqueApproach() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const today = new Date();
  
  const months = today.getMonth();
  const monthsStr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days =  today.getDate();

  useEffect(() => {
    setDay(days);
    setMonth(monthsStr[months]);
    console.log(month)
  }, [])


  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-col w-3/5 h-full space-y-2  m-6 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div className="">
          <div className="shadow-sm">
            <div className="w-3/4 text-2xl my-2 py-2 px-8 uppercase" >OUR UNIQUE APPROACH</div>
          </div>

          
          <div className="flex flex-col justify-center items-center text-sm rounded-lg ml-4 w-full px-4">
            
            <div className="space-x-2 mb-4">
              <h1 className="font-bold text-5xl py-4 text-purple-500">USING AI TO HELP DEFEAT COVID-19</h1>
              <p className="font-roboto text-xl py-4 m-4">This tool will help you assess your symptoms and offers guidance on when you may need to stay home or seek medical care. With everything that is happening in the world today we needed to figure out a way to help solve the uncertainty and anxiety that comes along with the pandemic. Our method uses a proprietary algorithm that is getting better with every day, every person who helps us by updating their symptoms, and with geographic data provided by outside sources. We take all of these data points and use them to make a prediction that helps you make decisions about seeking appropriate medical care. This application is not intended to replace your healthcare provider and is not intended for the diagnosis or treatment of disease or other conditions including COVID-19. This device is not cleared by the FDA and is under Enforcement Policy for the duration of the Public Health Emergency. Learn more about COVID-19 and what you can do to stay safe on the CDC website. Please also see your local area’s public health agency website. Watch for COVID-19 symptoms. COVID-19 symptoms can be found on the CDC website. If you develop symptoms, call your medical provider.</p>
              </div>

            <div className="space-x-2 mb-4">
              <h1 className="font-bold text-5xl py-4 text-purple-500">WHAT ARE THE SYMPOMS OF COVID-19?</h1> 
              <p className="text-xl font-roboto py-4 m-4">Many patients with confirmed COVID-19 have developed fever and/or symptoms of acute respiratory illness (e.g., cough, difficulty breathing). However, limited information is currently available to characterize the full spectrum of clinical illness associated with COVID-19. Based on what is known about the virus that causes COVID-19, signs and symptoms may appear any time from 2 to 14 days after exposure to the virus. Based on preliminary data, the median incubation period is approximately 5 days, but may range 2-14 days. Public health officials have identified cases of COVID-19 infection throughout the world, including the United States, which may pose risks for public health. Please check the CDC webpage for the most up to date information.</p>
              </div>
            </div>

        </div> 

      </div>

      <div className="flex flex-col w-3/5 h-full space-y-2  m-6 p-4 border-2 
         text-xl shadow bg-white rounded-lg h-18">
        
        <div className="">
          <div className="shadow-sm">
            <div className="w-3/4 text-2xl my-2 py-2 px-8 uppercase" >How to Use?</div>
          </div>
        </div>
          
          <div className="flex flex-col justify-center items-center text-sm rounded-lg ml-4 w-full px-4">
            
            <div className="space-x-2 mb-4">
              <h1 className="font-bold text-5xl py-4 m-2 text-purple-500">STEPS</h1>
              <p className="font-roboto text-xl py-2 m-2">1. Sign in and provide some initial data </p>
              <p className="font-roboto text-xl py-2 m-2">2. Provide daily data about your symptoms and vitals. If you see a red bubble around one of the updates that means you should fill it out. Our prediction is only as good as your data!</p>
              <p className="font-roboto text-xl py-2 m-2">3. Keep checking. Keep updating. And keep getting better predictions.</p>
              </div>

        </div> 

      </div>


    </div>
  );
};

