import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { HeaderContainer } from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="GitHub Blog" />
      </Link>
    </HeaderContainer>
  );
};
