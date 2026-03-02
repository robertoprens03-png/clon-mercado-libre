# 🎯 Guía Rápida - FakeStore API

## ¿Qué cambió?

**ANTES:** Mercado Libre API → Popup de detalles
**AHORA:** FakeStore API → Página completa de producto

---

## 🚀 Cómo Usar

### 1. **Ver productos en home**
- Abre http://localhost:5177
- Verás grid de 20 productos de FakeStore
- Todos con:
  - Imagen
  - Nombre
  - Descripción
  - Rating ⭐
  - Precio en COP $
  - Botón "Carrito"
  - Botón "Ver más"

### 2. **Hacer clic en un producto**
Puedes hacer clic en 3 lugares:
- **Imagen** → Va a página de detalle
- **Nombre** → Va a página de detalle
- **Botón "Ver más"** → Va a página de detalle

### 3. **En página de detalle**
Verás:
- Imagen grande del producto
- Categoría (badge)
- Nombre completo
- Rating con número de reseñas
- Precio original y con descuento
- Badge "Envío gratis" (si aplica)
- Descripción completa
- Selector de cantidad (+/-)
- Botón "Agregar al carrito"
- Botón "Agregar a favoritos" ❤️

### 4. **Volver al home**
Clica el botón "← Volver" en la parte superior

---

## 📊 Categorías Disponibles

Los 20 productos se dividen en 4 categorías:

| Categoría | Productos |
|-----------|-----------|
| **Electronics** | 6 productos (laptops, phones, etc) |
| **Jewelery** | 4 productos (anillos, collares, etc) |
| **Men's Clothing** | 4 productos (camisetas, pantalones, etc) |
| **Women's Clothing** | 6 productos (vestidos, faldas, etc) |

Filtra por categoría en el menú de arriba.

---

## 🔍 Buscar Productos

1. Clica en el buscador (🔍) en la navbar
2. Escribe lo que buscas:
   - "laptop" → Encuentra laptops
   - "dress" → Encuentra vestidos
   - "ring" → Encuentra anillos
3. Presiona Enter

---

## ❤️ Favoritos

1. Clica el corazón 🤍 en cualquier tarjeta
2. Se convierte a ❤️ (rojo)
3. Se guarda en localStorage
4. Clica el botón "Favoritos" en navbar para verlos

---

## 🛒 Carrito

1. Clica "Carrito" en cualquier tarjeta
2. O en página de detalle:
   - Ajusta cantidad con +/-
   - Clica "Agregar al carrito"
3. Clica el botón 🛒 en navbar para ver carrito

---

## 💵 Precios

- FakeStore usa USD
- Se convierte a COP automáticamente
- Conversión: 1 USD ≈ $4.000 COP
- Ejemplo: $19.99 USD = $79.960 COP

---

## 📁 Archivos Nuevos

```
src/
├── services/
│   └── fakeStoreApi.js         ← Nueva API
├── components/
│   └── ProductDetailPage.jsx   ← Página de detalle
├── utils/
│   └── formatPrice.js          ← Formato de precios
└── App.jsx                      ← Actualizado con Router
```

---

## 🐛 Si algo no funciona...

### Error: "Cannot find module 'react-router-dom'"
```bash
npm install react-router-dom
```

### Error: "Producto no encontrado"
- El ID del producto debe tener prefijo "fake-"
- Ej: `/producto/fake-1`

### Productos no cargan
- Verifica conexión a internet
- FakeStore API debe estar disponible
- Abre navegador console (F12) para ver errores

---

## 🔧 Cómo Cambiar entre APIs

**Cambiar de FakeStore a Mercado Libre:**

En `src/App.jsx`, línea ~35:
```javascript
// Cambiar de:
const fakeStoreProducts = await getAllProducts()

// A:
const mlProducts = await searchProducts('laptop', 5)
```

Pero requiere actualizar toda la lógica.

---

## ✨ Próximas Mejoras

- [ ] Agregar más detalles en ProductDetailPage
- [ ] Implementar carrito persistente
- [ ] Agregar reviews
- [ ] Wishlist sincronizada

---

**¡Listo para usar!** 🎉
