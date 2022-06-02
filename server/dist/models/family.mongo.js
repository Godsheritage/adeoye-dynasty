"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.familyModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const familySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    DOB: { type: Date, required: true },
    image: { type: String, required: true },
    age: { type: Number, required: true },
    sex: { type: String, required: true },
    bio: { type: String, required: true },
    isAlive: { type: Boolean, required: true },
    YearOfDeath: { type: Number },
});
exports.familyModel = mongoose_1.default.model("familyMember", familySchema);
