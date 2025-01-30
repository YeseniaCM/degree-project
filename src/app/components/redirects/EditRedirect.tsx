import { Suspense, useState } from "react";
import {
  Button,
  EditContainer,
  EditWrapper,
} from "../../styles/redirects/PrintRedirects/wrapper";
import { IRedirect } from "@/app/types/IRedirect";
import { useRedirects } from "@/app/hooks/useRedirects";
import {
  CreateRedirectWrapper,
  Input,
} from "@/app/styles/redirects/createRedirects/wrapper";
import { Label } from "@/app/styles/form/wrapper";
import { H1 } from "@/app/styles/stylePage";

interface IEditButtonProps {
  redirect: IRedirect;
}

export default function EditButton({ redirect }: IEditButtonProps) {
  const { updateRedirect } = useRedirects();
  const [isEditing, setIsEditing] = useState(false);
  const [currentRedirect, setCurrentRedirect] = useState<IRedirect>(redirect);

  const handleSave = async () => {
    if (!currentRedirect) return;

    try {
      await updateRedirect(currentRedirect);
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.log("Error saving redirect", error);
    }
  };

  if (isEditing) {
    return (
      <>
        <Suspense />
        <EditWrapper>
          <EditContainer>
            <H1>Redigera Redirect</H1>
            <div>
              <Label>Source URL</Label>
              <Input
                type="text"
                value={currentRedirect.sourceUrl}
                onChange={(e) =>
                  setCurrentRedirect({
                    ...currentRedirect,
                    sourceUrl: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label>Destination URL</Label>
              <Input
                type="text"
                value={currentRedirect.destinationUrl}
                onChange={(e) =>
                  setCurrentRedirect({
                    ...currentRedirect,
                    destinationUrl: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label>Destination URL</Label>
              <Input
                type="text"
                value={currentRedirect.httpStatusCode}
                onChange={(e) =>
                  setCurrentRedirect({
                    ...currentRedirect,
                    httpStatusCode: Number(e.target.value),
                  })
                }
              />
            </div>
            <CreateRedirectWrapper>
              <Button onClick={handleSave}>Spara</Button>
              <Button onClick={() => setIsEditing(false)}>Avbryt</Button>
            </CreateRedirectWrapper>
          </EditContainer>
        </EditWrapper>
      </>
    );
  }

  return <Button onClick={() => setIsEditing(true)}>Edit</Button>;
}
