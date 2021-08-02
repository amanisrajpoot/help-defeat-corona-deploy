import Head from 'next/head'
import Sidebar from './components/Sidebar'
import Details from './Details'
import { useEffect, useState } from 'react';

export default function Home() {

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
    <div className="font:roboto">
      <Head>
        <title>HelpDefeatCorona.org</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="flex pl-24">
        <Sidebar></Sidebar>
        <Details month={month} day={day}></Details>
      </div>
      
    </div>
  )
}
