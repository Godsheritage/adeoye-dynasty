import { RequestHandler } from "express";
import { uploadFile, getFileStream } from "../../s3";

export const httpGetImages: RequestHandler = (req, res) => {
  const key = req.params.key;
  console.log(key);
  const readStream = getFileStream(key);
  readStream.pipe(res);
};
