# ✅ CHECKLIST PRE-PRESENTACIÓN

## 📋 Antes de presentar, verifica TODO esto:

---

## 🖥️ CONFIGURACIÓN TÉCNICA

### Servidor funcionando
- [ ] Terminal abierta en la carpeta del proyecto
- [ ] Comando `npm run dev` ejecutado
- [ ] Servidor corriendo en http://localhost:5175
- [ ] No hay mensajes de error en la terminal

### Navegador
- [ ] Google Chrome, Firefox o Edge abierto
- [ ] Zoom en 100% (no ampliado ni reducido)
- [ ] Herramientas de desarrollador cerradas (F12)
- [ ] Pantalla completa si es posible

### Conexión a internet
- [ ] WiFi conectado (para cargar imágenes de Unsplash)
- [ ] Velocidad decente (las imágenes cargan bien)

---

## 🎨 VISUALIZACIÓN DEL SITIO

### Navbar
- [ ] Logo ML visible (M azul, L amarillo)
- [ ] Buscador visible y funcional
- [ ] Botón "Ubicación" visible
- [ ] Botón "Suscripción MELI+" visible
- [ ] Segunda fila con Ofertas, Cupones, Vender, Ayuda
- [ ] Carrito visible con contador
- [ ] Botón "Inicia sesión" visible

### Menú de categorías
- [ ] Botones de categorías visibles
- [ ] Botones tienen colores correcto (amarillo/gris)
- [ ] 5 categorías: Todos, Electrónica, Moda, Accesorios, Ofertas

### Grid de productos
- [ ] Productos en 4 columnas (en desktop)
- [ ] Cada tarjeta tiene imagen
- [ ] Cada tarjeta tiene nombre del producto
- [ ] Cada tarjeta tiene precio en grande (azul)
- [ ] Badges de descuento visibles (arriba derecha)
- [ ] Badges de "Envío Gratis" visibles (abajo izquierda)
- [ ] Botón "Agregar al carrito" visible en cada tarjeta

### Footer
- [ ] Footer visible al scroll abajo
- [ ] Fondo gris oscuro
- [ ] Links organizados en columnas
- [ ] Logo ML en el footer
- [ ] Copyright visible

---

## 🧪 FUNCIONALIDADES A PROBAR

### Búsqueda
- [ ] Escribe en la barra de búsqueda
- [ ] Los productos se filtran al escribir
- [ ] El filtro es en tiempo real
- [ ] Escribe algo que no existe (ej: "xyz") - debe decir "No se encontraron productos"

### Categorías
- [ ] Haz clic en "Electrónica" - solo muestra productos de esa categoría
- [ ] Haz clic en "Moda" - solo muestra ropa
- [ ] Haz clic en "Accesorios" - solo muestra accesorios
- [ ] Haz clic en "Ofertas" - solo muestra productos con descuento
- [ ] Haz clic en "Todos" - vuelven todos los productos

### Carrito
- [ ] Haz clic en "Agregar al carrito" en 3 productos diferentes
- [ ] El contador en el carrito aumenta (1, 2, 3...)
- [ ] Haz clic en el icono del carrito
- [ ] Se muestra la vista del carrito
- [ ] Aparecen los 3 productos que agregaste
- [ ] Muestra el total correctamente
- [ ] Hay un botón "Eliminar" en cada producto
- [ ] Hay un botón "Seguir comprando"

### Login
- [ ] Haz clic en "Inicia sesión"
- [ ] Se abre un modal
- [ ] Hay campos para email y contraseña
- [ ] Escribe cualquier email
- [ ] Escribe cualquier contraseña
- [ ] Haz clic en "Inicia sesión"
- [ ] El modal se cierra
- [ ] En el navbar ahora dice "Cerrar sesión" en lugar de "Inicia sesión"
- [ ] Haz clic en "Cerrar sesión"
- [ ] Vuelve a aparecer "Inicia sesión"

### Responsive (prueba en móvil)
- [ ] Abre las herramientas de desarrollador (F12)
- [ ] Haz clic en el icono de dispositivo (esquina arriba izquierda)
- [ ] Selecciona iPhone X o cualquier móvil
- [ ] El layout se adapta (debería ser 1 columna)
- [ ] El navbar se ve bien
- [ ] Los botones se ven bien
- [ ] Puedes hacer scroll verticalmente

---

## 📝 DOCUMENTACIÓN

### Archivos de documentación
- [ ] README.md existe y está completo
- [ ] CAMBIOS.md existe y está completo
- [ ] PRESENTACION.md existe y está completo
- [ ] PROYECTO_COMPLETO.md existe y está completo

### Código limpio
- [ ] No hay errores en la consola (F12)
- [ ] No hay warnings rojos
- [ ] Los archivos están organizados en carpetas

---

## 🎤 PREPARACIÓN PARA LA PRESENTACIÓN

### Presentación oral
- [ ] Practicaste la presentación al menos 2 veces
- [ ] Sabes cuánto tiempo dura (target: 10-15 minutos)
- [ ] Tienes notas de ayuda (opcional)
- [ ] Practicaste las demostraciones (búsqueda, filtros, carrito)

### Demostraciones preparadas
- [ ] Sabes dónde está cada botón en la pantalla
- [ ] Tienes 3-4 búsquedas lisas para demostrar (ej: "iPhone", "Nike")
- [ ] Tienes productos listos para agregar al carrito
- [ ] Sabes cómo abrir las herramientas de desarrollador si piden responsive

### Respuestas preparadas
- [ ] Preparaste respuestas para preguntas comunes
- [ ] Sabes explicar qué es React en palabras simples
- [ ] Sabes explicar qué es Tailwind
- [ ] Sabes explicar cómo manejas el estado
- [ ] Sabes explicar cómo funciona la búsqueda

---

## 🎬 EL DÍA DE LA PRESENTACIÓN

### Antes de empezar
- [ ] Cierra todas las aplicaciones innecesarias
- [ ] Abre solo lo necesario (terminal, navegador, VS Code)
- [ ] Ajusta el zoom de la pantalla (100%)
- [ ] Ajusta el brillo de la pantalla
- [ ] Si usas proyector, prueba que se vea bien

### Durante la presentación
- [ ] Habla claro y despacio
- [ ] Apunta con el dedo o cursor a lo que mencionas
- [ ] No hagas clic demasiado rápido (da tiempo a que el auditorio vea)
- [ ] Deja ver cómo escribes en la búsqueda
- [ ] Deja ver cómo haces clic en los botones

### Si algo falla
- [ ] Si el servidor se cae, haz Ctrl+C y vuelve a `npm run dev`
- [ ] Si las imágenes no cargan, probablemente sea WiFi
- [ ] Si no sabes una respuesta, di "Es una buena pregunta, creo que..."
- [ ] Mantén la calma, el proyecto está bien hecho

---

## 📱 PRUEBA EN DIFERENTES TAMAÑOS

### Desktop (1920x1080)
- [ ] Navbar con 2 filas
- [ ] Grid de 4 columnas de productos
- [ ] Todo se ve correcto

### Tablet (768px)
- [ ] Navbar se adapta
- [ ] Grid de 3 columnas
- [ ] Todo legible

### Móvil (375px)
- [ ] Navbar se adapta
- [ ] Grid de 1 columna
- [ ] Botones grandes y clickeables

---

## 🔍 VERIFICACIONES FINALES

### Código
- [ ] Sin errores de sintaxis
- [ ] Sin warnings en la consola
- [ ] Los componentes son reutilizables
- [ ] Buen nombre de variables

### Diseño
- [ ] Colores de Mercado Libre correctos
- [ ] Espaciado consistente
- [ ] Tipografía legible
- [ ] Contraste suficiente

### Funcionalidad
- [ ] Todo lo que decimos que funciona, funciona
- [ ] La búsqueda es rápida
- [ ] Los filtros responden rápido
- [ ] El carrito actualiza al instante

### UX/UI
- [ ] Los botones son obvios de hacer clic
- [ ] El flujo es intuitivo
- [ ] Hay feedback visual (hover effects)
- [ ] Los mensajes de error son claros

---

## 🎯 COSAS QUE DICEN BIENPresentation

**Bueno:**
"Usé React Hooks para manejar el estado..."
"Tailwind CSS permite estilos consistentes..."
"Los componentes son reutilizables..."

**Mejor:**
"Implementé un carrito de compras que actualiza en tiempo real usando useState"
"El diseño es completamente responsive con breakpoints de Tailwind"
"Separé la lógica en componentes pequeños para que sean mantenibles"

---

## 🚀 ORDEN RECOMENDADO PARA PRESENTAR

1. Introducción (1 min)
2. Mostrar página completa (1 min)
3. Búsqueda funcional (1 min)
4. Filtros de categorías (1 min)
5. Agregar al carrito (1 min)
6. Vista del carrito (1 min)
7. Login (1 min)
8. Responsive en móvil (1 min)
9. Explicación técnica (3 mins)
10. Preguntas (2 mins)

**Total: 15 minutos**

---

## ⚠️ ERRORES A EVITAR

❌ No hagas clic demasiado rápido
❌ No olvides el sonido del micrófono
❌ No cierres el servidor por accidente
❌ No borres nada del código "para la presentación"
❌ No digas "no sabía que saldría así"
❌ No muestres el código sin explicar qué hace
❌ No hagas la presentación en 1 minuto (requiere 10-15)
❌ No subestimes el proyecto

✅ Sé confiado, ¡lo hiciste bien!

---

## 🎉 ÚLTIMO CHECK

Antes de empezar la presentación, pregúntate:

- ¿El servidor está corriendo? ✅
- ¿Puedo ver la página en el navegador? ✅
- ¿La búsqueda funciona? ✅
- ¿Los filtros funcionan? ✅
- ¿El carrito funciona? ✅
- ¿El login funciona? ✅
- ¿Se ve bien en la pantalla de proyección? ✅

Si respondiste SÍ a todo, ¡ESTÁS LISTO! 🚀

---

**¡BUENA SUERTE EN TU PRESENTACIÓN!**

Recuerda: El proyecto está bien hecho, confía en ello y demuéstalo con seguridad.

🎓 **¡Esto merece una A+!**
