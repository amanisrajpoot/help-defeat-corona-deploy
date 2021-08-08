import {combineReducers, createStore, applyMiddleware} from "redux"
import Allergies from "./Allergies"
import MedicalHistory from "./MedicalHistory"
import UserDetails from "./UserDetails"

const rootReducer = combineReducers({
    Allergies,
    MedicalHistory,
    UserDetails
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

export default store

