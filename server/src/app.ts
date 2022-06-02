import path from "path";
import cors from 'cors'
import morgan from "morgan";
import express from "express";
import familyRoute from "./routes/family.routes";

const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan("combined"));
app.use("/family", familyRoute);

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
