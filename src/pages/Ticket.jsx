import React, { useState } from "react";
import { FileText, Upload } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import AnimatedSection from "../components/AnimatedSection";

const Ticket = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    priority: "medium",
    category: "technical",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket submitted:", formData);
  };

  return (
    <div>
      <Breadcrumb title="Submit a Ticket" />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Support</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Submit a Support Ticket</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Need help? Submit a support ticket and our team will get back to you as soon as possible.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideInUp">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Priority *</label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    >
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Brief description of your issue"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="8"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Please provide detailed information about your issue..."
                    required
                  ></textarea>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">
                    <span className="text-blue-600 font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-gray-500 text-sm">PNG, JPG, PDF up to 10MB</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FileText size={20} />
                  Submit Ticket
                </button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.2}>
            <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need Immediate Help?</h3>
              <p className="text-gray-600 mb-4">For urgent issues, contact our support team directly.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call: +1 (555) 123-4567
                </a>
                <a
                  href="#"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 border-2 border-blue-600"
                >
                  Start Live Chat
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Ticket;
