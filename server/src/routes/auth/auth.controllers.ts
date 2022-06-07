import { RequestHandler } from "express-serve-static-core";
import { findUser } from "../../models/auth models/auth.models";
import { userTypes } from "../../types";

const httpGetUser: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "username or password fields is missing" });
  }
  const user = await findUser(username, password);
  if (!user!) {
    return res.status(404).json({ error: "user not found" });
  }
  return res.status(200).json(user);
};

export default httpGetUser;
