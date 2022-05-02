import React from "react";
import About from "./About";
import WorkHistory from "./WorkHistory";
import Projects from "./Projects";
import Contact from "./Contact";
import "../App.css";
import sadieMain from "../Images/SadieMain.png";
import Logo from "../Images/Logo.jpg";
import GitHubLogo from "../Images/GitHubLogo.png";
import InstaLogo from "../Images/InstaLogo.png";
import LinkedInLogo from "../Images/LinkedInLogo.png";
import spotifyLogo from "../Images/spotifyLogo.png";
import email from "../Images/email.png"

export default function Home() {
  return (
    <main>
        <section className="socialSectionHome">
            <a
              href="https://open.spotify.com/playlist/6gIucEupyli0hfFkpzJVvu"
              target="_blank"
            >
              <img className="socialImg" src={spotifyLogo} height="30px" />
            </a>
            <a
              href="https://www.linkedin.com/in/sadie-southworth-557902231"
              target="_blank"
            >
              <img className="socialImg" src={LinkedInLogo} height="30px" />
            </a>
            <a href="https://www.instagram.com/sadiee.ladyy/" target="_blank">
              <img className="socialImg" src={InstaLogo} height="30px" />
            </a>
            <a href="https://github.com/Sadie802" target="_blank">
              <img className="socialImg" src={GitHubLogo} height="30px" />
            </a>
            <a id='email' href="mailto:sadie.southworth@gmail.com"><img className="socialImg" src={email} height='30px'/></a>
          </section>
      <img id='logo' src={Logo} width="70rem" />
      <div id="title">
        <h1>Hi there, I'm <span style={{color:'black'}}>Sadie.</span></h1>
        <h1>
          Full Stack Developer with a special interest in <span style={{color:'#00bfff'}}>React Front End
          Development.</span>
        </h1>
      </div>
      <div id="homeImg">
        <img src={sadieMain} width="100%" />
      </div>
      <section id="aboutBlurb">
        <p>
          I am a dedicated Web/Software Developer with full-stack knowledge committed
          to problem solving and creating solutions in the least amount of time
          while maintaining thoroughness and thoughtfulness.
        </p>
        <p>
          A driven individual looking to bring my skills, knowledge, and
          enthusiasm for software development to a strong organization that
          values employee growth, continual learning, and professional
          advancement.
        </p>
      </section>
      <About />
      <WorkHistory />
      <Projects />
      <Contact />
    </main>
  );
}
