import React from "react";
import Logo from "./wirvsviruslogo.png";
import "./styles.css";

const user = <h4>Anton WG</h4>;
const challenge = <h4>Der Boden ist Lava</h4>

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="profile-pic" />
        <div className="user-info">{user}</div>
        <div className="challenge">fordert dich zu {challenge} heraus.</div>
      </div>
      <h1>Hello, Challenge Accepted!</h1>
      <h2>Some magic things will happen soon!</h2>
      <img src={Logo} alt="wirvsvirus logo"/>
    </div>
  );
}
