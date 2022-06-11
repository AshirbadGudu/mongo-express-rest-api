import { Schema } from "mongoose";
import { User } from "../types";

export default new Schema<User>(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "USERS" }
);
