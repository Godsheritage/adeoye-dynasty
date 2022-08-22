import path from "path";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { uploadFile, getFileStream } from "./s3";
import authRoute from "./routes/auth/auth.routes";
import familyRoute from "./routes/family/family.routes";
// import { unknownRouteHandler } from "./routes/family/family.controllers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.use("/api/auth", authRoute);

app.use("/api/family", familyRoute);

app.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

//CONTROLLER THAT WILL BE ACCESSED IF THERE IS NO ROUTES


app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

app.use((req, res) => {
  return res.status(404).json({ mesage: "could not find route" });
})

export default app;
