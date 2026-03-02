# 🏗️ Arquitectura del Proyecto - FakeStore Integration

## Vista General

```
┌─────────────────────────────────────────────────────┐
│                    NAVEGADOR                         │
│                  localhost:5177                       │
└─────────────────┬───────────────────────────────────┘
                  │
                  ↓
        ┌─────────────────────┐
        │   React Router      │
        │                     │
        │  / (home)           │
        │  /producto/:id      │
        └────────┬────────────┘
                 │
     ┌───────────┴───────────┐
     ↓                       ↓
┌─────────────┐      ┌──────────────────────┐
│  App.jsx    │      │  ProductDetailPage   │
│  (HOME)     │      │  (PÁGINA DETALLE)    │
└─────┬───────┘      └──────┬───────────────┘
      │                     │
      │                     ├─→ getProductDetails()
      │                     │
      ├─→ getAllProducts()  └─→ formatPrice()
      │
      ├─→ searchProducts()
      │
      └─→ getCategories()

      ↓ Servicios
      
┌──────────────────────────────────────┐
│   fakeStoreApi.js (Service Layer)    │
│                                      │
│  • getAllProducts()                  │
│  • searchProducts()                  │
│  • getProductDetails()               │
│  • getProductsByCategory()           │
│  • getCategories()                   │
└──────────────────┬───────────────────┘
                   │
                   ↓
      ┌──────────────────────────┐
      │  FakeStore API           │
      │  https://fakestoreapi.com│
      │                          │
      │  /products               │
      │  /products/:id           │
      │  /products/categories    │
      │  /products/category/:cat │
      └──────────────────────────┘
```

---

## 📂 Estructura de Carpetas

```
mercado-libre/
│
├── src/
│   ├── App.jsx                          ← Componente raíz + Router
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   │
│   ├── components/                      ← Componentes React
│   │   ├── Banner.jsx
│   │   ├── Cart.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── Favorites.jsx
│   │   ├── Footer.jsx
│   │   ├── LoginModal.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx              ← ACTUALIZADO (Links)
│   │   ├── ProductDetail.jsx            ← Modal (legacy)
│   │   ├── ProductDetailPage.jsx        ← NUEVO (Página completa)
│   │   ├── ProductList.jsx
│   │   └── ProductPreview.jsx
│   │
│   ├── services/                        ← Capa de Servicios
│   │   ├── mlApi.js                     ← Mercado Libre (legacy)
│   │   └── fakeStoreApi.js              ← NUEVO (FakeStore)
│   │
│   ├── utils/                           ← Utilidades
│   │   └── formatPrice.js               ← NUEVO
│   │
│   ├── data/
│   │   └── products.js                  ← Fallback local
│   │
│   └── img/
│       ├── banners/
│       ├── logos/
│       └── Productos/
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── index.html

DOCUMENTACIÓN:
├── FAKESTORE_INTEGRACION.md             ← NUEVO
├── GUIA_FAKESTORE.md                    ← NUEVO
├── API_MERCADO_LIBRE.md
├── ... (otros .md)
```

---

## 🔄 Flujo de Datos

### 1. **Inicialización (Home)**

```
User abre http://localhost:5177
  ↓
App.jsx → useEffect
  ↓
getAllProducts() → API FakeStore
  ↓
GET https://fakestoreapi.com/products
  ↓
Response: Array[20] productos
  ↓
Transformar datos (USD → COP, agregar IDs)
  ↓
setProducts(fakeStoreProducts)
setFilteredProducts(fakeStoreProducts)
  ↓
Render ProductList con grid
```

### 2. **Ver Detalle de Producto**

```
User clica en ProductCard
  ↓
Link to="/producto/fake-1"
  ↓
Router navega a /producto/:productId
  ↓
ProductDetailPage monta
  ↓
useParams() obtiene productId = "fake-1"
  ↓
useEffect → getProductDetails("fake-1")
  ↓
Extrae ID real: "1"
  ↓
GET https://fakestoreapi.com/products/1
  ↓
Response: Objeto producto
  ↓
Transformar datos
  ↓
setProduct(data)
  ↓
Render página completa
```

### 3. **Búsqueda**

```
User escribe en buscador
  ↓
handleSearch(searchTerm)
  ↓
searchProducts(searchTerm)
  ↓
getAllProducts() → Obtiene 20 productos
  ↓
Filter local por:
  - name.includes(query)
  - category.includes(query)
  - description.includes(query)
  ↓
setFilteredProducts(resultados)
  ↓
Render ProductList con resultados
```

### 4. **Filtro por Categoría**

```
User clica categoría en Menu
  ↓
handleCategoryFilter(category)
  ↓
Filter local: products.filter(p => p.category === category)
  ↓
setFilteredProducts(filtered)
  ↓
Render ProductList con una categoría
```

---

## 🏛️ Componentes Principales

### **App.jsx** (Componente Raíz)

**Responsabilidades:**
- Gestionar estado global (products, cart, favorites)
- Carga inicial de datos
- Router configuration
- Manejo de búsqueda y filtros

**Estado:**
```javascript
const [products, setProducts] = useState([])
const [filteredProducts, setFilteredProducts] = useState([])
const [cart, setCart] = useState([])
const [favorites, setFavorites] = useState([])
const [selectedCategory, setSelectedCategory] = useState('todos')
const [isLoading, setIsLoading] = useState(true)
```

### **ProductCard.jsx** (Tarjeta de Producto)

**Responsabilidades:**
- Mostrar preview de producto
- Navegar a detalle con Link
- Agregar a carrito
- Agregar a favoritos

**Props:**
```javascript
{
  product: Object,
  onAddToCart: Function,
  onViewDetails: Function (legacy),
  onAddToFavorites: Function,
  isFavorite: Boolean
}
```

### **ProductDetailPage.jsx** (Página Completa)

**Responsabilidades:**
- Mostrar detalles completos del producto
- Cargar datos individual del producto
- Seleccionar cantidad
- Agregar al carrito/favoritos

**Props:**
```javascript
// Usa useParams para obtener productId de URL
const { productId } = useParams()
```

### **fakeStoreApi.js** (Service Layer)

**Responsabilidades:**
- Consumir FakeStore API
- Transformar datos a formato de app
- Conversión USD → COP
- Error handling

**Funciones:**
```javascript
getAllProducts() → Promise<Array>
searchProducts(query) → Promise<Array>
getProductDetails(id) → Promise<Object>
getProductsByCategory(cat) → Promise<Array>
getCategories() → Promise<Array>
```

---

## 🔌 Integraciones Externas

### **FakeStore API**

**Base URL:** `https://fakestoreapi.com`

**Endpoints usados:**
- `GET /products` → Todos los productos
- `GET /products/:id` → Detalle producto
- `GET /products/categories` → Categorías
- `GET /products/category/:category` → Por categoría

**Datos que retorna:**
```javascript
{
  "id": 1,
  "title": "Fjallraven Backpack",
  "price": 109.95,
  "description": "...",
  "category": "men's clothing",
  "image": "https://...",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

**Transformación a formato de app:**
```javascript
{
  id: "fake-1",
  name: "Fjallraven Backpack",
  price: 439800,           // USD * 4000
  originalPrice: 527760,   // Con descuento
  description: "...",
  category: "men's clothing",
  image: "https://...",
  pictures: [{url: "..."}],
  rating: 3.9,
  reviewsCount: 120,
  freeShipping: true,
  source: "fakestore"
}
```

---

## 📦 Dependencias Utilizadas

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x.x",
  "tailwindcss": "^3.3.6"
}
```

---

## 🎯 Estados Posibles de la App

```
┌─────────────────────────┐
│   isLoading = true      │ → Mostrar spinner
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  products = []          │ → Sin productos cargados
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  filteredProducts = []  │ → Búsqueda sin resultados
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  selectedCategory != '' │ → Modo filtro activo
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  showCart = true        │ → Mostrar CheckoutPage
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  showFavorites = true   │ → Mostrar Favorites
└──────────────────────────┘
```

---

## 🔐 Seguridad

**Consideraciones:**
- ✅ FakeStore API es pública (sin auth requerida)
- ✅ No hay datos sensibles en localStorage
- ✅ Solo favoritos y carrito se guardan (no credentials)
- ✅ Fetch hace modo CORS con `credentials: 'omit'`

**localStorage usado:**
```javascript
'ml_favorites' → JSON string de favoritos
```

---

## ⚡ Performance

**Optimizaciones implementadas:**
- ✅ Lazy loading de imágenes
- ✅ Memoization con `useCallback` (potencial)
- ✅ Filtrado local (no APIs llamadas)
- ✅ Code splitting con React Router

**Tamaño de bundle (aprox):**
- React: ~40KB
- React Router: ~50KB
- TailwindCSS: ~8KB
- FakeStore API call: ~10KB

---

**Arquitectura lista para producción** ✅
