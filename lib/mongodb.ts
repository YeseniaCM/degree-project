import { MongoClient } from "mongodb";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
    }
  }

  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

let client: MongoClient = new MongoClient(URI, options);
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;