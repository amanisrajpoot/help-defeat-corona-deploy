export function addMedicalHistory(medicalHistory) {
    return {
        type: "ADD_MEDICAL_HISTORY",
        payload: medicalHistory

    }
}

export function removeMedicalHistory(medicalHistory) {
    return {
        type: "REMOVE_MEDICAL_HISTORY",
        payload: medicalHistory
    }
}

export function removeAllMedicalHistory() {
    return {
        type: "REMOVE_ALL_MEDICAL_HISTORY"
    }
}


export default function MedicalHistoryReducer(medicalHistory = [], action) {
    switch(action.type) {
        case "ADD_MEDICAL_HISTORY":
            return [
                ...medicalHistory,
                action.payload
            ]
        case "REMOVE_MEDICAL_HISTORY":{
            const tempArray = [...medicalHistory];
            const newArray = tempArray.filter(medicalHistory => medicalHistory !== action.payload);
            
            return newArray
        }
        case "REMOVE_ALL_MEDICAL_HISTORY":
            return [];
            
        default:
            return medicalHistory
    }
}