import React from "react";
import styled from "styled-components";
import { Container, Box, Image, Typography } from "../library";
import { css, useTheme } from "styled-components";

const HeroHeader = styled.h2`
  color: #35323e;
  font-size: 4rem;
  font-weight: 700;
  margin: 10px auto;
  max-width: 80%;
  text-align: center;
  /* border: 2px solid orange; */

  @media only screen and (min-width: 700px) {
    font-size: 3rem;
    margin: 1.5rem 0 0 0;
    text-align: left;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 4rem;
    font-weight: 700;
  }
`;
const HeroButton = styled.button`
  background-color: #2acfcf;
  border: none;
  border-radius: 5rem;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 1rem auto 0 auto;
  padding: 1rem 2rem;
  text-align: center;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }
`;

function Hero() {
  const theme = useTheme();

  return (
    <Container
      display="flex"
      flexDirection={{ xs: "column", sm: "row-reverse" }}
      justifyContent="flex-end"
      color="white"
      // border="2px solid green"
      padding="2% 0"
      padding={{xs:"30% 0", sm:"2% 0"}}
      width={{sm: "82.5%"}}
      maxWidth={{ xs: "100%" }}
      marginBottom={{sm: "250px"}}
      border="none"
    >
      <Image
        // border="2px solid red"
        border="none"
        background="url('/images/illustration-working.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="400px"
        width={{xs: "100%", sm: "50%"}}
        position={{ sm: "absolute" }}
        right={{xs: "0"}}
      />
      <Box
        // border="2px solid blue"
        textAlign={{ xs: "center", sm: "left" }}
        width={{xs: "100%", sm: "50%"}}
      >
        <HeroHeader>More than just shorter links</HeroHeader>
        <Typography
          color="primaryLight"
          fontSize={{xs:"1.8rem", sm:"1.3rem"}}
          fontWeight="500"
          lineHeight="1.5"
          maxWidth="520px"
          margin="1rem"
        >
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Typography>
        <HeroButton>Get Started</HeroButton>
      </Box>
    </Container>
  );
}

export default Hero;
