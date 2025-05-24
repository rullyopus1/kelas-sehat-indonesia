
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, BookOpen, Activity, UserCheck } from 'lucide-react';
import LoginModal from '@/components/LoginModal';
import Dashboard from '@/components/Dashboard';
import HealthTips from '@/components/HealthTips';
import ReproductiveEducation from '@/components/ReproductiveEducation';
import HealthInfoCarousel from '@/components/HealthInfoCarousel';
import EmergencyContacts from '@/components/EmergencyContacts';

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setShowLogin(true);
  };

  const handleLogin = (userData: any) => {
    setCurrentUser(userData);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedRole('');
  };

  if (currentUser) {
    return <Dashboard user={currentUser} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Selamat Datang di <span className="text-green-600">Peduli Kesehatan</span> Anak SD
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Platform digital untuk memantau dan merawat kesehatan anak-anak sekolah dasar dengan mudah dan menyenangkan
          </p>
          
          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card 
              className="cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 hover:border-blue-400 hover:shadow-xl bg-gradient-to-br from-blue-50 to-blue-100"
              onClick={() => handleRoleSelect('siswa')}
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
              onClick={() => handleRoleSelect('guru')}
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
              onClick={() => handleRoleSelect('admin')}
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
        </div>
      </section>

      {/* Health Info Carousel */}
      <HealthInfoCarousel />

      {/* Health Tips Section */}
      <HealthTips />

      {/* Reproductive Education Section */}
      <ReproductiveEducation />

      {/* Emergency Contacts */}
      <EmergencyContacts />

      {/* Features Section */}
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

      {/* Footer */}
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

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          role={selectedRole}
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default Index;
