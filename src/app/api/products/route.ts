import { NextRequest, NextResponse } from 'next/server'

// Mock data produk untuk warung sembako
const products = [
  {
    id: 1,
    name: "Beras Premium",
    category: "Bahan Pokok",
    price: 12000,
    unit: "kg",
    description: "Beras kualitas premium, pulen dan wangi",
    stock: 50,
    isBestseller: true,
    image: "/api/placeholder/300/300"
  },
  {
    id: 2,
    name: "Minyak Goreng",
    category: "Bahan Pokok", 
    price: 18000,
    unit: "L",
    description: "Minyak goreng kemasan 1 liter",
    stock: 30,
    isBestseller: false,
    image: "/api/placeholder/300/300"
  },
  {
    id: 3,
    name: "Gula Pasir",
    category: "Bahan Pokok",
    price: 14000,
    unit: "kg", 
    description: "Gula pasir kualitas terbaik",
    stock: 40,
    isBestseller: false,
    image: "/api/placeholder/300/300"
  },
  {
    id: 4,
    name: "Tepung Terigu",
    category: "Bahan Pokok",
    price: 10000,
    unit: "kg",
    description: "Tepung terigu segar berkualitas",
    stock: 25,
    isBestseller: false,
    image: "/api/placeholder/300/300"
  },
  {
    id: 5,
    name: "Telur Ayam",
    category: "Protein",
    price: 28000,
    unit: "kg",
    description: "Telur ayam segar berkualitas",
    stock: 20,
    isBestseller: true,
    image: "/api/placeholder/300/300"
  },
  {
    id: 6,
    name: "Indomie Goreng",
    category: "Mie Instan",
    price: 3000,
    unit: "bungkus",
    description: "Mie instan favorit keluarga Indonesia",
    stock: 100,
    isBestseller: true,
    image: "/api/placeholder/300/300"
  },
  {
    id: 7,
    name: "Kecap Manis",
    category: "Bumbu Dapur",
    price: 8000,
    unit: "botol",
    description: "Kecap manis kemasan botol",
    stock: 35,
    isBestseller: false,
    image: "/api/placeholder/300/300"
  },
  {
    id: 8,
    name: "Garam",
    category: "Bumbu Dapur",
    price: 3000,
    unit: "pack",
    description: "Garam beryodium kemasan",
    stock: 60,
    isBestseller: false,
    image: "/api/placeholder/300/300"
  },
  {
    id: 9,
    name: "Santan Kara",
    category: "Bumbu Dapur",
    price: 5000,
    unit: "pack",
    description: "Santan instan kemasan 65ml",
    stock: 45,
    isBestseller: false,
    image: "/api/placeholder/300/300"
  },
  {
    id: 10,
    name: "Kopi Kapal Api",
    category: "Minuman",
    price: 12000,
    unit: "pack",
    description: "Kopi instan kapal api",
    stock: 40,
    isBestseller: true,
    image: "/api/placeholder/300/300"
  },
  {
    id: 11,
    name: "Teh Sariwangi",
    category: "Minuman",
    price: 8000,
    unit: "box",
    description: "Teh celup sariwangi",
    stock: 50,
    isBestseller: false,
    image: "/api/placeholder/300/300"
  },
  {
    id: 12,
    name: "Susu Indomilk",
    category: "Minuman",
    price: 15000,
    unit: "karton",
    description: "Susu kemasan 1 liter",
    stock: 25,
    isBestseller: false,
    image: "/api/placeholder/300/300"
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const bestseller = searchParams.get('bestseller')
    const search = searchParams.get('search')

    let filteredProducts = [...products]

    // Filter berdasarkan kategori
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      )
    }

    // Filter berdasarkan bestseller
    if (bestseller === 'true') {
      filteredProducts = filteredProducts.filter(product => product.isBestseller)
    }

    // Filter berdasarkan pencarian
    if (search) {
      const searchLower = search.toLowerCase()
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredProducts,
      total: filteredProducts.length,
      categories: [...new Set(products.map(p => p.category))],
      message: "Products retrieved successfully"
    })

  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to fetch products",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validasi input
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Name, price, and category are required" 
        },
        { status: 400 }
      )
    }

    // Buat produk baru (dalam implementasi nyata, ini akan disimpan ke database)
    const newProduct = {
      id: products.length + 1,
      name: body.name,
      category: body.category,
      price: body.price,
      unit: body.unit || "pcs",
      description: body.description || "",
      stock: body.stock || 0,
      isBestseller: body.isBestseller || false,
      image: body.image || "/api/placeholder/300/300"
    }

    products.push(newProduct)

    return NextResponse.json({
      success: true,
      data: newProduct,
      message: "Product created successfully"
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to create product",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}