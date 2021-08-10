import {combineReducers, createStore, applyMiddleware} from "redux"
import Allergies from "./Allergies"
import MedicalHistory from "./MedicalHistory"
import UserDetails from "./UserDetails"
import DailySymptoms from "./DailySymptoms"

const rootReducer = combineReducers({
    Allergies,
    MedicalHistory,
    UserDetails,
    DailySymptoms,
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

export default store

