import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux"

export default function Settings () {
  const [active, setActive] = useState(false);
  const [personal, setPersonal] = useState();

  const handleClick = () => {
    setActive(!active);
  };

  const allergies = useSelector(state => state.Allergies);
  const medicalHistory = useSelector(state => state.MedicalHistory);
  const userDetails = useSelector(state => state.UserDetails);
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center">

      <div className="flex w-3/5 h-full space-y-2 m-8 p-4 border-2 
         text-xl bg-white h-18">
        
        <div className="space-y-8">
          <div className="w-full border-b-2 m-2 p-2 pl-16">
            <div>YOUR PROFILE</div>
          </div>

          <div>
          <div className="flex items-center pt-6 pl-16 space-x-4 text-3xl text-purple-500">
            <div>Personal Details</div>
            <Link href="AccountDetails">
              <a class="text-sm text-gray-700 hover:text-purple-500">Edit</a>  
            </Link>
          </div> 

           <div className="p-2 space-y-2 pl-16">
              <div> {userDetails.firstName} {userDetails.lastName}</div>
              <div>Email: {userDetails.email}</div>
              <div className="flex space-x-8">
                <div>DOB: {userDetails.dob}</div>
                <div>Location: {userDetails.location}</div>
              </div>
              <div>Gender: {userDetails.gender}</div>
              <div>Race: {userDetails.race}</div>
              <div>Ethnicity: {userDetails.ethncity}</div>
            </div>
          </div>

          <div>
          <div className="flex items-center flex-wrap pt-6 pl-16 space-x-4 text-3xl text-purple-500">
            <div>Allergies</div>
            <Link href="/Allergies">
              <a class="text-sm text-gray-700 hover:text-purple-500">Edit</a>  
            </Link>
          </div> 

           <div className="p-2 space-y-2 pl-16">
              {allergies.map(allergy=> allergy !== "NONE OF THE ABOVE" && <div>{allergy}</div>)}
              <div>Sample </div>
              
            </div>
          </div>

          <div>
          <div className="flex items-center pt-6 pl-16 space-x-4 text-3xl text-purple-500">
            <div>Medical History</div>
            <Link href="/MedicalHistory">
              <a class="text-sm text-gray-700 hover:text-purple-500">Edit</a>  
            </Link>
          </div> 

           <div className="p-2 space-y-2 pl-16">
              {medicalHistory.map(medicalHistory=> medicalHistory !== "NONE OF THE ABOVE" && <div>{medicalHistory}</div>)}
              <div>Sample </div>
              
            </div>
          </div>

          
        
        </div> 
        
      </div>
      <Link href="/">
        <a>
          <button className="border-1 p-4 text-2xl shadow-md rounded-xl p-2">Done</button>
        </a>
      </Link>
    </div>
  );
};

