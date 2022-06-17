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
