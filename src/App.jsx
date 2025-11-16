import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';
 
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Services = lazy(() => import('./pages/Services'));
const Team = lazy(() => import('./pages/Team'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="services" element={<Services />} />
            <Route path="service-details" element={<ServiceDetails />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;