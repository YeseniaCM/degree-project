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
import { JSX, useContext, useState } from "react";
import { AiOutlineHome, AiOutlineLeft } from "react-icons/ai";
import { MdLogin, MdLogout } from "react-icons/md";
import { ThemeContext } from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import { TiArrowRepeat } from "react-icons/ti";

export const Navigation = () => {
  const router = useRouter();
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
    }
  ];

  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      router.push("/login");
    } else {
      setIsLoggedIn(true);
      router.push("/");
    }
  };

  const handleSideNav = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <Navbar $isOpen={sidebarOpen}>
      <NavbarButton $isOpen={sidebarOpen} onClick={handleSideNav}>
        <AiOutlineLeft />
      </NavbarButton>
      <NavLogo></NavLogo>

      {menuItems.map(({ icon, label, to }: Link) => (
        <NavLinkContainer key={label} $isActive={pathname === to}>
          <NavLink
            $isOpen={sidebarOpen}
            href={to}
            onClick={handleLinkClick}
            style={!sidebarOpen ? { width: "fit-content" } : {}}
          >
            <NavLinkIcon $isOpen={sidebarOpen}>{icon}</NavLinkIcon>
            {sidebarOpen && <NavLinkLabel>{label}</NavLinkLabel>}
          </NavLink>
        </NavLinkContainer>
      ))}

      <NavDivider />

      <NavLinkContainer $isActive={false}>
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
            <NavLinkLabel>{isLoggedIn ? "Logout" : "Login"}</NavLinkLabel>
          )}
        </NavLink>
      </NavLinkContainer>

      <NavDivider />

      <NavTheme $isOpen={sidebarOpen}>
        {theme === "dark" && <SunIcon onClick={handleThemeChange} />}
        {theme === "light" && <MoonIcon onClick={handleThemeChange} />}
      </NavTheme>
    </Navbar>
  );
};
