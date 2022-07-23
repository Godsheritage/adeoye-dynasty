import { familyMemberTypes } from './../../../../server/src/types';
import { createAction, createReducer } from "@reduxjs/toolkit";

// action creators
export const addMember: any = createAction("ADD_FAMILY");
export const selectedMember: any = createAction("SELECTED_FAMILY");

const initialState = [
  {
    DOB: "1971-05-25T23:00:00.000Z",
    YearOfDeath: null,
    age: 51,
    bio: "just there",
    image: "Tunde.jpg",
    isAlive: true,
    name: "Tunde Adeoye",
    sex: "male",
    _id: "629ae13f79bd1c866afa870e",
  },
];

const familyReducer = createReducer([], {
  //action : action handler
  [addMember.type]: (state:any = [], action: any) => {
    return { ...state, familyMembers: action.payload };
  },
  [selectedMember.type]: (state: any, action: any) => {
    return { ...state, member: action.payload };
  },
});

export default familyReducer;
