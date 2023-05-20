/** @format */
import React from "react";
import { Wrapper, Left, Logo, Center, PageWrapper, Link } from "./styled";
import logo from "../../assets/icons/logo.svg";
import { data } from "../../utils/navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <Left>
        <Logo src={logo} />
      </Left>
      <Center>
        {data.map(({ title, pathname, id }) => {
          return (
            <PageWrapper>
              <Link>
                to-{pathname}
                {title}
              </Link>
            </PageWrapper>
          );
        })}
      </Center>
    </Wrapper>
  );
};
export default Navbar;
