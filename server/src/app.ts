import express from "express";
import familyRoute from "./routes/family.routes";

const app = express();

app.use("/family/members", familyRoute);

export default app;
