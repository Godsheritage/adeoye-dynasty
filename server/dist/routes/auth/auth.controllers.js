"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_models_1 = require("../../models/auth models/auth.models");
const express_validator_1 = require("express-validator");
//TO LOGIN USERS
const httpSignInUsers = async (req, res) => {
    (0, express_validator_1.validationResult)(req);
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(422)
            .json({ message: "username or password fields is missing" });
    }
    const user = await (0, auth_models_1.findUser)(username, password);
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    if (user.password !== password) {
        return res.status(404).json({ message: "password is incorrect" });
    }
    return res
        .status(200)
        .json({ message: "successfully logged in", id: user._id });
};
exports.default = httpSignInUsers;
