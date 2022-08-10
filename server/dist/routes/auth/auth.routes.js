"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = __importDefault(require("./auth.controllers"));
const express_validator_1 = require("express-validator");
const authRoute = express_1.default.Router();
authRoute.post('/', [(0, express_validator_1.check)("username").notEmpty(), (0, express_validator_1.check)("password").isLength({ min: 8 }).custom((val) => /[^A-za-z0-9\s]/g.test(val))], auth_controllers_1.default);
exports.default = authRoute;
