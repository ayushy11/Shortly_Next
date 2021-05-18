import React, { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Image,
  Flex,
  Container,
  SecondaryButton,
  Form,
  Input,
} from "../library";
import { css, useTheme } from "styled-components";
import axios from "axios";
import ShortenedUrl from "./ShortenedUrl";

function Shortener() {
  const baseUrl = "https://api.shrtco.de/v2";
  const [input, setInput] = useState("");
  const [links, setLinks] = useState([]);

  const handleButton = async (event) => {
    event.preventDefault();
    async function fetchData() {
      const request = await axios.get(`${baseUrl}/shorten?url=${input}`);
      // console.log(request);
      const results = request.data.result;
      setLinks((oldstate) => [results, ...oldstate]);
      return request;
    }
    fetchData();
    setInput("");
  };
  console.log(links);

  return (
    <>
      <Box
        // border="2px solid orange"
        bg="primaryDark"
        backgroundImage={{
          xs: "url('/images/bg-shorten-mobile.svg')",
          sm: "url('/images/bg-shorten-desktop.svg')",
        }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        background-position={{ xs: "top right", sm: "top left" }}
        height="168px"
        max-width="1034px"
        margin={{ xs: "-183px auto", sm: "-211px auto" }}
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        justifyContent=" center"
      >
        <Form margin={{ sm: "0 5%" }}>
          <Box
            // border="2px solid white"
            width="100%"
            m="0"
            p="0"
            height={{ sm: "50px" }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="shortenerUrl"
              type="text"
              placeholder="Shorten a link here..."
              margin={{ xs: "1rem", sm: "0" }}
              width={{ xs: "90%", sm: "100%" }}
              padding={{ xs: "0.8rem" }}
            />
          </Box>
          <Box
            width={{ xs: "100%", sm: "35%" }}
            height={{ sm: "50px" }}
            // border="2px solid greenyellow"
          >
            <SecondaryButton
              type="submit"
              onClick={handleButton}
              width={{ xs: "90%", sm: "80%" }}
              height={{ sm: "100%" }}
              padding="0.8rem"
              margin={{ xs: "1rem" }}
              marginTop={{ sm: "0" }}
              marginLeft={{ sm: "1.9rem" }}
            >
              Shorten It!
            </SecondaryButton>
          </Box>
        </Form>
      </Box>
      <Box
        // border="2px solid purple"
        padding={{ sm: "1rem" }}
        marginTop="18rem"
        marginBottom="-210px"
        maxHeight="600px"
      >
        {links != null &&
          links.map((link) => (
            <ShortenedUrl
              key={link.code}
              originalUrl={link.original_link}
              shortenedUrl={link.full_short_link}
            />
          ))}
      </Box>
    </>
  );
}

export default Shortener;
