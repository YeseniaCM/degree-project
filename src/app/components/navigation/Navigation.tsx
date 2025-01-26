import {
  MoonIcon,
  NavLink,
  NavLinkContainer,
  NavLinkIcon,
  NavLinkLabel,
  NavTheme,
  NavDivider,
  NavLogo,
  NavbarButton,
  SunIcon,
  Navbar
} from "@/app/styles/navigation/wrapper";
import { JSX, useContext, useRef, useState } from "react";
import { AiOutlineHome, AiOutlineLeft } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { ThemeContext } from "styled-components";
import { usePathname } from "next/navigation";
import { TiArrowRepeat } from "react-icons/ti";
import { IoMdAddCircleOutline } from "react-icons/io";

export const Navigation = () => {
  // const searchRef = useRef(null) || '';
  const { theme, setTheme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const pathname = usePathname();

  type Link = {
    label: string;
    icon: JSX.Element;
    to: string;
  };

  const menuItems: Link[] = [
    {
      label: "Home",
      icon: <AiOutlineHome />,
      to: "/"
    },
    {
      label: "Redirects",
      icon: <TiArrowRepeat />,
      to: "/redirect"
    },
    {
      label: "Create new redirect",
      icon: <IoMdAddCircleOutline />,
      to: "/t"
    }
  ];

  const secondaryLinksArray: { label: string; icon: JSX.Element }[] = [
    {
      label: "Logout",
      icon: <MdLogout />
    }
  ];

  function handleThemeChange() {
    console.log("Current theme before toggle:", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  }

  // const searchClickHandler = () => {
  //   if (!sidebarOpen) {
  //     setSidebarOpen(true);
  //     searchRef.current?.focus();
  //   } else {
  //     // search functionality
  //   }
  // };

  return (
    <>
      <Navbar isOpen={sidebarOpen}>
        <NavbarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <AiOutlineLeft />
        </NavbarButton>
        <NavLogo></NavLogo>
        {/* <NavSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <NavSearchIcon>
          <AiOutlineSearch />
        </NavSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </NavSearch>
      <NavDivider /> */}
        {menuItems.map(({ icon, label, to }: Link) => (
          <NavLinkContainer key={label} isActive={pathname === to}>
            <NavLink
              href={to}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <NavLinkIcon>{icon}</NavLinkIcon>
              {sidebarOpen && (
                <>
                  <NavLinkLabel>{label}</NavLinkLabel>
                </>
              )}
            </NavLink>
          </NavLinkContainer>
        ))}
        <NavDivider />
        {secondaryLinksArray.map(
          ({ icon, label }: { icon: JSX.Element; label: string }) => (
            <NavLinkContainer key={label}>
              <NavLink
                href="/"
                style={!sidebarOpen ? { width: `fit-content` } : {}}
              >
                <NavLinkIcon>{icon}</NavLinkIcon>
                {sidebarOpen && <NavLinkLabel>{label}</NavLinkLabel>}
              </NavLink>
            </NavLinkContainer>
          )
        )}
        <NavDivider />
        <NavTheme>
          {" "}
          {theme === "dark" && <SunIcon onClick={handleThemeChange} />}
          {theme === "light" && <MoonIcon onClick={handleThemeChange} />}
        </NavTheme>
      </Navbar>
    </>
  );
};
