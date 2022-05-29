import express from "express";
import familyRoute from "./routes/family.routes";
import path from "path";

const app = express();

app.use("/family/members", familyRoute);

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;
