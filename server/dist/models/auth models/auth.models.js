"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = void 0;
const auth_mongo_1 = __importDefault(require("./auth.mongo"));
const findUser = async (username) => {
    const user = await auth_mongo_1.default.findOne({ username }, { __v: 0 });
    return user;
};
exports.findUser = findUser;
