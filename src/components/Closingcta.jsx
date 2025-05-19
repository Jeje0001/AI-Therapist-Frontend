// ClosingCTA.jsx
import React from "react";
import '../styles/ClosingCTA.css';

function ClosingCTA() {
  return (
    <section className="closing-cta-section">
      <div className="cta-content">
        <h2 className="cta-headline">Ready to Feel Supported?</h2>
        <p className="cta-subtext">Join thousands already finding comfort with MindHaven.</p>
        <div className="cta-buttons">
          <a href="/signup" className="btn solid">Start Chatting Now</a>
          <a href="#features" className="btn outline">Learn More</a>
        </div>
      </div>
      <img src='/assets/Illustrations/cta-waving.png' alt="Waving AI" className="cta-bot" />
    </section>
  );
}

export default ClosingCTA;
