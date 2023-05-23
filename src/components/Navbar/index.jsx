/** @format */
import React, { useState, useContext } from "react";
import { Wrapper, Left, Logo, Center, PageWrapper, Link } from "./styled";
import logo from "../../assets/icons/logo.svg";
import { data } from "../../utils/navbar";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Left>
        <Logo src={logo} />
      </Left>
      <Center>
        {data.map(({ title, pathname, id }) => {
          return (
            <PageWrapper key={id}>
              <Link to={pathname}>{title}</Link>
            </PageWrapper>
          );
        })}
      </Center>
    </Wrapper>
  );
};
export default Navbar;
