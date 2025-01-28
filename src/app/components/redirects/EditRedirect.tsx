import { useState } from "react";
import { Button, EditContainer } from "../../styles/redirects/PrintRedirects/wrapper";
import { IRedirect } from "@/app/types/IRedirect";
import { useRedirects } from "@/app/hooks/useRedirects";
import { Input } from "@/app/styles/redirects/createRedirects/wrapper";
import { Label } from "@/app/styles/form/wrapper";

interface IEditButtonProps {
    redirect: IRedirect;
}

export default function EditButton({ redirect }: IEditButtonProps) {
    const { updateRedirect } = useRedirects();
    const [isEditing, setIsEditing] = useState(false);
    const [currentRedirect, setCurrentRedirect] = useState<IRedirect>(redirect
      );

    const handleSave = async () => {
        if (!currentRedirect) return;

        try {
          await updateRedirect(currentRedirect);
          setIsEditing(false);
        } catch (error) {
          console.log("Error saving redirect", error);
        }
      };

      if (isEditing) {
        return (
            <EditContainer >
              <h2>Redigera Redirect</h2>
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
              <Button onClick={handleSave}>Spara</Button>
              <Button onClick={() => setIsEditing(false)}>Avbryt</Button>
            </EditContainer>
            
        );
      }

      return (
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
        );

}