import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Clock, CheckCircle } from "lucide-react";

const Ticket = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    category: "general",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket submitted:", formData);
  };

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">24/7 Support Ticket</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Support Ticket</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center mb-5">
                <span className="sub-title">Get Help Anytime</span>
                <h2 className="sec-title">Submit a Support Ticket</h2>
                <p className="sec-text">
                  Our support team is available 24/7 to help you with any issues or questions.
                  Submit a ticket and we'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="contact-form-wrapper bg-white shadow-sm p-4 p-lg-5 rounded">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject *"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <select
                        className="form-select"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                      >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group">
                      <select
                        className="form-select"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="general">General Support</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing Question</option>
                        <option value="feature">Feature Request</option>
                      </select>
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Describe your issue in detail *"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="ot-btn w-100">
                        Submit Ticket
                        <Send size={16} className="ms-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-bottom">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <div className="box-icon mb-3">
                  <Clock size={40} className="text-primary" />
                </div>
                <h3 className="box-title h5">24/7 Availability</h3>
                <p className="box-text">
                  Our support team is always available to help you, any time of day or night.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <div className="box-icon mb-3">
                  <CheckCircle size={40} className="text-primary" />
                </div>
                <h3 className="box-title h5">Fast Response</h3>
                <p className="box-text">
                  We aim to respond to all tickets within 1 hour during business hours.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <div className="box-icon mb-3">
                  <Send size={40} className="text-primary" />
                </div>
                <h3 className="box-title h5">Expert Support</h3>
                <p className="box-text">
                  Get help from experienced professionals who know our products inside out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ticket;
