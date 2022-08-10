import  express  from "express";
import { httpFetchFamilyMembers, httpFetchSingleFamilyMember } from "./family.controllers";

const familyRoute = express.Router()

// GET ALL THE FAMILY MEMBERS
familyRoute.get('/members', httpFetchFamilyMembers)

//GET ALL THE FAMILY MEMBERS BY NAME
familyRoute.get('/members/:name', httpFetchSingleFamilyMember)

export default familyRoute
 