import { createAction, createReducer } from "@reduxjs/toolkit";

// action creators
export const addMember:any = createAction("ADD_FAMILY");
export const selectedMember = createAction("SELECTED_FAMILY");


const familyReducer = createReducer([], {
  //action : action handler 
  [addMember.type]: (familyMembers: any, action: any) => {
    return familyMembers = action.payload
  },
  [selectedMember.type]: (state: any, action: any) => {
    return state;
  },
});


export default familyReducer;
