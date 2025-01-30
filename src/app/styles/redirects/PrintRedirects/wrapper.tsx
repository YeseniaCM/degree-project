import { btnReset, v } from "@/app/styles/variables";
import { IoAddCircle } from "react-icons/io5";
import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: ${v.smSpacing};
  padding: 0;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.navBg};
  border-radius: ${v.borderRadius};
  padding: ${v.lgSpacing};
`;

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: ${v.smSpacing};
  border-bottom: 1px solid ${({ theme }) => theme.hover};
`;

export const TitleColumns = styled.h3`
  display: block;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
`;

export const RedirectsList = styled.div`
  border-radius: ${v.borderRadius};
  width: 100%;
  font-size: 14px;
`;

export const ColumnRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  border-radius: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  height: 45px;
`;

export const ColumnLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button<{ $isHidden?: boolean }>`
  ${btnReset};
  width: 45%;
  background: ${({ theme }) => theme.btn};
  color: ${({ theme }) => theme.text};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: center;
  border-radius: ${v.borderRadius};
  cursor: pointer;
  transition: opacity 0.3s ease, visibility 0s linear 0.3s;
  opacity: ${(props) => (props.$isHidden ? 0 : 1)};
  visibility: ${(props) => (props.$isHidden ? "hidden" : "visible")};

  &:hover {
    background: ${({ theme }) => theme.btnHover};
  }
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

export const AddIcon = styled(IoAddCircle)`
  transform: scale(1);
`;

export const EditRedirect = styled.button`
  ${btnReset};
  width: 30%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: center;
  border-radius: ${v.borderRadius};
  cursor: pointer;
  margin-right: ${v.smSpacing};
`;

export const EditRedirectForm = styled.form`
  ${btnReset};
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: center;
  border-radius: ${v.borderRadius};
  cursor: pointer;
  margin-right: ${v.smSpacing};
`;

export const CreateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${v.mdSpacing};
`;

export const EditRedirectInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.bg};
  border-radius: ${v.borderRadius};
  padding: ${v.smSpacing};
  width: 100%;
  font-size: 14px;
`;

export const EditWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const EditContainer = styled.div`
  background: ${({ theme }) => theme.navBg};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 24px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1001;
`;
