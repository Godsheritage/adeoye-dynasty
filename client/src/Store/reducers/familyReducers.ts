import { createAction } from "@reduxjs/toolkit";


// action creators
const addMember = createAction("ADD_FAMILY")
const selectedMember = createAction("SELECTED_FAMILY")

// initial reducer state
const initialState = {
  familyMembers: [
    {
      name: "Godsheritage Adeoye",
      age: 18,
      sex: "male",
    },
  ],
};


// Reducer function
const familyReducer:any = (state = initialState, action: any) => {
  switch (action.types) {
    case addMember.type:
      return state;
    case selectedMember.type:
      return state;
    default:
      return state;
  }
};

export default familyReducer;
