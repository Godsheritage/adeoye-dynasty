"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const server = http_1.default.createServer(app_1.default);
mongoose_1.default.connection.on("error", (error) => {
    console.log(error);
});
mongoose_1.default.connection.once("open", () => {
    console.log("mongo connection is ready");
});
const PORT = process.env.PORT || 1234;
//START THE SERVER
const startServer = async () => {
    server.listen(PORT, async () => {
        // make the mongo connection on start
        await mongoose_1.default.connect(process.env.MONGO_URL);
        console.log(`server is listening on port ${PORT}`);
    });
};
startServer();
