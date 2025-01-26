import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import styled from "styled-components";
import { btnReset, v } from "../variables";
import Link from "next/link";

export const Navbar = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) =>
    !isOpen ? `auto` : "250px"}; /* Update sidebar width */
  background: ${({ theme }) => theme.navBg};
  height: 100vh;
  padding: 16px; /* Adjust padding based on your design */
  position: relative;
`;

export const NavbarButton = styled.button<{ isOpen: boolean }>`
  ${btnReset};
  position: absolute;
  top: ${v.mdSpacing};
  right: ${({ isOpen }) => (isOpen ? `-14px` : `-16px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.navBg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
  &:hover {
    background: ${({ theme }) => theme.bgHover};
  }
`;

export const NavLogo = styled.div`
  width: 52px;

  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`;

export const NavSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const NavSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;

export const NavDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const NavLinkContainer = styled.div`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3};
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
    border-radius: 2px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const NavLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const NavLinkLabel = styled.span`
  margin-left: ${v.smSpacing};
`;

export const NavTheme = styled.div`
  position: fixed;
  bottom: 10px;
  left: 26px;
  font-size: 16px;
`;
export const SunIcon = styled(TbSunFilled)`
  cursor: pointer;
  font-size: 25px;
  color: ${({ theme }) => theme.bg3};
`;
export const MoonIcon = styled(TbMoonFilled)`
  cursor: pointer;
  font-size: 25px;
  color: ${({ theme }) => theme.bg3};
`;
