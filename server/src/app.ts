import path from "path";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { uploadFile, getFileStream } from "./s3";
import familyRoute from "./routes/family.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use("/family", familyRoute);

app.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
