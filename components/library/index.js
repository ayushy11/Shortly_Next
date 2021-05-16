import React from "react";
import Box from "./Box";
import HeaderBox from "./HeaderBox";

const Typography = (props) => {
  return (
    <Box as={props.as || "p"} {...props}>
      {props.children}
    </Box>
  );
};

const Image = (props) => {
  return (
    <Box as="img" {...props}>
      {props.children}
    </Box>
  );
};

const Flex = (props) => {
  return (
    <Box display="flex" {...props}>
      {props.children}
    </Box>
  );
};

const Button = (props) => {
  return (
    <Box as="button" {...props}>
      {props.children}
    </Box>
  );
};

const Container = (props) => {
  return (
    <Box max-width="1440px" m="0 auto" {...props}>
      {props.children}
    </Box>
  );
};

export { Box, HeaderBox, Typography, Button, Flex, Container, Image };
