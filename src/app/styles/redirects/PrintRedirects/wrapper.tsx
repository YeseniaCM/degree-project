import { btnReset, v } from "@/app/styles/variables";
import styled from "styled-components";

export const RedirectWrapper = styled.div`
  width: 100%;
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
  
  margin: auto;
`;

export const Title = styled.h1`
    margin-bottom: ${v.smSpacing};
`;

export const Table = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};

  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.bg};
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
      border: 1px solid ${({ theme }) => theme.bg};
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
    background: ${({ theme }) => theme.bg3};
    color: ${({ theme }) => theme.text2};
    padding: ${v.smSpacing};
    display: flex;
    justify-content: center;
    border-radius: ${v.borderRadius};
    cursor: pointer;
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