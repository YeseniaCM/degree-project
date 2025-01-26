'use client';
import {
  Page,
  Main,
  Footer
} from '@/styles/stylePage'; // Importera Styled Components
import LoginForm from './components/form/LoginForm';

export default function Home() {
  return (
    <Page>
      <Main>
        <LoginForm/>
      </Main>
      <Footer>

      </Footer>
    </Page>
  );
}
