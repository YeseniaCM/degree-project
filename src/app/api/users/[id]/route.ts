import { NextRequest, NextResponse } from "next/server";
import { IUser, IUserResponse } from "../IUser";
import {
  getUserById,
  updateUserById,
  deleteUserById,
  isValidObjectId,
} from "@/lib/userdb";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Fel id användare" }, { status: 400 });
  }

  try {
    const user = await getUserById(id);

    if (!user) {
      return NextResponse.json(
        { error: "Hittar ingen användare" },
        { status: 404 }
      );
    }

    const response: IUserResponse = {
      _id: user._id.toString(),
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Kunde inte hämta användare:", error);
    return NextResponse.json(
      { error: "Fel vid hämtning av användare" },
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
    return NextResponse.json({ error: "Fel id användare" }, { status: 400 });
  }

  try {
    const body: Partial<IUser> = await req.json();

    const result = await updateUserById(id, body);

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Hittar ingen användare" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Uppdateringen lyckades" });
  } catch (error) {
    console.error("Fel vid uppdatering av användare:", error);
    return NextResponse.json(
      { error: "Gick inte att uppdatera användare" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Fel id användare" }, { status: 400 });
  }

  try {
    const result = await deleteUserById(id);

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Hittar ingen användare" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Borttagningen lyckades" });
  } catch (error) {
    console.error("Fel vid borttagning av användare:", error);
    return NextResponse.json(
      { error: "Gick inte att ta bort användare" },
      { status: 500 }
    );
  }
}
