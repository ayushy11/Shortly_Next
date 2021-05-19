import React from "react";
import styled from "styled-components";
import { Box, Image, Flex, Container } from "../library";
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
        src='/images/logo.svg'
        // backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height={{xs:"40px",sm:"40px"}}
        width={{xs:"150px",sm:"170px"}}
        margin={{xs:"-10px",sm:"2px"}}      
      />

      <Menu />
    </Container>
  );
}

export default Header;
