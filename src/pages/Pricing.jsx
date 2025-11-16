import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PricingCard from '../components/Cards/PricingCard';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '4.99',
      period: 'month',
      features: [
        '10 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        '1 Website',
        '24/7 Support',
        'Daily Backups'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: '9.99',
      period: 'month',
      features: [
        '50 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        '5 Websites',
        'Priority Support',
        'Daily Backups',
        'Free Domain (1 Year)',
        'cPanel Access'
      ],
      recommended: true
    },
    {
      name: 'Business',
      price: '19.99',
      period: 'month',
      features: [
        'Unlimited SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'Unlimited Websites',
        'Priority Support',
        'Daily Backups',
        'Free Domain (1 Year)',
        'cPanel Access',
        'Dedicated IP',
        'SEO Tools'
      ],
      recommended: false
    }
  ];

  return (
    <>
      <Breadcrumb
        title="Pricing Plans"
        subtitle="Choose the perfect plan for your needs"
      />

      <section className="pricing-area py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-5">
                <h2 className="title">Choose Your Perfect Plan</h2>
                <p className="subtitle">
                  Get started with our affordable hosting plans. All plans include free SSL, daily backups, and 24/7 support.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="pricing-note text-center">
                <p className="mb-3">
                  <strong>All plans include:</strong>
                </p>
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                      <span className="badge bg-primary p-2">99.9% Uptime</span>
                      <span className="badge bg-primary p-2">Free Migration</span>
                      <span className="badge bg-primary p-2">Money-Back Guarantee</span>
                      <span className="badge bg-primary p-2">24/7 Support</span>
                      <span className="badge bg-primary p-2">Free SSL</span>
                      <span className="badge bg-primary p-2">Daily Backups</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-area bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mb-3">Need a Custom Solution?</h3>
              <p className="mb-0">
                Contact us for enterprise-level hosting solutions tailored to your specific requirements.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="/contact" className="btn btn-primary btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
