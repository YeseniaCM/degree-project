import styled from "styled-components";
import { btnReset, v } from "../../variables";

export const AddButton = styled.button`
  ${btnReset};
  color: ${({ theme }) => theme.text};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  float: inline-end;
  justify-content: space-around;
  border: 2px dashed ${({ theme }) => theme.btn};
  &:hover {
    background: ${({ theme }) => theme.btn};
    color: ${({ theme }) => theme.background};
  }
  @media screen and (max-width: 768px){
    width: auto;
  }
`;

export const CreateWrapper = styled.div`
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

export const CreateContainer = styled.div`
  background: ${({ theme }) => theme.navBg};
  padding: ${v.mdSpacing};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 24px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1001;
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.bg};
  border-radius: ${v.borderRadius};
  padding: ${v.smSpacing};
  width: 100%;
  font-size: 14px;
`;

export const EditRedirectInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.bg};
  border-radius: ${v.borderRadius};
  padding: ${v.smSpacing};
  width: 100%;
  font-size: 14px;
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

export const CreateRedirectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
