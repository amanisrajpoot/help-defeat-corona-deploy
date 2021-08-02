import Link from 'next/link';
import { useState } from 'react';
import Options from './Options';

export default function Profile({handleProf, handleHow, handleSymps, handleVital, handleTest,
  profActive, howActive, sympsActive, vitalActive, testActive}) {

  return (
    <>
        <div className="flex-row space-y-2 h-auto m-8 p-4 border-2 
         text-xl bg-white h-18">

          <Options opt="Profile" 
            optSub="50% Complete" 
            link={"/"} 
            handleActive={handleProf} 
            active={profActive}/>

          <Options opt="How are you Feeling?" 
            optSub="Change any personal information" 
            link={"/Personal"} 
            handleActive={handleHow} 
            active={howActive}/>

          <Options opt="Symptoms" 
            optSub="Enter any recent medical complication like uneasy breathing." 
            link={"/DailySymptoms"} 
            handleActive={handleSymps} 
            active={sympsActive}/>

          <Options opt="Vital Signs" 
            optSub="Input daily measurements like temperature and blood oxidation." 
            link={"/VitalSigns"}
            handleActive={handleVital} 
            active={vitalActive}/>

          <Options opt="Test Results" 
            optSub="" 
            link={"/TestResults"}
            handleActive={handleTest} 
            active={testActive}/>

        </div>
    </>
  );
};

