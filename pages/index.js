import Head from "next/head";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Work from "../components/Work";

function Index() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default Index;
