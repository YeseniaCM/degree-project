import { MessageContainer, Message } from "@/app/styles/ErrorMessage/wrapper";
import {
  Table,
  Title,
  TitleWrapper,
  TitleColumns,
  RedirectsList,
  ColumnRow,
  ColumnLabel,
  ButtonWrapper,
  Button,
  HeadWrapper,
} from "@/app/styles/redirects/PrintRedirects/wrapper";
import CreateRedirect from "./CreateRedirect";
import EditButton from "./EditRedirect";
import { useRedirects } from "@/app/hooks/useRedirects";
import Link from "next/link";
import { Suspense } from "react";

export default function PrintRedirects() {
  const { isLoading, redirects, errorMsg, deleteRedirect } = useRedirects();

  const handleDelete = async (id: string) => {
    try {
      await deleteRedirect(id);
      window.location.reload();
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
    <>
      <Suspense />

      <Table>
        <RedirectsList>
          <HeadWrapper>
            <Title>Redirects</Title>
            <CreateRedirect />
          </HeadWrapper>
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
    </>
  );
}
