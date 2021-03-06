import Link from 'next/link';
import { useState } from 'react';
import Ethnicity from './components/Ethnicity';
import Gender from './components/Gender';
import Race from './components/Race';
import { useSelector, useDispatch } from 'react-redux';
import { addUserDetails } from './redux/UserDetails';

export default function AccountDetails () {
  const userDetails = useSelector(state => state.UserDetails);
  const dispatch = useDispatch()
  
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState(userDetails)

  const handleClick = () => {
    setActive(!active);
  };

  

  return (
    <div className="flex flex-col items-center font-roboto">

      <div className="flex-col w-3/5 h-full space-y-2  m-8 p-4 border-2 
         text-xl bg-white h-18">
        
        <div className="w-full border-b-2 m-2 p-2 text-5xl text-gray-500 space-y-4 ml-8">
            <div>PERSONAL INFO</div>
            <div className="text-sm">Please enter your details.</div>
          </div>

        <div>
          <div className=" space-y-4 w-3/5 ml-8 m-2 p-2">
            <input className="w-full my-2 py-2 p-2 h-16 bg-gray-100 rounded-lg" 
                placeholder={details.firstName} 
                onChange={event => (setDetails({...details, firstName: event.target.value }))}/>
            <input className="w-full my-2 py-2 p-2 h-16 bg-gray-100 rounded-lg" 
                type="text" placeholder={details.lastName}
                onChange={event => (setDetails({...details, lastName: event.target.value }))}/>
            
            <div className="w-full my-2 py-2 p-2 h-24 bg-gray-100 rounded-lg flex flex-col space-y-2">
              <label className="pl-2 pt-2" for="dob">Date of Birth*</label>
              <input id="dob" type="text" placeholder={details.dob} onFocus={event=>event.target.type ="date"} 
                onBlur={event=>event.target.type ="text"}
                className="bg-gray-100 pl-2" 
                placeholder="24/12/1989"
                onChange={event => (setDetails({...details, dob: event.target.value }))} />
            </div>

            <input className="w-full my-2 py-2 p-2 h-16 bg-gray-100 rounded-lg" 
              type="number" placeholder={details.location}
              onChange={event => (setDetails({...details, location: event.target.value }))} />
          </div>

          <div className="w-full pt-6 ml-8 m-2 p-2"><label  name="Gender">Gender</label></div>
          <div className="flex text-sm m-2 rounded-lg pt-2 space-x-4 justify-start ml-8 m-2 p-2">
            <Gender gender="Male" />
            <Gender gender="Female" />
            <Gender gender="Prefer Not to Say" />
            
          </div>

          <div className="pt-6 ml-8 m-2 p-2"><label  name="Gender">Race</label></div>
          <div className="flex text-sm m-2 rounded-lg pt-2 space-x-4 justify-start ml-8 m-2 p-2">
            <Race race="WHITE OR CAUCASIAN" />
            <Race race="BLACK OR AFRICAN AMERICAN" />
            <Race race="ASIAN" />
            <Race race="OTHER" />
            
          </div>

          <div className="w-full pt-6 ml-8 m-2 p-2"><label  name="Gender">Ethnicity</label></div>
          <div className="flex text-sm m-2 rounded-lg pt-2 space-x-4 justify-start ml-8 m-2 p-2">
            <Ethnicity ethnicity="NON-HISPANIC" />
            <Ethnicity ethnicity="HISPANIC" />
            
          </div>
        
        </div> 
        
      </div>
      <Link href="/Settings">
        <a>
        <button className="border-1 p-4 text-2xl shadow-md rounded-xl p-2"
          onClick={()=>dispatch(addUserDetails(details))} >Done</button>
        </a>
      </Link>

      
    </div>
  );
};

