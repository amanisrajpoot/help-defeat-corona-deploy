import Link from 'next/link';
import { useState,useEffect } from 'react';
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

      <div className="flex flex-col items-center w-2/4 h-full space-y-2  m-6 p-4 border-2 
         text-xl bg-white h-18">
        
        <div className="w-full p-8">
          <div className="shadow-sm flex">
            <div className="w-3/4 text-2xl uppercase font-bold p-4" >Daily Vitals</div>
            <div className="text-xl font-bold my-2 py-2 p-2" >{month} {day}</div>
          </div>

          
          <div className="flex flex-col 
          text-xl uppercase rounded-lg ml-4 w-full">
            
            <div className=" mt-4">
              <h3>TEMPERATURE:</h3>
              <input className="shadow-lg py-2 my-2 w-1/4 border-2" 
                type="number" name="temperature"></input>
              <select className="ml-4 border-2 py-2 my-2" > 
                  <option value="Celsius"> Celsius </option>
                  <option value="Fahrenheit"> Fahrenheit </option>
                </select>
              </div>

            <div className="mt-4">
              <h3>Heart Rate:</h3>
              <div className="flex">
                <input className="shadow-lg py-2 my-2 w-1/4 border-2" 
                  type="number" name="temperature"></input>
                <p className="ml-4 py-2 my-2">BMP</p>
              </div>
              </div>

            <div className="mt-4">
              <h3>OXYGEN SATURATION:</h3>
              <div className="flex">
                <input className="shadow-lg py-2 my-2 w-1/4 border-2" 
                  type="number" name="temperature"></input>
                <p className="ml-4 py-2 my-2">%</p>
              </div>
              </div>

            <div className="mt-4">
              <h3>DEVICE USED:</h3>
              <div className="flex">
                <input className="shadow-lg py-2 my-2 w-3/4 border-2" 
                  type="text" name="temperature"></input>
              </div>
              </div>
            
          </div>

        </div> 
          
        <div>
          <Link href="/TestResults">
            <a >
            <button className="border-1 p-4 m-4 text-2xl shadow-md rounded-xl p-2">Next</button>
            </a>
          </Link>
        </div>

      </div>

    </div>
  );
};

