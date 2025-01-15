import { useState } from "react";
import {
  AddButton,
  Button,
  CreateContainer,
  EditContainer,
  EditRedirectInput,
} from "../../styles/PrintRedirects/wrapper";
import { IRedirect } from "@/app/types/IRedirect";
import { Input } from "../../styles/form/wrapper";

export default function CreateRedirect() {
  const [sourceUrl, setSourceUrl] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");
  const [httpStatusCode, setHttpStatusCode] = useState("");
  const [createRedirect, setCreateRedirect] = useState(false);
  const [error, setError] = useState("");
  const [redirects, setRedirects] = useState<IRedirect[]>([]);

  const addRedirect = async () => {
    setCreateRedirect(true);

    if (!sourceUrl || !destinationUrl || !httpStatusCode) {
      setError("Fyll i alla fält");
      return;
    }

    const newRedirect = {
      action: "createRedirect",
      sourceUrl,
      destinationUrl,
      httpStatusCode,
    };

    try {
      const response = await fetch("/api/redirects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRedirect),
      });

      if (!response.ok) {
        throw new Error("Något gick fel vid skapandet");
      }

      const data = await response.json();
      setRedirects([...redirects, data]);
    } catch (error) {
      setError("Kunde inte skapa redirecten");
    }
  };

  return (
    <>
      <AddButton onClick={addRedirect}>+</AddButton>

      {createRedirect && (
        <CreateContainer>
          <Input
            type="text"
            placeholder="Source URL"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
          />
          <EditRedirectInput
            type="text"
            placeholder="Destination URL"
            value={destinationUrl}
            onChange={(e) => setDestinationUrl(e.target.value)}
          />
          <EditRedirectInput
            type="text"
            placeholder="HTTP Status Code"
            value={httpStatusCode}
            onChange={(e) => setHttpStatusCode(e.target.value)}
          />
          <Button onClick={addRedirect}>Add</Button>
          <Button onClick={() => setCreateRedirect(false)}>Avbryt</Button>
        </CreateContainer>
      )}
    </>
  );
}
