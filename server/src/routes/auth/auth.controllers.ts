import { userTypes } from "../../types";
import { validationResult } from "express-validator";
import { RequestHandler } from "express-serve-static-core";
import { findUser } from "../../models/auth models/auth.models";

//TO LOGIN USERS
const httpSignInUsers: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: " missing fields" });
  }
  const { username, password } = req.body;  

  //FETCH USERS FROM THE BACKEND
  const user: any = await findUser(username, password);
  if (!user!) {
    return res.status(404).json({ message: "user not found" });
  }
  if (user.password !== password) {
    return res.status(422).json({ message: "password is incorrect" });
  }
  return res
    .status(200)
    .json({ message: "successfully logged in", id: user._id });
};

export default httpSignInUsers;
