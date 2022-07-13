// import AddFamily
import actionTypes from "../constants/actionTypes";
import { createAction } from "@reduxjs/toolkit";

const addMember = createAction(actionTypes.ADD_FAMILY)
const selectedMember = createAction(actionTypes.SELECTED_FAMILY)

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
