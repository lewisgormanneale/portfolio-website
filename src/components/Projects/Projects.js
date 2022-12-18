import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2>My Projects ⚡️</h2>
      <p>(Hover or tap for info)</p>
      <div className="project-row">
        <div className="project project-large" id="mdoc-project">
          <img
            className="project-screenshot"
            src="images/mdoc-screenshot.png"
            alt="project screenshot"
          ></img>
          <h3>My Days Of Code</h3>
          <div className="project-focus-content">
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
        <div className="project project-small">
          <h3>SOC Final Project</h3>
        </div>
      </div>
      <div className="project-row">
        <div className="project project-small" id="ptp-project">
          <h3>Pokémon Team Planner</h3>
        </div>
        <div className="project project-large">
          <h3>Studio Rumu</h3>
        </div>
      </div>
    </section>
  );
}
