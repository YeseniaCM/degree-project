import { useEffect, useState } from "react";
import { IRedirect } from "../types/IRedirect";

export function useRedirects() {
  const [redirects, setRedirects] = useState<IRedirect[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setError] = useState("");

  useEffect(() => {
    const fetchRedirects = async () => {
      try {
        const response = await fetch("/api/redirects", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Något gick fel med att hämta redirects");
        }
        const data = await response.json();
        setRedirects(data);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        
      }
    };

    fetchRedirects();
  }, [errorMsg]);

  const updateRedirect = async (updateRedirect: IRedirect) => {
    const { sourceUrl, destinationUrl, httpStatusCode, _id } = updateRedirect;

    const updatedRedirect = {
      action: "updateRedirect",
      sourceUrl,
      destinationUrl,
      httpStatusCode,
    };

    try {
      const response = await fetch(`/api/redirects/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRedirect),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(`Något gick fel vid uppdatering: ${data.error}`);
      }

      setRedirects((prevRedirects) =>
        prevRedirects.map((redirect) =>
          redirect._id === _id
            ? { ...redirect, sourceUrl, destinationUrl, httpStatusCode }
            : redirect
        )
      );
    } catch (error) {
      setError(`Kunde inte uppdatera redirecten:` + error);
    }
  };

  const deleteRedirect = async (id: string) => {
    try {
      const response = await fetch(`/api/redirects/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete redirect");
      }

      setRedirects((prevRedirects) =>
        prevRedirects.filter((redirect) => redirect._id?.toString() !== id)
      );
    } catch (error){
      throw error;
    }
  };

  return { isLoading, redirects, errorMsg, updateRedirect, deleteRedirect };
}
