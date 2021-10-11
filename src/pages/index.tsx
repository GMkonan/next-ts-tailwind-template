import React from "react";
import Hero from "src/common/components/Hero";
import NavBar from "src/common/components/NavBar";
import Layout from "src/layouts/Layout";
import tw, { css } from "twin.macro";

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <Hero />
    </Layout>
  );
};

export default Home;
