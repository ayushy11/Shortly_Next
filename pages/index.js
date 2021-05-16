import React, { useState } from "react";
import Layout from "../components/Layout";
import { css, useTheme } from "styled-components";
import Header from "../components/Header/Header";
import Hero from "../components/Homepage/Hero";
import Feature from "../components/Feature/Feature";

export default function Home() {
  const theme = useTheme();

  return (
    <Layout title="Shortly">
      <Header />
      <Hero />
      <Feature />
    </Layout>
  );
}
