import React from 'react';
import styled from 'styled-components';
import Shortener from './Shortener';
import { Box, Image, Flex, Container } from "../library";
import { css, useTheme } from "styled-components";

function Feature() {
    return (
        <Box
            bg="graybg" 
            // bg="red"         
            padding= "8rem 5%"
            marginTop={{xs:"",sm:""}}
            height="800px"
        >
            <Shortener />
        </Box>
    )
}

export default Feature
