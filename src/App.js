// import React, { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Services from "./components/services";

const App = () => {
  return (
    <div>
      <Navbar>
        
      </Navbar>
      
      <Home />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default App;
