import React from "react";
import HEAD from "next/head";

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <HEAD>
        <title>{title}</title>
        <link rel="icon" href="/favicon2.png" />
      </HEAD>
      {children}
    </React.Fragment>
  );
};

export default Layout;