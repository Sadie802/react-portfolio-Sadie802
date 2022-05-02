import React from "react";
import GitHubLogo from "../Images/GitHubLogo.png";
import InstaLogo from "../Images/InstaLogo.png";
import LinkedInLogo from "../Images/LinkedInLogo.png";
import spotifyLogo from "../Images/spotifyLogo.png";
import email from "../Images/email.png"

export default function Contact() {
  return (
    <main>
      <div>
          <section className="socialSection">
            <a
              href="https://open.spotify.com/playlist/6gIucEupyli0hfFkpzJVvu"
              target="_blank"
            >
              <img src={spotifyLogo} height="50px" />
            </a>
            <a
              href="https://www.linkedin.com/in/sadie-southworth-557902231"
              target="_blank"
            >
              <img src={LinkedInLogo} height="50px" />
            </a>
            <a href="https://www.instagram.com/sadiee.ladyy/" target="_blank">
              <img src={InstaLogo} height="50px" />
            </a>
            <a href="https://github.com/Sadie802" target="_blank">
              <img src={GitHubLogo} height="50px" />
            </a>
            <a id='email' href="mailto:sadie.southworth@gmail.com"><img src={email} height='50px'/></a>
          </section>
          
        </div>
    </main>
  );
}
