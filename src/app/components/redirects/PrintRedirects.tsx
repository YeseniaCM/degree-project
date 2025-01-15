import {
  Button,
  ButtonWrapper,
  ColumnLabel,
  ColumnRow,
  RedirectsList,
  RedirectWrapper,
  Table,
  Title,
  TitleColumns,
  TitleWrapper,
} from "@/styles/PrintRedirects/wrapper";
import CreateRedirect from "./CreateRedirect";
import EditButton from "./EditRedirect";
import { useRedirects } from "@/app/hooks/useRedirects";
import { MessageContainer, Message } from "@/styles/ErrorMessage/wrapper";

export default function PrintRedirects() {
  const { isLoading, redirects, error, deleteRedirect } = useRedirects();

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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <RedirectWrapper>
      <Table>
        <Title>Redirects</Title>
        <TitleWrapper>
          <TitleColumns>URL</TitleColumns>
          <TitleColumns>Redirect URL</TitleColumns>
          <TitleColumns>Code</TitleColumns>
        </TitleWrapper>
        <RedirectsList>
          {redirects.length > 0 ? (
            redirects.map((redirect) => (
              <ColumnRow key={redirect._id?.toString()}>
                <ColumnLabel>{redirect.sourceUrl}</ColumnLabel>
                <ColumnLabel>{redirect.destinationUrl}</ColumnLabel>
                <ColumnLabel>{redirect.httpStatusCode}</ColumnLabel>
                <ButtonWrapper>
                  <EditButton redirect={redirect} />
                  <Button onClick={() => handleDelete(redirect._id?.toString() || '')}>
                    Delete
                  </Button>
                </ButtonWrapper>
              </ColumnRow>
            ))
          ) : (
            <MessageContainer>
              <Message>No redirects found</Message>
            </MessageContainer>
          )}
        </RedirectsList>
        <CreateRedirect />
      </Table>
    </RedirectWrapper>
  );
}
