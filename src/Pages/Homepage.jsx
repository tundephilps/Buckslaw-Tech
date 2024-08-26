import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Subscribe } from "../components/Subscribe";
import { Updates } from "../components/Updates";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Subscribe />
      <Stats />
      <Updates />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
