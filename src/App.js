import React from "react";

import "./sass/main.css";
import Header from "./components/Header";
import TestGrid from "./components/TestGrid";
import About from "./components/About";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <About />
        <Features />
      </main>
    </div>
  );
}

export default App;
