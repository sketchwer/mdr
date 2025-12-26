import React from "react";
import "./RequestQuote.css";

const RequestQuote = () => {
  return (
    <div className="quote-page">
      <div className="quote-card">
        <h1 className="quote-title">Contact With Our Team</h1>
        <p className="quote-subtitle">
          Tell us about your requirement and we’ll get back within 24 hours.
        </p>

        <form className="quote-form">

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Your full name" />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="you@company.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mobile Number *</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>

            <div className="form-group">
              <label>Company / Organization</label>
              <input type="text" placeholder="Company name" />
            </div>
          </div>

          <div className="form-group">
            <label>Service / Platform Required *</label>
            <select>
              <option>Select a service</option>
              <option>Zoho One Solution</option>
              <option>Zoho CRM Implementation</option>
              <option>Zoho Creator Custom App</option>
              <option>Zoho Desk</option>
              <option>Zoho Books</option>
              <option>API Integration</option>
              <option>Widget / Extension Development</option>
              <option>AI / ChatGPT Integration</option>
              <option>Java / PHP Development</option>
              <option>Custom Software Development</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Short Requirement</label>
            <textarea rows="4" placeholder="Briefly describe your requirement" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Expected Delivery Timeline</label>
              <input type="text" placeholder="e.g. 2–4 weeks" />
            </div>

            <div className="form-group">
              <label>Estimated Budget</label>
              <input type="text" placeholder="e.g. ₹50,000 – ₹1,00,000" />
            </div>
          </div>

          <button type="submit" className="quote-submit">
            Request Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
