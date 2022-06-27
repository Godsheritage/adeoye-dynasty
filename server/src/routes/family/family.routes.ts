import  express  from "express";
import { httpFetchFamilyMembers, httpFetchSingleFamilyMember } from "./family.controllers";

const familyRoute = express.Router()

// to get all the family members
familyRoute.get('/members', httpFetchFamilyMembers)

familyRoute.get('/member/:name', httpFetchSingleFamilyMember)

export default familyRoute
 