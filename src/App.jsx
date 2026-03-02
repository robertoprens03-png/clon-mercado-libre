import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Menu from './components/Menu'
import ProductList from './components/ProductList'
import ProductPreview from './components/ProductPreview'
import PreviewPage from './components/PreviewPage'
import Favorites from './components/Favorites'
import CheckoutPage from './components/CheckoutPage'
import LoginModal from './components/LoginModal'
import ProductDetail from './components/ProductDetail'
import ProductDetailPage from './components/ProductDetailPage'
import ProductDetailPageWithLayout from './components/ProductDetailPageWithLayout'
import MyPurchases from './components/MyPurchases'
import Footer from './components/Footer'
import { productsData } from './data/products'
import { searchProducts } from './services/mlApi'
import { getAllProducts, searchProducts as searchFakeStore } from './services/fakeStoreApi'

function App() {
  // Note: useLocation cannot be used at the top-level of this file while
  // App is rendered inside Router. We'll create a small inner component below
  // to capture location changes and forward category state.
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('ml_favorites')
    return saved ? JSON.parse(saved) : []
  })
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [pendingNavigation, setPendingNavigation] = useState(null)
  const [showMyPurchases, setShowMyPurchases] = useState(false)
  const [purchases, setPurchases] = useState(() => {
    const saved = localStorage.getItem('ml_purchases')
    return saved ? JSON.parse(saved) : []
  })

  // Cargar productos de FakeStore API al iniciar
  useEffect(() => {
    const loadInitialProducts = async () => {
      setIsLoading(true)

      try {
        // Obtener todos los productos de FakeStore API
        const fakeStoreProducts = await getAllProducts()
        
        if (fakeStoreProducts && fakeStoreProducts.length > 0) {
          setProducts(fakeStoreProducts)
          setFilteredProducts(fakeStoreProducts)
        } else {
          // Si FakeStore falla, usar productos locales
          setProducts(productsData)
          setFilteredProducts(productsData)
        }
      } catch (error) {
        console.error('Error cargando productos de FakeStore:', error)
        // Fallback a productos locales
        setProducts(productsData)
        setFilteredProducts(productsData)
      } finally {
        setIsLoading(false)
      }
    }

    loadInitialProducts()
  }, [])

  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim() === '') {
      // Si está vacío, mostrar todos los productos
      setFilteredProducts(products)
      return
    }

    // Buscar en FakeStore API
    setIsLoading(true)
    const fakeStoreResults = await searchFakeStore(searchTerm)
    setIsLoading(false)

    if (fakeStoreResults.length > 0) {
      // Mostrar resultados de FakeStore
      setFilteredProducts(fakeStoreResults)
    } else {
      // Si no hay resultados, filtrar locales
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }

  // Inner component to handle category filter with navigation
  function AppContent() {
    const navigate = useNavigate()
    const location = useLocation()

    // Usar useEffect para navegar cuando el estado de pendingNavigation cambia
    useEffect(() => {
      if (pendingNavigation) {
        navigate('/')
        setPendingNavigation(null)
      }
    }, [pendingNavigation, navigate])

    const handleCategoryFilterWithNav = (category) => {
      console.log('Filtrando categoría:', category)
      
      // Filtrar productos
      let filtered = products
      
      if (category === 'todos') {
        filtered = products
      } else if (category === 'ofertas') {
        filtered = products.filter(product => product.originalPrice && product.originalPrice > product.price)
      } else {
        // Filtrar por categoría de FakeStore
        filtered = products.filter(product => product.category === category)
      }
      
      // Actualizar todos los estados
      setSelectedCategory(category)
      setFilteredProducts(filtered)
      
      // Establecer navegación pendiente para después del render
      setPendingNavigation(true)
    }

    useEffect(() => {
      if (location && location.state && location.state.category) {
        handleCategoryFilterWithNav(location.state.category)
      }
    }, [location])

    return (
      <Routes>
        {/* Ruta para vista individual de producto en página completa con Navbar y Footer */}
        <Route path="/producto/:productId" element={
          <ProductDetailPageWithLayout
            onSearch={handleSearch}
            isLoggedIn={isLoggedIn}
            onLoginClick={() => setShowLogin(true)}
            onLogoutClick={handleLogout}
            cart={cart}
            favorites={favorites}
            onCartClick={() => setShowCart(!showCart)}
            onFavoritesClick={() => setShowFavorites(!showFavorites)}
            onMyPurchasesClick={() => setShowMyPurchases(true)}
            onAddToCart={handleAddToCart}
            onAddToFavorites={handleAddToFavorites}
            onCategorySelect={handleCategoryFilterWithNav}
          />
        } />
        
        {/* Ruta para vista previa paginada con Navbar y Footer */}
        <Route path="/preview" element={
          <PreviewPage
            products={filteredProducts}
            favorites={favorites}
            cart={cart}
            isLoggedIn={isLoggedIn}
            onSearch={handleSearch}
            onLoginClick={() => setShowLogin(true)}
            onLogoutClick={handleLogout}
            onCartClick={() => setShowCart(!showCart)}
            onFavoritesClick={() => setShowFavorites(!showFavorites)}
            onMyPurchasesClick={() => setShowMyPurchases(true)}
            onAddToCart={handleAddToCart}
            onViewDetails={setSelectedProductId}
            onAddToFavorites={handleAddToFavorites}
            onRemoveFromCart={handleRemoveFromCart}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            onCategorySelect={handleCategoryFilterWithNav}
          />
        } />
        
        {/* Ruta principal con toda la interfaz */}
        <Route path="/" element={
          <div className="min-h-screen bg-ml-gray flex flex-col">
            <Navbar
              onSearch={handleSearch}
              isLoggedIn={isLoggedIn}
              onLoginClick={() => setShowLogin(true)}
              onLogoutClick={handleLogout}
              cartCount={cart.length}
              onCartClick={() => setShowCart(!showCart)}
              favoritesCount={favorites.length}
              onFavoritesClick={() => setShowFavorites(!showFavorites)}
              onMyPurchasesClick={() => setShowMyPurchases(true)}
              onCategorySelect={handleCategoryFilterWithNav}
            />
            
            {!showCart && !showFavorites && <Banner />}
            
            <Menu onCategorySelect={handleCategoryFilterWithNav} selectedCategory={selectedCategory} />

            <main className="flex-1">
              {showCart ? (
                <CheckoutPage cart={cart} onRemoveFromCart={handleRemoveFromCart} />
              ) : showFavorites ? (
                <Favorites 
                  favorites={favorites} 
                  onRemoveFavorite={handleRemoveFromFavorites}
                  onAddToCart={handleAddToCart}
                  onViewDetails={setSelectedProductId}
                />
              ) : showPreview ? (
                <ProductPreview 
                  products={filteredProducts} 
                  onAddToCart={handleAddToCart}
                  onViewDetails={setSelectedProductId}
                  onAddToFavorites={handleAddToFavorites}
                  favorites={favorites}
                />
              ) : (
                <ProductList 
                  products={filteredProducts} 
                  onAddToCart={handleAddToCart} 
                  isLoading={isLoading}
                  onViewDetails={setSelectedProductId}
                  onAddToFavorites={handleAddToFavorites}
                  favorites={favorites}
                />
              )}
            </main>

            <Footer />

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

            {showMyPurchases && (
              <MyPurchases
                purchases={purchases}
                onClose={() => setShowMyPurchases(false)}
              />
            )}
          </div>
        } />
      </Routes>
    )
  }

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
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
    // Convertir items del carrito a compras
    const newPurchases = cart.map((item) => ({
      id: Date.now() + Math.random(),
      orderId: `ML-${Date.now()}`,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
      status: 'pendiente',
      date: new Date().toISOString(),
    }))

    // Agregar a compras
    const updatedPurchases = [...purchases, ...newPurchases]
    setPurchases(updatedPurchases)
    localStorage.setItem('ml_purchases', JSON.stringify(updatedPurchases))

    // Limpiar carrito
    setCart([])
    setShowCart(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
