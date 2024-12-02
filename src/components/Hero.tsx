import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://cdn.discordapp.com/attachments/1313206563044986925/1313207017996812349/logo_zm_site.png?ex=674f4ad7&is=674df957&hm=62c66913417cbafc142979ab7a999ba0267b5101e8033512c09960fd6735afff&")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          ZM Réalisation
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Capturant vos moments les plus précieux
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          Découvrir mon travail
        </a>
      </div>
    </section>
  );
}
