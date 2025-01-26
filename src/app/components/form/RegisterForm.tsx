"use client";
import { useState } from "react";
import {
  FormDok,
  FormTitle,
  FormWrapper,
  Label,
  SubmitButton,
} from "../../styles/form/wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/app/styles/redirects/createRedirects/wrapper";

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); 

    if (!fullName || !email || !password) {
      setError("Alla fält måste fyllas i.");
      setIsLoading(false);
      return;
    }

    const user = {
      action: "register",
      fullName,
      email,
      password,
    };

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Registrering lyckades:", data);
        router.push("/login");
      } else {
        setError(data.error || "Kunde inte genomföra registreringen.");
      }
    } catch (error) {
      console.log("Fel vid registrering:", error);
      setError("Kunde inte ansluta till servern.");
    }

    setIsLoading(false); 
  };

  return (
    <FormWrapper>
      <FormTitle>Registrera dig</FormTitle>
      <FormDok onSubmit={handleSubmit}>
        <Label>Namn</Label>
        <Input
          type="text"
          placeholder="Namn"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <Label>Lösenord</Label>
        <Input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <SubmitButton disabled={isLoading} type="submit">
          {isLoading ? "Laddar..." : "Registrera"}
        </SubmitButton>
        {error && <div>{error}</div>}
        <p>
          Har du redan ett konto?
          <Link href="/login"> Logga in här</Link>
        </p>
      </FormDok>
    </FormWrapper>
  );
}
