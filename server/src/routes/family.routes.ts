import  express  from "express";
import { httpFetchFamilyMembers } from "./family.controllers";

const familyRoute = express.Router()

familyRoute.get('/members', httpFetchFamilyMembers)

export default familyRoute
 