import { createAction, createReducer } from "@reduxjs/toolkit";

// action creators
export const addMember:any = createAction("ADD_FAMILY");
export const selectedMember = createAction("SELECTED_FAMILY");


const familyReducer = createReducer([], {
  //key value pair
  //action : action handler pair
  [addMember.type]: (familyMembers: any, action: any) => {
    return familyMembers = action.payload
  },
  [selectedMember.type]: (state: any, action: any) => {
    return state;
  },
});

// Reducer function
// const familyReducer: any = (state = [], action: any) => {
//   switch (action.types) {
//     case addMember.type:
//       return {
//         ...state, members:action.payload
//       };
//     case selectedMember.type:
//       return state;
//     default:
//       return state;
//   }
// };

export default familyReducer;
