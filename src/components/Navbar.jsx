import React from "react";
import "../App.css";
import globe from "../assets/globe-white.svg";

export default function Navbar() {
  return (
    <nav>
      <img src={globe} />
      <h1>my travel journal</h1>
    </nav>
  );
}
