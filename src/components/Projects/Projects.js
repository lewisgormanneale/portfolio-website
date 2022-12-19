import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2>My Projects ⚡️</h2>
      <p>
        Hover or tap for information on each project. More of my projects can be
        found on{" "}
        <a href="https://github.com/lewisgormanneale">
          GitHub <IoLogoGithub />
        </a>
      </p>
      <div className="project-row">
        <div className="project project-large" id="mdoc-project">
          <img
            className="project-screenshot"
            src="images/mdoc-screenshot.png"
            alt="project screenshot"
          ></img>
          <div className="project-overlay">
            <h3>My Days Of Code</h3>
            <p>A website to record and share your #100DaysOfCode progress.</p>
            <div className="project-links">
              <a
                href="https://mydaysofcode.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View Live
              </a>
              <a
                href="https://github.com/lewisgormanneale/my-days-of-code"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project project-small" id="rumu-project">
          <img
            className="project-screenshot"
            src="images/rumu-placeholder.jpg"
            alt="project screenshot"
          ></img>
          <div className="project-overlay">
            <h3>Studio Rumu</h3>
            <p>Online storefront - under construction...</p>
            {/* <div className="project-links">
              <a
                href="https://mydaysofcode.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View Live
              </a>
              <a
                href="https://github.com/lewisgormanneale/my-days-of-code"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project project-small" id="ptp-project">
          <img
            className="project-screenshot"
            src="images/ptp-screenshot.png"
            alt="project screenshot"
          ></img>
          <div className="project-overlay">
            <h3>Pokémon Team Planner</h3>
            <p>
              A Pokémon Team Planner to help you plan out a team of 6 for a game
              in the mainline RPG series, confirming type and HM coverage.
            </p>
            <div className="project-links">
              <a
                href="https://lewisgormanneale.github.io/pokemon-team-planner/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View Live
              </a>
              <a
                href="https://github.com/lewisgormanneale/pokemon-team-planner"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="project project-large" id="soc-project">
          <img
            className="project-screenshot"
            src="images/soc-placeholder.png"
            alt="project screenshot"
          ></img>
          <div className="project-overlay">
            <h3>SOC Final Project</h3>
            <p>Under Construction....</p>
            {/* <div className="project-links">
              <a
                href="https://mydaysofcode.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                View Live
              </a>
              <a
                href="https://github.com/lewisgormanneale/my-days-of-code"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                GitHub
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
