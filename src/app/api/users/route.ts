import { getAllUsers, getUserByEmail, createUser } from "@/lib/userdb";
import { NextResponse, NextRequest } from "next/server";
import { IUsers } from "./IUser";

export async function GET() {
  try {
    const users = await getAllUsers();

    const response = users.map((doc) => ({
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
      { error: "Kan inte ansluta till MongoDB" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      action,
      username,
      email,
      password,
      fullName,
    }: {
      action: string;
      username?: string;
      email: string;
      password: string;
      fullName?: string;
    } = await req.json();

    if (action === "register") {
      if (!username || !email || !password || !fullName) {
        return NextResponse.json(
          { error: "Saknar i fyllda fält" },
          { status: 400 }
        );
      }

      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        return NextResponse.json(
          { error: "Användaren finns redan" },
          { status: 400 }
        );
      }

      const newUser: IUsers = {
        username,
        email,
        password,
        fullName,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };

      const result = await createUser(newUser);

      return NextResponse.json({
        message: "Ny användare tillagd",
        userId: result.insertedId,
      });
    }

    if (action === "login") {
      const user = await getUserByEmail(email);

      if (!user || user.password !== password) {
        return NextResponse.json(
          { error: "Användarnamn eller lösenord är felaktigt" },
          { status: 400 }
        );
      }

      return NextResponse.json({
        message: "Inloggning lyckades",
        userId: user._id.toString(),
      });
    }

    return NextResponse.json({ error: "Ogiltig åtgärd" }, { status: 400 });
  } catch (err) {
    console.error("Fel vid hantering av POST-förfrågan:", err);
    return NextResponse.json(
      { error: "Kunde inte bearbeta förfrågan" },
      { status: 500 }
    );
  }
}
