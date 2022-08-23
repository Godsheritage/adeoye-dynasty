import {
  httpFetchFamilyMembers,
  httpFetchSingleFamilyMember,
  httpAddFamilyMember,
} from "./family.controllers";
import express from "express";
import { check } from "express-validator";

const familyRoute = express.Router();

//ADD FAMILY MEMBERS
familyRoute.post(
  "/",
  [
    check("name"),
    check("DOB").not().isEmpty(),
    check("image").not().isEmpty(),
    check("sex").not().isEmpty(),
    check("bio").not().isEmpty(),
    check("age").not().isEmpty(),
    check("isAlive").not().isEmpty(),
    check("YearOfDeath").not().isEmpty(),
  ],
  httpAddFamilyMember
);

// GET ALL THE FAMILY MEMBERS
familyRoute.get("/members", httpFetchFamilyMembers);

//GET FAMILY MEMBER BY NAME
familyRoute.get("/members/:name", httpFetchSingleFamilyMember);

export default familyRoute;
