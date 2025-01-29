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
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const id = (await params).id;

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
  } catch {
    return NextResponse.json(
      { error: "Fel vid hämtning av ID:nr" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

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
  } catch {
    return NextResponse.json(
      { error: "gick inte att uppdatera" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

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
  } catch {
    return NextResponse.json(
      { error: "gick inte att uppdatera" },
      { status: 500 }
    );
  }
}
