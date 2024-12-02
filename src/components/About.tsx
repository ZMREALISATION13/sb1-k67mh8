import React from 'react';
import { Camera, Video, Users } from 'lucide-react';

export default function About() {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photographie',
      description: 'Services photo professionnels pour entreprises et événements'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Production Vidéo',
      description: 'Films publicitaires, corporate et événementiels'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Accompagnement personnalisé pour vos projets'
    }
  ];

  return (
    <section id="à propos" className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">À Propos</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Basée à Marseille, ZM RÉALISATION est une société de production audiovisuelle spécialisée 
            dans la production vidéo et photo pour les marques, entreprises... 
            Nous réalisons des films d'entreprise (publicitaires, événementiels, corporate...) et 
            évoluons dans de nombreux domaines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/50 p-6 rounded-lg text-center hover:bg-black/70 transition-colors"
            >
              <div className="text-white mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}