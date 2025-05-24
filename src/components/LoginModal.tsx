
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Lock, BookOpen, Users, Shield } from 'lucide-react';

interface LoginModalProps {
  role: string;
  onClose: () => void;
  onLogin: (userData: any) => void;
}

const LoginModal = ({ role, onClose, onLogin }: LoginModalProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const getRoleIcon = () => {
    switch (role) {
      case 'siswa': return <BookOpen className="h-6 w-6 text-blue-500" />;
      case 'guru': return <Users className="h-6 w-6 text-green-500" />;
      case 'admin': return <Shield className="h-6 w-6 text-orange-500" />;
      default: return <User className="h-6 w-6" />;
    }
  };

  const getRoleColor = () => {
    switch (role) {
      case 'siswa': return 'blue';
      case 'guru': return 'green';
      case 'admin': return 'orange';
      default: return 'gray';
    }
  };

  const getRoleName = () => {
    switch (role) {
      case 'siswa': return 'Siswa';
      case 'guru': return 'Guru';
      case 'admin': return 'Admin';
      default: return 'User';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login - dalam implementasi nyata, ini akan terhubung ke database
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      username,
      role,
      class: role === 'siswa' ? selectedClass : role === 'guru' ? selectedClass : 'all',
      name: username,
      loginTime: new Date().toISOString()
    };

    onLogin(userData);
  };

  const kelasOptions = [
    '1A', '1B', '1C',
    '2A', '2B', '2C',
    '3A', '3B', '3C',
    '4A', '4B', '4C',
    '5A', '5B', '5C',
    '6A', '6B', '6C'
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center justify-center">
            {getRoleIcon()}
            <span className={`text-${getRoleColor()}-600`}>
              Masuk Sebagai {getRoleName()}
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">
              {role === 'siswa' ? 'Nama Siswa' : role === 'guru' ? 'Nama Guru' : 'Username Admin'}
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="username"
                type="text"
                placeholder={role === 'siswa' ? 'Masukkan nama siswa' : role === 'guru' ? 'Masukkan nama guru' : 'Masukkan username'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          {(role === 'siswa' || role === 'guru') && (
            <div className="space-y-2">
              <Label htmlFor="class">Kelas</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass} required>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kelas" />
                </SelectTrigger>
                <SelectContent>
                  {kelasOptions.map((kelas) => (
                    <SelectItem key={kelas} value={kelas}>
                      Kelas {kelas}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Batal
            </Button>
            <Button
              type="submit"
              className={`flex-1 bg-${getRoleColor()}-500 hover:bg-${getRoleColor()}-600`}
            >
              Masuk
            </Button>
          </div>
        </form>

        <div className="text-xs text-gray-500 text-center pt-4 border-t">
          <p>Demo Login:</p>
          <p>Username: demo | Password: demo123</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
