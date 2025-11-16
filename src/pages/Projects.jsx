import React from "react";
import { ExternalLink } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import AnimatedSection from "../components/AnimatedSection";

const Projects = () => {
  const projects = [
    {
      image: "/assets/img/project/project_1_1.jpg",
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      link: "#",
    },
    {
      image: "/assets/img/project/project_1_2.jpg",
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional corporate website with elegant design and powerful CMS integration.",
      link: "#",
    },
    {
      image: "/assets/img/project/project_1_3.jpg",
      title: "Mobile Banking App",
      category: "App Development",
      description: "Secure and intuitive mobile banking application for iOS and Android.",
      link: "#",
    },
    {
      image: "/assets/img/project/project_1_4.jpg",
      title: "Restaurant Website",
      category: "Web Development",
      description: "Beautiful restaurant website with online ordering and reservation system.",
      link: "#",
    },
    {
      image: "/assets/img/project/project_1_5.jpg",
      title: "Fitness Tracker App",
      category: "App Development",
      description: "Comprehensive fitness tracking application with workout plans and nutrition guides.",
      link: "#",
    },
    {
      image: "/assets/img/project/project_1_6.jpg",
      title: "Real Estate Portal",
      category: "Web Development",
      description: "Advanced property listing platform with search filters and virtual tours.",
      link: "#",
    },
  ];

  const categories = ["All Projects", "Web Development", "App Development", "Web Design", "Digital Marketing"];

  const [activeCategory, setActiveCategory] = React.useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <Breadcrumb title="Our Projects" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Explore Our Latest Projects
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Take a look at some of the amazing projects we've delivered for our clients. From web development to
                mobile apps, we bring ideas to life.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <a
                        href={project.link}
                        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                      >
                        View Project <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-blue-600 text-sm font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch to discuss your project requirements.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;
