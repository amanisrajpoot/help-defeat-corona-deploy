import {combineReducers, createStore, applyMiddleware} from "redux"
import {addAllergy, removeAllergy, removeAllAllergies } from "./reducers/Allergies"
import Allergies from "./reducers/Allergies"
import MedicalHistory from "./reducers/MedicalHistory"

const rootReducer = combineReducers({
    Allergies,
    MedicalHistory
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

export default store

