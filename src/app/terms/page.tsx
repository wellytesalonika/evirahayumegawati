'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, ShoppingCart, Package, CreditCard, AlertCircle, Users, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
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
            Syarat dan Ketentuan <span className="text-orange-600">EVI RAHAYU MEGAWATI</span>
          </h1>
          <p className="text-xl text-gray-600">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-orange-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di Warung Sembako EVI RAHAYU MEGAWATI. Syarat dan Ketentuan ini mengatur penggunaan layanan kami, 
                pembelian produk, dan hubungan hukum antara Anda dan EVI RAHAYU MEGAWATI.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. 
                Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, harap jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-orange-600" />
                Layanan Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Layanan yang Kami Sediakan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Penjualan Sembako:</strong> Berbagai macam kebutuhan pokok sehari-hari</li>
                <li><strong>Pengiriman:</strong> Layanan antar ke alamat pelanggan</li>
                <li><strong>Konsultasi Produk:</strong> Informasi tentang produk yang tersedia</li>
                <li><strong>Pemesanan Online:</strong> Pemesanan melalui telepon atau WhatsApp</li>
                <li><strong>Customer Service:</strong> Layanan pelanggan untuk pertanyaan dan keluhan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Product Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-6 h-6 text-orange-600" />
                Informasi Produk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Keterangan Produk:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Semua produk yang dijual adalah produk asli dan berkualitas</li>
                <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu</li>
                <li>Kami berusaha menyediakan informasi produk yang akurat</li>
                <li>Ketersediaan stok dapat berubah sesuai permintaan pasar</li>
                <li>Produk yang sudah dibeli tidak dapat dikembalikan kecuali ada cacat produksi</li>
              </ul>
              <p>
                Kami berhak menolak pesanan jika stok tidak tersedia atau ada alasan sah lainnya.
              </p>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-orange-600" />
                Pemesanan dan Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Prosedur Pemesanan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau datang langsung</li>
                <li>Konfirmasi pesanan akan dikirimkan setelah pemesanan diterima</li>
                <li>Pembayaran dapat dilakukan tunai atau transfer bank</li>
                <li>Pembayaran harus diselesaikan sebelum atau saat pengiriman</li>
                <li>Struk pembayaran akan diberikan untuk setiap transaksi</li>
              </ul>
              
              <h3 className="font-semibold text-lg">Syarat Pembayaran:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pembayaran tunai: Diterima saat pengiriman atau di toko</li>
                <li>Transfer bank: Pembayaran harus dikonfirmasi dengan bukti transfer</li>
                <li>Untuk pembelian besar, dapat dilakukan DP 50%</li>
                <li>Harga belum termasuk biaya pengiriman (jika ada)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-6 h-6 text-orange-600" />
                Pengiriman
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Ketentuan Pengiriman:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pengiriman tersedia untuk area Cibinong dan sekitarnya</li>
                <li>Minimal pembelian untuk pengiriman gratis adalah Rp 100.000</li>
                <li>Biaya pengiriman untuk pembelian di bawah minimal adalah Rp 10.000</li>
                <li>Waktu pengiriman: 09:00 - 18:00 (Senin-Sabtu)</li>
                <li>Pengiriman hari yang sama jika pesanan dilakukan sebelum pukul 12:00</li>
                <li>Pelanggan harus berada di alamat pengiriman saat barang tiba</li>
              </ul>
              
              <h3 className="font-semibold text-lg">Resiko Pengiriman:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kami tidak bertanggung jawab atas kerusakan setelah barang diterima</li>
                <li>Pemeriksaan barang harus dilakukan saat penerimaan</li>
                <li>Keluhan tentang kuantitas atau kualitas harus disampaikan langsung</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-600" />
                Tanggung Jawab Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Kewajiban Pelanggan:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memberikan informasi yang benar dan akurat</li>
                <li>Memastikan alamat pengiriman benar dan dapat diakses</li>
                <li>Melakukan pembayaran tepat waktu</li>
                <li>Memeriksa barang saat penerimaan</li>
                <li>Memberitahukan keluhan atau masalah dengan sopan</li>
                <li>Tidak menyalahgunakan layanan kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Batas Tanggung Jawab Kami:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kami tidak bertanggung jawab atas kerugian tidak langsung</li>
                <li>Tanggung jawab maksimal sebesar nilai pembelian</li>
                <li>Kami tidak bertanggung jawab atas keterlambatan pengiriman karena faktor eksternal</li>
                <li>Produk yang sudah dibeli tidak dapat dikembalikan kecuali cacat produksi</li>
                <li>Kami berhak membatasi jumlah pembelian per pelanggan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="w-6 h-6 text-orange-600" />
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Nama "EVI RAHAYU MEGAWATI", logo, dan semua konten di website ini adalah hak milik eksklusif dari EVI RAHAYU MEGAWATI. 
                Penggunaan tanpa izin dilarang keras.
              </p>
              <p>
                Pelanggan tidak boleh:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menyalin atau mendistribusikan konten kami tanpa izin</li>
                <li>Menggunakan nama atau logo kami untuk tujuan komersial</li>
                <li>Membuat tautan ke website kami tanpa persetujuan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                Pengakhiran Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Kami berhak menghentikan layanan jika:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pelanggan melanggar syarat dan ketentuan</li>
                <li>Pelanggan melakukan penipuan atau kegiatan ilegal</li>
                <li>Pelanggan berperilaku tidak sopan kepada staf</li>
                <li>Ada alasan bisnis yang sah untuk penghentian</li>
              </ul>
              <p>
                Pelanggan juga dapat berhenti menggunakan layanan kami kapan saja tanpa pemberitahuan.
              </p>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="w-6 h-6 text-orange-600" />
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Prosedur Penyelesaian Sengketa:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sengketa akan diselesaikan secara musyawarah terlebih dahulu</li>
                <li>Jika tidak ada kesepakatan, dapat menggunakan mediasi</li>
                <li>Sebagai upaya terakhir, sengketa akan diselesaikan melalui pengadilan</li>
                <li>Hukum yang berlaku adalah hukum Republik Indonesia</li>
                <li>Yurisdiksi adalah Pengadilan Negeri Bogor</li>
              </ul>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-orange-600" />
                Perubahan Syarat dan Ketentuan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku efektif setelah:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dipublikasikan di website kami</li>
                <li>Diberitahukan melalui WhatsApp atau telepon</li>
                <li>Ditampilkan di toko fisik</li>
              </ul>
              <p>
                Penggunaan terus-menerus layanan kami setelah perubahan berarti Anda menerima syarat yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-600" />
                Informasi Kontak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Untuk pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p><strong>Nama Usaha:</strong> EVI RAHAYU MEGAWATI</p>
                <p><strong>Pemilik:</strong> Ibu Ev Rahayu Megawati</p>
                <p><strong>Alamat:</strong> PERUM BDB 2 BLOK ES NO.6, Desa Sukahati, Kec. Cibinong, Kab. Bogor, Jawa Barat 16913</p>
                <p><strong>Telepon:</strong> 0823-8246-6214</p>
                <p><strong>Email:</strong> evirahayu@email.com</p>
                <p><strong>Jam Operasional:</strong> Senin-Sabtu 06:00-21:00, Minggu 07:00-20:00</p>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Gavel className="w-6 h-6" />
                Pernyataan Persetujuan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Dengan menggunakan layanan Warung Sembako EVI RAHAYU MEGAWATI, Anda menyatakan bahwa:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua/wali</li>
                <li>Anda memiliki kapasitas hukum untuk membuat perjanjian</li>
                <li>Anda akan mematuhi semua syarat dan ketentuan yang berlaku</li>
              </ul>
              <p className="font-semibold text-orange-800">
                Syarat dan ketentuan ini merupakan kesepakatan yang mengikat secara hukum antara Anda dan EVI RAHAYU MEGAWATI.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}