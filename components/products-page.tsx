"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
}

interface ProductsPageProps {
  products: Product[]
  addToCart: (product: Product) => void
}

export default function ProductsPage({ products, addToCart }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", ...new Set(products.map((p) => p.category))]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center tracking-tight">Our Collection</h2>
      <p className="text-center text-gray-500 mb-10">Find the perfect plant for your space.</p>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-teal-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="overflow-hidden h-64">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h4 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h4>
              <p className="text-lg text-gray-600 mt-1">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300 flex items-center justify-center font-semibold"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
