import Link from 'next/link';
import { useState } from 'react';
import Profile from './Profile';
import Reminder from './Reminder';
import {
  StaticRouter as Router,
  Switch,
  Route} from 'react-router-dom'

export default function Sidebar()  {
  
    const [profActive, setProfActive] = useState(false);
    const [howActive, setHowActive] = useState(false);
    const [sympsActive, setSympsActive] = useState(false);
    const [vitalActive, setVitalActive] = useState(false);
    const [testActive, setTestActive] = useState(false);
  
    const handleProf = () => {
      setProfActive(true);
      setHowActive(false);
      setSympsActive(false);
      setVitalActive(false);
      setTestActive(false);
    };
  
    const handleHow = () => {
      setHowActive(true);
      setProfActive(false);
      setSympsActive(false);
      setVitalActive(false);
      setTestActive(false);
    };
    
    const handleSymps = () => {
      setSympsActive(true);
      setProfActive(false);
      setHowActive(false);
      setVitalActive(false);
      setTestActive(false);
    };
    
    const handleVital = () => {
      setVitalActive(true);
      setProfActive(false);
      setHowActive(false);
      setSympsActive(false);
      setTestActive(false);
    };
  
    const handleTest = () => {
      setTestActive(true);
      setProfActive(false);
      setHowActive(false);
      setSympsActive(false);
      setVitalActive(false);
    };

  return (
    <>
    
      <div className=" flex-row w-80 h-full">
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          
          <Route path="/">
            <div className="text-xl pt-2 mt-4 flex justify-center items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
              </svg>
              <Link href="/"><a>Back to Home</a></Link>
            </div>
          </Route>

          
        </Switch>
      </Router>
        
          <Profile handleProf={handleProf}
          handleHow={handleHow}
          handleSymps={handleSymps}
          handleVital={handleVital}
          handleTest={handleTest}
          profActive={profActive}
          howActive={howActive}
          sympsActive={sympsActive}
          vitalActive={vitalActive}
          testActive={testActive}/>
        
          <Reminder />

      </div>

    </>
  );
};

