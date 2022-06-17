import { model } from "mongoose";
import { ProductSchema, UserSchema } from "../schemas";
import { Product, User } from "../types";

export const UsersModel = model<User>("User", UserSchema);
export const ProductModel = model<Product>("Product", ProductSchema);
