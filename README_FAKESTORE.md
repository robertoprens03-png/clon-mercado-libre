# Mercado Libre Clone - React + FakeStore API v2.0

Proyecto educativo de un clon funcional de Mercado Libre usando **React 18**, **React Router v6**, **Tailwind CSS** e **FakeStore API**.

## ✨ Características Principales

- 🛍️ **20 Productos Reales** desde FakeStore API
- 📱 **Responsive Design** - Funciona en móvil, tablet y desktop
- 🔍 **Búsqueda Funcional** - En tiempo real
- 🎯 **Filtros por Categoría** - 4 categorías distintas
- 🛒 **Carrito de Compras** - Agregar/remover productos
- ❤️ **Sistema de Favoritos** - Persistencia con localStorage
- 💰 **Precios en COP** - Conversión automática USD → COP
- 📄 **Página Completa de Detalle** - No popup, routing real
- ⭐ **Rating y Reseñas** - Información completa del producto

## 🚀 Inicio Rápido

### 1. Clonar o descargar el proyecto
```bash
cd "ruta-del-proyecto"
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```

### 4. Abrir en navegador
```
http://localhost:5177
```

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                          # Router setup + estado global
├── components/
│   ├── Banner.jsx
│   ├── Cart.jsx
│   ├── CheckoutPage.jsx
│   ├── Favorites.jsx
│   ├── Footer.jsx
│   ├── LoginModal.jsx
│   ├── Menu.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx              # Con React Router Links
│   ├── ProductDetail.jsx            # Modal (legacy)
│   ├── ProductDetailPage.jsx        # Página completa NEW
│   ├── ProductList.jsx
│   └── ProductPreview.jsx
├── services/
│   ├── fakeStoreApi.js              # API integration NEW
│   └── mlApi.js                     # Mercado Libre (legacy)
├── utils/
│   └── formatPrice.js               # Formato COP
├── data/
│   └── products.js                  # Fallback local
└── img/
    ├── banners/
    ├── logos/
    └── Productos/
```

## 🔗 Rutas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Grid de productos, búsqueda, filtros |
| `/producto/:id` | ProductDetailPage | Detalle completo del producto |

## 🛠️ Tecnologías

- **React 18.2.0** - Framework UI
- **React Router 6.x** - Navegación
- **Tailwind CSS 3.3.6** - Estilos
- **Vite 5.4.21** - Build tool
- **FakeStore API** - Fuente de datos

## 🎯 Cómo Usar

### Ver Productos
1. Abre `http://localhost:5177`
2. Verás un grid de 20 productos
3. Scroll para explorar
4. Usa la búsqueda (🔍) para encontrar productos
5. Filtra por categoría en el menú

### Ver Detalles de Producto
1. Clica en cualquier producto (imagen, nombre o "Ver más")
2. Se abre la página de detalle `/producto/fake-1`
3. Verás:
   - Imagen grande
   - Descripción completa
   - Rating y reseñas
   - Precio en COP
   - Badge de envío gratis
   - Selector de cantidad
   - Botones de acción

### Agregar al Carrito
1. En la página de detalle, selecciona cantidad
2. Clica "Agregar al carrito"
3. Verás el contador en el navbar (🛒)

### Agregar a Favoritos
1. Clica el corazón 🤍 en cualquier tarjeta
2. Se pone rojo ❤️
3. Se guarda en localStorage automáticamente
4. Accede desde el navbar (❤️)

## 💰 Precios

Los precios se convierten automáticamente de USD a COP:
- **Conversión:** 1 USD ≈ $4,000 COP
- **Ejemplo:** $19.99 USD = $79,960 COP

## 📚 Documentación

- **START_FAKESTORE.md** - Guía rápida ⭐
- **GUIA_FAKESTORE.md** - Cómo usar la app
- **ARQUITECTURA_FAKESTORE.md** - Diseño técnico
- **EJEMPLOS_CODIGO.md** - Código copiable
- **RESUMEN_FAKESTORE.md** - Resumen completo
- **FAKESTORE_INTEGRACION.md** - Detalles técnicos
- **INDICE_FAKESTORE.md** - Índice de documentos

## 🎨 Diseño

- **Colores Mercado Libre:**
  - Amarillo: `#FFED00`
  - Azul: `#001F3F`
  - Gris: `#F5F5F5`

- **Responsive:**
  - Mobile: 1 columna
  - Tablet: 2 columnas
  - Desktop: 3 columnas
  - Desktop XL: 4 columnas

## 🚀 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📦 Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x.x",
  "tailwindcss": "^3.3.6"
}
```

## 🌐 API Utilizada

**FakeStore API** - Pública y sin autenticación
- Documentación: https://fakestoreapi.com
- 20 productos disponibles
- 4 categorías: Electronics, Jewelery, Men's Clothing, Women's Clothing

## ✅ Features Implementados

- ✅ Integración con FakeStore API
- ✅ React Router para navegación
- ✅ Página completa de detalle de producto
- ✅ Búsqueda en tiempo real
- ✅ Filtros por categoría
- ✅ Carrito de compras
- ✅ Sistema de favoritos
- ✅ Precios en COP
- ✅ Responsive design
- ✅ localStorage para persistencia

## 🎓 Aprendizajes

Este proyecto es ideal para aprender:
- React Hooks (useState, useEffect, useParams, useNavigate)
- React Router v6
- API integration con fetch
- Tailwind CSS
- Component architecture
- State management
- localStorage

## 📱 Responsiveness

El proyecto es **100% responsive**:
- ✅ Mobile (375px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Desktop XL (1440px+)

## 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| App no carga | Recarga con Cmd+Shift+R |
| Productos vacíos | Verifica conexión a internet |
| Favoritos perdidos | Limpia localStorage (F12) |
| Servidor muere | Corre `npm run dev` nuevamente |

## 🤝 Contribuciones

Este es un proyecto educativo. Siéntete libre de:
- Agregar nuevas features
- Mejorar el diseño
- Optimizar el código
- Extender la documentación

## 📄 Licencia

Proyecto educativo sin licencia específica.

## 👨‍💻 Autor

Desarrollado para clase de React

## 🎉 ¡Listo para Usar!

El proyecto está **100% funcional** y listo para:
- Presentar en clase
- Agregar features adicionales
- Estudiar y aprender
- Desplegar a producción

---

**Versión:** 2.0 (FakeStore)
**Última actualización:** 28 de febrero de 2026
**Status:** ✅ Listo para usar

**Abre http://localhost:5177 y ¡disfruta!** 🚀
