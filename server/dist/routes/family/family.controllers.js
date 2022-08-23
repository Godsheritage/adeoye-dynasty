"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAddFamilyMember = exports.httpFetchSingleFamilyMember = exports.httpFetchFamilyMembers = void 0;
const family_models_1 = require("../../models/family models/family.models");
const express_validator_1 = require("express-validator");
//CONTROLLER TO FETCH FAMILYL MEMBERS FROM THE DATABASE(MODEL FILE)
const httpFetchFamilyMembers = async (req, res) => {
    return res.status(200).json(await (0, family_models_1.fetchFamilyMembers)());
};
exports.httpFetchFamilyMembers = httpFetchFamilyMembers;
//CONTROLLER TO FETCH FAMILY MEMBERS BY NAME FROM THE DATABASE(MODEL FILE)
const httpFetchSingleFamilyMember = async (req, res) => {
    return res.status(200).json(await (0, family_models_1.fetchSingleFamilyMember)(req.params.name));
};
exports.httpFetchSingleFamilyMember = httpFetchSingleFamilyMember;
//CONTROLLER TO ADD FAMILY MEMBER TO THE DATABASE//
const httpAddFamilyMember = async (req, res) => {
    let errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    return res.status(201).json(await (0, family_models_1.addFamilyMembers)(req.body));
};
exports.httpAddFamilyMember = httpAddFamilyMember;
