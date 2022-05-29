import { RequestHandler } from "express";
import familyMembers from "./models/family.models";

export const httpGetFamilyMembers: RequestHandler = (req, res) => {
  return res.status(200).json(familyMembers);
};
