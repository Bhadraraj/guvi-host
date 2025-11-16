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
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const AppDevelopment = lazy(() => import('./pages/AppDevelopment'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Ticket = lazy(() => import('./pages/Ticket'));
const Login = lazy(() => import('./pages/Login'));
const HostingServices = lazy(() => import('./pages/HostingServices'));
const CloudCpanelHosting = lazy(() => import('./pages/hosting/CloudCpanelHosting'));
const ResellerHosting = lazy(() => import('./pages/hosting/ResellerHosting'));
const WordPressHosting = lazy(() => import('./pages/hosting/WordPressHosting'));
const VPSHosting = lazy(() => import('./pages/VPSHosting'));
const DedicatedServer = lazy(() => import('./pages/DedicatedServer'));
const DomainEmail = lazy(() => import('./pages/DomainEmail'));

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

            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="web-development/:service" element={<WebDevelopment />} />

            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="digital-marketing/:service" element={<DigitalMarketing />} />

            <Route path="app-development" element={<AppDevelopment />} />
            <Route path="app-development/:service" element={<AppDevelopment />} />

            <Route path="pricing" element={<Pricing />} />
            <Route path="ticket" element={<Ticket />} />
            <Route path="login" element={<Login />} />

            <Route path="hosting/cloud-cpanel" element={<CloudCpanelHosting />} />
            <Route path="hosting/reseller" element={<ResellerHosting />} />
            <Route path="hosting/wordpress" element={<WordPressHosting />} />
            <Route path="hosting/:type" element={<HostingServices />} />

            <Route path="vps/:type" element={<VPSHosting />} />
            <Route path="dedicated/:type" element={<DedicatedServer />} />
            <Route path="domain" element={<DomainEmail />} />
            <Route path="email/:type" element={<DomainEmail />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
