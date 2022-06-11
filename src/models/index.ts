import { model } from "mongoose";
import { UserSchema } from "../schemas";
import { User } from "../types";

export const UsersModel = model<User>("User", UserSchema);
