import { btnReset, v } from "@/app/styles/variables";
import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
`;

export const FormTitle = styled.form`
  font-size: 24px;
  font-weight: 600;
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
  /* border: 1px solid #ccc;
  border-radius: 4px; */
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.darkTheme.bg};
    border-radius: ${v.borderRadius};
    padding: ${v.smSpacing};
    width: 100%;
    font-size: 14px;
`;

export const SubmitButton = styled.button`
   ${btnReset};
    width: 100%;
    background: ${({ theme }) => theme.darkTheme.bg};
    color: ${({ theme }) => theme.darkTheme.text};
    padding: ${v.smSpacing};
    display: flex;
    justify-content: center;
    border-radius: ${v.borderRadius};
    margin-top: ${v.mdSpacing};
    cursor: pointer;

`;
