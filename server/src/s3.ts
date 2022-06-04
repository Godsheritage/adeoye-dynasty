import S3 from "aws-sdk/clients/s3";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;


const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

//upload an image

export const uploadFile: any = (file: any) => {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams: any = {
    Bucket: AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
};

//download an image
 
export const getFileStream = (fileKey: any) => {
  const downloadParams: any = {
    Key: fileKey,
    Bucket: AWS_BUCKET_NAME,
  };
  return s3.getObject(downloadParams).createReadStream();
};
