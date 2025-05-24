
import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-green-500">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-green-500 p-2 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Peduli Kesehatan Anak SD</h1>
              <p className="text-sm text-gray-600">Sistem Monitoring Kesehatan Sekolah Dasar</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-green-600 font-semibold">Sehat, Ceria, Berprestasi!</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
