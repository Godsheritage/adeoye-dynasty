import { RequestHandler } from "express";
import {
  fetchFamilyMembers,
  fetchSingleFamilyMember,
} from "../../models/family models/family.models";

//CONTROLLER TO FETCH FAMILYL MEMBERS FROM THE DATABASE(MODEL FILE)
export const httpFetchFamilyMembers: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchFamilyMembers());
};

//CONTROLLER TO FETCH FAMILY MEMBERS BY NAME FROM THE DATABASE(MODEL FILE)//
export const httpFetchSingleFamilyMember: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchSingleFamilyMember(req.params.name));
};

//CONTROLLER TO FETCH FAMILY MEMBERS BY NAME FROM THE DATABASE(MODEL FILE)//
export const httpAddFamilyMember: RequestHandler = async (req, res) => {
  return res.status(201).json(await fetchSingleFamilyMember(req.params.name));
};

//
