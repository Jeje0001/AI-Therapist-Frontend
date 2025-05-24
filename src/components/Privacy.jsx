import React from "react";

function PrivacyPolicy() {
  return (
    <div className="legal-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: May 20, 2025</p>

      <p>
        MindHaven respects your privacy. We do not collect any personally identifiable information unless you choose to provide it. Any data you submit (such as mood entries, chats, or preferences) are used solely to enhance your experience.
      </p>

      <h2>What We Collect</h2>
      <ul>
        <li>Mood check-ins and journal prompts</li>
        <li>AI chat interactions</li>
        <li>Onboarding preferences</li>
      </ul>

      <h2>How We Use Data</h2>
      <p>Your data is stored securely and never sold. It helps us personalize your experience and improve AI responses.</p>

      <h2>Third-Party Services</h2>
      <p>We may use tools like analytics to improve functionality. These services may use cookies.</p>

      <h2>Your Rights</h2>
      <p>You can request to delete or export your data anytime by contacting us.</p>
    </div>
  );
}

export default PrivacyPolicy;
