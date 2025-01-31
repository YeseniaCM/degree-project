import { IRedirect } from "@/app/types/IRedirect";
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

export async function getAllRediretcs() {
  const client = await clientPromise;
  const db = client.db("redirects");
  return db.collection<IRedirect>("redirects").find({}).toArray();
}

export async function createRedirect(redirect: IRedirect) {
  const client = await clientPromise;
  const db = client.db("redirects");
  return db.collection<IRedirect>("redirects").insertOne(redirect);
}

export async function getRedirectById(id: string) {
  const client = await clientPromise;
  const db = client.db("redirects");
  const objectId = new ObjectId(id); 
  return db.collection("redirects").findOne({ _id: objectId });
}

export function isValidObjectId(id: string): boolean {
  return ObjectId.isValid(id);
}

export async function updateRedirectById(
  id: string,
  updateData: Partial<IRedirect>
) {
  const client = await clientPromise;
  const db = client.db("redirects");
  const objectId = new ObjectId(id);
  return db
    .collection("redirects")
    .updateOne({ _id: objectId }, { $set: updateData });
}

export async function getRedriectByUrl(
  sourceUrl: string,
  destinationUrl: string
) {
  const client = await clientPromise;
  const db = client.db("redirects");

  const query: { sourceUrl?: string; destinationUrl?: string } = {};

  if (sourceUrl) query.sourceUrl = sourceUrl;
  if (destinationUrl) query.destinationUrl = destinationUrl;

  return db.collection<IRedirect>("redirects").findOne(query);
}

export async function deleteRedirectById(id: string) {
  const client = await clientPromise;
  const db = client.db("redirects");
  const objectId = new ObjectId(id); 
  return db.collection("redirects").deleteOne({ _id:objectId });
}