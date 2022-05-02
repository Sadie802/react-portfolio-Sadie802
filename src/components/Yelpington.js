import React from "react";
import YelpVideo from "../Images/YelpVideo.mov";
import Logo from "../Images/Logo.jpg";

export default function Yelpington() {
  return (
    <div>
      <a href="/">
        <img id="logo" src={Logo} width="70rem" />
      </a>
      <h1 id="adminTitle">Yelpington</h1>
      <p id="adminDescription">
        This project was completed for my Software Development Bootcamp. It is an online directory of restaurants in the city I live in. It utilizes a Leaflet map that zooms into the restaurants location that you choose.
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
          <li>
            <span className="listDec">| </span>Leaflet
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
        </ul>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <video src={YelpVideo} width="100%" controls />
      </div>
      <h3 className="probAndSol">Problems I Encountered</h3>
      <p className="moreInfo">
        For this project, I dynamically rendered each restaurant's information depending on the url parameters. At first, I was running into issues on the server with targeting the url parameter. After some trial and error, I was able to create a function that checks if the url param/id matches any of the Id's in my JSON file. If it does, my server sends all of the information pertaining to that restaurant to the front end where it's displayed in a styled format.
      </p>

      <p className='moreInfo'>I also struggled with passing props to the Leaflet map to change where it is centered. The map is it's own component, so in order to re-center the map depending on the chosen restaurant, I had to pass the longitute and latitude of chosen restaurant to the map. These values were listed as their own pieces of data. I had to push these values into an array (which is the format that Leaflet acceps long and lat values) and force reload the page each time the URL changes (each time a new restaurant is chosen). After applying that logic, the map re-centered upon restaurant change. </p>
      <h3 className="probAndSol">In the future..</h3>
      <p className="moreInfo">
        I plan to continously update my projects. For Yelpington, I plan to update the search functionality to sanitize user input and add error handling to searching and fetching data. I would also like to add a space for people to leave comments/reviews about reach restaurant. To do so, I need to utilize a cloud database (Mongo Atlas) which will save entries from the review form and display them throughout sessions.
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
          href="https://github.com/Sadie802/yelpington-Sadie802"
          target="_blank"
          style={{ color: "rgb(78, 78, 78)" }}
        >
          <h5 id="code">View Repository</h5>
        </a>
      </div>
    </div>
  );
}
