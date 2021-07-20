import "./styles.css";
import bg from "/src/bg2.jpg";
import happy from "/src/happy.png";
import funny from "/src/funny.jpg";
import React, { useState } from "react";

// import {Route, Link, Switch} from "react-router-dom";

let dateValue = "";
let luckyNo = 0;
let happyImg = <img alt="happyImage" src={happy} width="100%" height="300px" />;
let funnyImg = <img alt="FunnyImg" src={funny} width="90%" height="300px" />;
export default function App() {
  const [result, setResult] = useState(" ", " ");

  function watchBtnHandler(e) {
    e.preventDefault(); //to prevent page from reloading

    let dateArray = dateValue.split("-");
    let sum = 0;

    dateArray.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });

    if (sum % Number(luckyNo) === 0) {
      setResult(["wow! You're lucky", happyImg]);
    } else {
      setResult(["Oops Not lucky Number! Try in next life 😂 ", funnyImg]);
    }
  }
  return (
    <div
      className="App"
      style={{
        maxWidth: "100vh",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="topic">
        <h1>
          {" "}
          <strong> Your Birthday</strong> <br />
          <span>
            {" "}
            <i> !! lucky or not !! </i>
          </span>{" "}
        </h1>

        <a href="#mainsec">
          {" "}
          <span>👇 check it out 👇</span>{" "}
        </a>
      </div>

      <section id="mainsec" className="main">
        <h2>Enter Birthdate and lucky number to continue..</h2>
        <hr />
        <form onSubmit={watchBtnHandler} className="mform">
          <lebel className="lebel">Enter your Birthdate-:</lebel>
          <input
            onChange={(e) => {
              dateValue = e.target.value;
            }}
            type="date"
          ></input>
          <lebel className="lebel">Enter yor lucky number-:</lebel>
          <input
            onChange={(e) => {
              luckyNo = e.target.value;
            }}
            type="number"
            placeholder="Your Lucky Number"
          ></input>
          <button className="lebel2" type="submit">
            Watch
          </button>
        </form>
        <div className="imgOutput">
          <div className="textOut">{result[0]}</div>
          <div>{result[1]}</div>
        </div>
        <footer className="foot"> only for fun</footer>
      </section>
    </div>
  );
}
