import {
  isValidObjectId,
  getRedirectById,
  updateRedirectById,
  deleteRedirectById,
} from "@/lib/redriectsdb";
import { NextRequest, NextResponse } from "next/server";
import { IRedirect } from "../../../types/IRedirect";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  console.log("Mottaget id:", id);

  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Fel id:nr" }, { status: 400 });
  }

  try {
    const redirect = await getRedirectById(id);

    if (!redirect) {
      return NextResponse.json(
        { error: "Redirect ej hittad" },
        { status: 404 }
      );
    }

    const response: IRedirect = {
      _id: redirect._id.toString(),
      sourceUrl: redirect.sourceUrl,
      destinationUrl: redirect.destinationUrl,
      httpStatusCode: redirect.httpStatusCode,
      createdAt: redirect.createdAt,
      updatedAt: redirect.updatedAt,
    };

    return NextResponse.json(response);
  } catch (err) {
    console.error("Kunde inte hämta ID:nr", err);
    return NextResponse.json(
      { error: "Fel vid hämtning av ID:nr", details: err },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Fel id:nr" }, { status: 400 });
  }

  try {
    const body: Partial<IRedirect> = await req.json();
    const resultat = await updateRedirectById(id, body);

    if (resultat.matchedCount === 0) {
      return NextResponse.json(
        { error: "Redirect ej hittad" },
        { status: 404 }
      );
    }

    return NextResponse.json({ resultat, message: "Lyckad uppdatering" });
  } catch (err) {
    return NextResponse.json(
      { err: "gick inte att uppdatera" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Fel id:nr" }, { status: 400 });
  }

  try {
    const resultat = await deleteRedirectById(id);

    if (resultat.deletedCount === 0) {
      return NextResponse.json(
        { error: "Redirect ej hittad" },
        { status: 404 }
      );
    }

    return NextResponse.json({ resultat, message: "Redirect raderad" });
  } catch (err) {
    return NextResponse.json(
      { err: "gick inte att uppdatera" },
      { status: 500 }
    );
  }
}
