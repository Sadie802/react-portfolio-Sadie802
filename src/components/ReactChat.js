import React from "react";
import ChatVideo from "../Images/ReactChatVid.mov";
import Logo from "../Images/Logo.jpg";

export default function Yelpington() {
  return (
    <div>
      <a href="/">
        <img id="logo" src={Logo} width="70rem" />
      </a>
      <h1 id="adminTitle">React Chat</h1>
      <p id="adminDescription">
        This project was completed for my Software Development Bootcamp. It is
        an online chatroom built using a React front end and MERN stack backend.
        I completed this project with{" "}
        <a
          className="linkedInLink"
          href="https://www.linkedin.com/in/dave-andrew-bailey/"
        >
          Dave Bailey
        </a>
        .
      </p>
      <div id="help">
        <h5 id="stack">Stack</h5>
      </div>
      <div id="stackList">
        <ul style={{ listStyle: "none" }}>
          <span style={{ fontWeight: "bold" }}>Front End</span>
          <li>
            <span className="listDec">| </span>React
          </li>
        </ul>
        <ul style={{ listStyle: "none" }}>
          <span style={{ fontWeight: "bold" }}>Back End</span>
          <li>
            <span className="listDec">| </span>Node.js
          </li>
          <li>
            <span className="listDec">| </span>Express.js
          </li>
          <li>
            <span className="listDec">| </span>MongoDB
          </li>
        </ul>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <video src={ChatVideo} width="100%" controls />
      </div>
      <h3 className="probAndSol">Problems I Encountered</h3>
      <p className="moreInfo">
        For the most part, this project went pretty smooth. Towards the end as we were testing, we noticed that some of our messages from previous chat rooms were showing up in the current chat room. After hours of debugging, we realized that, because we were rendering the chat messages in list format, each list item needed its own unique key. Once added, our application knew which messages belonged where, and stopped rendering old chat room messages in new chat rooms. 
      </p>
      <h3 className="probAndSol">In the future..</h3>
      <p className="moreInfo">
        Right now there is a bug with sending a message. Sometimes you have to click the send button twice, and sometimes you dont 🤷‍♀️. Although it's not a bug that causes the application to not run, it's still a hassle and not as smooth as I'd like it to be. I plan to go back through my code and figure out this issue. 
      </p>
      <p className="moreInfo">
        I'd also like to connect our chatroom to Mongo Atlas so messages are displayed throughout sessions. I want to add the ability to clear or delete all messages and I'd also like to add the functionality for someone adding their own chat room! 
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
          href="https://github.com/burlingtoncodeacademy-students/react-chat-sadie-dave"
          target="_blank"
          style={{ color: "rgb(78, 78, 78)" }}
        >
          <h5 id="code">View Repository</h5>
        </a>
      </div>
    </div>
  );
}
