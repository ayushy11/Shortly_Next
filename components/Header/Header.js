import React from "react";
import styled from "styled-components";
import { HeaderBox, Box, Image, Flex, Container } from "../library";
import { css, useTheme } from "styled-components";
import Menu from "./Menu";

function Header() {
  const theme = useTheme();

  return (
    <Container
      width="82.5%"
      height={{ xs: "5rem", sm: "8rem" }}
      alignItems="center"
      justifyContent="space-between"
      // px="5.25rem"
      display="flex"
      // border="2px solid black"
      border="none"
    >
      <Image
        // border="2px solid"
        background="url('/images/logo.svg')"
        // backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="50px"
        width="150px"
        outline="none"
        border="none"
        // marginTop={{lg:2}}
        // css={css`
        //   margin: 0;
        //   border: 2px solid black;

        //   @media only screen and (min-width: '1024px') {
        //     margin-top: 5px;
        //   }
        // `}
      />

      <Menu />
    </Container>
  );
}

export default Header;
