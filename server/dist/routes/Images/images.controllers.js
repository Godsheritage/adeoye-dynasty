"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s3_1 = require("../../s3");
const httpGetImages = (req, res) => {
    const key = req.params.key;
    console.log(key);
    const readStream = (0, s3_1.getFileStream)(key);
    readStream.pipe(res);
};
