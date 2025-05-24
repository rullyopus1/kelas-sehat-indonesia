
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const HealthInfoCarousel = () => {
  const healthInfo = [
    {
      title: "Vitamin D dari Sinar Matahari",
      content: "Berjemur di pagi hari membantu tubuh memproduksi vitamin D yang penting untuk tulang yang kuat!",
      image: "🌞",
      bgColor: "from-yellow-400 to-orange-400"
    },
    {
      title: "Manfaat Minum Air Putih",
      content: "Air putih membantu tubuh bekerja dengan baik, seperti mesin yang perlu oli agar lancar!",
      image: "💧",
      bgColor: "from-blue-400 to-cyan-400"
    },
    {
      title: "Tidur yang Cukup",
      content: "Saat tidur, tubuh kita memperbaiki diri dan otak kita menyimpan pelajaran hari ini!",
      image: "😴",
      bgColor: "from-purple-400 to-pink-400"
    },
    {
      title: "Olahraga Menyenangkan",
      content: "Bermain dan bergerak membuat jantung kuat dan tubuh sehat. Ayo bermain bersama teman!",
      image: "⚽",
      bgColor: "from-green-400 to-emerald-400"
    },
    {
      title: "Buah dan Sayur Berwarna",
      content: "Semakin berwarna makanan di piring, semakin banyak vitamin untuk tubuh kita!",
      image: "🥕",
      bgColor: "from-red-400 to-pink-400"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Tahukah Kamu? 🤔
          </h3>
          <p className="text-xl text-gray-600">
            Fakta menarik tentang kesehatan yang wajib kamu ketahui!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {healthInfo.map((info, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className={`bg-gradient-to-br ${info.bgColor} border-0 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      <CardContent className="p-6 text-center text-white">
                        <div className="text-6xl mb-4">{info.image}</div>
                        <h4 className="text-xl font-bold mb-3">{info.title}</h4>
                        <p className="text-sm leading-relaxed opacity-90">
                          {info.content}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white shadow-lg border-2" />
            <CarouselNext className="bg-white shadow-lg border-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HealthInfoCarousel;
