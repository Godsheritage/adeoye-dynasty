import authModels from "./auth.mongo";
import { findUserTypes } from "../../types";

//FIND USERS IN THE DATABASE
export const findUser: findUserTypes["findUser"] = async (username:string, password:string) => {
  const user = await authModels.findOne({ username }, { __v: 0 });
  if(!user){
    return {message:"user Not found", status:404}
  }
  if (user.password !== password) {
    return {message:"Password is incorrect", status:422}
  }
  return {message:"Successfully logged in", user, status:200}
};
