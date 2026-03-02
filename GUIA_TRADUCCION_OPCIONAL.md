# 🌐 Guía de Traducción - FakeStore a Español (Opcional)

**Nota:** Este es un complemento opcional. El proyecto funciona perfectamente en inglés.

---

## 🎯 Opción Recomendada: Traducción Manual Simple

Si deseas mostrar los nombres de productos en español, aquí está la solución más simple:

### Paso 1: Crear Diccionario de Traducción

Crear archivo `src/utils/translations.js`:

```javascript
/**
 * Diccionario de traducciones para FakeStore API
 * Nombres de productos + descripciones en español
 */

export const productTranslations = {
  // Electronics (Electrónica)
  'Fjallraven Backpack': {
    name: 'Mochila Fjallraven',
    description: 'Tu mochila perfecta para aventuras cotidianas. Hecha con nylon resistente al agua y correas cómodas para la espalda.'
  },
  'WD 2TB My Passport': {
    name: 'Disco Duro Portátil WD 2TB',
    description: 'Almacenamiento externo rápido y confiable. Perfecto para copias de seguridad y transferencias de archivos.'
  },
  'Samsung Galaxy Tab S7': {
    name: 'Tablet Samsung Galaxy S7',
    description: 'Tablet de pantalla grande con procesador potente. Ideal para multimedia, lectura y productividad.'
  },
  'Samsung 49-Inch CHG90 Gaming Monitor': {
    name: 'Monitor Gaming Samsung 49 Pulgadas',
    description: 'Monitor gaming ultrawide curvo. Resolución 5120x1440 con tasa de refresco alta.'
  },
  'Costway Robot Vacuum': {
    name: 'Robot Aspirador Costway',
    description: 'Aspirador robot automático. Limpia pisos y alfombras de forma autónoma.'
  },
  'DANVOUY Womens T Shirt Casual Cotton Short': {
    name: 'Camiseta Casual DANVOUY',
    description: 'Camiseta de algodón cómoda para el día a día. Disponible en múltiples colores.'
  },
  
  // Jewelery (Joyería)
  'White Gold Plated Princess': {
    name: 'Anillo Diamante Oro Blanco',
    description: 'Anillo elegante con diamantes y plata esterlina. Perfecto para ocasiones especiales.'
  },
  'Aofitee Womens Solid Watch': {
    name: 'Collar Diamante Oro Blanco',
    description: 'Collar delicado con diamantes de imitación. Acabado en oro blanco brillante.'
  },
  'White Gold Plated Silver': {
    name: 'Pulsera de Cuero Blanco',
    description: 'Pulsera elegante de cuero blanco. Cierre de acero inoxidable resistente.'
  },
  'Dimond Green few bits of red': {
    name: 'Anillo Esmeralda Diamante',
    description: 'Anillo único con piedra esmeralda genuina. Diseño exclusivo en oro blanco.'
  },
  
  // Men's Clothing
  'TW Evans Cordage 12-Inch': {
    name: 'Camisa Algodón Hombre',
    description: 'Camisa clásica de algodón puro para hombre. Cómoda y elegante para diario o trabajo.'
  },
  'Fjallraven Arc\'teryx Chiliad': {
    name: 'Pantalón Chino Slim Hombre',
    description: 'Pantalones chino modernos color arena. Corte ajustado y cómodo para uso casual.'
  },
  'Razer Phone 2': {
    name: 'Chaqueta Azul Hombre',
    description: 'Chaqueta de invierno azul. Material impermeable y cálido para el frío.'
  },
  'MBJ Women\'s Solid Short Sleeve Boat Neck': {
    name: 'Camisa Formal Oxford Hombre',
    description: 'Camisa formal blanca de algodón Oxford. Perfecta para trabajo o eventos.'
  },
  
  // Women's Clothing
  'Opna Women\'s Short Sleeve Moisture': {
    name: 'Vestido Midi Mujer',
    description: 'Vestido elegante de corte midi. Perfecto para ocasiones especiales o salidas.'
  },
  'DANVOUY Womens T Shirt Casual Cotton Short': {
    name: 'Vestido Casual Mujer',
    description: 'Vestido cómodo de algodón. Ideal para el día a día con estilo desenfadado.'
  },
  'White Plated Python': {
    name: 'Vestido Elegante Mujer',
    description: 'Vestido formal para eventos. Diseño sofisticado con tela de calidad.'
  },
  'Midnight Owl Women\'s Solid Shorts': {
    name: 'Pantalones Palazzo Mujer',
    description: 'Pantalones amplios y cómodos. Estilo elegante para cualquier ocasión.'
  },
  'BIYLACLESEN Women\'s W': {
    name: 'Blusa Blanca Mujer',
    description: 'Blusa elegante de algodón blanco. Versátil para combinar con cualquier prenda.'
  },
  'JMKKS Women\'s Casual Deep Sea Blue': {
    name: 'Vestido Largo Mujer',
    description: 'Vestido largo y fluido. Perfecto para eventos formales o cenas.'
  }
}

export const categoryTranslations = {
  'electronics': 'Electrónica',
  'jewelery': 'Joyería',
  "men's clothing": 'Ropa Hombre',
  "women's clothing": 'Ropa Mujer'
}
```

### Paso 2: Usar el Diccionario en fakeStoreApi.js

Actualiza la función `getAllProducts()`:

```javascript
import { productTranslations, categoryTranslations } from '../utils/translations.js'

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${FAKE_STORE_API_BASE}/products`, {
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      credentials: 'omit'
    });

    if (!response.ok) {
      throw new Error(`Error al obtener productos: ${response.status}`);
    }

    const data = await response.json();

    // Transformar datos de FakeStore a nuestro formato
    return data.map((item) => {
      // Obtener traducción si existe
      const translation = productTranslations[item.title]
      
      return {
        id: `fake-${item.id}`,
        name: translation?.name || item.title, // Usar nombre en español si existe
        price: item.price * 4000,
        originalPrice: (item.price * 4000) * 1.2,
        category: item.category,
        categorySpanish: categoryTranslations[item.category], // Nuevo campo
        image: item.image,
        pictures: [{ url: item.image }],
        description: translation?.description || item.description, // Usar descripción en español si existe
        rating: item.rating?.rate || 4.5,
        reviewsCount: item.rating?.count || 0,
        freeShipping: Math.random() > 0.5,
        source: 'fakestore',
      }
    });
  } catch (error) {
    console.error('Error en FakeStore API:', error);
    return [];
  }
};
```

### Paso 3: Usar el categorySpanish en componentes

En ProductCard.jsx o donde muestres la categoría:

```javascript
<span className="text-xs text-gray-600">
  {product.categorySpanish || product.category}
</span>
```

---

## 🎯 Alternativa: Traducción Automática Online

Si prefieres traducción automática (más trabajo pero más dinámico):

```javascript
/**
 * Traducción automática usando API gratuita
 */
export const translateText = async (text, targetLanguage = 'es') => {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`
    );
    const data = await response.json();
    return data.responseData.translatedText;
  } catch (error) {
    console.error('Error traduciendo:', error);
    return text; // Retorna el original si falla
  }
};

// Uso:
const spanishName = await translateText(product.name); // "Fjallraven Backpack" → "Mochila Fjallraven"
```

**Ventajas:**
- Automático, no requiere diccionario manual
- Funciona con cualquier API

**Desventajas:**
- Llamadas API adicionales
- Traducción imperfecta a veces
- Más lento

---

## 📊 Comparativa de Opciones

| Opción | Pros | Contras |
|--------|------|---------|
| **Mantener Inglés** | Simple, rápido, original | Algunos usuarios prefieren español |
| **Diccionario Manual** | Traducciones perfectas | Requiere escribir todas las traducciones |
| **Traducción Automática** | Dinámico, no requiere diccionario | API calls extras, traducción imperfecta |
| **Híbrido** | Lo mejor de ambos mundos | Más complejo de mantener |

---

## ✅ Solución Recomendada

**OPCIÓN 1: Diccionario Manual** es la mejor porque:
✅ Traducciones perfectas y controladas
✅ Rápido (sin API calls extra)
✅ Fácil de mantener y actualizar
✅ Proporciona mejor UX

---

## 🚀 Implementación Paso a Paso

### Si quieres implementar ahora:

```bash
# 1. Crea src/utils/translations.js con el diccionario anterior
# 2. Actualiza fakeStoreApi.js para importar y usar translations
# 3. Actualiza componentes para mostrar datos en español
# 4. ¡Listo!
```

### Si prefieres mantener en inglés:

```
# ¡Nada que hacer! El proyecto funciona perfecto así.
```

---

## 📝 Diccionario Completo Traducido

Aquí está el diccionario completo listo para copiar en `src/utils/translations.js`:

```javascript
export const productTranslations = {
  // Electrónica (6 productos)
  'Fjallraven Backpack': {
    name: 'Mochila Fjallraven',
    description: 'Tu mochila perfecta para aventuras cotidianas. Hecha con nylon resistente y correas ergonómicas.'
  },
  'WD 2TB My Passport': {
    name: 'Disco Duro Portátil WD 2TB',
    description: 'Almacenamiento externo rápido y seguro. Ideal para copias de seguridad y transferencias.'
  },
  'Samsung Galaxy Tab S7': {
    name: 'Tablet Samsung Galaxy Tab S7',
    description: 'Tablet potente de pantalla grande. Perfecta para multimedia y trabajo.'
  },
  'Samsung 49-Inch CHG90 Gaming Monitor': {
    name: 'Monitor Gaming Samsung Ultrawide 49"',
    description: 'Monitor ultrawide curvo para gaming. Resolución 5120x1440 con altísima tasa de refresco.'
  },
  'Costway Robot Vacuum': {
    name: 'Robot Aspirador Costway',
    description: 'Aspirador robótico automático. Limpia pisos y alfombras de forma inteligente.'
  },
  'DANVOUY Womens T Shirt Casual Cotton Short': {
    name: 'Camiseta Casual DANVOUY',
    description: 'Camiseta cómoda de algodón 100%. Ideal para el día a día en cualquier estación.'
  },

  // Joyería (4 productos)
  'White Gold Plated Princess': {
    name: 'Anillo Diamante Oro Blanco',
    description: 'Anillo elegante con diamantes de imitación. Metal plateado en oro blanco.'
  },
  'Aofitee Womens Solid Watch': {
    name: 'Collar Diamante Delicado',
    description: 'Collar de plata con piedras de cristal. Acabado brillante perfecto para ocasiones especiales.'
  },
  'White Gold Plated Silver': {
    name: 'Pulsera de Cuero Blanco',
    description: 'Pulsera elegante confeccionada en cuero. Cierre en acero inoxidable de alta calidad.'
  },
  'Dimond Green few bits of red': {
    name: 'Anillo Esmeralda Premium',
    description: 'Anillo único con piedra esmeralda. Diseño exclusivo montado en metal plateado.'
  },

  // Ropa Hombre (4 productos)
  'TW Evans Cordage 12-Inch': {
    name: 'Camisa Algodón Hombre',
    description: 'Camisa clásica de algodón puro. Perfecta para trabajo o eventos casuales.'
  },
  'Fjallraven Arc\'teryx Chiliad': {
    name: 'Pantalón Chino Slim Hombre',
    description: 'Pantalones chino modernos. Corte ajustado y cómodo para uso diario.'
  },
  'Razer Phone 2': {
    name: 'Chaqueta Azul Hombre',
    description: 'Chaqueta de invierno azul marino. Material impermeable y resistente al frío.'
  },
  'MBJ Women\'s Solid Short Sleeve Boat Neck': {
    name: 'Camisa Oxford Formal Hombre',
    description: 'Camisa formal blanca de tela Oxford. Ideal para trabajo profesional.'
  },

  // Ropa Mujer (6 productos)
  'Opna Women\'s Short Sleeve Moisture': {
    name: 'Vestido Midi Mujer',
    description: 'Vestido elegante de corte midi. Material ligero y cómodo para cualquier clima.'
  },
  'DANVOUY Womens T Shirt Casual Cotton Short': {
    name: 'Vestido Casual Mujer',
    description: 'Vestido cómodo de algodón. Perfecto para el día a día con estilo.'
  },
  'White Plated Python': {
    name: 'Vestido Elegante Mujer',
    description: 'Vestido formal para eventos especiales. Confeccionado con tela de calidad premium.'
  },
  'Midnight Owl Women\'s Solid Shorts': {
    name: 'Pantalones Palazzo Mujer',
    description: 'Pantalones amplios y cómodos. Estilo elegante para cualquier ocasión.'
  },
  'BIYLACLESEN Women\'s W': {
    name: 'Blusa Blanca Mujer',
    description: 'Blusa elegante de algodón blanco. Versátil para combinar con cualquier prenda.'
  },
  'JMKKS Women\'s Casual Deep Sea Blue': {
    name: 'Vestido Largo Fluido Mujer',
    description: 'Vestido largo y fluido azul marino. Perfecto para eventos formales o veladas.'
  }
}

export const categoryTranslations = {
  'electronics': 'Electrónica',
  'jewelery': 'Joyería',
  "men's clothing": 'Ropa Hombre',
  "women's clothing": 'Ropa Mujer'
}
```

---

**Recomendación Final:** 
Para este proyecto educativo, **mantén en inglés**. Es más simple y educativo. Si necesitas traducción, usa la Opción 1 (Diccionario Manual) cuando sea necesario.

---

*Guía de Traducción | 28 de febrero de 2026* 🌐
