import { model } from "mongoose";
import { CategorySchema, ProductSchema, UserSchema } from "../schemas";
import { Category, Product, User } from "../types";

export const UsersModel = model<User>("User", UserSchema);
export const ProductModel = model<Product>("Product", ProductSchema);
export const CategoryModel = model<Category>("Category", CategorySchema);
