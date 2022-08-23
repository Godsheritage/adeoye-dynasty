"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const family_controllers_1 = require("./family.controllers");
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const familyRoute = express_1.default.Router();
//ADD FAMILY MEMBERS
familyRoute.post("/", [
    (0, express_validator_1.check)("name"),
    (0, express_validator_1.check)("DOB").not().isEmpty(),
    (0, express_validator_1.check)("image").not().isEmpty(),
    (0, express_validator_1.check)("sex").not().isEmpty(),
    (0, express_validator_1.check)("bio").not().isEmpty(),
    (0, express_validator_1.check)("age").not().isEmpty(),
    (0, express_validator_1.check)("isAlive").not().isEmpty(),
    (0, express_validator_1.check)("YearOfDeath").not().isEmpty(),
], family_controllers_1.httpAddFamilyMember);
// GET ALL THE FAMILY MEMBERS
familyRoute.get("/members", family_controllers_1.httpFetchFamilyMembers);
//GET ALL THE FAMILY MEMBERS BY NAME
familyRoute.get("/members/:name", family_controllers_1.httpFetchSingleFamilyMember);
exports.default = familyRoute;
