import { RequestHandler } from "express";
import { fetchFamilyMembers } from "../models/family.models";

export const httpFetchFamilyMembers: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchFamilyMembers());
};
  
