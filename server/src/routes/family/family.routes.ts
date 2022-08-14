import express from "express";
import {
  httpFetchFamilyMembers,
  httpFetchSingleFamilyMember,
  httpAddFamilyMember,
} from "./family.controllers";

const familyRoute = express.Router();

//ADD FAMILY MEMBERS
familyRoute.post("/", httpAddFamilyMember);

// GET ALL THE FAMILY MEMBERS
familyRoute.get("/members", httpFetchFamilyMembers);

//GET ALL THE FAMILY MEMBERS BY NAME
familyRoute.get("/members/:name", httpFetchSingleFamilyMember);

export default familyRoute;
