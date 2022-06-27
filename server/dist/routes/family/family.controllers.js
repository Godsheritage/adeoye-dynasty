"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetchSingleFamilyMember = exports.httpFetchFamilyMembers = void 0;
const family_models_1 = require("../../models/family models/family.models");
const httpFetchFamilyMembers = async (req, res) => {
    return res.status(200).json(await (0, family_models_1.fetchFamilyMembers)());
};
exports.httpFetchFamilyMembers = httpFetchFamilyMembers;
const httpFetchSingleFamilyMember = async (req, res) => {
    return res.status(200).json(await (0, family_models_1.fetchFamilyMembers)());
};
exports.httpFetchSingleFamilyMember = httpFetchSingleFamilyMember;
