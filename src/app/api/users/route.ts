import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { IUsers, IUsersResponse } from "./IUser";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("users");

    const users: IUsers[] = await db
      .collection<IUsers>("users")
      .find({})
      .toArray();

    const response: IUsersResponse[] = users.map((doc) => ({
      _id: doc._id?.toString() || "",
      username: doc.username,
      email: doc.email,
      password: doc.password,
      fullName: doc.fullName,
      createdAt: doc.createdAt,
      lastLogin: doc.lastLogin,
    }));

    return NextResponse.json(response);
  } catch (error) {
    console.error("Fel vid anslutning till MongoDB:", error);
    return NextResponse.json(
      { error: "Kan inte ansluta till MonogDB" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("users");
    const body: Omit<IUsers, "_id"> = await req.json();

    if (!body.username || !body.email || !body.password || !body.fullName) {
      return NextResponse.json(
        { error: "Saknar i fyllda fält" },
        { status: 400 }
      );
    }

    const result = await db.collection<IUsers>("users").insertOne({
      ...body,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Ny användare tillagd",
      userId: result.insertedId,
    });
  } catch (err) {
    console.error("felmeddelande:", err);
    return NextResponse.json(
      { error: "Kunde inte lägga till användare" },
      { status: 500 }
    );
  }
}
