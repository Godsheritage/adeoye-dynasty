import { configureStore } from "@reduxjs/toolkit";
import familyReducer from "./reducers/familyReducers";

const configureAppStore: any = configureStore({ reducer: familyReducer });


export default configureAppStore;
