import React from 'react';
import './ClientsSection.css';

const ClientsSection = () => {
    const clients = [
        { name: "Medmatch", logo: "M" },
        { name: "CO2", logo: "CO2" },
        { name: "Resort Choice", logo: "RC" },
        { name: "Nader", logo: "N" },
        { name: "Kerma", logo: "K" },
        { name: "IT Global", logo: "ITG" },
        { name: "Evercam", logo: "E" },
        { name: "DEC", logo: "DEC" }
    ];

    return (
        <section className="clients-section">
            <div className="container">
                <div className="clients-header">
                    <h2 className="section-title">Trusted by 100+ companies</h2>
                    <p className="section-subtitle">A winning team with 250+ partnerships for progress</p>
                </div>
                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-card">
                            <div className="client-logo">{client.logo}</div>
                            <div className="client-name">{client.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;

