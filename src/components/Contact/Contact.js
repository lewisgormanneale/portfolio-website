import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me ✉️</h2>
      <div className="contact-content">
        <div className="contact-greeting-and-socials">
          <p className="contact-greeting">
            I'm enrolled on the School of Code until February 2023, at which
            point I'll be looking to start my career as a developer. If you'd
            like to discuss a potential opportunity or anything else, just reach
            out to me on one of my socials!
          </p>
          <div className="social-icons">
            <IoLogoLinkedin className="social-icon" id="linkedin" />
            <IoLogoGithub className="social-icon" id="github" />
            <IoLogoTwitter className="social-icon" id="twitter" />
          </div>
        </div>
      </div>
    </section>
  );
}
