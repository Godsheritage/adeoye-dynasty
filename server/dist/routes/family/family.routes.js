"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const family_controllers_1 = require("./family.controllers");
const familyRoute = express_1.default.Router();
// GET ALL THE FAMILY MEMBERS
familyRoute.get('/members', family_controllers_1.httpFetchFamilyMembers);
//GET ALL THE FAMILY MEMBERS BY NAME
familyRoute.get('/members/:name', family_controllers_1.httpFetchSingleFamilyMember);
exports.default = familyRoute;
