
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Droplets, Apple, Activity, Sun, Moon } from 'lucide-react';

const HealthTips = () => {
  const healthTips = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Cuci Tangan Teratur",
      description: "Cuci tangan dengan sabun selama 20 detik sebelum makan dan setelah bermain",
      color: "from-red-50 to-red-100 border-red-200"
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      title: "Minum Air Putih",
      description: "Minum minimal 6-8 gelas air putih setiap hari untuk menjaga tubuh tetap sehat",
      color: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      icon: <Apple className="h-8 w-8 text-green-500" />,
      title: "Makan Makanan Bergizi",
      description: "Konsumsi buah, sayur, dan makanan sehat untuk tumbuh kembang yang optimal",
      color: "from-green-50 to-green-100 border-green-200"
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-500" />,
      title: "Olahraga Rutin",
      description: "Lakukan aktivitas fisik minimal 30 menit setiap hari seperti bermain atau bersepeda",
      color: "from-purple-50 to-purple-100 border-purple-200"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Berjemur Pagi",
      description: "Berjemur di pagi hari selama 10-15 menit untuk mendapatkan vitamin D",
      color: "from-yellow-50 to-yellow-100 border-yellow-200"
    },
    {
      icon: <Moon className="h-8 w-8 text-indigo-500" />,
      title: "Tidur Cukup",
      description: "Tidur 9-11 jam setiap malam untuk pertumbuhan dan konsentrasi yang baik",
      color: "from-indigo-50 to-indigo-100 border-indigo-200"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Tips Kesehatan Harian
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kebiasaan sehat yang mudah dilakukan setiap hari untuk anak-anak yang sehat dan ceria
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTips.map((tip, index) => (
            <Card key={index} className={`bg-gradient-to-br ${tip.color} border-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">
                  {tip.icon}
                </div>
                <CardTitle className="text-xl text-gray-800">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center leading-relaxed">
                  {tip.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
