import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Menu from './components/Menu'
import ProductList from './components/ProductList'
import PreviewPage from './components/PreviewPage'
import FavoritesPage from './components/FavoritesPage'
import CheckoutPage from './components/CheckoutPage'
import LoginModal from './components/LoginModal'
import ProductDetail from './components/ProductDetail'
import ProductDetailPageWithLayout from './components/ProductDetailPageWithLayout'
import MyPurchasesPage from './components/MyPurchasesPage'
import VenderPage from './components/VenderPage'
import AyudaPage from './components/AyudaPage'
import Footer from './components/Footer'
import { productsData } from './data/products'
import { getAllProducts } from './services/fakeStoreApi'

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll al tope cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('ml_favorites')
    return saved ? JSON.parse(saved) : []
  })
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [purchases, setPurchases] = useState(() => {
    const saved = localStorage.getItem('ml_purchases')
    return saved ? JSON.parse(saved) : []
  })

  // Persistir favoritos en localStorage
  useEffect(() => {
    localStorage.setItem('ml_favorites', JSON.stringify(favorites))
  }, [favorites])

  // Cargar productos de FakeStore API al iniciar
  useEffect(() => {
    const loadInitialProducts = async () => {
      setIsLoading(true)
      try {
        const fakeStoreProducts = await getAllProducts()
        if (fakeStoreProducts && fakeStoreProducts.length > 0) {
          setProducts(fakeStoreProducts)
          setFilteredProducts(fakeStoreProducts)
        } else {
          setProducts(productsData)
          setFilteredProducts(productsData)
        }
      } catch (error) {
        console.error('Error cargando productos de FakeStore:', error)
        setProducts(productsData)
        setFilteredProducts(productsData)
      } finally {
        setIsLoading(false)
      }
    }
    loadInitialProducts()
  }, [])

  const scrollToProducts = () => {
    setTimeout(() => {
      document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products)
      return
    }
    const term = searchTerm.toLowerCase()
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      (product.description && product.description.toLowerCase().includes(term))
    )
    setFilteredProducts(filtered)
    if (location.pathname !== '/') {
      navigate('/')
    }
    scrollToProducts()
  }

  const handleCategoryFilter = (category) => {
    let filtered
    if (category === 'todos' || !category) {
      filtered = products
    } else if (category === 'ofertas') {
      filtered = products.filter(product => product.originalPrice && product.originalPrice > product.price)
    } else {
      filtered = products.filter(product => product.category === category)
    }
    setSelectedCategory(category)
    setFilteredProducts(filtered)
    if (location.pathname !== '/') {
      navigate('/')
    }
    scrollToProducts()
  }

  const handleAddToCart = (product) => {
    const qty = product.quantity || 1
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: qty }])
    }
  }

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const handleAddToFavorites = (product) => {
    const exists = favorites.find(fav => fav.id === product.id)
    if (exists) {
      setFavorites(favorites.filter(fav => fav.id !== product.id))
    } else {
      setFavorites([...favorites, product])
    }
  }

  const handleRemoveFromFavorites = (productId) => {
    setFavorites(favorites.filter(fav => fav.id !== productId))
  }

  const handleLogin = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true)
      setShowLogin(false)
    }
  }

  const handlePurchase = () => {
    if (cart.length === 0) return
    const newPurchases = cart.map((item) => ({
      id: Date.now() + Math.random(),
      orderId: `ML-${Math.floor(Date.now() / 1000)}`,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
      status: 'pendiente',
      date: new Date().toISOString(),
    }))
    const updatedPurchases = [...purchases, ...newPurchases]
    setPurchases(updatedPurchases)
    localStorage.setItem('ml_purchases', JSON.stringify(updatedPurchases))
    setCart([])
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handleCartClick = () => navigate('/carrito')

  // Props comunes para Navbar
  const navbarProps = {
    onSearch: handleSearch,
    isLoggedIn,
    onLoginClick: () => setShowLogin(true),
    onLogoutClick: handleLogout,
    cartCount: cart.length,
    onCartClick: handleCartClick,
    favoritesCount: favorites.length,
    onCategorySelect: handleCategoryFilter,
  }

  return (
    <>
      <Routes>
        <Route path="/producto/:productId" element={
          <ProductDetailPageWithLayout
            onSearch={handleSearch}
            isLoggedIn={isLoggedIn}
            onLoginClick={() => setShowLogin(true)}
            onLogoutClick={handleLogout}
            cart={cart}
            favorites={favorites}
            onCartClick={handleCartClick}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
            onCategorySelect={handleCategoryFilter}
          />
        } />

        <Route path="/preview" element={
          <PreviewPage
            products={filteredProducts}
            favorites={favorites}
            cart={cart}
            isLoggedIn={isLoggedIn}
            onSearch={handleSearch}
            onLoginClick={() => setShowLogin(true)}
            onLogoutClick={handleLogout}
            onCartClick={handleCartClick}
            onAddToCart={handleAddToCart}
            onViewDetails={setSelectedProductId}
            onAddToFavorites={handleAddToFavorites}
            onRemoveFromCart={handleRemoveFromCart}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            onCategorySelect={handleCategoryFilter}
          />
        } />

        <Route path="/favoritos" element={
          <FavoritesPage
            favorites={favorites}
            cart={cart}
            isLoggedIn={isLoggedIn}
            onSearch={handleSearch}
            onLoginClick={() => setShowLogin(true)}
            onLogoutClick={handleLogout}
            onCartClick={handleCartClick}
            onRemoveFavorite={handleRemoveFromFavorites}
            onAddToCart={handleAddToCart}
            onCategorySelect={handleCategoryFilter}
          />
        } />

        <Route path="/ayuda" element={
          <AyudaPage
            isLoggedIn={isLoggedIn}
            onSearch={handleSearch}
            onLoginClick={() => setShowLogin(true)}
            onLogoutClick={handleLogout}
            cart={cart}
            favorites={favorites}
            onCartClick={handleCartClick}
            onCategorySelect={handleCategoryFilter}
          />
        } />

        <Route path="/mis-compras" element={
          <MyPurchasesPage
            purchases={purchases}
            isLoggedIn={isLoggedIn}
            cart={cart}
            favorites={favorites}
            onSearch={handleSearch}
            onLoginClick={() => setShowLogin(true)}
            onLogoutClick={handleLogout}
            onCartClick={handleCartClick}
            onCategorySelect={handleCategoryFilter}
          />
        } />

        <Route path="/vender" element={
          <VenderPage
            isLoggedIn={isLoggedIn}
            onSearch={handleSearch}
            onLoginClick={() => setShowLogin(true)}
            onLogoutClick={handleLogout}
            cart={cart}
            favorites={favorites}
            onCartClick={handleCartClick}
            onCategorySelect={handleCategoryFilter}
          />
        } />

        <Route path="/carrito" element={
          <div className="min-h-screen bg-ml-gray flex flex-col">
            <Navbar {...navbarProps} />
            <main className="flex-1">
              <CheckoutPage cart={cart} onRemoveFromCart={handleRemoveFromCart} onPurchase={handlePurchase} />
            </main>
            <Footer onCategorySelect={handleCategoryFilter} />
          </div>
        } />

        <Route path="/" element={
          <div className="min-h-screen bg-ml-gray flex flex-col">
            <Navbar {...navbarProps} />
            <Banner />
            <Menu onCategorySelect={handleCategoryFilter} selectedCategory={selectedCategory} />
            <main id="products-section" className="flex-1">
              <ProductList
                products={filteredProducts}
                onAddToCart={handleAddToCart}
                isLoading={isLoading}
                onViewDetails={setSelectedProductId}
                onAddToFavorites={handleAddToFavorites}
                favorites={favorites}
              />
            </main>
            <Footer onCategorySelect={handleCategoryFilter} />
          </div>
        } />
      </Routes>

      {showLogin && (
        <LoginModal
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}

      {selectedProductId && (
        <ProductDetail
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App