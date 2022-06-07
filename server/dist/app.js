"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const s3_1 = require("./s3");
const auth_routes_1 = __importDefault(require("./routes/auth/auth.routes"));
const family_routes_1 = __importDefault(require("./routes/family/family.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("combined"));
app.use("/family", family_routes_1.default);
app.use("/auth", auth_routes_1.default);
app.get("/images/:key", (req, res) => {
    const key = req.params.key;
    const readStream = (0, s3_1.getFileStream)(key);
    readStream.pipe(res);
});
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public ")));
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public ", "index.html"));
});
exports.default = app;
