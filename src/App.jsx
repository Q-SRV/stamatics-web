import bgImage from "./assets/home_background.jpg";
import "./App.css";

function App() {
  return (
    <div
      className="hero-root"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay" />

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          {/* Logo left */}
          <div className="logo">
            <div className="logo-mark" />
            <div className="logo-text">
              <span className="logo-title">Davon.</span>
              <span className="logo-subtitle">Business Consulting School</span>
            </div>
          </div>

          {/* Center links */}
          <nav className="nav-links">
            <a href="#who">Who We Are</a>
            <a href="#modules">Learning Modules</a>
            <a href="#resources">Resources</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Right actions */}
          <div className="nav-actions">
            <button className="nav-login">Log In</button>
            <button className="nav-cta">Enroll Now</button>
          </div>
        </div>
      </header>

      {/* MAIN HERO CONTENT */}
      <main className="hero-content">
        <section className="hero-left">
          <h1 className="hero-title">
            Davon Online School of
            <br />
            Business Consulting
          </h1>
          <p className="hero-subtitle">
            The destination for leaders who seek to change the world.
          </p>
          <button className="hero-button">Enroll Now</button>
        </section>

        <section className="hero-right">
          <div className="newsletter-card">
            <h3 className="newsletter-title">
              Subscribe to our Mailing List
            </h3>
            <p className="newsletter-text">Enter your email here *</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-input"
              />
              <button className="newsletter-submit">Subscribe</button>
            </div>
          </div>
        </section>
      </main>

      {/* SCROLL ARROW */}
      <div className="scroll-indicator">
        <span className="scroll-arrow">↓</span>
      </div>
    </div>
  );
}

export default App;
