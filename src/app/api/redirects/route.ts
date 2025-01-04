import { NextRequest, NextResponse } from "next/server";
import {
  createRedirect,
  getAllRediretcs,
  getRedriectByUrl,
} from "@/lib/redriectsdb";
import { ObjectId } from "mongodb";
import { IRedirects } from "./IRedirects";

export async function GET() {
  try {
    const redirects = await getAllRediretcs();

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

export async function POST(req: NextRequest) {
  try {
    const {
      action,
      sourceUrl,
      destinationUrl,
      httpStatusCode,
    }: {
      action: string;
      sourceUrl: string;
      destinationUrl: string;
      httpStatusCode: string;
    } = await req.json();

    if (action === "createRedirect") {
      if (!sourceUrl || !destinationUrl || !httpStatusCode) {
        return NextResponse.json(
          { error: "Fyll i alla fält" },
          { status: 400 }
        );
      }

      const existingSourceRedirect = await getRedriectByUrl(sourceUrl, "");
      const existingDestinationRedirect = await getRedriectByUrl(
        "",
        destinationUrl
      );

      if (existingSourceRedirect && existingDestinationRedirect) {
        return NextResponse.json(
          {
            error:
              "Existerar redan en redirect med denna sourceUrl och destinationUrl",
          },
          { status: 400 }
        );
      }

      if (existingSourceRedirect) {
        return NextResponse.json(
          { error: "Existerar redan en redirect med denna sourceUrl" },
          { status: 400 }
        );
      }

      if (existingDestinationRedirect) {
        return NextResponse.json(
          { error: "Existerar redan en redirect med denna destinationUrl" },
          { status: 400 }
        );
      }

      const statusCode = parseInt(httpStatusCode, 10);

      const newRedirect: IRedirects = {
        _id: new ObjectId(),
        sourceUrl,
        destinationUrl,
        httpStatusCode: statusCode,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isActive: true,
      };

      await createRedirect(newRedirect);

      return NextResponse.json({ message: "Redirect skapad" }, { status: 201 });
    }

    return NextResponse.json({ error: "Ogiltig åtgärd" }, { status: 400 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { error: "Fel vid skapande av redirect", details: err },
      { status: 500 }
    );
  }
}
