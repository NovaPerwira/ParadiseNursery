"use client"

import { useState } from "react"
import LandingPage from "@/components/landing-page"
import ProductsPage from "@/components/products-page"
import CartPage from "@/components/cart-page"
import CheckoutSuccessPage from "@/components/checkout-success-page"
import Header from "@/components/header"

// Sample product data
const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 29.99,
    category: "Indoor",
    image: "https://i.pinimg.com/1200x/cb/68/a2/cb68a20cdb904bd8a4efac04e52d77de.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 24.99,
    category: "Indoor",
    image: "https://i.pinimg.com/1200x/36/9a/d5/369ad5cade297f440bec64535fb4edb1.jpg",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 39.99,
    category: "Indoor",
    image: "https://i.pinimg.com/736x/37/f5/67/37f5672367f3ebf33f3c90bbe0167172.jpg",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 19.99,
    category: "Indoor",
    image: "https://i.pinimg.com/736x/68/2d/17/682d17899a57e938d88457b925493e95.jpg",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 34.99,
    category: "Indoor",
    image: "https://i.pinimg.com/736x/d2/93/a9/d293a9e7b85cce60533a76c109fd441e.jpg",
  },
  {
    id: 6,
    name: "Lavender",
    price: 16.99,
    category: "Outdoor",
    image: "https://i.pinimg.com/736x/8a/06/b9/8a06b92ca8ce74673e8f33883d439334.jpg",
  },
  {
    id: 7,
    name: "Rose Bush",
    price: 45.99,
    category: "Outdoor",
    image: "https://i.pinimg.com/1200x/4f/17/d9/4f17d92735f4b9909206de79dce5edcc.jpg",
  },
 
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState("landing")
  const [cart, setCart] = useState<
    Array<{
      id: number
      name: string
      price: number
      category: string
      image: string
      quantity: number
    }>
  >([])

  const addToCart = (product: (typeof products)[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const handleCheckout = () => {
    setCurrentPage("success")
    setCart([])
  }

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage setPage={setCurrentPage} />
      case "products":
        return <ProductsPage products={products} addToCart={addToCart} />
      case "cart":
        return (
          <CartPage
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            setPage={setCurrentPage}
            handleCheckout={handleCheckout}
          />
        )
      case "success":
        return <CheckoutSuccessPage setPage={setCurrentPage} />
      default:
        return <LandingPage setPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== "landing" && (
        <Header
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          setPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {renderPage()}
    </div>
  )
}
