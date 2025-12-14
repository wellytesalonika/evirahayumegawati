'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Phone, Mail, MapPin, Clock, ShoppingBag, Star, Package, Truck, Shield, ChevronRight, Menu, X, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import Cart from '@/components/Cart'

interface Product {
  id: number
  name: string
  category: string
  price: number
  unit: string
  description: string
  stock: number
  isBestseller: boolean
  image: string
}

interface CartItem {
  id: number
  name: string
  price: number
  unit: string
  quantity: number
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Fetch products dari API
  useEffect(() => {
    fetchProducts()
  }, [selectedCategory, searchTerm])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (selectedCategory !== 'all') params.append('category', selectedCategory)
      if (searchTerm) params.append('search', searchTerm)
      
      const response = await fetch(`/api/products?${params}`)
      const data = await response.json()
      
      if (data.success) {
        setProducts(data.data)
        setCategories(data.categories || [])
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  // Cart functions
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        quantity: 1
      }]
    })
  }

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Terima kasih! Pesanan Anda akan segera diproses.')
    setCartItems([])
    setIsCartOpen(false)
  }

  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Produk Lengkap",
      description: "Berbagai macam sembako kebutuhan rumah tangga tersedia"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Pengantaran",
      description: "Layanan antar ke rumah untuk pembelian minimal tertentu"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Kualitas Terjamin",
      description: "Produk segar dan berkualitas dengan harga terjangkau"
    }
  ]

  const testimonials = [
    {
      name: "Ibu Siti",
      message: "Harga murah, pelayanan ramah. Semua kebutuhan dapur tersedia di sini!",
      rating: 5
    },
    {
      name: "Pak Budi",
      message: "Warung sembako terdekat dengan stok lengkap. Sangat membantu kebutuhan sehari-hari.",
      rating: 5
    },
    {
      name: "Ibu Ani",
      message: "Kualitas produk bagus, selalu fresh. Sudah langganan bertahun-tahun.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-orange-600">EVI RAHAYU MEGAWATI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">Kontak</a>
              <Link href="/privacy" className="text-gray-700 hover:text-orange-600 transition">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-orange-600 transition">Terms</Link>
              <Button
                variant="outline"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Keranjang
                {getTotalCartItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs">
                    {getTotalCartItems()}
                  </Badge>
                )}
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Beranda</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Produk</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Kontak</a>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                Warung Sembako Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Selamat Datang di <span className="text-orange-600">EVI RAHAYU MEGAWATI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Solusi lengkap kebutuhan sembako keluarga Anda. Harga terjangkau, kualitas terjamin, dan pelayanan terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Lihat Produk
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="EVI RAHAYU MEGAWATI Logo" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-orange-600">EVI RAHAYU MEGAWATI</span>
            </h2>
            <p className="text-xl text-gray-600">Kami berkomitmen memberikan yang terbaik untuk kebutuhan sembako Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Kami</h2>
            <p className="text-xl text-gray-600">Berbagai macam sembako berkualitas dengan harga terjangkau</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">Semua Kategori</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Button
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                  variant="outline"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded w-full"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      {product.isBestseller && (
                        <Badge className="bg-red-100 text-red-800">Terlaris</Badge>
                      )}
                    </div>
                    <CardDescription>{product.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-orange-600">
                        {formatPrice(product.price)}/{product.unit}
                      </span>
                      <span className="text-sm text-gray-500">Stok: {product.stock}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      disabled={product.stock === 0}
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      {product.stock === 0 ? 'Habis' : 'Tambah ke Keranjang'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-orange-600">EVI RAHAYU MEGAWATI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Warung sembako kami telah melayani masyarakat Cibinong dan sekitarnya dengan menyediakan berbagai kebutuhan pokok sehari-hari. Kami berkomitmen untuk memberikan produk berkualitas dengan harga yang terjangkau.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Dengan pengalaman bertahun-tahun, kami memahami kebutuhan keluarga Indonesia akan sembako yang berkualitas. Stok kami selalu tersedia dan selalu segar untuk memenuhi kebutuhan Anda.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-gray-600">Pelanggan Setia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-gray-600">Jenis Produk</div>
                </div>
              </div>
            </div>
            <div className="bg-orange-100 rounded-2xl p-8">
              <Clock className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Jam Buka</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Senin - Sabtu:</span>
                  <span className="font-semibold">06:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu:</span>
                  <span className="font-semibold">07:00 - 20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Pelanggan</h2>
            <p className="text-xl text-gray-600">Kepuasan pelanggan adalah prioritas kami</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.message}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Kunjungi warung kami atau hubungi untuk informasi lebih lanjut</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-600">PERUM BDB 2 BLOK ES NO.6, Desa Sukahati, Kec. Cibinong, Kab. Bogor, Jawa Barat 16913</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-600">0823-8246-6214</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">evirahayu@email.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-6">Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <textarea
                    placeholder="Pesan Anda"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">EVI RAHAYU MEGAWATI</span>
              </div>
              <p className="text-gray-400">Warung sembako terpercaya untuk kebutuhan pokok keluarga Anda.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-orange-400 transition">Beranda</a></li>
                <li><a href="#products" className="hover:text-orange-400 transition">Produk</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition">Tentang</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-orange-400 transition">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Jam Operasional</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Senin - Sabtu: 06:00 - 21:00</li>
                <li>Minggu: 07:00 - 20:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EVI RAHAYU MEGAWATI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cart Component */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  )
}