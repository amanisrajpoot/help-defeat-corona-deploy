export function addMedicalHistory(medicalHistory) {
    return {
        type: "ADD_ALLERGY",
        payload: medicalHistory

    }
}

export function removeMedicalHistory(medicalHistory) {
    return {
        type: "REMOVE_ALLERGY",
        payload: medicalHistory
    }
}

export function removeAllMedicalHistory() {
    return {
        type: "REMOVE_ALL_ALLERGY"
    }
}

const userDetails = {
    
}



export default function AllergiesReducer(medicalHistory = [], action) {
    switch(action.type) {
        case "ADD_ALLERGY":
            return [
                ...medicalHistory,
                action.payload
            ]
        case "REMOVE_ALLERGY":{
            const tempArray = [...medicalHistory];
            const newArray = tempArray.filter(allergy => allergy !== action.payload);
            
            return newArray
        }
        case "REMOVE_ALL_ALLERGY":
            return [];
            
        default:
            return medicalHistory
    }
}