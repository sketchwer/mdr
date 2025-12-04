import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ServicesPage from './pages/Services/Services';
import ProjectsPage from './pages/Projects/Projects';
import CaseStudiesPage from './pages/CaseStudies/CaseStudies';
import IndustriesPage from './pages/Industries/Industries';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Careers from './pages/Careers/Careers';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// Magento Services
import MagentoDevelopment from './pages/Services/MagentoDevelopment/MagentoDevelopment';
import Magento2Migration from './pages/Services/Magento2Migration/Magento2Migration';
import MagentoSupportPlan from './pages/Services/MagentoSupportPlan/MagentoSupportPlan';
import HyvaThemeDevelopment from './pages/Services/HyvaThemeDevelopment/HyvaThemeDevelopment';
import AdobeCommerceDevelopment from './pages/Services/AdobeCommerceDevelopment/AdobeCommerceDevelopment';
import MagentoEnterprise from './pages/Services/MagentoEnterprise/MagentoEnterprise';
// E-Commerce Services
import ShopifyDevelopment from './pages/Services/ShopifyDevelopment/ShopifyDevelopment';
import WooCommerceDevelopment from './pages/Services/WooCommerceDevelopment/WooCommerceDevelopment';
import BigCommerceDevelopment from './pages/Services/BigCommerceDevelopment/BigCommerceDevelopment';
import ShoplineDevelopment from './pages/Services/ShoplineDevelopment/ShoplineDevelopment';
import EcommerceMaintenance from './pages/Services/EcommerceMaintenance/EcommerceMaintenance';
import PimcoreDevelopment from './pages/Services/PimcoreDevelopment/PimcoreDevelopment';
import EcommerceDevelopment from './pages/Services/EcommerceDevelopment/EcommerceDevelopment';
// CMS/CRM Services
import PHPWebDevelopment from './pages/Services/PHPWebDevelopment/PHPWebDevelopment';
import LaravelDevelopment from './pages/Services/LaravelDevelopment/LaravelDevelopment';
import WordPressDevelopment from './pages/Services/WordPressDevelopment/WordPressDevelopment';
import ZohoDevelopmentServices from './pages/Services/ZohoDevelopmentServices/ZohoDevelopmentServices';
import OdooDevelopment from './pages/Services/OdooDevelopment/OdooDevelopment';
import ReactJSDevelopment from './pages/Services/ReactJSDevelopment/ReactJSDevelopment';
// Digital Marketing Services
import SearchEngineOptimisation from './pages/Services/SearchEngineOptimisation/SearchEngineOptimisation';
import PPCManagement from './pages/Services/PPCManagement/PPCManagement';
import ContentMarketing from './pages/Services/ContentMarketing/ContentMarketing';
import SocialMediaManagement from './pages/Services/SocialMediaManagement/SocialMediaManagement';
// Mobile App Solutions
import WhatsappChatbotIntegration from './pages/Services/WhatsappChatbotIntegration/WhatsappChatbotIntegration';
import FlutterAppDevelopment from './pages/Services/FlutterAppDevelopment/FlutterAppDevelopment';
import AndroidAppDevelopment from './pages/Services/AndroidAppDevelopment/AndroidAppDevelopment';
import iPhoneAppDevelopment from './pages/Services/iPhoneAppDevelopment/iPhoneAppDevelopment';
// Support & Packages
import WordPressSupportPlans from './pages/Services/WordPressSupportPlans/WordPressSupportPlans';
// Case Studies
import Lot21CaseStudy from './pages/CaseStudies/Lot21CaseStudy/Lot21CaseStudy';
import FantasyEurovisionCaseStudy from './pages/CaseStudies/FantasyEurovisionCaseStudy/FantasyEurovisionCaseStudy';
import MFABICaseStudy from './pages/CaseStudies/MFABICaseStudy/MFABICaseStudy';
import InfiniteCaseStudy from './pages/CaseStudies/InfiniteCaseStudy/InfiniteCaseStudy';
import SimpleBNCaseStudy from './pages/CaseStudies/SimpleBNCaseStudy/SimpleBNCaseStudy';
import VIACaseStudy from './pages/CaseStudies/VIACaseStudy/VIACaseStudy';
// Industries
import TilesIndustry from './pages/Industries/TilesIndustry/TilesIndustry';
import FurnitureIndustry from './pages/Industries/FurnitureIndustry/FurnitureIndustry';
import FashionIndustry from './pages/Industries/FashionIndustry/FashionIndustry';
import JewelleryIndustry from './pages/Industries/JewelleryIndustry/JewelleryIndustry';
import HealthcareIndustry from './pages/Industries/HealthcareIndustry/HealthcareIndustry';
import EducationIndustry from './pages/Industries/EducationIndustry/EducationIndustry';
import RealEstateIndustry from './pages/Industries/RealEstateIndustry/RealEstateIndustry';
import TravelIndustry from './pages/Industries/TravelIndustry/TravelIndustry';
import GroceriesIndustry from './pages/Industries/GroceriesIndustry/GroceriesIndustry';
import ArchitectureIndustry from './pages/Industries/ArchitectureIndustry/ArchitectureIndustry';
import EventManagementIndustry from './pages/Industries/EventManagementIndustry/EventManagementIndustry';
import BeautyCareIndustry from './pages/Industries/BeautyCareIndustry/BeautyCareIndustry';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* Magento Services */}
          <Route path="/services/magento-development" element={<MagentoDevelopment />} />
          <Route path="/services/magento-2-migration" element={<Magento2Migration />} />
          <Route path="/services/magento-support-plan" element={<MagentoSupportPlan />} />
          <Route path="/services/hyva-theme-development" element={<HyvaThemeDevelopment />} />
          <Route path="/services/adobe-commerce-development" element={<AdobeCommerceDevelopment />} />
          <Route path="/services/magento-enterprise" element={<MagentoEnterprise />} />
          {/* E-Commerce Services */}
          <Route path="/services/shopify-development" element={<ShopifyDevelopment />} />
          <Route path="/services/woocommerce-development" element={<WooCommerceDevelopment />} />
          <Route path="/services/bigcommerce-development" element={<BigCommerceDevelopment />} />
          <Route path="/services/shopline-development" element={<ShoplineDevelopment />} />
          <Route path="/services/ecommerce-maintenance" element={<EcommerceMaintenance />} />
          <Route path="/services/pimcore-development" element={<PimcoreDevelopment />} />
          <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
          {/* CMS/CRM Services */}
          <Route path="/services/php-web-development" element={<PHPWebDevelopment />} />
          <Route path="/services/laravel-development" element={<LaravelDevelopment />} />
          <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/services/zoho-development-services" element={<ZohoDevelopmentServices />} />
          <Route path="/services/odoo-development" element={<OdooDevelopment />} />
          <Route path="/services/reactjs-development" element={<ReactJSDevelopment />} />
          {/* Digital Marketing Services */}
          <Route path="/services/search-engine-optimisation" element={<SearchEngineOptimisation />} />
          <Route path="/services/ppc-management" element={<PPCManagement />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
          {/* Mobile App Solutions */}
          <Route path="/services/whatsapp-chatbot-integration" element={<WhatsappChatbotIntegration />} />
          <Route path="/services/flutter-app-development" element={<FlutterAppDevelopment />} />
          <Route path="/services/android-app-development" element={<AndroidAppDevelopment />} />
          <Route path="/services/iphone-app-development" element={<iPhoneAppDevelopment />} />
          {/* Support & Packages */}
          <Route path="/services/wordpress-support-plans" element={<WordPressSupportPlans />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/lot21" element={<Lot21CaseStudy />} />
          <Route path="/case-studies/fantasy-eurovision" element={<FantasyEurovisionCaseStudy />} />
          <Route path="/case-studies/mfabi" element={<MFABICaseStudy />} />
          <Route path="/case-studies/infinite" element={<InfiniteCaseStudy />} />
          <Route path="/case-studies/simplebn" element={<SimpleBNCaseStudy />} />
          <Route path="/case-studies/via" element={<VIACaseStudy />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/tiles" element={<TilesIndustry />} />
          <Route path="/industries/furniture" element={<FurnitureIndustry />} />
          <Route path="/industries/fashion" element={<FashionIndustry />} />
          <Route path="/industries/jewellery" element={<JewelleryIndustry />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
          <Route path="/industries/education" element={<EducationIndustry />} />
          <Route path="/industries/real-estate" element={<RealEstateIndustry />} />
          <Route path="/industries/travel" element={<TravelIndustry />} />
          <Route path="/industries/groceries" element={<GroceriesIndustry />} />
          <Route path="/industries/architecture" element={<ArchitectureIndustry />} />
          <Route path="/industries/event-management" element={<EventManagementIndustry />} />
          <Route path="/industries/beauty-care" element={<BeautyCareIndustry />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
