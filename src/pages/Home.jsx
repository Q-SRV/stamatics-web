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
          {/* LEFT SIDE — CENTERED LIKE BEFORE */}
          <section className="hero-left">
            <h1 className="hero-title">
              <span>Stamatics</span>
              <br />
              <span>IIT Kanpur</span>
            </h1>

            <p className="hero-subtitle">
              Bring problems. Leave with answers.
            </p>

            {/* ABOUT US — FULL WIDTH BOX */}
            <div className="about-card about-card-wide">
              <h3>About Us</h3>
              <p>
                Stamatics is the official Mathematics and Statistics society of
                IIT Kanpur. The society serves as a platform for students who
                enjoy mathematical thinking, logical reasoning, and problem
                solving beyond the classroom curriculum.
              </p>
              <p>
                Throughout the academic year, Stamatics organises a wide range
                of activities including mathematical competitions, lectures by
                professors and researchers, peer-led workshops, problem-solving
                sessions, and informal discussions. These initiatives aim to
                cultivate curiosity, collaboration, and a deeper appreciation
                for mathematics among students from all disciplines.
              </p>
              <p>
                By connecting students with seniors, faculty members, and
                research opportunities, Stamatics strives to make mathematics
                accessible, engaging, and intellectually rewarding for the
                entire campus community.
              </p>
            </div>
          </section>

          {/* RIGHT SIDE — EMPTY (layout balance) */}
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
