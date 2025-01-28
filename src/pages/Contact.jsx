import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-header">Say Hello</h1>
      <p className="contact-description">
        We love meeting new people. Please fill out this form to let us know what you’re working on, and we’ll be happy to answer questions and help you figure out whether it’s a good fit.
      </p>
      <p className="contact-expectation">
        <strong>What to expect:</strong> We’ll respond to your email within a few days, or sometimes a few seconds. Depending on the information you provide, we may ask a few additional questions or provide you with some information of our own.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name (required)</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (required)</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input type="url" id="website" name="website" placeholder="http://" />
        </div>
        <div className="form-group">
          <label>What are you interested in? (check all that apply)</label>
          <div className="checkbox-group">
            <label><input type="checkbox" name="interest" value="Brand Story" /> Brand Story</label>
            <label><input type="checkbox" name="interest" value="Explainer/Product Videos" /> Explainer/Product Videos</label>
            <label><input type="checkbox" name="interest" value="Event Recap" /> Event Recap</label>
            <label><input type="checkbox" name="interest" value="Testimonials" /> Testimonials</label>
            <label><input type="checkbox" name="interest" value="Infotainment" /> Infotainment</label>
            <label><input type="checkbox" name="interest" value="Documentary" /> Documentary</label>
            <label><input type="checkbox" name="interest" value="Facebook & Instagram Content" /> Facebook & Instagram Content</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="priceRange">Price Range</label>
          <select id="priceRange" name="priceRange">
            <option value="">Select an option</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="additionalInfo">Anything else we should know?</label>
          <textarea id="additionalInfo" name="additionalInfo" rows="4"></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
}

export default Contact;
