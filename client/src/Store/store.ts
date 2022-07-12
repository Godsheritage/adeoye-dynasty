import { combineReducers } from "@reduxjs/toolkit"



import {configureStore} from "@reduxjs/toolkit"
import familyReducer from "./reducers/familyReducers"

const reducers:any = () => combineReducers({
    familyMembers:familyReducer
})

const store = configureStore(reducers)

export default store