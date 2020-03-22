import React from "react";
import Logo from "./wirvsviruslogo.png";
import "./styles.css";

const user = <h4>Anton WG</h4>;
const challenge = <h4>Der Boden ist Lava</h4>

const challenges = [
  {
    userPic: <img className="profile-pic"></img>,
    userName: 'Linda',
    challenge: <h4>Klopapiergymnastik</h4>,
    challengePic: <img className="challenge-pic"></img>
  }
]

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
      <div className="challenge-feed">
        <div className="profile-pic">{challenges[0].userPic}</div>
        <div className="user-info">{challenges[0].userName}</div>
        <div className="challenge">hat {challenges[0].challenge} gemeistert</div>
        <br/>
        <div className="challenge-pic">{challenges[0].challengePic}</div>
      </div>
    </div>
  );
}
