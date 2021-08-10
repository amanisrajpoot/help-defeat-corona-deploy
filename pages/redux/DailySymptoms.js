export function addSymptom(symptom) {
    return {
        type: "ADD_SYMPTOM",
        payload: symptom

    }
}

export function removeSymptom(symptom) {
    return {
        type: "REMOVE_SYMPTOM",
        payload: symptom
    }
}

export function removeAllSymptom() {
    return {
        type: "REMOVE_ALL_SYMPTOM"
    }
}


export default function AllergiesReducer(dailySymptoms = [], action) {
    switch(action.type) {
        case "ADD_SYMPTOM":
            return [
                ...dailySymptoms,
                action.payload
            ]
        case "REMOVE_SYMPTOM":{
            const tempArray = [...dailySymptoms];
            const newArray = tempArray.filter(symptom => symptom !== action.payload);
            
            return newArray
        }
        case "REMOVE_ALL_SYMPTOM":
            return [];
            
        default:
            return dailySymptoms
    }
}