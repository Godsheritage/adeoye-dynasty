"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = void 0;
const auth_mongo_1 = __importDefault(require("./auth.mongo"));
//FIND USERS IN THE DATABASE
const findUser = async (username, password) => {
    const user = await auth_mongo_1.default.findOne({ username }, { __v: 0 });
    if (!user) {
        return { message: "user Not found", error: 404 };
    }
    if (user.password !== password) {
        return { message: "Password is incorrect", error: 422 };
    }
    return user;
};
exports.findUser = findUser;
