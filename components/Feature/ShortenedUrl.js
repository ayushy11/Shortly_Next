import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Box } from "../library";
import { CopyToClipboard } from "react-copy-to-clipboard";

const OriginalLink = styled.p`
  color: #3b3054;
  font-size: 1.3rem;
  margin: 0;
  padding: 15px 15px 10px 15px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 700px) {
    border-bottom: none;
    padding: 0;
  }
`;

const ShortenedLink = styled.p`
  background-color: #fff;
  border: none;
  color: #2acfcf;
  font-size: 1.3rem;
  margin: 10px;
  padding: 15px;
`;

const CopyButton = styled.button`
  background-color: #2acfcf;
  border: none;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  width: 92%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
  }

  @media only screen and (min-width: 700px) {
    min-width: 120px;
    padding: 8px 10px;
    margin-top: 20px;
    width: 100%;
  }
`;

function ShortenedUrl({ originalUrl, shortenedUrl }) {
  const [copySuccess, setCopySuccess] = useState("Copy");
  const copyLink = useRef(null);

  function copyToClipboard() {
    setCopySuccess("Copied!");
    copyLink.current.classList.add("copied");
  }

  return (
    <Box
      border="2px solid blue"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems={{ sm: "center" }}
      justifyContent={{ sm: "space-between" }}
      mx="auto"
      my={{ xs: "1rem", sm: "10px" }}
      borderRadius="5px"
      maxWidth="1034px"
      padding={{ sm: "0.1rem 2.5%" }}
    >
      <OriginalLink>{originalUrl}</OriginalLink>

      <Box
        border="2px solid grey"
        display={{ sm: "flex" }}
        align-items={{ sm: "center" }}
        flex-direction={{ sm: "row" }}
      >
        <ShortenedLink>{shortenedUrl}</ShortenedLink>
        <Box>
          <CopyToClipboard text={shortenedUrl} onCopy={() => copyToClipboard()}>
            <CopyButton ref={copyLink}>{copySuccess}</CopyButton>
          </CopyToClipboard>
        </Box>
      </Box>
    </Box>
  );
}

export default ShortenedUrl;
