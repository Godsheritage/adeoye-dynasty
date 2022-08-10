import authModels from "./auth.mongo";
import { findUserTypes } from "../../types";

export const findUser: findUserTypes["findUser"] = async (username) => {
  const user = await authModels.findOne({ username }, { __v: 0 });
  return user;
};
