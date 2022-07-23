import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "../styles/main";

const Header = () => {
  return (
    <HeaderContainer className="">
      <h1>Farmacos MiSalud</h1>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/newProduct">Create new Product</NavLink>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
