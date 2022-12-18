import React from "react";

export default function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="project-row">
        <div className="project project-large">
          <h3>My Days Of Code</h3>
        </div>
        <div className="project project-small">
          <h3>Studio Rumu</h3>
        </div>
      </div>
      <div className="project-row">
        <div className="project project-small">
          <h3>Pokémon Team Planner</h3>
        </div>
        <div className="project project-large">
          <h3>SOC Final Project</h3>
        </div>
      </div>
    </div>
  );
}
