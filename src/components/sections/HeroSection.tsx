
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Selamat Datang di <span className="text-green-600">Peduli Kesehatan</span> Anak SD
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Platform digital untuk memantau dan merawat kesehatan anak-anak sekolah dasar dengan mudah dan menyenangkan
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
