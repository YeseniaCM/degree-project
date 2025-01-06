import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin-bottom: 8px;

    code {
      background: rgba(0, 0, 0, 0.05);
      padding: 4px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: 38px;
`;

export const CTAs = styled.div`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.2s ease-in-out;

    &.primary {
      background: black;
      color: white;
    }

    &.secondary {
      background: white;
      color: black;
      border: 1px solid black;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: black;

    img {
      width: 16px;
      height: 16px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
