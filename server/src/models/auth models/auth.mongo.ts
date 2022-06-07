import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const authModels = mongoose.model('auth', authSchema)

export default authModels