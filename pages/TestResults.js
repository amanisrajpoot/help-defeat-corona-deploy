import Link from 'next/link';
import { useState, useEffect } from 'react';
import Questions from './components/Questions';
import Sidebar from './components/Sidebar'

export default function Personal() {
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
    <div className="flex pl-24">
      <Sidebar />

      <div className="flex flex-col items-center w-2/4 h-full space-y-2 m-6 p-4 border-2 
         text-xl bg-white h-18">
        
        <div className="w-full p-4">
          <div class="flex fles-start w-full shadow-sm">
            <div class="w-3/4 text-2xl uppercase font-bold my-2 py-2 p-2 ml-10 " >Test Results</div>
            <div class="text-xl font-bold my-2 py-2 p-2" >{month} {day}</div>
          </div>

          
          <div class="flex fles-start flex-col justify-center 
          text-xl rounded-lg ml-4 w-full">
            
            <div class="pl-4 ml-4 mt-4 m-4 p-2">
              <div class="space-y-4 text-lg">
              <p class="">If you have taken a COVID-19 test on this date, 
                please enter it below. (You can add more than one test in a given day)</p>
                <p class="">If you did not take a COVID-19 test, please click on "Skip" to proceed.</p>
              </div>
              </div>

            <div class="pl-4 ml-4 mt-8">
              <h3>Test Time</h3>
              <div class="flex">
                <input class="shadow-lg py-2 my-2  bg-green-100 uppercase" 
                  type="time" name="temperature" value="13:00" step="900"></input>
              </div>
              </div>

            <div class="pl-4 ml-4 mt-8">
              <h3>TEST TYPE</h3>
              <div class="flex">
                <input class="shadow-lg py-2 my-2 w-3/4 bg-green-100" 
                  type="text" placeholder="Type of test you underwent" name="temperature"></input>
                </div>
              </div>

            <div class="pl-4 ml-4 mt-8">
              <h3>TEMPERATURE:</h3>
              <select class="shadow-lg py-2 my-2 w-3/4 bg-green-100" > 
                  <option value="Waiting for Result"> Waiting for Result </option>
                  <option value="Covid-19 Positive"> Covid-19 Positive </option>
                  <option value="Covid-19 Negative"> Covid-19 Negative </option>
                </select>
              </div>

          </div>

        </div> 
          
        <div>
          <Link href="/">
            <a >
            <button className="border-1 p-4 m-4 text-2xl shadow-md rounded-xl p-2">Next</button>
            </a>
          </Link>
        </div>

      </div>

    </div>
  );
};

