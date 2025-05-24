
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Shield } from 'lucide-react';

interface RoleSelectionCardsProps {
  onRoleSelect: (role: string) => void;
}

const RoleSelectionCards = ({ onRoleSelect }: RoleSelectionCardsProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <Card 
        className="cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 hover:border-blue-400 hover:shadow-xl bg-gradient-to-br from-blue-50 to-blue-100"
        onClick={() => onRoleSelect('siswa')}
      >
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-blue-700">Siswa</CardTitle>
          <CardDescription className="text-gray-600">
            Masuk sebagai siswa untuk mencatat data kesehatan harian
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ Catat suhu tubuh</li>
            <li>✓ Input berat & tinggi badan</li>
            <li>✓ Laporkan keluhan kesehatan</li>
            <li>✓ Lihat riwayat kesehatan</li>
          </ul>
          <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
            Masuk Sebagai Siswa
          </Button>
        </CardContent>
      </Card>

      <Card 
        className="cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 hover:border-green-400 hover:shadow-xl bg-gradient-to-br from-green-50 to-green-100"
        onClick={() => onRoleSelect('guru')}
      >
        <CardHeader className="text-center">
          <div className="mx-auto bg-green-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-green-700">Guru</CardTitle>
          <CardDescription className="text-gray-600">
            Masuk sebagai guru untuk memantau kesehatan siswa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ Monitor data siswa</li>
            <li>✓ Lihat keluhan kesehatan</li>
            <li>✓ Beri tanggapan & catatan</li>
            <li>✓ Rekap kesehatan kelas</li>
          </ul>
          <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">
            Masuk Sebagai Guru
          </Button>
        </CardContent>
      </Card>

      <Card 
        className="cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 hover:border-orange-400 hover:shadow-xl bg-gradient-to-br from-orange-50 to-orange-100"
        onClick={() => onRoleSelect('admin')}
      >
        <CardHeader className="text-center">
          <div className="mx-auto bg-orange-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-orange-700">Admin</CardTitle>
          <CardDescription className="text-gray-600">
            Masuk sebagai admin untuk mengelola sistem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ Kelola akun siswa & guru</li>
            <li>✓ Lihat semua data kesehatan</li>
            <li>✓ Generate laporan</li>
            <li>✓ Pengaturan sistem</li>
          </ul>
          <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
            Masuk Sebagai Admin
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleSelectionCards;
