"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_controllers_1 = require("./images.controllers");
const imageRoutes = express_1.default.Router();
imageRoutes.get("/:key", images_controllers_1.httpGetImages);
exports.default = imageRoutes;
