import express from "express";
import { httpGetImages } from "./images.controllers";

const imageRoutes = express.Router();

imageRoutes.get("/", httpGetImages);

export default imageRoutes;
 