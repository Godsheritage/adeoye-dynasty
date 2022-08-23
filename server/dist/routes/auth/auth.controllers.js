"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const auth_models_1 = require("../../models/auth models/auth.models");
//TO LOGIN USERS
const httpSignInUsers = async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ message: " missing fields" });
    }
    const { username, password } = req.body;
    //FETCH USERS FROM THE BACKEND
    const user = await (0, auth_models_1.findUser)(username, password);
    // if (!user!) {
    //   return res.status(404).json({ message: "user not found" });
    // }
    // if (user.password !== password) {
    //   return res.status(422).json({ message: "password is incorrect" });
    // }
    return res
        .status(user.status)
        .json(user.message);
};
exports.default = httpSignInUsers;
