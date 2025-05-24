
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Heart className="h-6 w-6 text-green-400" />
          <span className="text-xl font-semibold">Peduli Kesehatan Anak SD</span>
        </div>
        <p className="text-gray-400">
          Platform monitoring kesehatan untuk generasi masa depan yang sehat dan cerdas
        </p>
        <p className="text-gray-500 mt-4">
          © 2024 Peduli Kesehatan Anak SD. Dikembangkan dengan ❤️ untuk anak-anak Indonesia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
