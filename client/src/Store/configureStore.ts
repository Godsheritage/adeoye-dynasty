import { configureStore } from "@reduxjs/toolkit";
import familyReducer from "./reducers/familyReducers";

const configureAppStore: any = () => {
  return configureStore({ reducer: familyReducer });
};

configureAppStore()

export default configureAppStore;
