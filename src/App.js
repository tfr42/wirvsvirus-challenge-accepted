import React from "react";
import Logo from "./wirvsviruslogo.png"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello, Challenge Accepted!</h1>
      <h2>Some magic things will happen soon!</h2>
      <img src={Logo} alt="wirvsvirus logo"/>
    </div>
  );
}
