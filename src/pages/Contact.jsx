// src/pages/Contact.jsx
function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-inner">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Have a question about events, competitions, or collaborations?  
            Reach out to the Stamatics team at IIT Kanpur.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT: FORM */}
          <div className="contact-card">
            <h2 className="contact-card-title">Send us a message</h2>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("This is a demo form – hook it up to backend later.");
              }}
            >
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="contact-card contact-info-card">
            <h2 className="contact-card-title">Get in touch</h2>
            <p className="contact-info-text">
              You can also reach us via email or drop by our club room during
              activity hours.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">
                  stamatics@iitk.ac.in
                </span>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">
                  IIT Kanpur, Uttar Pradesh, India
                </span>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-label">Club Hours</span>
                <span className="contact-info-value">
                  Weekdays · 5:00 PM – 8:00 PM
                </span>
              </div>
            </div>

            <p className="contact-info-text small">
              For queries regarding specific competitions like Integration Bee,
              Mathematica, or Mathemania, please mention the event name in the
              subject line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
