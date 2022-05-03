import React from "react";
import Resume from "../Images/Resume.pdf";
import Download from "../Images/download.png";

export default function WorkHistory() {
  return (
    <main>
      <h1 className="workTitle">Skills</h1>
      <ul className="listItems">
        <li>
          <span className="listDec">| </span>JavaScript
        </li>
        <li>
          <span className="listDec">| </span>React
        </li>
        <li>
          <span className="listDec">| </span>HTML & CSS
        </li>
        <li>
          <span className="listDec">| </span>Git
        </li>
        <li>
          <span className="listDec">| </span>MongoDB
        </li>
        <li>
          <span className="listDec">| </span>Express
        </li>
        <li>
          <span className="listDec">| </span>Node.js
        </li>
        <li>
          <span className="listDec">| </span>REST APIs
        </li>
        <li>
        <a id='download' href={Resume} download="SadieSouthworthResume">
          <img src={Download} width="20px" style={{marginRight:'10px'}} />
          Download Resume
        </a>
        </li>
      </ul>
    </main>
  );
}
