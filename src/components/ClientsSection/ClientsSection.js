import React from 'react';
import './ClientsSection.css';

const ClientsSection = () => {
    const clients = [
        { 
            name: "Medmatch", 
            logo: "M",
            image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "CO2", 
            logo: "CO2",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "Resort Choice", 
            logo: "RC",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "Nader", 
            logo: "N",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "Kerma", 
            logo: "K",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "IT Global", 
            logo: "ITG",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "Evercam", 
            logo: "E",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "DEC", 
            logo: "DEC",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "TechCorp", 
            logo: "TC",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "InnovateX", 
            logo: "IX",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "Digital Solutions", 
            logo: "DS",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        { 
            name: "CloudTech", 
            logo: "CT",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        }
    ];

    return (
        <section className="clients-section">
            <div className="container">
                <div className="clients-header">
                    <h2 className="section-title">Trusted by 100+ companies</h2>
                </div>
                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-card">
                            <div className="client-logo-wrapper">
                                <img 
                                    src={client.image} 
                                    alt={client.name}
                                    className="client-logo-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="client-logo-fallback" style={{display: 'none'}}>
                                    {client.logo}
                                </div>
                            </div>
                            <div className="client-name">{client.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;

