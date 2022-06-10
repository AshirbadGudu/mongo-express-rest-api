import { config } from "dotenv";
import mongoose from "mongoose";
export const init = () => {
  config();
  const MONGO_URI = process.env.DB_CONNECTION_STRING;
  if (!MONGO_URI) {
    throw new Error("DB_CONNECTION_STRING is not defined");
  }
  mongoose.connect(MONGO_URI, { dbName: "LEARNING_DATABASE" });
};
