"use client"

import { Leaf } from "lucide-react"

interface LandingPageProps {
  setPage: (page: string) => void
}

export default function LandingPage({ setPage }: LandingPageProps) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://i.pinimg.com/1200x/cb/68/a2/cb68a20cdb904bd8a4efac04e52d77de.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Leaf className="h-20 w-20 text-teal-300 mb-4" />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            Paradise Nursery
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p
            className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
          >
            Bring nature into your home. Discover our curated selection of beautiful, healthy plants.
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <button
            onClick={() => setPage("products")}
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Explore Our Collection
          </button>
        </div>
      </div>
    </div>
  )
}
