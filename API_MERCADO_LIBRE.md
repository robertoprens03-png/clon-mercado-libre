# 🚀 Integración API Mercado Libre - Guía de Uso

## ✅ Lo que se implementó

Tu proyecto ahora consume **datos reales de Mercado Libre Colombia** sin necesidad de token de autenticación.

### 📁 Nuevo archivo creado:
```
src/services/mlApi.js
```

### 🔧 Cambios en archivos existentes:
- `src/App.jsx` - Integración de búsqueda y filtrado por categoría
- `src/components/ProductList.jsx` - Indicador de carga

---

## 🎯 ¿Qué hace ahora?

### 1️⃣ **Búsqueda en Tiempo Real**
Cuando escribas en el buscador del Navbar:
```
Usuario escribe: "laptop"
↓
Se busca en API de Mercado Libre
↓
Muestra resultados reales de ML + productos locales
↓
Carrito funciona con ambos tipos de productos
```

**Ejemplo de búsquedas:**
- "laptop"
- "iphone 15"
- "zapatillas nike"
- "monitor gamer"

### 2️⃣ **Filtrado por Categoría**
Cuando seleccionas una categoría en el menú:
```
Usuario selecciona: "Celulares"
↓
Se mapea a: "Celular" (término de búsqueda ML)
↓
Trae productos de ML + locales de esa categoría
↓
Combina resultados
```

**Mapeo de categorías:**
| Tu Categoría | Búsqueda en ML |
|---|---|
| electronica | "Electrónica" |
| computacion | "Computadora" |
| celulares | "Celular" |
| moda | "Ropa" |
| hogar | "Hogar" |
| belleza | "Belleza" |
| deportes | "Deportes" |
| libros | "Libro" |
| juguetes | "Juguete" |
| accesorios | "Accesorios" |

### 3️⃣ **Indicador de Carga**
Mientras se busca, muestra un spinner animado con los colores de ML.

---

## 📝 Funciones Disponibles en `mlApi.js`

### `searchProducts(query, limit)`
Busca productos por término
```javascript
import { searchProducts } from './services/mlApi'

const results = await searchProducts('laptop', 20)
// Retorna array de 20 productos
```

**Parámetros:**
- `query` (string): Término de búsqueda
- `limit` (number): Cantidad de resultados (default: 20, máximo: 50)

**Retorna:**
```javascript
[
  {
    id: "MCO123456789",
    name: "Laptop HP",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "https://...",
    freeShipping: true,
    condition: "new",
    soldQuantity: 45,
    mlLink: "https://mercadolibre.com.co/...",
    ...
  },
  ...
]
```

### `getProductDetails(itemId)`
Obtiene detalles completos de un producto específico
```javascript
const details = await getProductDetails('MCO123456789')
```

### `searchByCategory(category, limit)`
Busca por categoría
```javascript
const products = await searchByCategory('Electrónica', 15)
```

### `getSearchSuggestions(query)`
Obtiene sugerencias de búsqueda (autocomplete)
```javascript
const suggestions = await getSearchSuggestions('lap')
// Retorna: ['laptop', 'laptop gamer', 'laptop dell', ...]
```

---

## 🎨 Datos que obtienes de ML API

Cada producto real trae:
- ✅ **id** - Identificador único en ML
- ✅ **name** - Nombre del producto
- ✅ **price** - Precio actual
- ✅ **originalPrice** - Precio original (si tiene descuento)
- ✅ **image** - URL de la imagen
- ✅ **freeShipping** - Si tiene envío gratis
- ✅ **condition** - new/used (nuevo/usado)
- ✅ **soldQuantity** - Cantidad vendida
- ✅ **mlLink** - Link directo a ML

---

## ⚙️ Cómo Funciona el Flujo

### Búsqueda:
```javascript
// 1. Usuario escribe en buscador
handleSearch("laptop")
  ↓
// 2. Se activa isLoading = true (muestra spinner)
  ↓
// 3. Llama a searchProducts() de mlApi.js
  ↓
// 4. API retorna resultados
  ↓
// 5. Se combinan con productos locales
  ↓
// 6. Se actualizan filteredProducts
  ↓
// 7. ProductList renderiza los resultados
```

### Filtrado por Categoría:
```javascript
// 1. Usuario selecciona categoría
handleCategoryFilter("celulares")
  ↓
// 2. Se activa isLoading = true
  ↓
// 3. Se mapea "celulares" → "Celular"
  ↓
// 4. Llama a searchProducts("Celular")
  ↓
// 5. Combina resultados ML + locales
  ↓
// 6. Actualiza filteredProducts
```

---

## 🔄 Ciclo de Vida

1. **Inicial**: Muestra 30 productos locales
2. **Usuario busca**: Carga datos reales de ML
3. **Usuario selecciona categoría**: Busca esa categoría en ML
4. **Agregar al carrito**: Funciona con cualquier producto (local o ML)
5. **Checkout**: El carrito procesa todos los productos igual

---

## ⚠️ Limitaciones de la API

- **Rate Limiting**: ~600 requests por hora
- **Sin autenticación**: Solo datos públicos
- **Búsqueda simple**: No incluye filtros avanzados
- **Actualización**: Datos en tiempo real de ML

---

## 🧪 Pruebas Sugeridas

### Prueba 1: Búsqueda Simple
1. Abre `http://localhost:5174`
2. Escribe "laptop" en el buscador
3. Deberían aparecer laptops reales de ML
4. Intenta agregar uno al carrito

### Prueba 2: Categoría
1. Haz clic en "Celulares" en el menú
2. Deberían cargar celulares reales
3. Mezcla de productos locales + ML

### Prueba 3: Carrito Mixto
1. Busca "iphone"
2. Agrega un iPhone real de ML
3. Agrega un iPhone local
4. Verifica que ambos estén en el carrito

### Prueba 4: Volver a Productos Locales
1. Limpia el buscador
2. Selecciona "Todos"
3. Deberían volver los 30 productos locales

---

## 💡 Ideas para Expandir

1. **Persistencia**: Guardar búsquedas favoritas en localStorage
2. **Paginación**: Cargar más productos al hacer scroll
3. **Filtros avanzados**: Precio mín/máx, condición, envío gratis
4. **Ordenamiento**: Precio, populares, ratings
5. **Detalles amplios**: Click en producto → página detail
6. **Comparador**: Comparar productos lado a lado
7. **Reviews reales**: Traer reseñas de ML
8. **Stock real**: Verificar disponibilidad en tiempo real

---

## 🔗 Recursos

- **API Docs**: https://developers.mercadolibre.com/es_co/
- **SDK JavaScript**: https://github.com/mercadolibre/sdk-js
- **Sitios Disponibles**: MCO (Colombia), MLA (Argentina), MLB (Brasil), MLM (México)

---

**Fecha**: 28 de febrero 2026
**Status**: ✅ Implementado y Funcional
**Sitio**: Colombia (MCO)
