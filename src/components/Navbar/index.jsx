/** @format */
import React, { useState, useContext } from "react";
import { Wrapper, Left, Logo, Center, PageWrapper, Link } from "./styled";
import logo from "../../assets/icons/logo.svg";
import { data } from "../../utils/navbar";
import ProductContext from "../../context/Products";
import { AuthorizationData } from "../../context/Authrization";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [activeLogin, setActiveLogin] = useState("login");
  const [authedData, setAutheddata] = useContext(AuthorizationData);
  const [, setNavigateTo] = useContext(Navigator);
  const [productData] = useContext(ProductContext);
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
