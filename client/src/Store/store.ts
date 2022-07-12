import {configureStore} from "@reduxjs/toolkit"
import familyReducer from "./reducers/familyReducers"

const store = configureStore(familyReducer)

export default store