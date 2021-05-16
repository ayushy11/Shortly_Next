import React, { useState } from "react";
import styled from "styled-components";
import { Box, Image, Flex, Container } from "../library";
import { css, useTheme } from "styled-components";
import axios from "axios";
import ShortenedUrl from "./ShortenedUrl";

const ShortenerForm = styled.form`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    /* align-items: top; */
    margin: 0 5%;
  }
`;

const ShortenerInput = styled.input`
  border: none;
  text-decoration: none;
  outline: none;
  border-radius: 5px;
  color: #3b3054;
  font-size: 1.25rem;
  font-weight: 550;
  margin: 1rem;
  padding: 0.8rem;
  width: 90%;

  :focus {
    transition: box-shadow 0.2s ease-in;
    box-shadow: 1px 0px 0px 6px rgb(133, 108, 192);
  }

  @media only screen and (min-width: 700px) {
    margin: 0;
    width: 100%;
  }
`;

const ShortenerButton = styled.button`
  background-color: #2acfcf;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 1rem;
  padding: 0.8rem;
  width: 90%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
  }

  :focus {
    transition: box-shadow 0.2s ease-in;
    box-shadow: 1px 0px 0px 6px #a6eded;
  }

  @media only screen and (min-width: 700px) {
    margin-left: 1.9rem;
    margin-top: 0;
    width: 80%;
    height: 100%;
  }
`;

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
        border="2px solid orange"
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
        <ShortenerForm>
          <Box
            border="2px solid white"
            width="100%"
            m="0"
            p="0"
            height={{ sm: "50px" }}
          >
            <ShortenerInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="shortenerUrl"
              type="text"
              placeholder="Shorten a link here..."
            />
          </Box>
          <Box
            width={{ xs: "100%", sm: "35%" }}
            height={{ sm: "50px" }}
            border="2px solid greenyellow"
          >
            <ShortenerButton type="submit" onClick={handleButton}>
              Shorten It!
            </ShortenerButton>
          </Box>
        </ShortenerForm>
      </Box>
      <Box
        border="2px solid purple"
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
