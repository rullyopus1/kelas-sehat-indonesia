
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Shield, Heart } from 'lucide-react';

const ReproductiveEducation = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const educationTopics = [
    {
      id: 1,
      icon: <BookOpen className="h-8 w-8 text-pink-500" />,
      title: "Mengenal Tubuh Kita",
      description: "Belajar tentang bagian-bagian tubuh dan cara merawatnya dengan baik",
      content: [
        "Setiap bagian tubuh kita penting dan harus dijaga",
        "Bagian pribadi adalah area yang tertutup pakaian dalam",
        "Tidak boleh ada yang menyentuh bagian pribadi kita",
        "Jika ada yang membuat tidak nyaman, ceritakan pada orang tua atau guru"
      ],
      color: "from-pink-50 to-pink-100 border-pink-200"
    },
    {
      id: 2,
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Melindungi Diri",
      description: "Cara-cara melindungi diri dari bahaya dan tetap aman",
      content: [
        "Selalu ingat aturan 'Tidak boleh dilihat, tidak boleh disentuh'",
        "Berteriak 'TIDAK!' jika ada yang membuat tidak nyaman",
        "Segera pergi dan cari bantuan orang dewasa yang dipercaya",
        "Ceritakan pada orang tua jika ada yang aneh atau membuat takut"
      ],
      color: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      id: 3,
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Sentuhan yang Baik dan Buruk",
      description: "Membedakan sentuhan yang aman dan yang tidak aman",
      content: [
        "Sentuhan baik: pelukan hangat dari keluarga, jabat tangan, tepuk bahu",
        "Sentuhan buruk: menyentuh bagian pribadi, sentuhan yang membuat takut",
        "Jika merasa tidak nyaman dengan sentuhan seseorang, itu tandanya buruk",
        "Selalu percaya pada perasaan diri sendiri"
      ],
      color: "from-green-50 to-green-100 border-green-200"
    },
    {
      id: 4,
      icon: <Heart className="h-8 w-8 text-purple-500" />,
      title: "Menjaga Kebersihan",
      description: "Pentingnya menjaga kebersihan tubuh dan pakaian",
      content: [
        "Mandi setiap hari dengan sabun dan air bersih",
        "Ganti pakaian dalam setiap hari",
        "Cuci tangan sebelum makan dan setelah dari toilet",
        "Gosok gigi 2 kali sehari pagi dan malam"
      ],
      color: "from-purple-50 to-purple-100 border-purple-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Edukasi Kesehatan dan Keamanan Diri
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pembelajaran penting tentang cara menjaga diri dan tetap sehat untuk anak-anak
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {educationTopics.map((topic) => (
            <Card 
              key={topic.id} 
              className={`bg-gradient-to-br ${topic.color} border-2 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                selectedTopic === topic.id ? 'ring-4 ring-orange-300' : ''
              }`}
              onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">
                  {topic.icon}
                </div>
                <CardTitle className="text-lg text-gray-800">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center text-sm leading-relaxed">
                  {topic.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
                >
                  {selectedTopic === topic.id ? 'Sembunyikan' : 'Pelajari'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Detail */}
        {selectedTopic && (
          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                {educationTopics.find(t => t.id === selectedTopic)?.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {educationTopics.find(t => t.id === selectedTopic)?.content.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
                <p className="text-sm text-yellow-800 font-medium text-center">
                  💡 <strong>Ingat:</strong> Jika ada yang membuat kamu tidak nyaman atau takut, 
                  segera ceritakan pada orang tua, guru, atau orang dewasa yang kamu percaya!
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ReproductiveEducation;
