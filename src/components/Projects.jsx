import React from "react";
import GuessTheNumber from "../Images/GuessTheNumber.png";
import ReactChat from "../Images/ReactChat.png";
import AdminPhoto from "../Images/Admin.png";
import yelpington from "../Images/Yelpington.png";

export default function Projects() {
  return (
    <main>
      <div>
        <h1 id="projectTitle">My Projects</h1>
        <div className="projects">
          <section className='projectSection'>
            <a href="/AdminPortal">
              <img className="projectImg" src={AdminPhoto} width="90%" />
            </a>
            <h3 className="projectName">Admin Portal</h3>
            <p className="description">
              A custom built admin portal for a local non-profit.
            </p>
            <a className="projectLink" href="/AdminPortal">
              View Project &rsaquo;
            </a>
          </section>
          <section className='projectSection'>
            <a href="/Yelpington">
              <img className="projectImg" src={yelpington} width="90%" />
            </a>
            <h3 className="projectName">Yelpington</h3>
            <p>
              Website used to view different restaurants in Burlington Vermont
            </p>
            <a className="projectLink" href="/Yelpington">
              View Project &rsaquo;
            </a>
          </section>
          <section className='projectSection'>
            <a href="/ReactChat">
              <img
                className="projectImg"
                src={ReactChat}
                alt="photo of react chat webpage"
                width="90%"
              />
            </a>
            <h3 className="projectName">React Chat</h3>
            <p className="description">
              Online chatroom created using the MERN stack.
            </p>
            <a className="projectLink" href="/ReactChat">
              View Project &rsaquo;
            </a>
          </section>
          <section className='projectSection'>
            <a href="/GuessTheNumber">
              <img
                className="projectImg"
                src={GuessTheNumber}
                alt="photo of guess the number project in terminal"
                width="90%"
              />
            </a>
            <h3 className="projectName">Guess The Number</h3>
            <p className="description">
              A game played in the terminal using the Binary Search Algorithm to
              guess a players "secret number".
            </p>
            <a className="projectLink" href="/GuessTheNumber">
              View Project &rsaquo;
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
