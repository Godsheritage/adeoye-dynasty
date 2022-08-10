"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpFetchSingleFamilyMember = exports.httpFetchFamilyMembers = void 0;
const family_models_1 = require("../../models/family models/family.models");
//CONTROLLER TO FETCH FAMILYL MEMBERS FROM THE DATABASE(MODEL FILE)
const httpFetchFamilyMembers = async (req, res) => {
    return res.status(200).json(await (0, family_models_1.fetchFamilyMembers)());
};
exports.httpFetchFamilyMembers = httpFetchFamilyMembers;
//CONTROLLER TO FETCH FAMILY MEMBERS BY NAME FROM THE DATABASE(MODEL FILE)//
const httpFetchSingleFamilyMember = async (req, res) => {
    return res.status(200).json(await (0, family_models_1.fetchSingleFamilyMember)(req.params.name));
};
exports.httpFetchSingleFamilyMember = httpFetchSingleFamilyMember;
