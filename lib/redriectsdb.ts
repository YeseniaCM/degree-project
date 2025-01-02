import { IRedirects } from "@/app/api/redirects/IRedirects";
import clientPromise from "./mongodb";

export async function getAllRedriects() {
    const client = await clientPromise;
    const db = client.db('redirects');
    return db.collection<IRedirects>('redirects').find({}).toArray();
}