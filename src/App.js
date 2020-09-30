import React from "react";

import "./sass/main.css";
import Header from "./components/Header";
import TestGrid from "./components/TestGrid";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <TestGrid />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
