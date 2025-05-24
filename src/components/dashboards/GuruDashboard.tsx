
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, AlertTriangle, TrendingUp, MessageSquare, Search, Filter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface GuruDashboardProps {
  user: any;
}

const GuruDashboard = ({ user }: GuruDashboardProps) => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [response, setResponse] = useState('');
  
  // Data dummy untuk siswa dalam kelas guru
  const [studentsData] = useState([
    {
      id: 1,
      name: 'Ahmad Fauzan',
      class: user.class,
      lastUpdate: '2024-01-20',
      temperature: '37.2',
      weight: '35',
      height: '140',
      complaint: 'Sedikit pusing dan mual',
      severity: 'sedang',
      status: 'perlu_perhatian'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      class: user.class,
      lastUpdate: '2024-01-20',
      temperature: '36.5',
      weight: '32',
      height: '138',
      complaint: 'Sehat, tidak ada keluhan',
      severity: 'sehat',
      status: 'sehat'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      class: user.class,
      lastUpdate: '2024-01-20',
      temperature: '38.1',
      weight: '38',
      height: '142',
      complaint: 'Demam dan sakit kepala',
      severity: 'berat',
      status: 'urgent'
    },
    {
      id: 4,
      name: 'Dewi Sartika',
      class: user.class,
      lastUpdate: '2024-01-20',
      temperature: '36.8',
      weight: '33',
      height: '139',
      complaint: 'Batuk ringan',
      severity: 'ringan',
      status: 'perhatian'
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'urgent':
        return <Badge className="bg-red-500">Urgent</Badge>;
      case 'perlu_perhatian':
        return <Badge className="bg-yellow-500">Perlu Perhatian</Badge>;
      case 'perhatian':
        return <Badge className="bg-orange-500">Perhatian</Badge>;
      case 'sehat':
        return <Badge className="bg-green-500">Sehat</Badge>;
      default:
        return <Badge variant="secondary">Normal</Badge>;
    }
  };

  const getTemperatureStatus = (temp: string) => {
    const temperature = parseFloat(temp);
    if (temperature >= 38) return { status: 'Demam Tinggi', color: 'text-red-600' };
    if (temperature >= 37.5) return { status: 'Demam', color: 'text-red-500' };
    if (temperature >= 37) return { status: 'Sedikit Hangat', color: 'text-yellow-600' };
    return { status: 'Normal', color: 'text-green-600' };
  };

  const handleSendResponse = (studentId: number) => {
    toast({
      title: "Tanggapan berhasil dikirim",
      description: "Siswa akan menerima notifikasi tanggapan dari Anda",
    });
    setResponse('');
  };

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statsData = {
    total: studentsData.length,
    sehat: studentsData.filter(s => s.status === 'sehat').length,
    perhatian: studentsData.filter(s => s.status === 'perhatian' || s.status === 'perlu_perhatian').length,
    urgent: studentsData.filter(s => s.status === 'urgent').length
  };

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Selamat datang, Guru {user.name}! 👩‍🏫</CardTitle>
          <CardDescription className="text-green-100">
            Kelola dan pantau kesehatan siswa kelas {user.class} dengan mudah
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
                <p className="text-2xl font-bold text-blue-600">{statsData.total}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Siswa Sehat</p>
                <p className="text-2xl font-bold text-green-600">{statsData.sehat}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Perlu Perhatian</p>
                <p className="text-2xl font-bold text-yellow-600">{statsData.perhatian}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Urgent</p>
                <p className="text-2xl font-bold text-red-600">{statsData.urgent}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="students" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="students">Data Siswa</TabsTrigger>
          <TabsTrigger value="responses">Tanggapan & Catatan</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-4">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Cari nama siswa..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Students List */}
          <div className="grid gap-4">
            {filteredStudents.map((student) => (
              <Card key={student.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{student.name}</CardTitle>
                      <CardDescription>
                        Kelas {student.class} • Terakhir update: {new Date(student.lastUpdate).toLocaleDateString('id-ID')}
                      </CardDescription>
                    </div>
                    {getStatusBadge(student.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Data Kesehatan:</h4>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Suhu:</span>
                          <div className={`font-medium ${getTemperatureStatus(student.temperature).color}`}>
                            {student.temperature}°C
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">BB:</span>
                          <div className="font-medium">{student.weight} kg</div>
                        </div>
                        <div>
                          <span className="text-gray-600">TB:</span>
                          <div className="font-medium">{student.height} cm</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Keluhan:</h4>
                      <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                        {student.complaint}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Lihat Detail
                      </Button>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Beri Tanggapan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="responses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Kirim Tanggapan ke Siswa</CardTitle>
              <CardDescription>
                Berikan tanggapan, saran, atau catatan untuk siswa yang memerlukan perhatian khusus
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Pilih Siswa:</label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option value="">Pilih siswa...</option>
                  {studentsData.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name} - {getTemperatureStatus(student.temperature).status}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Tanggapan/Catatan:</label>
                <Textarea
                  placeholder="Tulis tanggapan, saran, atau instruksi untuk siswa..."
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  rows={4}
                  className="mt-1"
                />
              </div>
              <Button onClick={() => handleSendResponse(1)} className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Kirim Tanggapan
              </Button>
            </CardContent>
          </Card>

          {/* Recent Responses */}
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Tanggapan Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Untuk: Siti Nurhaliza</p>
                      <p className="text-sm text-gray-600">Bagus! Pertahankan pola hidup sehat. Jangan lupa minum air putih yang cukup.</p>
                    </div>
                    <span className="text-xs text-gray-500">2 jam lalu</span>
                  </div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Untuk: Ahmad Fauzan</p>
                      <p className="text-sm text-gray-600">Sebaiknya istirahat yang cukup. Kalau masih pusing, segera ke UKS ya.</p>
                    </div>
                    <span className="text-xs text-gray-500">1 hari lalu</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GuruDashboard;
