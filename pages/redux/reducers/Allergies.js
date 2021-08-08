export function addAllergy(allergy) {
    return {
        type: "ADD_ALLERGY",
        payload: allergy

    }
}

export function removeAllergy(allergy) {
    return {
        type: "REMOVE_ALLERGY",
        payload: allergy
    }
}

export function removeAllAllergies() {
    return {
        type: "REMOVE_ALL_ALLERGY"
    }
}


export default function AllergiesReducer(allergies = [], action) {
    switch(action.type) {
        case "ADD_ALLERGY":
            return [
                ...allergies,
                action.payload
            ]
        case "REMOVE_ALLERGY":{
            const tempArray = [...allergies];
            const newArray = tempArray.filter(allergy => allergy !== action.payload);
            
            return newArray
        }
        case "REMOVE_ALL_ALLERGY":
            return [];
            
        default:
            return allergies
    }
}