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
import { MdLogin, MdLogout } from "react-icons/md";
import { ThemeContext } from "styled-components";
import { usePathname } from "next/navigation";
import { TiArrowRepeat } from "react-icons/ti";

export const Navigation = () => {
  // const searchRef = useRef(null) || '';
  const { theme, setTheme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  ];

  const secondaryLinksArray: { label: string; icon: JSX.Element }[] = [
    {
      label: "Logout",
      icon: <MdLogout />
    }, 
    {
      label: "Login",
      icon: <MdLogin />
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
      <Navbar $isOpen={sidebarOpen}>
        <NavbarButton
          $isOpen={sidebarOpen}
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
          <NavLinkContainer key={label} $isActive={pathname === to}>
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
        <NavLinkContainer>
        <NavLink
            href={isLoggedIn ? "/" : "/login"} // Omdirigera till /login om ej inloggad
            style={!sidebarOpen ? { width: `fit-content` } : {}}
            onClick={() => {
              if (isLoggedIn) {
                console.log("Loggar ut...");
                setIsLoggedIn(false); // Logga ut användaren
              }
            }}
          >
            <NavLinkIcon>{isLoggedIn ? <MdLogout /> : <MdLogin />}</NavLinkIcon>
            {sidebarOpen && (
              <NavLinkLabel>{isLoggedIn ? "Logout" : "Login"}</NavLinkLabel>
            )}
          </NavLink>
        </NavLinkContainer>
        <NavDivider />
        <NavTheme>
          {theme === "dark" && <SunIcon onClick={handleThemeChange} />}
          {theme === "light" && <MoonIcon onClick={handleThemeChange} />}
        </NavTheme>
      </Navbar>
    </>
  );
};
