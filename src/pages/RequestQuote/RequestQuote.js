import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RequestQuote.css";

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    requirement: '',
    timeline: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Combine requirement, timeline, and budget into message
      const messageContent = `Requirement: ${formData.requirement || 'N/A'}\n\nExpected Delivery Timeline: ${formData.timeline || 'N/A'}\nEstimated Budget: ${formData.budget || 'N/A'}`;

      // Send email using PHP API endpoint (webmail SMTP)
      const apiUrl = '/api/send-email.php';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: messageContent,
        })
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server returned an invalid response.');
      }

      const data = await response.json();

      if (!response.ok) {
        console.error('API Error:', data);
        throw new Error(data.error || 'Failed to send email');
      }

      alert('Thank you for your quote request! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        requirement: '',
        timeline: '',
        budget: ''
      });
    } catch (error) {
      console.error('Email Error:', error);
      const errorMessage = error.message || 'Unknown error occurred';
      alert(`There was an error sending your request: ${errorMessage}. Please try again or contact us directly at Info@macroencoder.com`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-page">
      <div className="quote-card">
        <h1 className="quote-title">Contact With Our Team</h1>
        <p className="quote-subtitle">
          Tell us about your requirement and we'll get back within 24 hours.
        </p>

        <form className="quote-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder="Your full name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="you@company.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Mobile Number *</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                placeholder="+91 XXXXX XXXXX" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input 
                type="text" 
                id="company"
                name="company"
                placeholder="Company name" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">Service / Platform Required *</label>
            <select 
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Zoho One Solution">Zoho One Solution</option>
              <option value="Zoho CRM Implementation">Zoho CRM Implementation</option>
              <option value="Zoho Creator Custom App">Zoho Creator Custom App</option>
              <option value="Zoho Desk">Zoho Desk</option>
              <option value="Zoho Books">Zoho Books</option>
              <option value="API Integration">API Integration</option>
              <option value="Widget / Extension Development">Widget / Extension Development</option>
              <option value="AI / ChatGPT Integration">AI / ChatGPT Integration</option>
              <option value="Java / PHP Development">Java / PHP Development</option>
              <option value="Custom Software Development">Custom Software Development</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="requirement">Short Requirement</label>
            <textarea 
              id="requirement"
              name="requirement"
              rows="4" 
              placeholder="Briefly describe your requirement" 
              value={formData.requirement}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="timeline">Expected Delivery Timeline</label>
              <input 
                type="text" 
                id="timeline"
                name="timeline"
                placeholder="e.g. 2–4 weeks" 
                value={formData.timeline}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="budget">Estimated Budget</label>
              <input 
                type="text" 
                id="budget"
                name="budget"
                placeholder="e.g. ₹50,000 – ₹1,00,000" 
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="quote-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Request Quote'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
