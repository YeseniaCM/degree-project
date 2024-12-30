import { IUser, IUsers } from "@/app/api/users/IUser";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function getUserById(id: string) {
  const client = await clientPromise;
  const db = client.db("users");
  return db.collection("users").findOne({ _id: new ObjectId(id) });
}

export async function updateUserById(id: string, updateData: Partial<IUser>) {
  const client = await clientPromise;
  const db = client.db("users");
  return db
    .collection("users")
    .updateOne({ _id: new ObjectId(id) }, { $set: updateData });
}

export async function deleteUserById(id: string) {
  const client = await clientPromise;
  const db = client.db("users");
  return db.collection("users").deleteOne({ _id: new ObjectId(id) });
}

export function isValidObjectId(id: string): boolean {
  return ObjectId.isValid(id);
}

export async function getAllUsers() {
  const client = await clientPromise;
  const db = client.db("users");
  return db.collection<IUsers>("users").find({}).toArray();
}

export async function getUserByEmail(email: string) {
  const client = await clientPromise;
  const db = client.db("users");
  return db.collection<IUsers>("users").findOne({ email });
}

export async function createUser(user: IUsers) {
  const client = await clientPromise;
  const db = client.db("users");
  return db.collection<IUsers>("users").insertOne(user);
}
