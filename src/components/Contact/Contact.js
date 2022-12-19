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
            like to discuss a potential oppurtunity or anything else, just reach
            out through one of the methods here!
          </p>
          <div className="social-icons">
            <IoLogoLinkedin />
            <IoLogoGithub />
            <IoLogoTwitter />
          </div>
        </div>
        <div className="contact-form-container">
          <form name="contact-form" className="contact-form">
            <label className="hidden" htmlFor="name">
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <label className="hidden" htmlFor="email">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <label className="hidden" htmlFor="message">
              message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
            <div className="submit-container">
              <button className="send-button" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
