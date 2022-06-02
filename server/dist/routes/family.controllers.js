"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetFamilyMembers = void 0;
const family_models_1 = require("../models/family.models");
const httpGetFamilyMembers = async (req, res) => {
    return res.status(200).json(await family_models_1.fetchFamilyMembers);
};
exports.httpGetFamilyMembers = httpGetFamilyMembers;
