import { Response } from "express";

export type User = {
  _id: string;
  displayName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category;
};

export type Page = {
  limit: number;
  page: number;
};

export type PaginatedData<T> = {
  data: T[];
  total: number;
  next?: Page;
  previous?: Page;
};

export type IResponse<T> = Response & {
  paginatedData: PaginatedData<T>;
};
