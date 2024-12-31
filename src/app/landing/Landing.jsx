import React from "react";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import About from "./About";
import heroBg from "../../assets/hero-bg.png";

const Landing = () => {
  return (
    <>
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <HeroSection />
      </div>
      <About />
    </>
  );
};

export default Landing;
