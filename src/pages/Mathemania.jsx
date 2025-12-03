// src/pages/Mathemania.jsx

function Mathemania() {
  return (
    <section className="mathemania-page">
      <div className="mathemania-inner">
        {/* HEADER */}
        <header className="mathemania-header">
          <h1 className="mathemania-title">Mathemania</h1>
          <p className="mathemania-subtitle">
            The flagship mathematics contest of Stamatics, IIT Kanpur –  
            combining creativity, rigor, and problem-solving under one banner.
          </p>
        </header>

        <div className="mathemania-grid">
          {/* LEFT: EVENT DETAILS */}
          <div className="mathemania-card">
            <h2 className="mathemania-card-title">Event Overview</h2>
            <p className="mathemania-text">
              Mathemania is a multi-round competition that tests conceptual
              understanding, speed, and creativity in mathematics and related
              problem-solving. It is open to students across batches and
              disciplines at IIT Kanpur.
            </p>
            <ul className="mathemania-list">
              <li>Individual and team-based rounds</li>
              <li>Mixture of proof, puzzle, and numerical problems</li>
              <li>Designed and curated by Stamatics members</li>
            </ul>
          </div>

          {/* RIGHT: KEY INFO */}
          <div className="mathemania-card">
            <h2 className="mathemania-card-title">Key Information</h2>
            <div className="mathemania-info-list">
              <div className="mathemania-info-item">
                <span className="mathemania-info-label">Format</span>
                <span className="mathemania-info-value">
                  Written + Interactive Rounds
                </span>
              </div>
              <div className="mathemania-info-item">
                <span className="mathemania-info-label">Level</span>
                <span className="mathemania-info-value">
                  Undergraduate & Postgraduate
                </span>
              </div>
              <div className="mathemania-info-item">
                <span className="mathemania-info-label">Category</span>
                <span className="mathemania-info-value">
                  Problem Solving & Math Contest
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* REGISTRATION + RESOURCES ROW */}
        <div className="mathemania-grid mathemania-bottom-grid">
          <div className="mathemania-card">
            <h2 className="mathemania-card-title">Registration</h2>
            <p className="mathemania-text">
              Registration for the next edition of Mathemania will be opened
              soon. Keep an eye on official Stamatics channels and email for
              announcements.
            </p>
            <button
              className="mathemania-button"
              onClick={() =>
                alert("Registration form integration can be added here later.")
              }
            >
              Notify Me
            </button>
          </div>

          <div className="mathemania-card">
            <h2 className="mathemania-card-title">Past Papers & Resources</h2>
            <p className="mathemania-text">
              Previous editions of Mathemania have featured a variety of
              problems across algebra, combinatorics, number theory, probability
              and more.
            </p>
            <ul className="mathemania-list">
              <li>Sample Question Sets (PDF)</li>
              <li>Solutions & Discussions</li>
              <li>Recommended Reading</li>
            </ul>
            <button
              className="mathemania-button secondary"
              onClick={() =>
                alert("Link to PDFs / resources can be added here later.")
              }
            >
              View Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mathemania;
