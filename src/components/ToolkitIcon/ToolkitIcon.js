import React from "react";
import "./ToolkitIcon.css";

export default function ToolkitIcon({ name, url, src }) {
  return (
    <div className="toolkit-icon">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={src} width="36" height="36" alt={name} />
      </a>
      <p>{name}</p>
    </div>
  );
}
