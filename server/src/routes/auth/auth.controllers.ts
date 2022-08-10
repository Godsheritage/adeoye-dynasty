import { RequestHandler } from "express-serve-static-core";
import { findUser } from "../../models/auth models/auth.models";
import { userTypes } from "../../types";
import {validationResult} from 'express-validator'

//TO LOGIN USERS
const httpSignInUsers: RequestHandler = async (req, res) => {
  validationResult(req)
  
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(422)
      .json({ message: "username or password fields is missing" });
  }
  const user: any = await findUser(username, password);
  if (!user!) {
    return res.status(404).json({ message: "user not found" });
  }
  if (user.password !== password) {
    return res.status(404).json({ message: "password is incorrect" });
  }
  return res
    .status(200)
    .json({ message: "successfully logged in", id: user._id });
};

export default httpSignInUsers;
