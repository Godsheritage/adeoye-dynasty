"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetFamilyMembers = void 0;
const family_models_1 = __importDefault(require("../models/family.models"));
const httpGetFamilyMembers = (req, res) => {
    return res.status(200).json(family_models_1.default);
};
exports.httpGetFamilyMembers = httpGetFamilyMembers;
