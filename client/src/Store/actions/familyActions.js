// import AddFamily
import actionTypes from "../constants/actionTypes";

const AddFamilyMember = (familyMember) => {
  return {
    type: actionTypes.ADD_FAMILY,
    payload: familyMember,
  };
};

const selectedFamilyMember = (member) => {
  return {
    type: actionTypes.SELECTED_FAMILY,
    payload: member,
  };
};
