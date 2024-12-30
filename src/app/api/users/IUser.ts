import { ObjectId } from "mongodb";
export interface IUsers {
  _id?: ObjectId;
  username: string;
  email: string;
  password: string;
  fullName: string;
  createdAt: string;
  lastLogin: string;
}
export interface IUsersResponse {
  _id: string;
  username: string;
  email: string;
  password: string;
  fullName: string;
  createdAt: string;
  lastLogin: string;
}
export interface IUser {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  fullName: string;
  createdAt: string;
  lastLogin: string;
}
export interface IUserResponse {
  _id?: string;
  username: string;
  email: string;
  fullName: string;
  createdAt: string;
  lastLogin: string;
}
