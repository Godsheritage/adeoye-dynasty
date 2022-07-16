import { createAction, createReducer } from "@reduxjs/toolkit";

// action creators
export const addMember:any = createAction("ADD_FAMILY");
export const selectedMember:any = createAction("SELECTED_FAMILY");


const familyReducer = createReducer([], {
  //action : action handler 
  [addMember.type]: (state: any, action: any) => {
    return {...state, familyMembers:action.payload }
  },
  [selectedMember.type]: (state: any, action: any) => {
    return {...state, member:action.payload }

  },
});


export default familyReducer;
