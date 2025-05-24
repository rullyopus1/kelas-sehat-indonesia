
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus, Settings, BarChart3, School, Trash2, Edit, Eye } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface AdminDashboardProps {
  user: any;
}

const AdminDashboard = ({ user }: AdminDashboardProps) => {
  const { toast } = useToast();
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    role: '',
    class: '',
    username: '',
    password: ''
  });

  // Data dummy untuk semua pengguna
  const [usersData, setUsersData] = useState([
    { id: 1, name: 'Ahmad Fauzan', role: 'siswa', class: '6A', username: 'ahmad.fauzan', status: 'aktif' },
    { id: 2, name: 'Siti Nurhaliza', role: 'siswa', class: '6A', username: 'siti.nur', status: 'aktif' },
    { id: 3, name: 'Budi Santoso', role: 'siswa', class: '6B', username: 'budi.santoso', status: 'aktif' },
    { id: 4, name: 'Dewi Sartika', role: 'siswa', class: '5A', username: 'dewi.sartika', status: 'aktif' },
    { id: 5, name: 'Ibu Sarah', role: 'guru', class: '6A', username: 'sarah.guru', status: 'aktif' },
    { id: 6, name: 'Pak Rahman', role: 'guru', class: '6B', username: 'rahman.guru', status: 'aktif' },
    { id: 7, name: 'Ibu Aminah', role: 'guru', class: '5A', username: 'aminah.guru', status: 'aktif' },
  ]);

  const kelasOptions = [
    '1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C',
    '4A', '4B', '4C', '5A', '5B', '5C', '6A', '6B', '6C'
  ];

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newUser.name || !newUser.role || !newUser.username || !newUser.password) {
      toast({
        title: "Data tidak lengkap",
        description: "Mohon isi semua field yang diperlukan",
        variant: "destructive"
      });
      return;
    }

    if ((newUser.role === 'siswa' || newUser.role === 'guru') && !newUser.class) {
      toast({
        title: "Kelas wajib diisi",
        description: "Pilih kelas untuk siswa atau guru",
        variant: "destructive"
      });
      return;
    }

    const userData = {
      id: usersData.length + 1,
      ...newUser,
      status: 'aktif'
    };

    setUsersData([...usersData, userData]);
    
    toast({
      title: "Pengguna berhasil ditambahkan",
      description: `Akun ${newUser.role} untuk ${newUser.name} telah dibuat`,
    });

    setNewUser({ name: '', role: '', class: '', username: '', password: '' });
    setShowAddUser(false);
  };

  const handleDeleteUser = (userId: number) => {
    setUsersData(usersData.filter(user => user.id !== userId));
    toast({
      title: "Pengguna dihapus",
      description: "Data pengguna telah dihapus dari sistem",
    });
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'siswa':
        return <Badge className="bg-blue-500">Siswa</Badge>;
      case 'guru':
        return <Badge className="bg-green-500">Guru</Badge>;
      case 'admin':
        return <Badge className="bg-orange-500">Admin</Badge>;
      default:
        return <Badge variant="secondary">{role}</Badge>;
    }
  };

  const getStats = () => {
    const totalSiswa = usersData.filter(u => u.role === 'siswa').length;
    const totalGuru = usersData.filter(u => u.role === 'guru').length;
    const totalKelas = [...new Set(usersData.filter(u => u.class).map(u => u.class))].length;
    
    return { totalSiswa, totalGuru, totalKelas, totalUser: usersData.length };
  };

  const stats = getStats();

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Panel Administrator 🛡️</CardTitle>
          <CardDescription className="text-orange-100">
            Kelola sistem monitoring kesehatan sekolah dengan mudah dan aman
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Statistics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Siswa</p>
                <p className="text-2xl font-bold text-blue-600">{stats.totalSiswa}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Guru</p>
                <p className="text-2xl font-bold text-green-600">{stats.totalGuru}</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Kelas Aktif</p>
                <p className="text-2xl font-bold text-purple-600">{stats.totalKelas}</p>
              </div>
              <School className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Pengguna</p>
                <p className="text-2xl font-bold text-orange-600">{stats.totalUser}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="users">Kelola Pengguna</TabsTrigger>
          <TabsTrigger value="reports">Laporan Kesehatan</TabsTrigger>
          <TabsTrigger value="settings">Pengaturan Sistem</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          {/* Add User Button */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manajemen Pengguna</h3>
            <Dialog open={showAddUser} onOpenChange={setShowAddUser}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Tambah Pengguna
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Tambah Pengguna Baru</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddUser} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama lengkap"
                      value={newUser.name}
                      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Peran</Label>
                    <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih peran" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="siswa">Siswa</SelectItem>
                        <SelectItem value="guru">Guru</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(newUser.role === 'siswa' || newUser.role === 'guru') && (
                    <div className="space-y-2">
                      <Label htmlFor="class">Kelas</Label>
                      <Select value={newUser.class} onValueChange={(value) => setNewUser({ ...newUser, class: value })} required>
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

                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Masukkan username"
                      value={newUser.username}
                      onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Masukkan password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setShowAddUser(false)} className="flex-1">
                      Batal
                    </Button>
                    <Button type="submit" className="flex-1 bg-orange-500 hover:bg-orange-600">
                      Tambah Pengguna
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Users Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium">Nama</th>
                      <th className="text-left p-4 font-medium">Peran</th>
                      <th className="text-left p-4 font-medium">Kelas</th>
                      <th className="text-left p-4 font-medium">Username</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{user.name}</td>
                        <td className="p-4">{getRoleBadge(user.role)}</td>
                        <td className="p-4">{user.class || '-'}</td>
                        <td className="p-4 text-gray-600">{user.username}</td>
                        <td className="p-4">
                          <Badge className="bg-green-500">Aktif</Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Laporan Kesehatan Sekolah</CardTitle>
              <CardDescription>
                Ringkasan data kesehatan siswa dari seluruh kelas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Statistik Kesehatan Hari Ini</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Siswa Sehat:</span>
                      <span className="font-medium text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Keluhan Ringan:</span>
                      <span className="font-medium text-yellow-600">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Perlu Perhatian:</span>
                      <span className="font-medium text-red-600">3%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Kelas dengan Perhatian Khusus</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Kelas 6A:</span>
                      <Badge className="bg-yellow-500">2 siswa perlu perhatian</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Kelas 5B:</span>
                      <Badge className="bg-red-500">1 siswa urgent</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t">
                <Button className="mr-2">Export PDF</Button>
                <Button variant="outline">Export Excel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Pengaturan Sistem
              </CardTitle>
              <CardDescription>
                Konfigurasikan sistem monitoring kesehatan sekolah
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Pengaturan Notifikasi</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Notifikasi email untuk guru saat ada keluhan siswa</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Notifikasi SMS untuk orang tua saat suhu anak tinggi</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Laporan harian otomatis ke kepala sekolah</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Pengaturan Threshold Kesehatan</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Suhu Normal Maksimal (°C)</Label>
                    <Input type="number" defaultValue="37.0" step="0.1" />
                  </div>
                  <div>
                    <Label>Suhu Demam Minimal (°C)</Label>
                    <Input type="number" defaultValue="37.5" step="0.1" />
                  </div>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600">
                Simpan Pengaturan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
