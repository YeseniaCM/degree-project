import { btnReset, v } from "@/app/styles/variables";
import styled from "styled-components";

export const RedirectWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
`;

export const Title = styled.h1`
    margin-bottom: ${v.smSpacing};
`;

export const Table = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};

  border: 1px solid ${({ theme }) => theme.darkTheme.bg};
`;

export const TitleWrapper = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: ${v.smSpacing};
    /* border: 1px solid #ccc;
    border-radius: 4px; */
`;

export const TitleColumns = styled.label`
display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
  /* border: 1px solid #ccc;
  border-radius: 4px; */
`;

export const RedirectsList = styled.div`
    border-radius: ${v.borderRadius};
    width: 100%;
    font-size: 14px;
`;

export const ColumnRow = styled.div`
display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: ${v.smSpacing};
      border: 1px solid ${({ theme }) => theme.darkTheme.bg};
      align-items: center;
      `;

export const ColumnLabel = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
    margin-bottom: calc(${v.smSpacing} / 4);
`;

export const ButtonWrapper = styled.div`
display: flex; 
    grid-template-columns: 1fr 1fr;
    `;

export const Button = styled.button`
   ${btnReset};
    width: 30%;
    background: ${({ theme }) => theme.darkTheme.bg};
    color: ${({ theme }) => theme.darkTheme.text};
    padding: ${v.smSpacing};
    display: flex;
    justify-content: center;
    border-radius: ${v.borderRadius};
    cursor: pointer;
`;

export const AddButton = styled.button`
    ${btnReset};
    width: 4%;
    background: ${({ theme }) => theme.darkTheme.bg};
    color: ${({ theme }) => theme.darkTheme.text};
    padding: ${v.smSpacing};
    display: flex;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    margin-top: ${v.mdSpacing};
`;

export const EditRedirect = styled.button`
    ${btnReset};
    width: 30%;
    background: ${({ theme }) => theme.darkTheme.bg};
    color: ${({ theme }) => theme.darkTheme.text};
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
    background: ${({ theme }) => theme.darkTheme.bg};
    color: ${({ theme }) => theme.darkTheme.text};
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
    border: 1px solid ${({ theme }) => theme.darkTheme.bg};
    border-radius: ${v.borderRadius};
    padding: ${v.smSpacing};
    width: 100%;
    font-size: 14px;
`;

export const EditContainer = styled.div`
    position: fixed;
    background-color: #535353;
    top: 50px;
    left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${v.mdSpacing};
`;