'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-orange-600">EVI RAHAYU MEGAWATI</span>
            </div>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-orange-600">EVI RAHAYU MEGAWATI</span>
          </h1>
          <p className="text-xl text-gray-600">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-orange-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di Warung Sembako EVI RAHAYU MEGAWATI. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-6 h-6 text-orange-600" />
                Pengumpulan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Informasi yang Kami Kumpulkan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Data Pribadi:</strong> Nama, alamat, nomor telepon, email</li>
                <li><strong>Data Pembelian:</strong> Riwayat pembelian, produk yang dipesan, metode pembayaran</li>
                <li><strong>Data Pengiriman:</strong> Alamat pengiriman, waktu pengiriman</li>
                <li><strong>Data Teknis:</strong> Alamat IP, browser, perangkat yang digunakan</li>
              </ul>
              <p>
                Kami hanya mengumpulkan data yang diperlukan untuk menyediakan layanan terbaik kepada Anda.
              </p>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-orange-600" />
                Penggunaan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Kami menggunakan data Anda untuk:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memproses dan menyelesaikan pesanan Anda</li>
                <li>Menyediakan layanan pengiriman</li>
                <li>Memberikan informasi tentang produk dan promosi</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Memberikan dukungan pelanggan</li>
                <li>Memastikan keamanan transaksi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-orange-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Langkah-langkah Keamanan Kami:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enkripsi data sensitif</li>
                <li>Akses terbatas ke data pribadi</li>
                <li>Server yang aman dan terlindungi</li>
                <li>Backup data rutin</li>
                <li>Update keamanan berkala</li>
              </ul>
              <p>
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, 
                kecuali jika diwajibkan oleh hukum.
              </p>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-orange-600" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Hak-hak Anda:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Akses:</strong> Anda dapat meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Koreksi:</strong> Anda dapat memperbarui data pribadi yang tidak akurat</li>
                <li><strong>Penghapusan:</strong> Anda dapat meminta penghapusan data pribadi Anda</li>
                <li><strong>Pembatasan:</strong> Anda dapat membatasi penggunaan data pribadi Anda</li>
                <li><strong>Penolakan:</strong> Anda dapat menolak penggunaan data untuk tujuan pemasaran</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-6 h-6 text-orange-600" />
                Kebijakan Cookie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami menggunakan cookie untuk meningkatkan pengalaman browsing Anda. Cookie membantu kami:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mengingat preferensi Anda</li>
                <li>Menyimpan item di keranjang belanja</li>
                <li>Menganalisis traffic website</li>
                <li>Menyediakan konten yang dipersonalisasi</li>
              </ul>
              <p>
                Anda dapat mengatur browser untuk menolak cookie, namun ini dapat mempengaruhi fungsionalitas website.
              </p>
            </CardContent>
          </Card>

          {/* Third Party */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-orange-600" />
                Pihak Ketiga
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami dapat berbagi data dengan pihak ketiga berikut untuk tujuan operasional:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Layanan Pengiriman:</strong> Untuk pengiriman pesanan</li>
                <li><strong>Payment Gateway:</strong> Untuk pemrosesan pembayaran</li>
                <li><strong>Analytics:</strong> Untuk analisis website (anonim)</li>
                <li><strong>Otoritas Hukum:</strong> Jika diwajibkan oleh hukum</li>
              </ul>
              <p>
                Semua pihak ketiga yang kami ajak bekerja sama telah melalui proses due diligence yang ketat.
              </p>
            </CardContent>
          </Card>

          {/* Changes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-orange-600" />
                Perubahan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pemberitahuan di website</li>
                <li>Email kepada pengguna terdaftar</li>
                <li>Pemberitahuan saat login berikutnya</li>
              </ul>
              <p>
                Penggunaan terus-menerus layanan kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-orange-600" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, silakan hubungi:
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p><strong>Nama:</strong> EVI RAHAYU MEGAWATI</p>
                <p><strong>Alamat:</strong> PERUM BDB 2 BLOK ES NO.6, Desa Sukahati, Kec. Cibinong, Kab. Bogor, Jawa Barat 16913</p>
                <p><strong>Telepon:</strong> 0823-8246-6214</p>
                <p><strong>Email:</strong> evirahayu@email.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}