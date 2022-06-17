import { Response } from "express";

export type User = {
  _id: string;
  displayName: string;
  email: string;
  password: string;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
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
