import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { IRedirects, IRedirectsResponse } from "./IRedirects";
import { getAllRedriects } from "@/lib/redriectsdb";

// Hantera GET-metoden
export async function GET() {
  try {
    const redirects = await getAllRedriects();

    const response = redirects.map((doc) => ({
      _id: doc._id.toString(),
      sourceUrl: doc.sourceUrl,
      destinationUrl: doc.destinationUrl,
      httpStatusCode: doc.httpStatusCode,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
      isActive: doc.isActive,
    }));

    return NextResponse.json(response);
  } catch (error) {
    console.error("Fel vid anslutning till MongoDB:", error);
    return NextResponse.json(
      { error: "Kan inte ansluta till MongoDB" },
      { status: 500 }
    );
  }
}

// Hantera POST-metoden
export async function POST(req: NextRequest) {
  const body = await req.json();
  // Implementera logik för POST här
  return NextResponse.json({ message: "POST method works!" });
}
