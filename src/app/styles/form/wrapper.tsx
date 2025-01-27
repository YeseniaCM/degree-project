import { btnReset, v } from "@/app/styles/variables";
import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.navBg};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
  width: 360px;
`;

export const FormTitle = styled.h1`
  font-weight: 600;
`;

export const FormDok = styled.form`
  width: 100%;
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
`;

export const FormControl = styled.div`
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
  margin-top: ${v.mdSpacing};
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    padding: ${v.smSpacing};
    width: 100%;
    font-size: 14px;
`;

export const SubmitButton = styled.button`
   ${btnReset};
    width: 100%;
    background: ${({ theme }) => theme.btn};
    color: ${({ theme }) => theme.text2};
    padding: ${v.smSpacing};
    display: flex;
    justify-content: center;
    border-radius: ${v.borderRadius};
    margin-top: ${v.mdSpacing};
    cursor: pointer;

    &:hover{
    background: ${({ theme }) => theme.btnHover};
    }
`;

export const FormContent = styled.p `
margin-top: ${v.smSpacing};
`;
