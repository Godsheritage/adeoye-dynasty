import { RequestHandler } from "express";
import { fetchFamilyMembers, fetchSingleFamilyMember } from "../../models/family models/family.models";

export const httpFetchFamilyMembers: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchFamilyMembers());
};
  

export const httpFetchSingleFamilyMember: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchSingleFamilyMember(req.params.name));
};
  
