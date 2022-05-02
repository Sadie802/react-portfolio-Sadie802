import React from "react";
import GuessPic from "../Images/GuessTheNumber.png";
import Logo from "../Images/Logo.jpg";

export default function GuessNumber() {
  return (
    <div>
      <a href="/home">
        <img id="logo" src={Logo} width="70rem" />
      </a>
      <h1 id="adminTitle">Guess The Number</h1>
      <p id="adminDescription">
        This was my first ever project in my Software Development Bootcamp. It's
        a number guessing game played in the computers terminal. It required me
        to utilize the Binary Search Algorithm. This game can be played in two
        different modes: the first being the computer guesses the users secret
        number, and the second being the user guesses the computers secret
        number. Each game mode takes no more than 7 guesses to guess correctly.
        A perfect example of the Binary Search Algorithm.
      </p>
      <div id="help">
        <h5 id="stack">Stack</h5>
      </div>
      <div id="stackList">
        <ul style={{ listStyle: "none" }}>
          <li>
            <span className="listDec">| </span>Vanilla Javascript
          </li>
        </ul>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <img src={GuessPic} width="100%" />
      </div>
      <h3 className="probAndSol">Problems I Encountered</h3>
      <p className="moreInfo">
        As this was my first ever project, I struggled quite a bit.
        Understanding the logic of Promises was difficult for me. My game failed
        to run if a user didn't type in exactly what my code was expecting. I
        didn't have any error handling or input sanitization implemented. After
        submitting the project, I came back to it a few weeks later after I had
        sharpened my skills and been in the bootcamp a bit longer. I was able to
        add input sanitization and logic that allows a user to pick which game
        mode they would like to play, and also gives the user the ability to set
        their own maximum number.
      </p>
      <h3 className="probAndSol">In the future..</h3>
      <p className="moreInfo">
        I would love to get this game hosted live on the internet in a "mock"
        terminal. It would be a fun way to show what the game does without
        someone needed to clone the repository and run it on their own computer.
      </p>
      <div id="footNotes">
        {/* <a
          href="https://github.com/jeff-priest/hearts-you-hold-capstone"
          target="_blank"
          style={{ color: "rgb(78, 78, 78)" }}
        >
          <h5>View the public website</h5>
        </a> */}
        <a
          href="https://github.com/Sadie802/guess-the-number-Sadie802"
          target="_blank"
          style={{ color: "rgb(78, 78, 78)" }}
        >
          <h5 id="code">View Repository</h5>
        </a>
      </div>
    </div>
  );
}
