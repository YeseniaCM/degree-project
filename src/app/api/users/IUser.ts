import { ObjectId } from "mongodb";
export interface IUsers {
  _id?: ObjectId;
  email: string;
  password: string;
  fullName: string;
  createdAt: string;
  lastLogin: string;
}
export interface IUsersResponse {
  _id: string;
  email: string;
  password: string;
  fullName: string;
  createdAt: string;
  lastLogin: string;
}
export interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
  fullName: string;
  createdAt: string;
  lastLogin: string;
}
export interface IUserResponse {
  _id?: string;
  email: string;
  fullName: string;
  createdAt: string;
  lastLogin: string;
}
