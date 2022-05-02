import React from "react";
import AdminVideo from "../Images/AdminVideo.mov";
import Logo from "../Images/Logo.jpg";

export default function AdminPortal() {
  return (
    <div>
      <a href="/home">
        <img id="logo" src={Logo} width="70rem" />
      </a>
      <h1 id="adminTitle">Admin Portal</h1>
      <p id="adminDescription">
        This project was completed for my Capstone project at the end of my
        Software Development Bootcamp. I developed it alongside my teammates,{" "}
        <a
          className="linkedInLink"
          href="https://www.linkedin.com/in/dave-andrew-bailey/"
        >
          Dave Bailey
        </a>{" "}
        and{" "}
        <a
          className="linkedInLink"
          href="https://www.linkedin.com/in/ryan-garrand/"
        >
          Ryan Garrand
        </a>
        . It is an admin portal built for a local non-profit called Hearts You
        Hold.
      </p>
      <p id="hyhQuote">
        "Hearts You Hold is a non-profit organization whose mission is to
        support migrants, immigrants, and refugees. Donors visit the website to
        view specific requests and choose where they would like their donation
        to go."
      </p>
      <div id="help">
        <h5 id="stack">Stack</h5>
      </div>
      <div id="stackList">
        <ul style={{ listStyle: "none" }}>
          <span style={{ fontWeight: "bold" }}>Front End</span>
          <li>
            <span className="listDec">| </span>Material UI
          </li>
          <li>
            <span className="listDec">| </span>React
          </li>
          <li>
            <span className="listDec">| </span>React Bootstrap
          </li>
          <li>
            <span className="listDec">| </span>Reactstrap
          </li>
          <li>
            <span className="listDec">| </span>Userfront
          </li>
        </ul>
        <ul style={{ listStyle: "none" }}>
          <span style={{ fontWeight: "bold" }}>Back End</span>
          <li>
            <span className="listDec">| </span>MongoDB Atlas
          </li>
          <li>
            <span className="listDec">| </span>Node.js
          </li>
          <li>
            <span className="listDec">| </span>Express.js
          </li>
        </ul>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <video src={AdminVideo} width="100%" controls />
      </div>
      <h3 className="probAndSol">The Problem</h3>
      <p className="moreInfo">
        The current Hearts You Hold website only allowed for one item to be
        donated at a time. If a donor wanted to fund multiple requests, they
        would have to go through the check-out process multiple times.
      </p>
      <h3 className="probAndSol">The Solution</h3>
      <p className="moreInfo">
        My team implemented a new E-Commerce platform. We tore down the
        previously existing website and rebuilt it to incoorporate a "shopping
        cart" (or a donation bin). In order for this new platform to function,
        we were also tasked with creating a new content management system/admin
        portal.
      </p>
      <p className="moreInfo">
        I built this admin portal from the ground up using only styling
        libraries and a log-in API called Userfront. It is a full stack
        application consisting of a React front end and a backend/server
        utilizing MongoDB, Express, and NodeJS.{" "}
      </p>
      <div id="footNotes">
        <a
          href="https://github.com/jeff-priest/hearts-you-hold-capstone"
          target="_blank"
          style={{ color: "rgb(78, 78, 78)" }}
        >
          <h5>View the public website</h5>
        </a>
        <a
          href="https://github.com/Sadie802?tab=repositories"
          target="_blank"
          style={{ color: "rgb(78, 78, 78)" }}
        >
          <h5 id="code">View Repository</h5>
        </a>
      </div>
    </div>
  );
}
