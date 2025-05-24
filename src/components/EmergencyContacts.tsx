
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Heart, Shield, AlertTriangle } from 'lucide-react';

const EmergencyContacts = () => {
  const emergencyNumbers = [
    {
      icon: <Phone className="h-8 w-8 text-red-500" />,
      title: "Ambulans",
      number: "118",
      description: "Untuk keadaan darurat medis",
      color: "from-red-50 to-red-100 border-red-200"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Polisi",
      number: "110",
      description: "Untuk bantuan keamanan",
      color: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      title: "Pemadam Kebakaran",
      number: "113",
      description: "Untuk kebakaran dan penyelamatan",
      color: "from-orange-50 to-orange-100 border-orange-200"
    },
    {
      icon: <Heart className="h-8 w-8 text-green-500" />,
      title: "Telepon Sehat",
      number: "1500-567",
      description: "Konsultasi kesehatan 24 jam",
      color: "from-green-50 to-green-100 border-green-200"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Nomor Darurat Penting
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nomor-nomor penting yang harus diingat dan dihafal untuk keadaan darurat
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {emergencyNumbers.map((contact, index) => (
            <Card key={index} className={`bg-gradient-to-br ${contact.color} border-2 hover:shadow-lg transition-all duration-300`}>
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-2">
                  {contact.icon}
                </div>
                <CardTitle className="text-lg text-gray-800">{contact.title}</CardTitle>
                <div className="text-3xl font-bold text-gray-700">{contact.number}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-sm">
                  {contact.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300">
          <CardHeader>
            <CardTitle className="text-xl text-center text-gray-800 flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
              Cara Menghubungi Nomor Darurat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Tetap Tenang</h4>
                <p className="text-sm text-gray-600">Tarik napas dalam-dalam dan jangan panik</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Tekan Nomor</h4>
                <p className="text-sm text-gray-600">Tekan nomor darurat sesuai kebutuhan</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Jelaskan Lokasi</h4>
                <p className="text-sm text-gray-600">Beritahu alamat lengkap dan situasi</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyContacts;
