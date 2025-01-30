import styled from "styled-components";
import { v } from "./variables";

export const Page = styled.div`
  width: 100%;
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
  margin: auto;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.title || "#333"};
  margin: 16px 0;
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.navBg};
  flex-direction: column;
  text-align: center;
  margin: auto;
  border-radius: 7px;
  padding: 60px;
`;
export const Content = styled.p`
  width: 100%;
  text-align: center;
  height: 38px;
`;

export const FlowBoxWrapper = styled.div`
  display: flex;
  margin-top: ${v.mdSpacing};
`;

export const FlowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 35px;
  background: ${({ theme }) => theme.bg3};
  width: 180px;
  height: 38px;
`;

export const Logo = styled.img`
  width: 180px;
  height: 38px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: auto;
  margin-top: ${v.xxlSpacing};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.btn};
  color: ${({ theme }) => theme.text2};
  padding: 15px 25px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.btnHover};
  }
`;
