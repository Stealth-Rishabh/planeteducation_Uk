import React from "react";
import Header from "./components/Header";
import Landing from "./app/landing/Landing";
import heroBg from "./assets/hero-bg.png";
const App = () => {
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
        <Landing />
      </div>
    </>
  );
};

export default App;
