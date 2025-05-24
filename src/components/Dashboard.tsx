
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LogOut, Home } from 'lucide-react';
import SiswaDashboard from './dashboards/SiswaDashboard';
import GuruDashboard from './dashboards/GuruDashboard';
import AdminDashboard from './dashboards/AdminDashboard';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

const Dashboard = ({ user, onLogout }: DashboardProps) => {
  const renderDashboard = () => {
    switch (user.role) {
      case 'siswa':
        return <SiswaDashboard user={user} />;
      case 'guru':
        return <GuruDashboard user={user} />;
      case 'admin':
        return <AdminDashboard user={user} />;
      default:
        return <div>Role tidak dikenali</div>;
    }
  };

  const getRoleColor = () => {
    switch (user.role) {
      case 'siswa': return 'blue';
      case 'guru': return 'green';
      case 'admin': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`bg-${getRoleColor()}-600 text-white shadow-lg`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Home className="h-6 w-6" />
              <div>
                <h1 className="text-xl font-bold">
                  Dashboard {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </h1>
                <p className="text-sm opacity-90">
                  Selamat datang, {user.name}
                  {user.class && user.class !== 'all' && ` - Kelas ${user.class}`}
                </p>
              </div>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="bg-white text-gray-800 hover:bg-gray-100"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Keluar
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        {renderDashboard()}
      </main>
    </div>
  );
};

export default Dashboard;
