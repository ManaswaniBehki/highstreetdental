import React, { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navbar>
        
      </Navbar>
      
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default App;
