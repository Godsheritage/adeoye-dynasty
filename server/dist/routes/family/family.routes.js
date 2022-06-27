"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const family_controllers_1 = require("./family.controllers");
const familyRoute = express_1.default.Router();
// to get all the family members
familyRoute.get('/members', family_controllers_1.httpFetchFamilyMembers);
familyRoute.get('/member/:name', family_controllers_1.httpFetchFamilyMembers);
exports.default = familyRoute;
