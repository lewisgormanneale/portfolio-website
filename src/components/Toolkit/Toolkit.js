import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Toolkit.css";

export default function Toolkit() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      className={`toolkit ${darkMode ? "toolkit-dark" : "toolkit-light"}`}
    >
      <h2>My Toolkit 🧰</h2>
      <div className="toolkit-content">
        <div className="toolkit-icons">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              width="36"
              height="36"
              alt="JavaScript"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
              width="36"
              height="36"
              alt="TypeScript"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
              width="36"
              height="36"
              alt="HTML5"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              width="36"
              height="36"
              alt="React"
            />
          </a>
          <a
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              width="36"
              height="36"
              alt="CSS3"
            />
          </a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
              width="36"
              height="36"
              alt="NodeJS"
            />
          </a>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
              width="36"
              height="36"
              alt="Express"
            />
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
              width="36"
              height="36"
              alt="PostgreSQL"
            />
          </a>
          <a href="https://supabase.io/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
              width="36"
              height="36"
              alt="Supabase"
            />
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
              width="36"
              height="36"
              alt="Figma"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
