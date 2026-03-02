import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductPreview from './ProductPreview'

export default function PreviewPage({ 
  products = [], 
  favorites = [],
  cart = [],
  isLoggedIn = false,
  onSearch = () => {},
  onLoginClick = () => {},
  onLogoutClick = () => {},
  onCartClick = () => {},
  onFavoritesClick = () => {},
  onMyPurchasesClick = () => {},
  onAddToCart = () => {},
  onViewDetails = () => {},
  onAddToFavorites = () => {},
  onRemoveFromCart = () => {},
  onRemoveFromFavorites = () => {},
  onCategorySelect = () => {}
}) {
  const [showCart, setShowCart] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)

  return (
    <div className="min-h-screen bg-ml-gray flex flex-col">
      <Navbar
        onSearch={onSearch}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
        cartCount={cart.length}
        onCartClick={() => {
          setShowCart(!showCart)
          setShowFavorites(false)
          onCartClick()
        }}
        favoritesCount={favorites.length}
        onFavoritesClick={() => {
          setShowFavorites(!showFavorites)
          setShowCart(false)
          onFavoritesClick()
        }}
        onMyPurchasesClick={onMyPurchasesClick}
        onCategorySelect={onCategorySelect}
      />

      <main className="flex-1">
        <ProductPreview
          products={products}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
          onAddToFavorites={onAddToFavorites}
          favorites={favorites}
        />
      </main>

      <Footer />
    </div>
  )
}
