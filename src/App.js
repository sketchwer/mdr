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
// eslint-disable-next-line no-unused-vars
import iPhoneAppDevelopment from './pages/Services/iPhoneAppDevelopment/iPhoneAppDevelopment';
// Support & Packages
import WordPressSupportPlans from './pages/Services/WordPressSupportPlans/WordPressSupportPlans';
// New Services
import SmartAutomations from './pages/Services/SmartAutomations/SmartAutomations';
import ZohoCreatorSolutions from './pages/Services/ZohoCreatorSolutions/ZohoCreatorSolutions';
import ZohoCRMAutomation from './pages/Services/ZohoCRMAutomation/ZohoCRMAutomation';
import AIDocumentScanning from './pages/Services/AIDocumentScanning/AIDocumentScanning';
import AIPythonML from './pages/Services/AIPythonML/AIPythonML';
import ZohoZiaIntelligence from './pages/Services/ZohoZiaIntelligence/ZohoZiaIntelligence';
import AdvancedJavaDevelopment from './pages/Services/AdvancedJavaDevelopment/AdvancedJavaDevelopment';
import CustomApplicationDevelopment from './pages/Services/CustomApplicationDevelopment/CustomApplicationDevelopment';
// Zoho Services
import ZohoCRMImplementation from './pages/Services/ZohoCRMImplementation/ZohoCRMImplementation';
import ZohoPeople from './pages/Services/ZohoPeople/ZohoPeople';
import ZohoBooksInventory from './pages/Services/ZohoBooksInventory/ZohoBooksInventory';
import ZohoDesk from './pages/Services/ZohoDesk/ZohoDesk';
import ZohoProjects from './pages/Services/ZohoProjects/ZohoProjects';
import ZohoIntegrations from './pages/Services/ZohoIntegrations/ZohoIntegrations';
import ZohoExtensions from './pages/Services/ZohoExtensions/ZohoExtensions';
// AI & Automation Services
import AIChatbots from './pages/Services/AIChatbots/AIChatbots';
import BusinessProcessAutomation from './pages/Services/BusinessProcessAutomation/BusinessProcessAutomation';
import SalesAutomation from './pages/Services/SalesAutomation/SalesAutomation';
import LeadQualification from './pages/Services/LeadQualification/LeadQualification';
import DocumentPDFAutomation from './pages/Services/DocumentPDFAutomation/DocumentPDFAutomation';
import EmailWhatsAppAutomation from './pages/Services/EmailWhatsAppAutomation/EmailWhatsAppAutomation';
import TaskApprovalWorkflows from './pages/Services/TaskApprovalWorkflows/TaskApprovalWorkflows';
import InternalHRFinanceAutomation from './pages/Services/InternalHRFinanceAutomation/InternalHRFinanceAutomation';
import CustomerSupportAutomation from './pages/Services/CustomerSupportAutomation/CustomerSupportAutomation';
import AIReportsInsights from './pages/Services/AIReportsInsights/AIReportsInsights';
// Software Development Services
import WebApplicationDevelopment from './pages/Services/WebApplicationDevelopment/WebApplicationDevelopment';
import JavaSpringBoot from './pages/Services/JavaSpringBoot/JavaSpringBoot';
import PHPLaravel from './pages/Services/PHPLaravel/PHPLaravel';
import ReactJSFrontend from './pages/Services/ReactJSFrontend/ReactJSFrontend';
import MobileAppDevelopment from './pages/Services/MobileAppDevelopment/MobileAppDevelopment';
import CustomERPPortals from './pages/Services/CustomERPPortals/CustomERPPortals';
// Website Development Services
import BusinessWebsiteDevelopment from './pages/Services/BusinessWebsiteDevelopment/BusinessWebsiteDevelopment';
import LandingPageDesign from './pages/Services/LandingPageDesign/LandingPageDesign';
import WebsiteRedesign from './pages/Services/WebsiteRedesign/WebsiteRedesign';
import WebsiteMaintenance from './pages/Services/WebsiteMaintenance/WebsiteMaintenance';
// Case Studies
import PausProjectCaseStudy from './pages/CaseStudies/PausProjectCaseStudy/PausProjectCaseStudy';
import CleverCafeCaseStudy from './pages/CaseStudies/CleverCafeCaseStudy/CleverCafeCaseStudy';
import HopkinsCPACaseStudy from './pages/CaseStudies/HopkinsCPACaseStudy/HopkinsCPACaseStudy';
import SriProjectCaseStudy from './pages/CaseStudies/SriProjectCaseStudy/SriProjectCaseStudy';
import DTCCustomizationCaseStudy from './pages/CaseStudies/DTCCustomizationCaseStudy/DTCCustomizationCaseStudy';
import TransFormeCaseStudy from './pages/CaseStudies/TransFormeCaseStudy/TransFormeCaseStudy';
import InfinityAdvertisingCaseStudy from './pages/CaseStudies/InfinityAdvertisingCaseStudy/InfinityAdvertisingCaseStudy';
import WorldVeganTravelCaseStudy from './pages/CaseStudies/WorldVeganTravelCaseStudy/WorldVeganTravelCaseStudy';
import WilfredoLabrodaCaseStudy from './pages/CaseStudies/WilfredoLabrodaCaseStudy/WilfredoLabrodaCaseStudy';
import TimNoyeCaseStudy from './pages/CaseStudies/TimNoyeCaseStudy/TimNoyeCaseStudy';
import TimHopperCaseStudy from './pages/CaseStudies/TimHopperCaseStudy/TimHopperCaseStudy';
import ClientLifecycleCaseStudy from './pages/CaseStudies/ClientLifecycleCaseStudy/ClientLifecycleCaseStudy';
import RachelChapmanCaseStudy from './pages/CaseStudies/RachelChapmanCaseStudy/RachelChapmanCaseStudy';
import PatrickKoelleCaseStudy from './pages/CaseStudies/PatrickKoelleCaseStudy/PatrickKoelleCaseStudy';
import KANOMedicalCaseStudy from './pages/CaseStudies/KANOMedicalCaseStudy/KANOMedicalCaseStudy';
import CCLimitedCaseStudy from './pages/CaseStudies/CCLimitedCaseStudy/CCLimitedCaseStudy';
import TalencityCaseStudy from './pages/CaseStudies/TalencityCaseStudy/TalencityCaseStudy';
import MyWorkCaseStudy from './pages/CaseStudies/MyWorkCaseStudy/MyWorkCaseStudy';
import MatterMindDecorCaseStudy from './pages/CaseStudies/MatterMindDecorCaseStudy/MatterMindDecorCaseStudy';
import LaPetiteForetCaseStudy from './pages/CaseStudies/LaPetiteForetCaseStudy/LaPetiteForetCaseStudy';
import SonderDigitalCaseStudy from './pages/CaseStudies/SonderDigitalCaseStudy/SonderDigitalCaseStudy';
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
          {/* Zoho Services */}
          <Route path="/services/zoho-crm-implementation" element={<ZohoCRMImplementation />} />
          <Route path="/services/zoho-creator-applications" element={<ZohoCreatorSolutions />} />
          <Route path="/services/zoho-creator-solutions" element={<ZohoCreatorSolutions />} />
          <Route path="/services/zoho-people" element={<ZohoPeople />} />
          <Route path="/services/zoho-books-inventory" element={<ZohoBooksInventory />} />
          <Route path="/services/zoho-desk" element={<ZohoDesk />} />
          <Route path="/services/zoho-projects" element={<ZohoProjects />} />
          <Route path="/services/zoho-integrations" element={<ZohoIntegrations />} />
          <Route path="/services/zoho-extensions" element={<ZohoExtensions />} />
          {/* AI & Automation Services */}
          <Route path="/services/ai-chatbots" element={<AIChatbots />} />
          <Route path="/services/business-process-automation" element={<BusinessProcessAutomation />} />
          <Route path="/services/sales-automation" element={<SalesAutomation />} />
          <Route path="/services/lead-qualification" element={<LeadQualification />} />
          <Route path="/services/document-pdf-automation" element={<DocumentPDFAutomation />} />
          <Route path="/services/email-whatsapp-automation" element={<EmailWhatsAppAutomation />} />
          <Route path="/services/task-approval-workflows" element={<TaskApprovalWorkflows />} />
          <Route path="/services/internal-hr-finance-automation" element={<InternalHRFinanceAutomation />} />
          <Route path="/services/customer-support-automation" element={<CustomerSupportAutomation />} />
          <Route path="/services/ai-reports-insights" element={<AIReportsInsights />} />
          {/* Software Development Services */}
          <Route path="/services/web-application-development" element={<WebApplicationDevelopment />} />
          <Route path="/services/java-spring-boot" element={<JavaSpringBoot />} />
          <Route path="/services/php-laravel" element={<PHPLaravel />} />
          <Route path="/services/reactjs-frontend" element={<ReactJSFrontend />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/custom-erp-portals" element={<CustomERPPortals />} />
          {/* Website Development Services */}
          <Route path="/services/business-website-development" element={<BusinessWebsiteDevelopment />} />
          <Route path="/services/landing-page-design" element={<LandingPageDesign />} />
          <Route path="/services/website-redesign" element={<WebsiteRedesign />} />
          <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
          {/* New Services */}
          <Route path="/services/smart-automations" element={<SmartAutomations />} />
          <Route path="/services/zoho-crm-automation" element={<ZohoCRMAutomation />} />
          <Route path="/services/ai-document-scanning" element={<AIDocumentScanning />} />
          <Route path="/services/ai-python-ml" element={<AIPythonML />} />
          <Route path="/services/zoho-zia-intelligence" element={<ZohoZiaIntelligence />} />
          <Route path="/services/advanced-java-development" element={<AdvancedJavaDevelopment />} />
          <Route path="/services/custom-application-development" element={<CustomApplicationDevelopment />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/paus-project" element={<PausProjectCaseStudy />} />
          <Route path="/case-studies/clever-cafe" element={<CleverCafeCaseStudy />} />
          <Route path="/case-studies/hopkins-cpa-firm" element={<HopkinsCPACaseStudy />} />
          <Route path="/case-studies/sri-project" element={<SriProjectCaseStudy />} />
          <Route path="/case-studies/dtc-customization" element={<DTCCustomizationCaseStudy />} />
          <Route path="/case-studies/transforme-project" element={<TransFormeCaseStudy />} />
          <Route path="/case-studies/infinity-advertising" element={<InfinityAdvertisingCaseStudy />} />
          <Route path="/case-studies/world-vegan-travel" element={<WorldVeganTravelCaseStudy />} />
          <Route path="/case-studies/wilfredo-labroda" element={<WilfredoLabrodaCaseStudy />} />
          <Route path="/case-studies/tim-noye" element={<TimNoyeCaseStudy />} />
          <Route path="/case-studies/tim-hopper" element={<TimHopperCaseStudy />} />
          <Route path="/case-studies/client-lifecycle" element={<ClientLifecycleCaseStudy />} />
          <Route path="/case-studies/rachel-chapman" element={<RachelChapmanCaseStudy />} />
          <Route path="/case-studies/patrick-koelle" element={<PatrickKoelleCaseStudy />} />
          <Route path="/case-studies/kano-medical" element={<KANOMedicalCaseStudy />} />
          <Route path="/case-studies/cc-limited" element={<CCLimitedCaseStudy />} />
          <Route path="/case-studies/talencity" element={<TalencityCaseStudy />} />
          <Route path="/case-studies/mywork" element={<MyWorkCaseStudy />} />
          <Route path="/case-studies/matter-mind-decor" element={<MatterMindDecorCaseStudy />} />
          <Route path="/case-studies/la-petite-foret" element={<LaPetiteForetCaseStudy />} />
          <Route path="/case-studies/sonder-digital" element={<SonderDigitalCaseStudy />} />
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
