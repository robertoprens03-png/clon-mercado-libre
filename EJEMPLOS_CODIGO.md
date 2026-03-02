# 💻 Ejemplos de Código - FakeStore Integration

## 1. Consumir FakeStore API

### Obtener todos los productos

```javascript
import { getAllProducts } from './services/fakeStoreApi'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then(data => {
      setProducts(data)
    })
  }, [])

  return <div>{products.length} productos cargados</div>
}
```

### Búsqueda de productos

```javascript
import { searchProducts } from './services/fakeStoreApi'

const handleSearch = async (query) => {
  const results = await searchProducts(query)
  console.log(`${results.length} resultados encontrados`)
  setFilteredProducts(results)
}
```

### Obtener detalle de un producto

```javascript
import { getProductDetails } from './services/fakeStoreApi'

const ProductPage = () => {
  const { productId } = useParams() // fake-1, fake-2, etc

  useEffect(() => {
    getProductDetails(productId).then(product => {
      setProduct(product)
    })
  }, [productId])
}
```

### Obtener productos por categoría

```javascript
import { getProductsByCategory } from './services/fakeStoreApi'

const CategoryPage = () => {
  useEffect(() => {
    getProductsByCategory("electronics").then(products => {
      setProducts(products) // 6 productos electrónicos
    })
  }, [])
}
```

### Obtener categorías disponibles

```javascript
import { getCategories } from './services/fakeStoreApi'

const MenuComponent = () => {
  useEffect(() => {
    getCategories().then(cats => {
      // ["electronics", "jewelery", "men's clothing", "women's clothing"]
      setCategories(cats)
    })
  }, [])
}
```

---

## 2. Usar React Router

### Configurar rutas en App.jsx

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto/:productId" element={<ProductDetailPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </Router>
  )
}
```

### Navegar con Link (sin recargar página)

```javascript
import { Link } from 'react-router-dom'

<Link to="/producto/fake-1">
  Ver detalles
</Link>

// Dentro de un componente con parámetros
<Link to={`/producto/${product.id}`}>
  {product.name}
</Link>
```

### Navegar con useNavigate (desde JavaScript)

```javascript
import { useNavigate } from 'react-router-dom'

const MyComponent = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/') // Volver al home
  }

  return <button onClick={handleClick}>Volver</button>
}
```

### Obtener parámetros de la URL

```javascript
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const { productId } = useParams()
  // Si URL es /producto/fake-1
  // productId = "fake-1"

  useEffect(() => {
    getProductDetails(productId)
  }, [productId])
}
```

---

## 3. Formatear Precios

### Usar la función formatPrice

```javascript
import { formatPrice } from './utils/formatPrice'

const price = 109.95
const converted = 109.95 * 4000 // 439800

console.log(formatPrice(converted))
// Output: "$439.800"

// En un componente
<div className="price">
  <p>{formatPrice(product.price)}</p>
  <p className="original">{formatPrice(product.originalPrice)}</p>
</div>
```

### Crear tu propia función de formato

```javascript
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
```

---

## 4. Transformar Datos de API

### Estructura original de FakeStore

```javascript
// API retorna:
{
  "id": 1,
  "title": "Fjallraven Backpack",
  "price": 109.95,
  "description": "Your perfect pack...",
  "category": "men's clothing",
  "image": "https://...",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

### Transformación a formato de app

```javascript
const transformProduct = (apiProduct) => {
  return {
    id: `fake-${apiProduct.id}`,                    // Agregar prefijo
    name: apiProduct.title,                         // Cambiar nombre
    price: apiProduct.price * 4000,                 // USD → COP
    originalPrice: apiProduct.price * 4000 * 1.2,  // Con descuento
    category: apiProduct.category,
    image: apiProduct.image,
    pictures: [{ url: apiProduct.image }],          // Formato array
    description: apiProduct.description,
    rating: apiProduct.rating.rate,                 // Extrae rate
    reviewsCount: apiProduct.rating.count,          // Extrae count
    freeShipping: Math.random() > 0.5,              // Aleatorio
    source: 'fakestore'
  }
}

// Uso:
const product = transformProduct(apiData)
```

---

## 5. Manejar Errores

### Try-catch en llamadas API

```javascript
const loadProducts = async () => {
  try {
    setIsLoading(true)
    const products = await getAllProducts()
    setProducts(products)
  } catch (error) {
    console.error('Error cargando productos:', error)
    setError('No se pudieron cargar los productos')
  } finally {
    setIsLoading(false)
  }
}
```

### Mostrar estado de carga

```javascript
{isLoading && (
  <div className="spinner">Cargando...</div>
)}

{error && (
  <div className="error">{error}</div>
)}

{products.length === 0 && !isLoading && (
  <div className="empty">No hay productos</div>
)}
```

---

## 6. Estado Global con Hooks

### Usar localStorage para favoritos

```javascript
const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem('ml_favorites')
  return saved ? JSON.parse(saved) : []
})

useEffect(() => {
  localStorage.setItem('ml_favorites', JSON.stringify(favorites))
}, [favorites])

const addToFavorites = (product) => {
  setFavorites([...favorites, product])
}

const removeFromFavorites = (productId) => {
  setFavorites(favorites.filter(p => p.id !== productId))
}
```

### Carrito con cantidad

```javascript
const [cart, setCart] = useState([])

const addToCart = (product) => {
  const existing = cart.find(item => item.id === product.id)
  
  if (existing) {
    // Aumentar cantidad
    setCart(cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  } else {
    // Nuevo producto
    setCart([...cart, { ...product, quantity: 1 }])
  }
}

const calculateTotal = () => {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
}
```

---

## 7. Componentes Funcionales

### ProductCard con Link

```javascript
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'

const ProductCard = ({ product, onAddToCart, onAddToFavorites }) => {
  return (
    <div className="product-card">
      {/* Link a detalle */}
      <Link to={`/producto/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <h3>
        <Link to={`/producto/${product.id}`}>{product.name}</Link>
      </h3>

      <p className="price">{formatPrice(product.price)}</p>

      <div className="buttons">
        <button onClick={() => onAddToCart(product)}>
          Agregar al carrito
        </button>
        <button onClick={() => onAddToFavorites(product)}>
          ❤️ Favoritos
        </button>
      </div>
    </div>
  )
}

export default ProductCard
```

### ProductDetailPage completo

```javascript
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductDetails } from '../services/fakeStoreApi'
import { formatPrice } from '../utils/formatPrice'

const ProductDetailPage = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    getProductDetails(productId).then(product => {
      setProduct(product)
      setLoading(false)
    })
  }, [productId])

  if (loading) return <div>Cargando...</div>
  if (!product) return <div>Producto no encontrado</div>

  return (
    <div className="product-detail">
      <button onClick={() => navigate('/')}>← Volver</button>

      <img src={product.image} alt={product.name} />

      <h1>{product.name}</h1>
      <p className="price">{formatPrice(product.price)}</p>
      <p className="description">{product.description}</p>

      <div className="quantity">
        <button onClick={() => setQuantity(q => q - 1)}>-</button>
        <input value={quantity} readOnly />
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      <button className="add-to-cart">
        Agregar {quantity} al carrito
      </button>
    </div>
  )
}

export default ProductDetailPage
```

---

## 8. Patrones Útiles

### Debounce para búsqueda

```javascript
const [searchTerm, setSearchTerm] = useState('')
const [results, setResults] = useState([])

useEffect(() => {
  const timer = setTimeout(() => {
    if (searchTerm) {
      searchProducts(searchTerm).then(setResults)
    }
  }, 300) // Esperar 300ms

  return () => clearTimeout(timer)
}, [searchTerm])
```

### Memoization con useCallback

```javascript
import { useCallback } from 'react'

const MyComponent = () => {
  const [products, setProducts] = useState([])

  const handleAddToFavorites = useCallback((product) => {
    // Esta función solo se recrea si sus dependencias cambian
    setFavorites(prev => [...prev, product])
  }, []) // Sin dependencias = se crea una sola vez

  return <ProductList onAddToFavorites={handleAddToFavorites} />
}
```

### Filtrado dinámico

```javascript
const filteredProducts = products.filter(product => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase())

  const matchesCategory = category === 'todos' || product.category === category

  const matchesPrice = product.price >= minPrice && product.price <= maxPrice

  return matchesSearch && matchesCategory && matchesPrice
})
```

---

## 9. Testing (Ejemplos)

### Test de API call

```javascript
// __tests__/fakeStoreApi.test.js
import { getAllProducts } from '../services/fakeStoreApi'

test('getAllProducts retorna array', async () => {
  const products = await getAllProducts()
  expect(Array.isArray(products)).toBe(true)
  expect(products.length).toBeGreaterThan(0)
})

test('Productos tienen estructura correcta', async () => {
  const products = await getAllProducts()
  products.forEach(product => {
    expect(product).toHaveProperty('id')
    expect(product).toHaveProperty('name')
    expect(product).toHaveProperty('price')
  })
})
```

### Test de componente

```javascript
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

test('ProductCard renderiza nombre del producto', () => {
  const product = {
    id: 'fake-1',
    name: 'Test Product',
    price: 100,
    image: 'test.jpg'
  }

  render(
    <BrowserRouter>
      <ProductCard product={product} />
    </BrowserRouter>
  )

  expect(screen.getByText('Test Product')).toBeInTheDocument()
})
```

---

## 10. Integración con Backend (Futuro)

### Cambiar FakeStore por backend real

```javascript
// services/productsApi.js
const API_BASE = 'https://tu-backend.com'

export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE}/products`)
  return response.json()
}

export const getProductDetails = async (id) => {
  const response = await fetch(`${API_BASE}/products/${id}`)
  return response.json()
}

// En App.jsx, solo cambiar el import
// import { getAllProducts } from './services/productsApi'
// El resto del código sigue igual
```

---

**¡Ejemplos listos para copiar y pegar!** 🚀
