# 🚀 GUÍA DE USO - Nuevas Funcionalidades

## ⚡ Quick Start

El proyecto ahora tiene **3 nuevas características principales**. Aquí está cómo usarlas:

---

## 1️⃣ FAVORITOS (Wishlist) ❤️

### Cómo agregar a favoritos
1. Vé a la sección de productos
2. Busca cualquier producto
3. En la tarjeta, verás un **corazón en la esquina superior derecha**
4. Click en el corazón vacío 🤍 → Se vuelve **❤️ (rojo)**
5. El producto se agrega a favoritos

### Ver favoritos
1. En la **navegación superior**, busca **"❤️ Favoritos"**
2. Si tienes favoritos, verás un número rojo (badge)
3. Click en "❤️ Favoritos" → Se muestra la sección
4. Ves todos tus productos guardados

### Desde favoritos puedes:
- **Agregar al carrito** → Botón amarillo "Carrito"
- **Ver detalles** → Botón azul "Ver"
- **Remover** → Botón X rojo en la esquina superior derecha
- Los favoritos **se guardan automáticamente** (no se pierden al recargar)

---

## 2️⃣ VISTA PREVIEW (Paginada) 📋

### Características
- Muestra **12 productos por página**
- Lista simplificada para ver más productos a la vez
- Perfecto para **búsquedas rápidas**

### Cómo usar
1. En la navegación superior (Navbar), busca el botón para cambiar vista
2. Click → Se muestra la vista **Preview**
3. Verás un **grid paginado** con:
   - Imagen del producto
   - Nombre
   - Precio en pesos colombianos
   - Rating con ⭐
   - Descuento %
   - Envío gratis (si aplica)

### Navegación
- **Botones Anterior/Siguiente** → Cambiar página
- **Números de página** → Ir directo a una página
- **"Carrito"** → Agregar producto
- **"Ver"** → Ver detalles del producto

### Volver a vista normal
- Click en el botón de vista (navbar) nuevamente

---

## 3️⃣ CHECKOUT MEJORADO 🛒

### Acceder
1. Agrega productos al carrito
2. Click en **carrito** (ícono 🛒 en navbar)
3. Se abre la **página de compras completa**

### Qué ves

#### Sección 1: Tus Productos
- Lista de todo lo que compraste
- Cantidad de cada producto
- Precio subtotal
- Botón para remover (✕)

#### Sección 2: Método de Envío
Elige cómo quieres recibir tu compra:

| Opción | Costo | Tiempo |
|--------|-------|--------|
| Standard | $15.000 | 5-7 días |
| Express | $35.000 | 2-3 días |
| Same Day | $85.000 | Hoy |

💡 El total se recalcula automáticamente al cambiar

#### Sección 3: Método de Pago
Elige cómo pagarás:

- **💳 Tarjeta de Crédito/Débito** (Visa, Mastercard, Amex)
- **🏦 Transferencia Bancaria**
- **💰 Efectivo en Tienda**

#### Sección 4: Resumen de Pago
En el lado derecho (o abajo en mobile) ves:
- Subtotal
- Costo de envío
- IVA (8%)
- **TOTAL A PAGAR** (grande y en amarillo)

Botones:
- **Proceder al Pago** (azul) → Confirma la compra
- **Seguir Comprando** → Vuelve a la lista de productos

---

## 🎯 FLUJO COMPLETO DE COMPRA

### Paso a paso:

1. **Navega productos**
   - Busca en la barra de búsqueda
   - Filtra por categoría
   - Cambia entre vista grid / preview

2. **Agrega a favoritos** (opcional)
   - Click corazón 🤍 en cualquier producto
   - Se guarda automáticamente

3. **Agrega al carrito**
   - Click botón "Carrito" amarillo
   - El carrito se actualiza (ves el número en navbar)

4. **Ir al carrito**
   - Click carrito 🛒 en navbar

5. **Revisar y editar**
   - Verifica productos
   - Remueve si es necesario
   - Elige método de envío

6. **Selecciona pago**
   - Elige método de pago
   - Verifica total

7. **Confirma**
   - Click "Proceder al Pago"
   - ¡Compra completada! 🎉

---

## 💾 DATOS GUARDADOS

### Favoritos
- Se guardan en **localStorage** del navegador
- **Nunca se pierden** al recargar la página
- Puedes cerrar el navegador y volver después
- Cada navegador/dispositivo tiene sus propios favoritos

### Carrito
- Se guarda en **RAM** (mientras está abierto el navegador)
- Si cierras completamente el navegador, se pierde
- 💡 Agrega a favoritos si quieres guardar para después

---

## 🎨 COLORES Y DISEÑO

### Colores Mercado Libre
- 🟡 **Amarillo**: #FFED00 (botones principal)
- 🔵 **Azul**: #001F3F (texto importante, bordes)
- ⚪ **Gris**: #F5F5F5 (fondo, hover)

### Responsive
El sitio funciona en:
- 📱 **Mobile**: 1 columna
- 📱 **Tablet**: 2-3 columnas
- 💻 **Desktop**: 4 columnas

---

## ⚠️ PROBLEMAS COMUNES

### No veo mis favoritos después de recargar
- ✅ Verifica que localStorage esté habilitado
- ✅ Intenta agregar nuevamente
- ✅ Revisa consola (F12) si hay errores

### El carrito no suma bien
- ✅ Refresca la página
- ✅ Verifica cantidad de cada producto

### Pago no funciona
- ✅ Es un botón de **demo**, muestra alerta
- ✅ Para pago real, necesita pasarela (Stripe, Paypal, etc)

### No puedo ver detalles del producto
- ❌ Click en "Ver" o "Ver más" → Abre modal
- 💡 Si no funciona, consulta a tu profesor

---

## 📱 DISPOSITIVOS SOPORTADOS

✅ **Teléfonos** (375px - 480px)
✅ **Tablets** (768px - 1024px)
✅ **Laptops** (1024px - 1920px)
✅ **Monitores grandes** (1920px+)

---

## 🔧 NOTAS TÉCNICAS

### Componentes nuevos
```
src/components/
├── ProductPreview.jsx    ← Vista paginada
├── Favorites.jsx         ← Sección favoritos
└── CheckoutPage.jsx      ← Página de compra
```

### Estados en App.jsx
```javascript
const [favorites, setFavorites]      // Favoritos guardados
const [showFavorites, setShowFavorites] // Mostrar favoritos
const [showPreview, setShowPreview]  // Mostrar preview
const [showCart, setShowCart]        // Mostrar carrito
```

### Métodos
```javascript
handleAddToFavorites(product)    // Agregar/quitar favorito
handleRemoveFromFavorites(id)    // Remover favorito
handleAddToCart(product)         // Agregar al carrito (ya existía)
handleRemoveFromCart(id)         // Remover del carrito (ya existía)
```

---

## 📞 SOPORTE

Si algo no funciona:
1. Abre **F12** (Consola de desarrollador)
2. Busca **errores rojos**
3. Lee el mensaje de error
4. Recarga la página (Ctrl+Shift+R)
5. Consulta a tu profesor

---

**¡Listo para usar!** 🎉

Disfruta de la mejor experiencia de compra en línea simulada.
