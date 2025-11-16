import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import TeamCard from "../components/Cards/TeamCard";
import AnimatedSection from "../components/AnimatedSection";

const Team = () => {
  const teamMembers = [
    {
      image: "/assets/img/team/team_1_1.jpg",
      name: "John Doe",
      designation: "CEO & Founder",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      image: "/assets/img/team/team_1_2.jpg",
      name: "Sarah Johnson",
      designation: "CTO",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      image: "/assets/img/team/team_1_3.jpg",
      name: "Michael Chen",
      designation: "Lead Developer",
      socials: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      image: "/assets/img/team/team_1_4.jpg",
      name: "Emily Davis",
      designation: "UI/UX Designer",
      socials: {
        facebook: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      image: "/assets/img/team/team_1_5.jpg",
      name: "David Wilson",
      designation: "Backend Developer",
      socials: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      image: "/assets/img/team/team_1_6.jpg",
      name: "Lisa Anderson",
      designation: "Marketing Manager",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      image: "/assets/img/team/team_1_7.jpg",
      name: "James Brown",
      designation: "DevOps Engineer",
      socials: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      image: "/assets/img/team/team_1_8.jpg",
      name: "Maria Garcia",
      designation: "Support Manager",
      socials: {
        facebook: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div>
      <Breadcrumb title="Our Team" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Meet Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                The People Behind Our Success
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our dedicated team of experts is committed to delivering exceptional service and support. Get to
                know the professionals who make it all possible.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                image={member.image}
                name={member.name}
                designation={member.designation}
                socials={member.socials}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Join Our Team
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  We're Always Looking for Talented People
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe in fostering a collaborative environment where innovation thrives. If you're
                  passionate about technology and want to make a real impact, we'd love to hear from you.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Join a team that values creativity, expertise, and continuous growth. Explore our current
                  openings and start your journey with us today.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  View Career Opportunities
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Competitive Benefits</h4>
                      <p className="text-gray-600">
                        Comprehensive health insurance, retirement plans, and generous paid time off.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Growth Opportunities</h4>
                      <p className="text-gray-600">
                        Clear career progression paths and ongoing professional development programs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Flexible Work Environment</h4>
                      <p className="text-gray-600">
                        Remote work options and flexible schedules to support work-life balance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
