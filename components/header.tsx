"use client"

import { ShoppingCart, Leaf } from "lucide-react"

interface HeaderProps {
  cartCount: number
  setPage: (page: string) => void
  currentPage: string
}

export default function Header({ cartCount, setPage, currentPage }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setPage("landing")}>
            <Leaf className="h-8 w-8 text-teal-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">Paradise Nursery</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setPage("landing")}
              className={`text-gray-600 hover:text-teal-600 transition-colors ${
                currentPage === "landing" ? "text-teal-600 font-semibold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setPage("products")}
              className={`text-gray-600 hover:text-teal-600 transition-colors ${
                currentPage === "products" ? "text-teal-600 font-semibold" : ""
              }`}
            >
              Products
            </button>
          </nav>

          <button
            onClick={() => setPage("cart")}
            className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
