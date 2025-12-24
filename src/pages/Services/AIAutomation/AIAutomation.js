import React from 'react';
import { Link } from 'react-router-dom';
import './AIAutomation.css';

const AIAutomation = () => {
    const services = [
        {
            title: "AI Chatbots",
            description: "Intelligent chatbots for website and WhatsApp to provide 24/7 customer support and engagement.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <circle cx="9" cy="10" r="1"/>
                    <circle cx="15" cy="10" r="1"/>
                    <path d="M9 14h6"/>
                </svg>
            ),
            link: "/services/ai-chatbots"
        },
        {
            title: "Business Process Automation",
            description: "Automate repetitive business processes to increase efficiency and reduce manual errors.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
            ),
            link: "/services/business-process-automation"
        },
        {
            title: "Sales Automation",
            description: "AI-powered sales automation to streamline lead management and boost conversion rates.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                </svg>
            ),
            link: "/services/sales-automation"
        },
        {
            title: "Lead Qualification",
            description: "Automated lead scoring and qualification to focus on high-value prospects.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                </svg>
            ),
            link: "/services/lead-qualification"
        },
        {
            title: "Follow-Up Automation",
            description: "Automated follow-up sequences to nurture leads and maintain customer relationships.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"/>
                    <polyline points="1 20 1 14 7 14"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
            ),
            link: "/services/lead-qualification"
        },
        {
            title: "Doc & PDF Automation",
            description: "Automated document processing, PDF generation, and data extraction with AI.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
            ),
            link: "/services/document-pdf-automation"
        },
        {
            title: "Email & WhatsApp",
            description: "Automated email and WhatsApp notifications for seamless communication workflows.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            ),
            link: "/services/email-whatsapp-automation"
        },
        {
            title: "HR/Finance Automation",
            description: "Streamline HR and finance processes with intelligent automation and reporting.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
            ),
            link: "/services/internal-hr-finance-automation"
        },
        {
            title: "Support Automation",
            description: "Automated customer support workflows, ticket routing, and response management.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="12" rx="2"/>
                    <path d="M3 8l9-4 9 4"/>
                    <path d="M8 12h8"/>
                    <path d="M8 16h8"/>
                </svg>
            ),
            link: "/services/customer-support-automation"
        },
        {
            title: "AI Reports",
            description: "Intelligent reporting and analytics with AI-powered insights and predictions.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
            ),
            link: "/services/ai-reports-insights"
        }
    ];

    return (
        <div className="ai-automation-page">
            <div className="page-hero">
                <div className="hero-background-animation"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Tired of Managing Work Manually?<br />
                            <span className="title-line highlight">Let Your Business Run on Its Own.</span>
                        </h1>
                        <p className="hero-description">
                            At Macro Encoder Software, we design AI & automation-driven systems that remove daily effort from your operations. If you want fewer tools, fewer follow-ups, and systems that work automatically — this is what we build.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="content-sections">
                <div className="container">
                    <div className="intro-section">
                        <h2 className="intro-title">AI & Automation That Runs Your Business on Autopilot</h2>
                        <p className="intro-text">
                            Today's businesses don't want more tools. <strong>They want less effort.</strong>
                        </p>
                        <p className="intro-description">
                            Our AI & Automation solutions are built to make your business work automatically, end-to-end — from the first customer interaction to final payment and reporting.
                        </p>
                        <div className="features-list">
                            <div className="feature-item">No manual follow-ups</div>
                            <div className="feature-item">No data re-entry</div>
                            <div className="feature-item">No system switching</div>
                        </div>
                        <p className="intro-conclusion">
                            Just smooth, connected automation running quietly in the background.
                        </p>
                    </div>

                    <div className="automation-flow-section">
                        <h3 className="flow-title">In a fully automated system, work moves on its own:</h3>
                        <div className="flow-steps">
                            <div className="flow-step">
                                <span className="step-arrow">→</span>
                                <span className="step-text">A customer calls → the system creates a lead</span>
                            </div>
                            <div className="flow-step">
                                <span className="step-arrow">→</span>
                                <span className="step-text">The lead is qualified → the system assigns it</span>
                            </div>
                            <div className="flow-step">
                                <span className="step-arrow">→</span>
                                <span className="step-text">Follow-ups happen → without reminders</span>
                            </div>
                            <div className="flow-step">
                                <span className="step-arrow">→</span>
                                <span className="step-text">Documents are generated → automatically</span>
                            </div>
                            <div className="flow-step">
                                <span className="step-arrow">→</span>
                                <span className="step-text">Payments are collected → without chasing</span>
                            </div>
                            <div className="flow-step">
                                <span className="step-arrow">→</span>
                                <span className="step-text">Reports are ready → in real time</span>
                            </div>
                        </div>
                        <p className="flow-conclusion">
                            Your team doesn't do the process anymore. <strong>They oversee it.</strong>
                        </p>
                    </div>

                    {/* Content Sections - Text Only with Beautiful Design */}
                    <div className="content-card">
                        <div className="content-card-header">
                            <div className="content-icon">🤖</div>
                            <h2 className="content-title">AI Chatbots, Voice Calls & Smart Lead Qualification</h2>
                        </div>
                        <div className="content-card-body">
                            <p className="content-description">
                                <strong>Customer interactions should never stay unstructured.</strong> Our AI Chatbots don't just respond — they work. They engage website visitors, understand intent, ask the right questions, qualify leads, and push structured data directly into your system. Whether the conversation starts on your website, WhatsApp, email, or any third-party chat tool, the outcome is always actionable data — not loose conversations.
                            </p>
                            <p className="content-description">
                                <strong>Voice calls are also fully automated.</strong> When a customer calls, the system captures the call, identifies the caller, creates a lead instantly, links call history, and notifies the right team — without anyone logging details manually. AI-driven lead qualification ensures hot, warm, and cold leads are identified automatically so your sales team focuses only on what truly matters.
                            </p>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-card-header">
                            <div className="content-icon">📈</div>
                            <h2 className="content-title">Sales & Follow-Up Automation (From Call to Payment)</h2>
                        </div>
                        <div className="content-card-body">
                            <p className="content-description">
                                <strong>Sales should move fast — not wait for manual updates.</strong> Once a lead is created, the system automatically assigns it, moves it through predefined stages, triggers follow-ups, and keeps the entire sales pipeline updated in real time.
                            </p>
                            <p className="content-description">
                                <strong>Automation doesn't stop at lead creation.</strong> Calls convert into leads, leads convert into deals, quotations or invoices are generated instantly, payment links are sent automatically, and payment status updates the system in real time. Follow-up automation ensures emails and WhatsApp messages are sent at the right time, tasks are created automatically, and escalations happen when required.
                            </p>
                            <p className="highlight-text"><strong>Human follow-ups fail. Automation doesn't.</strong></p>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-card-header">
                            <div className="content-icon">⚡</div>
                            <h2 className="content-title">Business Process, Document & Communication Automation</h2>
                        </div>
                        <div className="content-card-body">
                            <p className="content-description">
                                <strong>Automation is not about one task — it's about the entire process.</strong> We design end-to-end business process automation where approvals, assignments, escalations, and updates happen automatically based on defined rules and real-time data. If a process repeats, depends on conditions, or involves multiple systems — it should be automated.
                            </p>
                            <p className="content-description">
                                Documents like quotations, invoices, agreements, reports, and dashboards are generated dynamically from live data, shared automatically, and stored correctly without formatting errors or delays. Email and WhatsApp automation ensures notifications, reminders, updates, and confirmations are sent automatically — keeping customers and internal teams aligned without manual effort.
                            </p>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-card-header">
                            <div className="content-icon">🔗</div>
                            <h2 className="content-title">HR, Finance, Support, AI Reports & Full System Integration</h2>
                        </div>
                        <div className="content-card-body">
                            <p className="content-description">
                                <strong>Automation goes beyond sales.</strong> HR and finance operations are streamlined through automated attendance, leave approvals, payroll triggers, invoice approvals, expense tracking, and internal validations — reducing paperwork and delays.
                            </p>
                            <p className="content-description">
                                Support automation ensures tickets are created, categorized, assigned, prioritized, tracked, and escalated automatically, with AI assistance improving resolution speed and customer experience. AI-powered reports and dashboards update in real time, giving you instant visibility into sales, operations, performance, and growth — without manual compilation.
                            </p>
                            <p className="content-description">
                                All of this works seamlessly because any third-party application can be integrated: calling systems, WhatsApp providers, payment gateways, accounting tools, marketing platforms, logistics systems, and custom internal software. <strong>All systems talk to each other automatically — no duplicate data, no delays.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our AI & Automation Services</h2>
                        <p className="section-subtitle">Leverage the power of AI to automate and optimize your business processes</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Link 
                                key={index} 
                                to={service.link} 
                                className="service-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">{service.icon}</div>
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Still handling operations manually?</h2>
                        <p>Let's create an intelligent automation system that runs your business end to end. Your business should move automatically, not depend on manual processes.</p>
                        <Link to="/contact" className="cta-button">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAutomation;
