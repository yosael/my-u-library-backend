import { type } from "os";

export type UserRequest = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export type UserResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export type BookRequest = {
  title: string;
  author: string;
  publishedYear: number;
  genre: string;
  stock: number;
};

export type FindBookRequest = {
  by: FindBookBy;
  value: string;
};

export type BookResponse = {
  id: string;
  title: string;
  author: string;
  publishedYear: number;
  genre: string;
  stock: number;
};

export type CheckoutRequest = {
  user: string;
  book: string;
  checkoutDate: Date;
  returnDate: Date;
  status: string;
};

export type CheckoutResponse = {
  id: string;
  userId: string;
  bookId: string;
  checkoutDate: Date;
  returnDate: Date | null;
  status: string;
};

export type CheckoutListResponse = {
  id: string;
  user: {
    id: string;
    name: string;
  };
  book: {
    id: string;
    title: string;
  };
  checkoutDate: Date;
  returnDate: Date | null;
  status: string;
};

export enum FindBookBy {
  Title = "title",
  Author = "author",
  Genre = "genre",
}
