import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import "./Contact.css";

export default function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      className={`contact ${darkMode ? "contact-dark" : "contact-light"}`}
      id="contact"
    >
      <h2>Contact Me ✉️</h2>
      <div className="contact-content">
        <div className="contact-greeting-and-socials">
          <p className="contact-greeting">
            I'm enrolled on the School of Code until February 2023, at which
            point I'm looking to enter as a developer. If you'd like to discuss
            a potential opportunity or anything else, please reach out to me
            through one of the methods below!
          </p>
          <div className="social-icons">
            <div className="social-icon-container">
              <a
                href="https://www.linkedin.com/in/lewisgormanneale/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin className="social-icon" id="linkedin" />
              </a>
              <p>LinkedIn</p>
            </div>
            <div className="social-icon-container">
              <a
                href="https://github.com/lewisgormanneale"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub className="social-icon" id="github" />
              </a>
              <p>GitHub</p>
            </div>
            <div className="social-icon-container">
              <a
                href="https://twitter.com/lewisgneale"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoTwitter className="social-icon" id="twitter" />
              </a>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
