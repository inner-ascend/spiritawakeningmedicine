import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import './i18n';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import OnePagerPage from './components/pages/OnePagerPage';
import AboutPage from './components/pages/AboutPage';
import BufoCeremoniesPage from './components/pages/BufoCeremoniesPage';
import PreparationPage from './components/pages/PreparationPage';
import IntegrationPage from './components/pages/IntegrationPage';
import FAQPage from './components/pages/FAQPage';
import ContactPage from './components/pages/ContactPage';
import TestimonialsPage from './components/pages/TestimonialsPage';
import RetreatsPage from './components/pages/RetreatsPage';
import PricingPage from './components/pages/PricingPage';
import CollaborationsPage from './components/pages/CollaborationsPage';
import ResourcesPage from './components/pages/ResourcesPage';
import BufoScreeningPage from './components/pages/BufoScreeningPage';
import BufoConsentPage from './components/pages/BufoConsentPage';
import BufoContraindicationsPage from './components/pages/BufoContraindicationsPage';
import ScrollToTop from './components/ScrollToTop';
import FloatingLanguageToggle from './components/FloatingLanguageToggle';


// Event Route Component
function EventRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <EventPreview eventId={id || ''} language={language} />;
}

// Place Route Component
function PlaceRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <PlacePreview placeId={id || ''} language={language} />;
}

// Main App with Routing
function App() {
  return (
    <Router>
      <ScrollToTop />
      <FloatingLanguageToggle />
      <Routes>
        <Route path="/" element={<OnePagerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ceremonies" element={<BufoCeremoniesPage />} />
        <Route path="/preparation" element={<PreparationPage />} />
        <Route path="/integration" element={<IntegrationPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/retreats" element={<RetreatsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collaborations" element={<CollaborationsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        {/* Bufo application pages */}
        <Route path="/bufo-screening" element={<BufoScreeningPage />} />
        <Route path="/bufo-consent" element={<BufoConsentPage />} />
        <Route path="/bufo-contraindications" element={<BufoContraindicationsPage />} />
        {/* Redirects for old deprecated pages */}
        <Route path="/services" element={<Navigate to="/ceremonies" replace />} />
        <Route path="/inner-ascend" element={<Navigate to="/about" replace />} />
        {/* Utility routes */}
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<OnePagerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
