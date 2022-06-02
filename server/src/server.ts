import http from "http";
import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); 

const server = http.createServer(app);

mongoose.connection.on("error", (error) => {
  console.log(error);  
});
 
mongoose.connection.once("open", () => {
  console.log("mongo connection is ready"); 
});   

const PORT = process.env.PORT || 1234;

server.listen(PORT, async () => {
  // make the mongo connection on start
  await mongoose.connect(process.env.MONGO_URL!);

  console.log(`server is listening on port ${PORT}`);
});
  