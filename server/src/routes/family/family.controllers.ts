import { RequestHandler } from "express";
import {
  addFamilyMembers,
  fetchFamilyMembers,
  fetchSingleFamilyMember,
} from "../../models/family models/family.models";
import { validationResult } from "express-validator";

//CONTROLLER TO FETCH FAMILYL MEMBERS FROM THE DATABASE(MODEL FILE)
export const httpFetchFamilyMembers: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchFamilyMembers());
};

//CONTROLLER TO FETCH FAMILY MEMBERS BY NAME FROM THE DATABASE(MODEL FILE)//
export const httpFetchSingleFamilyMember: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchSingleFamilyMember(req.params.name));
};

//CONTROLLER TO ADD FAMILY MEMBER TO THE DATABASE//
export const httpAddFamilyMember: RequestHandler = async (req, res) => {
  let errors = validationResult(req)
  if(!errors.isEmpty){
    return res.status(422).json(errors.array())
  }
  return res.status(201).json(await addFamilyMembers(req.body));
};

