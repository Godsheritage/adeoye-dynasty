// import AddFamily
import actionTypes from "../constants/actionTypes";

const AddFamilyMember = (familyMember:any) => {
  return {
    type: actionTypes.ADD_FAMILY,
    payload: familyMember,
  };
};

const selectedFamilyMember = (member:any) => {
  return {
    type: actionTypes.SELECTED_FAMILY,
    payload: member,
  };
};
