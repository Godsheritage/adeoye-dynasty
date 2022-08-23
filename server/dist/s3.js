"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileStream = exports.uploadFile = void 0;
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const s3_1 = __importDefault(require("aws-sdk/clients/s3"));
dotenv_1.default.config();
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const s3 = new s3_1.default({
    region,
    accessKeyId,
    secretAccessKey,
});
//UPLOAD AN IMAGE
const uploadFile = (file) => {
    const fileStream = fs_1.default.createReadStream(file.path);
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Body: fileStream,
        Key: file.filename,
    };
    return s3.upload(uploadParams).promise();
};
exports.uploadFile = uploadFile;
//DOWNLOAD AN IMAGE
const getFileStream = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: AWS_BUCKET_NAME,
    };
    return s3.getObject(downloadParams).createReadStream();
};
exports.getFileStream = getFileStream;
