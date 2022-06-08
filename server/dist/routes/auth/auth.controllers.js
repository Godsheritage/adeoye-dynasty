"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_models_1 = require("../../models/auth models/auth.models");
const httpGetUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(404)
            .json({ message: "username or password fields is missing" });
    }
    const user = await (0, auth_models_1.findUser)(username, password);
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "successfully logged in", user });
};
exports.default = httpGetUser;
