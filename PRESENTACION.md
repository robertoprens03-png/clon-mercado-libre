# 🎤 GUÍA DE EXPOSICIÓN - MERCADO LIBRE CLONE

## 📌 Estructura de tu presentación (10-15 minutos)

### 1️⃣ INTRODUCCIÓN (1-2 minutos)

**Qué decir:**
```
"Hola, soy [tu nombre]. Para este proyecto final de React, 
decidí crear un clon funcional de Mercado Libre.

La razón es que Mercado Libre es uno de los e-commerce más 
grandes de Latinoamérica y es un buen ejemplo para aplicar 
los conceptos de React que hemos aprendido."
```

---

### 2️⃣ DEMOSTRACIÓN EN VIVO (5-7 minutos)

**Abre el navegador en localhost:5175 y muestra:**

#### A. Navbar y Búsqueda (1 min)
```
1. Apunta al logo ML en la esquina
2. Di: "Aquí está el logo de Mercado Libre"
3. Haz una búsqueda: escribe "iPhone"
4. Di: "La búsqueda filtra los productos en tiempo real"
5. Borra la búsqueda
```

#### B. Menú de Categorías (1 min)
```
1. Apunta al menú de categorías
2. Haz clic en "Electrónica"
3. Di: "Los productos se filtran por categoría"
4. Haz clic en "Ofertas"
5. Di: "Aquí mostré solo productos con descuento"
```

#### C. Productos (1 min)
```
1. Señala una tarjeta de producto
2. Di: "Cada tarjeta muestra:
   - Imagen del producto
   - Nombre y descripción
   - Precio actual y original
   - Descuento en porcentaje
   - Rating de estrellas
   - Badge de envío gratis
   - Botón para agregar al carrito"
```

#### D. Carrito (1 min)
```
1. Agrega 2-3 productos al carrito
2. Apunta al contador de carrito (en rojo)
3. Di: "El carrito se actualiza en tiempo real"
4. Haz clic en el carrito para verlo
5. Muestra: productos, cantidades, total
6. Di: "También muestra el resumen de compra"
```

#### E. Login (1 min)
```
1. Haz clic en "Inicia sesión"
2. Di: "Sistema de autenticación básico"
3. Escribe email: test@email.com
4. Escribe contraseña: 123456
5. Haz clic en "Inicia sesión"
6. Di: "Ahora muestra 'Cerrar sesión' en lugar de 'Inicia sesión'"
```

#### F. Footer (1 min)
```
1. Scroll hacia abajo
2. Di: "Aquí está el footer con información, 
   enlaces y datos de contacto"
```

#### G. Responsive (bonus)
```
1. Abre las herramientas de desarrollador (F12)
2. Haz clic en el icono de dispositivo
3. Cambia a iPhone X o tablet
4. Di: "El diseño se adapta a cualquier pantalla"
```

---

### 3️⃣ EXPLICACIÓN TÉCNICA (3-4 minutos)

**Estructura del código:**

```
"El proyecto está organizado en componentes reutilizables:

1. NAVBAR - Buscador y navegación principal
2. MENU - Filtro por categorías
3. PRODUCTLIST - Grid de productos
4. PRODUCTCARD - Tarjeta individual
5. CART - Carrito de compras
6. LOGINMODAL - Modal de autenticación
7. FOOTER - Pie de página
```

**Tecnologías utilizadas:**

```
- REACT: Para crear componentes reutilizables
- VITE: Para desarrollo más rápido
- TAILWIND CSS: Para estilos sin escribir CSS manual
- JAVASCRIPT ES6+: Para la lógica

El proyecto usa React Hooks (useState) para manejar el estado."
```

**Flujo de datos:**

```
Mostrar imagen o diagrama simple:

[Usuario busca/filtra]
         ↓
    [App.jsx]
    (estado global)
         ↓
[Productos filtrados]
         ↓
[ProductList + ProductCard]
         ↓
[Mostrar en pantalla]
```

---

### 4️⃣ CARACTERÍSTICAS PRINCIPALES (1-2 minutos)

**Marca cada punto:**

```
✅ Búsqueda funcional en tiempo real
✅ Filtro por categorías (Electrónica, Moda, Accesorios)
✅ Filtro de ofertas (solo productos con descuento)
✅ Carrito de compras con contador
✅ Sistema de login/logout básico
✅ Diseño responsive (móvil, tablet, desktop)
✅ 16 productos con imágenes reales
✅ Footer completo
✅ Identidad visual de Mercado Libre
✅ Sin dependencias externas (solo React, Vite, Tailwind)
```

---

### 5️⃣ DECISIONES DE DISEÑO (1 minuto)

**Por qué hice esto así:**

```
1. Componentes reutilizables
   "Los componentes pueden reutilizarse en otras páginas"

2. Tailwind CSS en lugar de CSS manual
   "Es más rápido y consistente"

3. Datos simulados
   "Como es un proyecto académico, no conecté a una 
    base de datos real"

4. Colores de Mercado Libre
   "Amarillo #FADA55 y Azul #001F5C"

5. Responsive design
   "Funciona en cualquier dispositivo"
```

---

### 6️⃣ DESAFÍOS Y SOLUCIONES (opcional)

```
"Algunos desafíos que enfrenté:

1. Filtrado combinado (búsqueda + categorías)
   Solución: Función applyFilters() que combina ambos

2. Contador de descuento
   Solución: Cálculo simple con fórmula:
   descuento = ((original - actual) / original) * 100

3. Responsive grid de productos
   Solución: Usar grid de Tailwind con breakpoints:
   sm:grid-cols-2, md:grid-cols-3, lg:grid-cols-4
```

---

### 7️⃣ MEJORAS FUTURAS (opcional)

```
"Si tuviera más tiempo, agregaría:

- Base de datos real (Firebase o PostgreSQL)
- Sistema de pago real (Mercado Pago)
- Página de detalle del producto
- Sistema de reviews y comentarios
- Wishlist/Favoritos
- Chat con vendedor
- Historial de compras
- Dark mode
```

---

## 🎯 PUNTOS CLAVE A MENCIONAR

1. **React Hooks**: useState para manejar estado
2. **Componentes**: Dividir la UI en componentes pequeños
3. **Props**: Pasar datos entre componentes
4. **Tailwind**: Clases de utilidad en lugar de CSS
5. **Responsive**: Diseño adaptable
6. **Identidad visual**: Respeto por la marca original

---

## ❓ PREGUNTAS QUE PROBABLEMENTE TE HAGAN

### P: "¿Cómo manejas el estado en la app?"
**R**: "Con React useState. Todos los datos están en App.jsx y se pasan 
mediante props a los componentes. Cuando el usuario busca o filtra, 
actualizo el estado y React re-renderiza automáticamente."

### P: "¿Por qué Tailwind en lugar de CSS normal?"
**R**: "Tailwind es más rápido de usar porque solo escribo clases. 
Es consistente y no tengo que preocuparme por nombres de clases. 
Además, genera CSS optimizado automáticamente."

### P: "¿Cómo agregaste la búsqueda funcional?"
**R**: "En el input de búsqueda, uso onChange para capturar lo que escribe 
el usuario. Luego filtro el array de productos con .filter() y comparo 
el nombre del producto con lo que escribió."

### P: "¿Por qué 16 productos?"
**R**: "Es una cantidad representativa para mostrar que el grid funciona 
bien. En producción, traería miles de productos de una API."

### P: "¿Es seguro el login?"
**R**: "No. Es solo una demo. En producción usaría autenticación real 
con Firebase o JWT tokens. Aquí solo cambio el estado, no valido nada."

### P: "¿Cómo lo harías con base de datos?"
**R**: "Usaría Firebase Realtime Database o PostgreSQL. En lugar de 
importar productsData, haría una llamada a una API con fetch() o axios."

---

## 📊 DATOS PARA MOSTRAR

**Abre la consola y puedes mostrar:**
```javascript
// Cantidad de productos
console.log(productsData.length) // 16

// Estructura de un producto
console.log(productsData[0])
// {
//   id: 1,
//   name: 'iPhone 15 Pro',
//   price: 999.99,
//   originalPrice: 1199.99,
//   category: 'electronica',
//   rating: 4.8,
//   freeShipping: true
// }
```

---

## ⏱️ TIMELINE SUGERIDO

| Parte | Tiempo |
|------|--------|
| Introducción | 1 min |
| Demo en vivo | 6 mins |
| Explicación técnica | 3 mins |
| Características | 1 min |
| Decisiones de diseño | 1 min |
| Preguntas | 3 mins |
| **TOTAL** | **15 mins** |

---

## 💡 CONSEJOS FINALES

✅ **Practica antes**: Ensaya la presentación 2-3 veces
✅ **Habla claro**: No hables muy rápido
✅ **Señala**: Usa la pantalla compartida bien
✅ **Interactúa**: Anima a preguntas
✅ **Sé honesto**: Si no sabes algo, dilo
✅ **Muestra entusiasmo**: El proyecto está bien hecho
✅ **Cierra bien**: "Gracias por escuchar, ¿preguntas?"

---

## 🎬 DEMOSTRACIÓN PERFECTA

**Orden ideal:**
1. Mostrar página inicio completa
2. Hacer búsqueda (mostrar resultado)
3. Filtrar por categoría
4. Agregaral carrito (3-4 productos)
5. Abrir carrito
6. Hacer login
7. Mostrar en móvil
8. Cerrar con preguntas

---

✅ **¡ESTÁS LISTO PARA PRESENTAR!**
