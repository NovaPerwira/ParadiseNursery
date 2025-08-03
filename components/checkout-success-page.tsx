"use client"

import { CheckCircle } from "lucide-react"

interface CheckoutSuccessPageProps {
  setPage: (page: string) => void
}

export default function CheckoutSuccessPage({ setPage }: CheckoutSuccessPageProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto text-center py-16 bg-white rounded-xl shadow-lg">
        <CheckCircle className="h-20 w-20 mx-auto text-teal-500" />
        <h2 className="mt-6 text-4xl font-bold text-gray-800 tracking-tight">Thank You!</h2>
        <p className="mt-4 text-gray-600 text-lg">Your order has been placed successfully.</p>
        <p className="mt-2 text-gray-500">{"We've sent a confirmation to your email (just kidding!)."}</p>
        <button
          onClick={() => setPage("products")}
          className="mt-8 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-base transition duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}
