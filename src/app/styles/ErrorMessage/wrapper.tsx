import styled from "styled-components";
import { v } from "../variables";

export const MessageContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
`;

export const Message = styled.p` 
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
    margin-bottom: calc(${v.smSpacing} / 4);
    `;