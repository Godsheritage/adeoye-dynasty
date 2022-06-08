import { findUserTypes } from "../../types";
import authModels from "./auth.mongo";

export const findUser: findUserTypes["findUser"] = async (
  username,
  password
) => {
  const user = await authModels.findOne({ username }, { __v: 0 });
//   if (!user) {
//     return { error: "user not found" };
//   }
//   if (user.password !== password) {
//     return { error: "password is incorrect" };
//   }
  return user;
};
