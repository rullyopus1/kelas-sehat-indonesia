
import React from 'react';
import { Activity, UserCheck, Heart } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Fitur Unggulan Platform Kami
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Activity className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Monitoring Real-time</h4>
            <p className="text-gray-600">Pantau kondisi kesehatan siswa secara langsung dan real-time</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <UserCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Multi-User Access</h4>
            <p className="text-gray-600">Akses berbeda untuk siswa, guru, dan admin sesuai kebutuhan</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Peduli Kesehatan</h4>
            <p className="text-gray-600">Mendorong kebiasaan sehat dan kesadaran kesehatan sejak dini</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
