import React, { useRef } from "react";
import { Box, Image, PrimaryButton, Button } from "../library";
import styled from "styled-components";

const Navlink = styled.a`
  padding: " 0 2.25rem 0 0";
  &:link,
  &:visited {
    color: #ffffff;
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: #3b3054;
    text-decoration: none;
  }
  &:last-of-type {
    padding: 0;
  }
  @media only screen and (min-width: 700px) {
    &:link,
    &:visited {
      color: #9e9aa7;
      text-decoration: none;
    }
  }
`;

function Menu() {
  const menuVisible = useRef("");

  const showMenu = (e) => {
    menuVisible.current.classList.toggle("visible");
  };

  return (
    <>
      <Box
        ref={menuVisible}
        display={{ xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" }}
        alignItems={{ sm: "center" }}
        justifyContent={{ sm: "space-between" }}
        width={{ xs: "90%", sm: "100%" }}
        position={{ xs: "absolute", sm: "static" }}
        top={{ xs: "80px" }}
        left={{ xs: "0px" }}
        zIndex="1"
        backgroundColor={{ xs: "primaryDark", sm: "white" }}
        borderRadius="10px"
        margin={{ xs: "0 5%" }}
        textAlign={{ xs: "center" }}
        marginLeft={{ sm: "5rem" }}
        // border="2px solid aqua"
      >
        <Box
          display={{ sm: "flex" }}
          alignItems={{ sm: "center" }}
          color={{ xs: "primaryLight", sm: "gray" }}
          fontSize={{ xs: "1.7rem", sm: "1.2rem" }}
          fontWeight="500"
          margin={{ xs: "2rem 0", sm: "0" }}
          padding={{ sm: "0" }}
          listStyleType={{ xs: "none" }}
        >
          <Box ml="1rem" p="1rem">
            <Navlink href="/pricing">Features</Navlink>
          </Box>
          <Box ml="1rem" p="1rem">
            <Navlink href="/pricing">Pricing</Navlink>
          </Box>
          <Box ml="1rem" p="1rem">
            <Navlink href="/pricing">Resources</Navlink>
          </Box>
        </Box>

        <Box
          display={{ sm: "none" }}
          backgroundColor="gray"
          height="1px"
          margin="0 auto"
          width="80%"
        />

        <Box
          display={{ sm: "flex" }}
          alignItems={{ sm: "center" }}
          color={{ xs: "primaryLight", sm: "gray" }}
          fontSize={{ xs: "1.7rem", sm: "1.2rem" }}
          fontWeight="500"
          margin={{ xs: "2rem 0", sm: "0" }}
          padding={{ sm: "0" }}
          listStyleType={{ xs: "none" }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ xs: "column", sm: "row" }}
            ml={{ xs: "1rem" }}
            p="1rem"
          >
            <Navlink href="/pricing">Login</Navlink>
          </Box>
          <Box
            mr={{ sm: "1rem" }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ xs: "column", sm: "row" }}
            ml={{ xs: "1rem" }}
            p="1rem"
          >
            {/* <SignUpButton>Sign Up</SignUpButton> */}
            <PrimaryButton
              width={{ xs: "85%", sm: "100%" }}
              padding={{ xs: "1.2rem 3rem", sm: "0.8rem 1rem" }}
              height={{ sm: "60%" }}
              fontSize={{ xs: "1.6rem", sm: "1.15rem" }}
            >
              Sign Up
            </PrimaryButton>
          </Box>
        </Box>
      </Box>

      <Button
        onClick={showMenu}
        backgroundColor="white"
        color="gray"
        cursor="pointer"        
        margin="-10px 0 0 0"
        padding="0 10px"
        text-align="center"
        border="none"
        display={{ sm: "none" }}
        fontSize="2rem"
      >
        ☰
      </Button>
    </>
  );
}

export default Menu;
