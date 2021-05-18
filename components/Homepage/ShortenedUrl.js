import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  Box,
  Image,
  Flex,
  Container,
  SecondaryButton,
  Typography,
} from "../library";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ShortenedUrl({ originalUrl, shortenedUrl }) {
  const [copySuccess, setCopySuccess] = useState("Copy");
  const copyLink = useRef(null);

  function copyToClipboard() {
    setCopySuccess("Copied!");
    copyLink?.current?.classList?.add("copied");
  }

  return (
    <Box
      // border="2px solid blue"
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
      <Typography
        color="primaryDark"
        fontSize="1.3rem"
        padding="15px 15px 10px 15px"
        fontWeight="600"
        // overflow="scroll"
        // msOverflowStyle="none"
        // scrollbarWidth="none"
        // webkitScrollbar="none"
        borderBottom="none"
      >
        {originalUrl}
      </Typography>

      <Box
        // border="2px solid grey"
        display={{ sm: "flex" }}
        align-items={{ sm: "center" }}
        flex-direction={{ sm: "row" }}
      >
        <Typography
          background-color="white"
          border="none"
          color="primary"
          fontSize="1.3rem"
          margin="10px"
          padding="15px"
          fontWeight="600"
        >
          {shortenedUrl}
        </Typography>

        <Box>
          <CopyToClipboard text={shortenedUrl} onCopy={() => copyToClipboard()}>
            <SecondaryButton
              ref={copyLink}
              width={{ xs: "92%", sm: "100%" }}
              minWidth={{ sm: "120px" }}
              padding={{ xs: "10px", sm: "8px 10px" }}
              display="block"
              margin={{ xs: "0 auto" }}
              marginTop={{ sm: "20px" }}
            >
              {copySuccess}
            </SecondaryButton>
          </CopyToClipboard>
        </Box>
      </Box>
    </Box>
  );
}

export default ShortenedUrl;
