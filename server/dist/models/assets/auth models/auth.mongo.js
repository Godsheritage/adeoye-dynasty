"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authSchema = new mongoose_1.default.Schema({
    emaail: { type: String, required: true },
    password: { type: String, required: true },
});
const authModels = mongoose_1.default.model('auth', authSchema);
exports.default = authModels;
