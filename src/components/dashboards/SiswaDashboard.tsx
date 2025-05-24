
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Thermometer, Weight, Ruler, Heart, AlertCircle, Calendar, TrendingUp } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SiswaDashboardProps {
  user: any;
}

const SiswaDashboard = ({ user }: SiswaDashboardProps) => {
  const { toast } = useToast();
  const [healthData, setHealthData] = useState({
    temperature: '',
    weight: '',
    height: '',
    complaint: '',
    severity: ''
  });

  const [healthHistory] = useState([
    { date: '2024-01-20', temperature: '36.5', weight: '35', height: '140', complaint: 'Sehat' },
    { date: '2024-01-19', temperature: '37.2', weight: '35', height: '140', complaint: 'Sedikit pusing' },
    { date: '2024-01-18', temperature: '36.8', weight: '35', height: '140', complaint: 'Sehat' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi data
    if (!healthData.temperature || !healthData.weight || !healthData.height) {
      toast({
        title: "Data tidak lengkap",
        description: "Mohon isi semua data kesehatan yang diperlukan",
        variant: "destructive"
      });
      return;
    }

    // Simpan data (dalam implementasi nyata akan tersimpan ke database)
    toast({
      title: "Data berhasil disimpan!",
      description: "Data kesehatan harian kamu telah tercatat dengan baik",
    });

    // Reset form
    setHealthData({
      temperature: '',
      weight: '',
      height: '',
      complaint: '',
      severity: ''
    });
  };

  const getTemperatureStatus = (temp: string) => {
    const temperature = parseFloat(temp);
    if (temperature >= 37.5) return { status: 'Demam', color: 'text-red-600' };
    if (temperature >= 37) return { status: 'Sedikit Hangat', color: 'text-yellow-600' };
    return { status: 'Normal', color: 'text-green-600' };
  };

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Halo, {user.name}! 👋</CardTitle>
          <CardDescription className="text-blue-100">
            Jangan lupa catat data kesehatanmu hari ini ya! Kesehatan adalah hal yang paling penting.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Data Kesehatan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Catat Data Kesehatan Hari Ini
            </CardTitle>
            <CardDescription>
              Isi data kesehatanmu dengan jujur dan teliti
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="temperature" className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    Suhu Tubuh (°C)
                  </Label>
                  <Input
                    id="temperature"
                    type="number"
                    step="0.1"
                    placeholder="36.5"
                    value={healthData.temperature}
                    onChange={(e) => setHealthData({ ...healthData, temperature: e.target.value })}
                    required
                  />
                  {healthData.temperature && (
                    <p className={`text-sm ${getTemperatureStatus(healthData.temperature).color}`}>
                      Status: {getTemperatureStatus(healthData.temperature).status}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight" className="flex items-center gap-2">
                    <Weight className="h-4 w-4 text-blue-500" />
                    Berat Badan (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="35"
                    value={healthData.weight}
                    onChange={(e) => setHealthData({ ...healthData, weight: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height" className="flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-green-500" />
                    Tinggi Badan (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="140"
                    value={healthData.height}
                    onChange={(e) => setHealthData({ ...healthData, height: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="severity" className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    Tingkat Keluhan
                  </Label>
                  <Select value={healthData.severity} onValueChange={(value) => setHealthData({ ...healthData, severity: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih tingkat" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sehat">Sehat</SelectItem>
                      <SelectItem value="ringan">Keluhan Ringan</SelectItem>
                      <SelectItem value="sedang">Keluhan Sedang</SelectItem>
                      <SelectItem value="berat">Keluhan Berat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="complaint">Keluhan atau Catatan Kesehatan</Label>
                <Textarea
                  id="complaint"
                  placeholder="Ceritakan bagaimana perasaanmu hari ini. Apakah ada yang sakit atau tidak nyaman?"
                  value={healthData.complaint}
                  onChange={(e) => setHealthData({ ...healthData, complaint: e.target.value })}
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                <Heart className="h-4 w-4 mr-2" />
                Simpan Data Kesehatan
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Riwayat Kesehatan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Riwayat Kesehatan
            </CardTitle>
            <CardDescription>
              Data kesehatan kamu dalam beberapa hari terakhir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {healthHistory.map((record, index) => (
                <div key={index} className="border rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Calendar className="h-4 w-4" />
                      {new Date(record.date).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className={`text-sm ${getTemperatureStatus(record.temperature).color}`}>
                      {getTemperatureStatus(record.temperature).status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                    <div>Suhu: {record.temperature}°C</div>
                    <div>BB: {record.weight}kg</div>
                    <div>TB: {record.height}cm</div>
                  </div>
                  <div className="text-sm text-gray-700 mt-1">
                    Keluhan: {record.complaint}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips Kesehatan */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-green-700">💡 Tips Kesehatan Hari Ini</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p>🥛 <strong>Minum air putih</strong> minimal 8 gelas sehari</p>
              <p>🥗 <strong>Makan sayur dan buah</strong> setiap hari</p>
              <p>🏃 <strong>Olahraga ringan</strong> minimal 30 menit</p>
            </div>
            <div className="space-y-2">
              <p>😴 <strong>Tidur cukup</strong> 8-10 jam sehari</p>
              <p>🧼 <strong>Cuci tangan</strong> sebelum makan</p>
              <p>😊 <strong>Selalu ceria</strong> dan berpikir positif</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiswaDashboard;
