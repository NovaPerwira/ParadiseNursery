"use client"

import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"

interface CartItem {
  id: number
  name: string
  price: number
  category: string
  image: string
  quantity: number
}

interface CartPageProps {
  cart: CartItem[]
  updateQuantity: (id: number, change: number) => void
  removeFromCart: (id: number) => void
  setPage: (page: string) => void
  handleCheckout: () => void
}

export default function CartPage({ cart, updateQuantity, removeFromCart, setPage, handleCheckout }: CartPageProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center tracking-tight">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <ShoppingCart className="h-20 w-20 mx-auto text-gray-300" />
          <p className="mt-4 text-gray-500 text-xl">Your cart is empty.</p>
          <button
            onClick={() => setPage("products")}
            className="mt-6 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-6 rounded-full text-base transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-xl shadow-md transition-shadow hover:shadow-lg"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  <p className="text-teal-600 font-semibold mt-1">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Minus className="h-4 w-4 text-gray-700" />
                  </button>
                  <span className="w-10 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Plus className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-6 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-24">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">Order Summary</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span className="font-medium">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg text-gray-800 pt-2 border-t">
                <span>Total Cost</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition duration-300 font-semibold text-lg"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => setPage("products")}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-full hover:bg-gray-300 transition duration-300 font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
