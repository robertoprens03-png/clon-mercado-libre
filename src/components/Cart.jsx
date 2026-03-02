export default function Cart({ cart, onRemoveFromCart }) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-8xl mb-6">🛒</div>
        <p className="text-2xl text-gray-700 font-medium mb-2">Tu carrito está vacío</p>
        <p className="text-gray-600">Agrega productos para comenzar a comprar</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-ml-blue mb-8">Carrito de compras</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Productos */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg border border-gray-200 flex gap-6 hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    {item.originalPrice && (
                      <p className="text-xs text-gray-500 line-through">
                        ${item.originalPrice}
                      </p>
                    )}
                    <p className="text-xl font-bold text-ml-blue">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="bg-gray-100 px-4 py-2 rounded text-gray-700 font-medium">
                      Qty: {item.quantity}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium text-sm hover:underline"
                >
                  Eliminar
                </button>
                {item.freeShipping && (
                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded text-center">
                    ✓ Envío gratis
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Resumen */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 h-fit sticky top-32">
          <h3 className="font-bold text-xl text-gray-900 mb-6">Resumen de compra</h3>

          <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal ({cart.length} producto{cart.length !== 1 ? 's' : ''})</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Envío</span>
              <span className="font-semibold text-green-600">Gratis</span>
            </div>
          </div>

          <div className="flex justify-between mb-8 text-lg border-b border-gray-200 pb-6">
            <span className="font-bold text-gray-900">Total</span>
            <span className="font-bold text-ml-blue text-2xl">${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-ml-yellow text-ml-blue font-bold py-3 rounded-lg hover:bg-yellow-400 transition mb-3 text-lg">
            Proceder a comprar
          </button>

          <button className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition">
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  )
}
