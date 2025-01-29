import { MessageContainer, Message } from "@/app/styles/ErrorMessage/wrapper";
import {
  RedirectWrapper,
  Table,
  Title,
  TitleWrapper,
  TitleColumns,
  RedirectsList,
  ColumnRow,
  ColumnLabel,
  ButtonWrapper,
  Button,
} from "@/app/styles/redirects/PrintRedirects/wrapper";
import CreateRedirect from "./CreateRedirect";
import EditButton from "./EditRedirect";
import { useRedirects } from "@/app/hooks/useRedirects";
import Link from "next/link";

export default function PrintRedirects() {
  const { isLoading, redirects, errorMsg, deleteRedirect } = useRedirects();

  const handleDelete = async (id: string) => {
    try {
      await deleteRedirect(id);
    } catch (error) {
      console.log("Error deleting redirect", error);
    }
  };
  if (isLoading) {
    return <div>Laddar...</div>;
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  return (
    <RedirectWrapper>
      <Table>
        <RedirectsList>
        <Title>Redirects</Title>
          {redirects.length > 0 ? (
            <>
              <TitleWrapper>
                <TitleColumns>URL</TitleColumns>
                <TitleColumns>Redirect URL</TitleColumns>
                <TitleColumns>Code</TitleColumns>
              </TitleWrapper>
              {redirects.map((redirect) => (
                <ColumnRow key={redirect._id?.toString()}>
                  <ColumnLabel>{redirect.sourceUrl}</ColumnLabel>
                  <ColumnLabel>{redirect.destinationUrl}</ColumnLabel>
                  <ColumnLabel>{redirect.httpStatusCode}</ColumnLabel>
                  <ButtonWrapper>
                    <EditButton redirect={redirect} />
                    <Button
                      onClick={() =>
                        handleDelete(redirect._id?.toString() || "")
                      }
                    >
                      Delete
                    </Button>
                  </ButtonWrapper>
                </ColumnRow>
              ))}
              <CreateRedirect />
            </>
          ) : (
            <MessageContainer>
              <Message>Kunde inte hämta redirects</Message>

              <Button>
                <Link href={"/"}>Till startsidan</Link>
              </Button>
            </MessageContainer>
          )}
        </RedirectsList>
      </Table>
    </RedirectWrapper>
  );
}
