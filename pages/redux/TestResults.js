export function addUserDetails(userDetails) {
    return {
        type: "ADD_DETAILS",
        payload: userDetails

    }
}

export function removeUserDetails(userDetails) {
    return {
        type: "REMOVE_DETAILS",
        payload: userDetails
    }
}

export function removeAllUserDetails() {
    return {
        type: "REMOVE_ALL_DETAILS"
    }
}

const details = {"firstName": 'Mayank',
                    "lastName": 'Dubey',
                     "email": 'dmayank0@gmail.com', 
                     "password": '', 
                     "dob":'2017-08-29', 
                     "location": '110016', 
                     "gender":'Male', 
                     "race":'', 
                     "ethnicity":''
                    }

export default function TestResultsReducer(userDetails = details, action) {
    switch(action.type) {
        case "ADD_DETAILS":
            return {
                ...userDetails,
                ...action.payload
            }
        case "REMOVE_DETAILS":{
            const tempArray = {...userDetails};
            const newArray = tempArray.filter(details => details !== action.payload);
            
            return newArray
        }
        case "REMOVE_ALL_DETAILS":
            return {};
            
        default:
            return userDetails
    }
}