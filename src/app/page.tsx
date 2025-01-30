"use client";
import {
  Page,
  Main,
  FlowBoxWrapper,
  Container,
  Button,
  H1,
  Content,
  ButtonWrapper,
} from "@/styles/stylePage";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Page>
      <Main>
        <Container>
          <H1>Välkommen</H1>
          <Content>
            Här kan du skapa egna redirects för att effektivt hantera länkar och
            omdirigeringar. För att börja skapa en redirect behöver du först
            logga in. Om du inte har ett konto än, kan du enkelt registrera dig
            och börja använda tjänsten.{" "}
          </Content>
          <FlowBoxWrapper>
            {isLoggedIn ? (
              <>
                <p>Välkommen tillbaka!</p>
                <ButtonWrapper>
                  <Button onClick={() => setIsLoggedIn(false)}>Logga ut</Button>
                </ButtonWrapper>
              </>
            ) : (
              <>
                <ButtonWrapper>
                  <Link href="/login">
                    <Button>Logga In</Button>
                  </Link>
                  <Link href="/register">
                    <Button>Skapa Konto</Button>
                  </Link>
                </ButtonWrapper>
              </>
            )}
          </FlowBoxWrapper>
        </Container>
      </Main>
    </Page>
  );
}
