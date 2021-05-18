import React, { useState } from "react";
import Layout from "../components/Layout";
import { css, useTheme } from "styled-components";
import Header from "../components/Header/Header";
import Homepage from "../components/Homepage/Homepage";

export default function Home() {
  const theme = useTheme();

  return (
    <Layout title="Shortly">
      <Header />
      <Homepage />      
    </Layout>
  );
}
