import React, { useRef } from "react";
import { HeaderBox, Box, Image, Button } from "../library";
import styled from "styled-components";

const Navlink = styled.a`
  padding: " 0 2.25rem 0 0";
  &:link,
  &:visited {
    color: #9e9aa7;
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
`;

const SignUpButton = styled.button`
  background-color: #2acfcf;
  border: none;
  border-radius: 5rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.5rem 2.8rem;
  width: 80%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #51dbdb;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }

  @media only screen and (min-width: 700px) {
    padding: 0.8rem 0.5rem;
    width: 80%;
    font-size: 1.15rem;
    height: 60%;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  background-color: #fff;
  /* border: 2px solid black; */
  color: #bfbfbf;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  margin: -10px 0 0 0;
  padding: 0 10px;
  text-align: center;
  outline: none;
  text-decoration: none;
  border: none;

  @media only screen and (min-width: 700px) {
    display: none;
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
        position={{xs: "absolute", sm: "static"}}
        top="80px"
        left="0px"
        background={{ xs: "primaryDark", sm: "white" }}
        width={{xs: "90%", sm: "100%"}}
        marginLeft="5rem"
        position="static"
        // border="2px solid aqua"
        borderRadius="10px"
        zIndex="1"
      >
        <Box
          display="flex"
          alignItems="center"
          color="primaryLight"
          fontSize="1.2rem"
          fontWeight="500"
          margin="0"
        >
          <Box ml="1rem">
            <Navlink href="/pricing">Features</Navlink>
          </Box>
          <Box ml="1rem">
            <Navlink href="/pricing">Pricing</Navlink>
          </Box>
          <Box ml="1rem">
            <Navlink href="/pricing">Resources</Navlink>
          </Box>
        </Box>

        <Box background-color="gray" height="1px" margin="0 auto" width="80%" />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          color="primaryLight"
          fontSize="1.2rem"
          fontWeight="500"
          margin="0"
          // border="1px solid black"
        >
          <Box
            mr="1rem"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Navlink href="/pricing">Login</Navlink>
          </Box>
          <Box
            width="140px"
            alignItems="center"
            // border="1px solid red"
            display="flex"
            justifyContent="center"
          >
            <SignUpButton>Sign Up</SignUpButton>
          </Box>
        </Box>
      </Box>
      <MenuButton onClick={showMenu}>☰</MenuButton>
    </>
  );
}

export default Menu;
