import React from "react";
import Navbar from "./components/Navbar";
import Highlight from "./components/Highlight";
import data from "./data";
import "./App.css";

function App() {
  const info = data.map((data) => {
    return (
      <Highlight
        key={data.id}
        {...data}
        // comments
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div className="container">{info}</div>
    </div>
  );
}

export default App;
