import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

export default function About() {
  const [clicked, setClicked] = useState(false);

  function buttonClick() {
    if (clicked === false) {
      setClicked(true);
    } else if (clicked === true) {
      setClicked(false);
    }
  }

  return (
    <main>
      <section id='readMore'>
      <h4 id="aboutTitle"> Want To Read More About Me?</h4>
      <label class="switch">
        <input type="checkbox" onClick={buttonClick} />
        <span class="slider"></span>
      </label>
      </section>
      {clicked ? (
        <div className="aboutSections">
          <section>
            <h3 className="sectionTitle">Where I grew up</h3>
            <p>
              I was born and raised in the Brave Little State of Vermont. I
              spent my childhood living in Stowe and Morrisville. I greatly
              appreciate the sense of community across the whole state. It
              doesn't matter if there was a disaster or heartbreaking news in a
              town that you've never heard of; the whole state will show up and
              support. A sense of together-ness is something I carry with me no
              matter what I am doing in my life. I believe it is one of the the
              most important values one can have.
            </p>
            <br></br>
            <p>
              Vermont is one of those places that is beautiful year round. No
              matter where you are you can always see a mountain range or a
              field of cows. I am currently residing in Burlington, VT.
              Burlington gives me the ability to be in a more city-like setting
              without being too far from the nature I enjoy. Whether it's a five
              minute walk to watch the sunset over the lake, a 20 minute drive
              to a river to enjoy the peace and quiet of the woods, or a 15
              minute walk to Church Street, Burlington gives me the flexbility
              to enjoy it all.{" "}
            </p>
          </section>
          <section>
            <h3 className="sectionTitle">Why I got into programming</h3>
            <p>
              To be frank, I've never been great at school. I wasn't top of my
              class and I never attended university. Though, what set me apart
              from my peers was my determination to problem solving and (in my
              humble opinion) an impeccable skill and love for mathematics. The
              more complex the problem, the more addrenaline and drive I got.
              During the Covid-19 shutdown, March 2020, I was furloughed from my
              employer of (at that time) 2 years. As one would, I got bored of
              sitting at home not doing much. So I decided to pick up my
              computer, make an account at Codecademy, and teach myself the
              basics of Python and HTML. From there, I just fell in love. I was
              feeling that "math feeling" all over again. Now here I am, two
              years later, I left my employer and took a risk to participate in
              a full time Software/Web Development Bootcamp. It has been nothing
              short of 'the-right-decision'.{" "}
            </p>
          </section>
          <section>
            <h3 className="sectionTitle">Interests</h3>
            <p>
              Growing up in Vermont, I had (and fortunately still have)
              unlimited access to the outdoors. It's hard not to fall in love
              with nature when you're surrounded by it every day. My favorite
              activites include hikeing or walking in the woods with my three
              dogs, swimming in natural bodies of water, and camping. It's super
              important to me to spend time outside. It helps me release
              negative and/or stressful thoughts and helps keep me grounded.
            </p>
            <br></br>
            <p>
              I am also the proud mother of three adorable cat boys! They are
              constant entertainment and bring a sense of life into my home and
              heart. If I'm not outside, you can find me lounging on the couch
              with my cats or playing fetch with my kitten.{" "}
            </p>
          </section>
        </div>
      ) : null}
    </main>
  );
}
