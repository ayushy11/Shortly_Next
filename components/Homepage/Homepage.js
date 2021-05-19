import React from "react";
import styled from "styled-components";
import {
  Container,
  Heading,
  Box,
  Image,
  Typography,
  PrimaryButton,
} from "../library";
import { css, useTheme } from "styled-components";
import Shortener from "./Shortener";

function Homepage() {
  const theme = useTheme();

  return (
    <>
      <Container
        display="flex"
        flexDirection={{ xs: "column", sm: "row-reverse" }}
        justifyContent="flex-end"
        color="white"
        // border="2px solid green"
        padding="2% 0"
        padding={{ xs: "30% 0", sm: "2% 0" }}
        width={{ sm: "82.5%" }}
        maxWidth={{ xs: "100%" }}
        marginBottom={{ sm: "250px" }}
        border="none"
      >
        <Image
          // border="2px solid red"
          border="none"          
          src="/images/illustration-working.svg"
          height={{xs:"300px",sm:"420px"}}
          width={{ xs: "400px", sm: "50%" }}
          // backgroundSize="cover"
          // backgroundPosition="center"
          // backgroundRepeat="no-repeat"
          minWidth={{xs:"200px"}}
          minHeight={{xs:"300px"}}
          position={{ sm: "absolute" }}
          right={{ xs: "0" }}
          marginTop={{ xs: "-100px",sm:"10px" }}          
        />
        <Box
          // border="2px solid blue"
          textAlign={{ xs: "center", sm: "left" }}
          width={{ xs: "100%", sm: "50%" }}
        >
          <Heading
            max-width="80%"
            margin={{ xs: "10px auto", sm: "1.5rem 0 0 0" }}
          >
            More than just shorter links
          </Heading>
          <Typography
            color="primaryLight"
            fontSize={{ xs: "1.8rem", sm: "1.3rem" }}
            fontWeight="500"
            lineHeight="1.5"
            maxWidth="520px"
            margin="1rem"
          >
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </Typography>
          <PrimaryButton
            fontSize={{xs:"1.8rem", sm:"1.5rem"}}
            margin="1rem auto 0 auto"
            padding="1rem 2rem"
          >
            Get Started
          </PrimaryButton>
        </Box>
      </Container>

      <Box
        bg="graybg"
        // bg="red"
        padding="8rem 5%"
        marginTop={{ xs: "", sm: "" }}
        height="800px"
      >
        <Shortener />
      </Box>
    </>
  );
}

export default Homepage;
