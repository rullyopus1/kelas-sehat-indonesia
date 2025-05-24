
import React, { useState } from 'react';
import LoginModal from '@/components/LoginModal';
import Dashboard from '@/components/Dashboard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import RoleSelectionCards from '@/components/sections/RoleSelectionCards';
import FeaturesSection from '@/components/sections/FeaturesSection';
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
      <Header />
      
      <HeroSection />
      
      <div className="container mx-auto px-4">
        <RoleSelectionCards onRoleSelect={handleRoleSelect} />
      </div>

      <HealthInfoCarousel />
      <HealthTips />
      <ReproductiveEducation />
      <EmergencyContacts />
      <FeaturesSection />
      <Footer />

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
