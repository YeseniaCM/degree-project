"use client";
import { useState } from "react";
import {
  FormContent,
  FormDok,
  FormTitle,
  FormWrapper,
  Label,
  SubmitButton
} from "../../styles/form/wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/app/styles/redirects/createRedirects/wrapper";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !password) {
      setError("Alla fält måste fyllas i.");
      setIsLoading(false);
      return;
    }

    const user = {
      action: "login",
      email,
      password
    };

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Lyckad inloggning:", data);
        router.push("/");
      } else {
        setError(data.error || "Kunde inte genomföra inloggningen.");
      }
    } catch {
      setError("Kunde inte ansluta till servern.");
    }

    setIsLoading(false);
  };

  return (
    <FormWrapper>
      <FormTitle>Logga in</FormTitle>
      <FormDok onSubmit={handleSubmit}>
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
          {isLoading ? "Laddar..." : "Logga in"}
        </SubmitButton>
        {error && <div>{error}</div>}
        <FormContent>
          Har du inget konto?
          <Link href="/register"> Registera dig här </Link>
        </FormContent>
      </FormDok>
    </FormWrapper>
  );
}
