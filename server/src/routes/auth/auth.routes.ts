import express from "express";
import { check } from "express-validator";
import httpSignInUsers from "./auth.controllers";

const authRoute = express.Router();

//TO SIGN IN USERS
authRoute.post(
  "/",
  [
    check("username").notEmpty(),
    check("password")
      .isLength({ min: 8 })
      .custom((val) => /[^A-za-z0-9\s]/g.test(val)),
  ],
  httpSignInUsers
);

export default authRoute;
