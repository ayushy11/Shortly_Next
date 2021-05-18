import React from "react";
import Box from "./Box";

const Typography = (props) => {
  return (
    <Box as={props.as || "p"} {...props}>
      {props.children}
    </Box>
  );
};

const Heading = (props) => {
  return (
    <Box
      as="h2"
      color="secondary"
      fontSize={{ xs: "4rem", sm: "3rem", md: "4rem" }}
      fontWeight="700"
      textAlign={{ xs: "center", sm: "left" }}
      {...props}
    >
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

const Form = (props) => {
  return (
    <Box
      as="form"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent={{ xs: "center", sm: "space-between" }}
      outline="none"
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Input = (props) => {
  return (
    <Box
      as="input"
      border="none"
      textDecoration="none"
      outline="none"
      borderRadius="5px"
      color="primaryDark"
      fontSize="1.25rem"
      fontWeight="550"
      {...props}
    >
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

const PrimaryButton = (props) => {
  return (
    <Box
      as="button"
      backgroundColor="primary"
      borderRadius="5rem"
      fontWeight="700"
      color="white"
      textAlign="center"
      border="none"
      {...props}
    >
      {props.children}
    </Box>
  );
};

const SecondaryButton = (props) => {
  return (
    <Box
      as="button"
      backgroundColor="primary"
      border="none"
      borderRadius="5px"
      color="white"
      fontWeight="700"
      textAlign="center"
      fontSize="1.3rem"
      {...props}
    >
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

export {
  Box,
  Typography,
  Heading,
  Button,
  PrimaryButton,
  SecondaryButton,
  Flex,
  Container,
  Image,
  Form,
  Input,
};
