export function swicthQuestion(userDetails) {
    return {
        type: "TOGGLE",
        payload: userDetails

    }
}

export function removeUserDetails(userDetails) {
    return {
        type: "REMOVE_DETAILS",
        payload: userDetails
    }
}

const details = {"exposed": false,
                 "feeling": false
                }

export default function PersonalReducaction.payloader(userDetails = details, action) {
    switch(action.type) {
        case "TOGGLE":
            return {
                ...userDetails,
                
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