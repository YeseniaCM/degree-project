import { Input } from "@/app/styles/form/wrapper";
import {
  AddButton,
  CreateWrapper,
  CreateContainer,
  EditRedirectInput,
  CreateRedirectWrapper,
} from "@/app/styles/redirects/createRedirects/wrapper";
import { Button } from "@/app/styles/redirects/PrintRedirects/wrapper";
import { H1 } from "@/app/styles/stylePage";
import { IRedirect } from "@/app/types/IRedirect";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export default function CreateRedirect() {
  const [sourceUrl, setSourceUrl] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");
  const [httpStatusCode, setHttpStatusCode] = useState("");
  const [createRedirect, setCreateRedirect] = useState(false);
  const [, setErrorMsg] = useState("");
  const [redirects, setRedirects] = useState<IRedirect[]>([]);

  const addRedirect = async () => {
    setCreateRedirect(true);

    if (!sourceUrl || !destinationUrl || !httpStatusCode) {
      setErrorMsg("Fyll i alla fält");
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
      setCreateRedirect(false);
      window.location.reload();
    } catch {
      setErrorMsg("Kunde inte skapa redirecten");
      setCreateRedirect(false);
    }
  };

  return (
    <>
      <AddButton onClick={addRedirect}>
        Skapa redirect <IoMdAdd />
      </AddButton>

      {createRedirect && (
        <CreateWrapper>
          <CreateContainer>
            <H1>Skapa redirect</H1>
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
            <CreateRedirectWrapper>
              <Button onClick={addRedirect}>Skapa</Button>
              <Button onClick={() => setCreateRedirect(false)}>Avbryt</Button>
            </CreateRedirectWrapper>
          </CreateContainer>
        </CreateWrapper>
      )}
    </>
  );
}
