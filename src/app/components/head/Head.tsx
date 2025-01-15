import {
  Bar,
  NavBarToggle,
  Hamburger,
  MainNav,
  NavLi,
  NavLink,
} from "@/app/styles/navigation/wrapper";

export const Head = () => {
  return (
    <Bar>
      <NavBarToggle>
        <Hamburger />
      </NavBarToggle>
      <MainNav>
        <NavLi>
          <NavLink href="#">Main</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="#">Redirects</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="#">Login</NavLink>
        </NavLi>
      </MainNav>
    </Bar>
  );
};
