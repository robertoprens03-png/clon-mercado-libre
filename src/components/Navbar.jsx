import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoML from '../img/logos/logo-mercadolibre.webp'

export default function Navbar({ onSearch, isLoggedIn, onLoginClick, onLogoutClick, cartCount, onCartClick, favoritesCount, onFavoritesClick, onMyPurchasesClick = () => {}, onCategorySelect = () => {} }) {
  const [searchInput, setSearchInput] = useState('')
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const navigate = useNavigate()

  // Categorías reales de FakeStore API
  const categories = [
    { id: 'todos', name: 'Todos', apiName: null },
    { id: 'electronics', name: '📱 Electrónica', apiName: 'electronics' },
    { id: 'jewelery', name: '💎 Joyería', apiName: 'jewelery' },
    { id: "men's clothing", name: "👔 Hombre", apiName: "men's clothing" },
    { id: "women's clothing", name: "👗 Mujer", apiName: "women's clothing" },
  ]

  const handleCategorySelect = (apiName) => {
    onCategorySelect(apiName || 'todos')
    setShowCategoryDropdown(false)
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchInput(value)
    onSearch(value)
  }

  // Manejar click del logo - volver a home con todos los productos
  const handleLogoClick = () => {
    // Limpiar búsqueda
    setSearchInput('')
    onSearch('')
    
    // Mostrar todos los productos
    onCategorySelect('todos')
    
    // Navegar a home
    navigate('/')
  }

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Fila 1: Logo, Búsqueda, Ubicación, MELI+, Cuotas */}
      <div className="bg-ml-yellow border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo ML - Botón para ir a home */}
            <button 
              onClick={handleLogoClick}
              className="flex items-center flex-shrink-0 hover:opacity-80 transition focus:outline-none cursor-pointer"
              title="Ir a home"
            >
              <img className="h-10" src={logoML} alt="Mercado Libre" />
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos, marcas y más..."
                  value={searchInput}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-ml-blue border border-gray-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ml-blue">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Ubicación */}
            <button className="flex items-center gap-1 text-gray-700 hover:text-ml-blue transition flex-shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Ubicación</span>
            </button>

            {/* MELI+ */}
            <div className="flex items-center gap-2 bg-purple-600 px-3 py-2 rounded flex-shrink-0">
              <span className="text-white font-bold text-xs">meli+</span>
              <span className="text-white text-xs font-bold">$9.900</span>
            </div>

            {/* Cuotas */}
            <button className="text-ml-blue font-bold text-xs hover:underline flex-shrink-0">
              +3 CUOTAS<br />SIN INTERÉS
            </button>
          </div>
        </div>
      </div>

      {/* Fila 2: Menú de navegación */}
      <div className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Links izquierda */}
            <div className="flex items-center gap-6">
              {/* Categorías Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="text-sm text-gray-700 hover:text-ml-blue font-medium transition relative flex items-center gap-1"
                >
                  Categorías
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showCategoryDropdown && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => {
                          handleCategorySelect(category.apiName || 'todos')
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-ml-yellow hover:text-ml-blue font-medium transition first:rounded-t-lg last:rounded-b-lg"
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => onCategorySelect('ofertas')} className="text-sm text-gray-700 hover:text-ml-blue font-medium transition">
                Ofertas
              </button>
              <button className="text-sm text-gray-700 hover:text-ml-blue font-medium transition">
                Cupones
              </button>
              <button className="text-sm text-gray-700 hover:text-ml-blue font-medium transition flex items-center gap-1">
                Supermercado
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded font-bold">NUEVO</span>
              </button>
              <button className="text-sm text-gray-700 hover:text-ml-blue font-medium transition">
                Moda
              </button>
              <button className="text-sm text-gray-700 hover:text-ml-blue font-medium transition">
                Vender
              </button>
              <button className="text-sm text-gray-700 hover:text-ml-blue font-medium transition">
                Ayuda
              </button>
            </div>

            {/* Links derecha */}
            <div className="flex items-center gap-6">
              {isLoggedIn ? (
                <button
                  onClick={onLogoutClick}
                  className="text-sm text-gray-700 hover:text-ml-blue font-medium transition"
                >
                  Cerrar sesión
                </button>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="text-sm text-ml-blue hover:underline font-bold transition"
                >
                  Inicia sesión
                </button>
              )}

              <button 
                onClick={onMyPurchasesClick}
                className="text-sm text-gray-700 hover:text-ml-blue font-medium transition"
              >
                Mis compras
              </button>

              <button
                onClick={onFavoritesClick}
                className="relative flex items-center gap-1 text-gray-700 hover:text-ml-blue font-medium transition"
              >
                Favoritos
                {favoritesCount > 0 && (
                  <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {favoritesCount}
                  </span>
                )}
              </button>

              {/* Carrito */}
              <button
                onClick={onCartClick}
                className="relative flex items-center gap-1 text-gray-700 hover:text-ml-blue transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
