import { ObjectId } from "mongodb";

export interface IRedirect {
  _id?: ObjectId;
  sourceUrl: string;
  destinationUrl: string;
  httpStatusCode: number;
  createdAt: string;
  updatedAt: string;
}
