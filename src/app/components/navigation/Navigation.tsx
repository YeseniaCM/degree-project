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
  Navbar,
} from "@/app/styles/navigation/wrapper";
import { JSX, useState } from "react";
import { AiOutlineHome, AiOutlineLeft } from "react-icons/ai";
import { MdLogin, MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import { TiArrowRepeat } from "react-icons/ti";
import { useTheme } from "@/contexts/ThemeContext";
import router from "next/router";

export default function Navigation() {
  // const searchRef = useRef(null) || '';
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  type Link = {
    label: string;
    icon: JSX.Element;
    to: string;
  };

  const menuItems: Link[] = [
    {
      label: "Hem",
      icon: <AiOutlineHome />,
      to: "/",
    },
    {
      label: "Redirects",
      icon: <TiArrowRepeat />,
      to: "/redirect",
    },
  ];

  function handleThemeChange() {
    if (!setTheme) {
      console.error("setTheme is undefined");
      return;
    }
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      router.push("/login");
    } else {
      setIsLoggedIn(true);
    }
  };

  const handleSideNav = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {!isHomePage && (
        <Navbar $isOpen={sidebarOpen}>
          <NavbarButton $isOpen={sidebarOpen} onClick={handleSideNav}>
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
        $isOpen={sidebarOpen}
        href={to}
        onClick={handleLinkClick}
        style={!sidebarOpen ? { width: "fit-content" } : {}}
      >
                <NavLinkIcon $isOpen={sidebarOpen}>{icon}</NavLinkIcon>
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
              $isOpen={sidebarOpen}
              href={isLoggedIn ? "/" : "/login"}
              onClick={() => {
                handleLoginLogout();
                setSidebarOpen(false);
              }}
            >
              <NavLinkIcon $isOpen={sidebarOpen}>
                {isLoggedIn ? <MdLogout /> : <MdLogin />}
              </NavLinkIcon>
              {sidebarOpen && (
                <NavLinkLabel>{isLoggedIn ? "Logga ut" : "Logga in"}</NavLinkLabel>
              )}
            </NavLink>
          </NavLinkContainer>
          <NavDivider />
          <NavTheme $isOpen={sidebarOpen}>
            {theme === "dark" && <SunIcon onClick={handleThemeChange} />}
            {theme === "light" && <MoonIcon onClick={handleThemeChange} />}
          </NavTheme>
        </Navbar>
      )}
    </>
   
  );
}