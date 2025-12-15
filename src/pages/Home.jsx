// src/pages/Home.jsx

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/pages/home.css";
import bgImage from "../assets/home_background.jpg";

function Home() {
  return (
    <>
      <div
        className="hero-root"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-overlay" />

        <main className="hero-content">
          {/* LEFT SIDE — CENTERED VERTICALLY */}
          <section className="hero-left">
            <h1 className="hero-title">
              <span>Stamatics</span>
              <br />
              <span>IIT Kanpur</span>
            </h1>

            <p className="hero-subtitle">
              Bring problems. Leave with answers.
            </p>

            {/* COMPACT ABOUT BOX */}
            <div className="about-card about-card-compact">
              <h3>About Us</h3>
              <p>
                Stamatics is the mathematics society of IIT Kanpur. We organise
                competitions, talks, workshops, and problem-solving sessions
                aimed at fostering curiosity, mathematical thinking, and
                collaboration across campus.
              </p>
            </div>
          </section>

          {/* RIGHT SIDE — EMPTY (kept for layout balance) */}
          <section className="hero-right" />
        </main>

        <div className="scroll-indicator">
          <span className="scroll-arrow">↓</span>
        </div>
      </div>
    </>
  );
}

export default Home;
