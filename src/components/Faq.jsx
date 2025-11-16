import React from "react";

const Faq = () => {
  return (
    <div>
      <div
        className="space overflow-hidden bg-smoke"
        data-bg-src="assets/img/hero/hero-bg1-1.png"
      >
        <div
          className="shape-mockup bg-gradient-shape1 faq-bg-gradient1"
          data-top="20%"
          data-right="-3%"
          data-left="auto"
        />
        <div className="container">
          <div className="row gx-60 gy-40 justify-content-center align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="title-area">
                <span className="sub-title" data-cue="slideInUp">
                  Frequently Asked Questions
                </span>
                <h2 className="sec-title" data-cue="slideInUp">
                  Quick Answers to Your Cyber Security Concerns
                </h2>
              </div>
              <div className="faq-thumb1" data-cue="slideInUp">
                <img src="assets/img/normal/faq1-1.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-card" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      Why do I need cybersecurity services?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We specialize in a wide range of software development
                        services, including custom software development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      How does Secur's cybersecurity services work?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We specialize in a wide range of software development
                        services, including custom software development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      What is security consulting and compliance?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We specialize in a wide range of software development
                        services, including custom software development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      How does incident response work?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We specialize in a wide range of software development
                        services, including custom software development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-5"
                      aria-expanded="false"
                      aria-controls="collapse-5"
                    >
                      What is threat detection and response?
                    </button>
                  </div>
                  <div
                    id="collapse-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-5"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        We specialize in a wide range of software development
                        services, including custom software development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
