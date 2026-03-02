import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductDetailPage from './ProductDetailPage'

export default function ProductDetailPageWithLayout({
  onSearch = () => {},
  isLoggedIn = false,
  onLoginClick = () => {},
  onLogoutClick = () => {},
  cart = [],
  favorites = [],
  onCartClick = () => {},
  onFavoritesClick = () => {},
  onMyPurchasesClick = () => {},
  onAddToCart = () => {},
  onAddToFavorites = () => {},
  onCategorySelect = () => {}
}) {
  const { productId } = useParams()

  return (
    <div className="min-h-screen bg-ml-gray flex flex-col">
      <Navbar
        onSearch={onSearch}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
        cartCount={cart.length}
        onCartClick={onCartClick}
        favoritesCount={favorites.length}
        onFavoritesClick={onFavoritesClick}
        onMyPurchasesClick={onMyPurchasesClick}
        onCategorySelect={onCategorySelect}
      />

      <main className="flex-1">
        <ProductDetailPage
          productId={productId}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
          isFavorite={favorites.some(fav => fav.id === productId)}
        />
      </main>

      <Footer />
    </div>
  )
}
