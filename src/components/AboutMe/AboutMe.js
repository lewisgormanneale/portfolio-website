import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./AboutMe.css";

export default function AboutMe() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      className={`about-me ${darkMode ? "about-me-dark" : "about-me-light"}`}
      id="about-me"
    >
      <h2>About Me 🙋🏻‍♂️</h2>
      <div className="about-me-content">
        <div className="about-me-description">
          <p>
            I'm an aspiring developer currently enrolled at the School Of Code
            bootcamp learning Full Stack Development.
          </p>
          <p>
            Previously in my career, I'd worked in areas such as IT, QA, and
            Technical Support. However, after years of having clients and
            coworkers kindly tell me I was 'good with computers', I increasingly
            felt limited by my lack of coding knowledge.
          </p>
          <p>
            Once I began to learn to code in my spare time, I immediately knew
            it was what I wanted to do as a career. I applied for the School of
            Code and haven't looked back!
          </p>
        </div>
        <div className="image-container">
          <img src="images/real-me.jpg" alt="me irl" className="me-irl"></img>
          <p>(This will be an actual picture of me at some point.)</p>
        </div>
      </div>
    </section>
  );
}
