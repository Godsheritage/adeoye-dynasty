import  express  from "express";
import { httpGetFamilyMembers } from "./family.controllers";

const familyRoute = express.Router()

familyRoute.get('/', httpGetFamilyMembers)

export default familyRoute
 