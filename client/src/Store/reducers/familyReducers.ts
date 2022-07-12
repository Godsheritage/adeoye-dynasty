import actionTypes from "../constants/actionTypes";

const initialState = {
  familyMembers: [
    {
      name: "Godsheritage Adeoye",
      age: 18,
      sex: "male",
    },
  ],
};

const familyReducer:any = (state: any, action: any) => {
  switch (action.types) {
    case actionTypes.ADD_FAMILY:
      return state;
    default:
      return state;
  }
};

export default familyReducer;
