import  express  from "express";

const familyRoute = express.Router()

familyRoute.get('/', httpGetFamilyMembers)

