import mongoose, { Schema } from "mongoose";

const familySchema = new mongoose.Schema({
  name: { type: String, required: true },
  DOB: { type: Date, required: true },
  image: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  bio: { type: String, required: true },
  isAlive: { type: Boolean, required: true },
  YearOfDeath: { type: Number, required: true },
});

export const familyModel = mongoose.model("familyMember", familySchema);
