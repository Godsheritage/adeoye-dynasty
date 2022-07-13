import { combineReducers } from "@reduxjs/toolkit"



import {configureStore} from "@reduxjs/toolkit"
import familyReducer from "./reducers/familyReducers"

// const reducers:any = () => combineReducers({
//     familyMembers:familyReducer
// })

const configureAppStore = () => {
     const store = configureStore({familyReducer})
     return store

} 

export default store