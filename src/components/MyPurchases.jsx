import { useState } from 'react'

export default function MyPurchases({ purchases = [], onClose }) {
  const [selectedTab, setSelectedTab] = useState('all')

  // Filtrar compras según el tab seleccionado
  const filterPurchases = () => {
    if (selectedTab === 'all') return purchases
    if (selectedTab === 'pending') return purchases.filter(p => p.status === 'pendiente')
    if (selectedTab === 'completed') return purchases.filter(p => p.status === 'entregado')
    if (selectedTab === 'cancelled') return purchases.filter(p => p.status === 'cancelado')
    return purchases
  }

  const filteredPurchases = filterPurchases()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Mis compras</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <button
            onClick={() => setSelectedTab('all')}
            className={`flex-1 py-4 px-6 text-sm font-medium transition ${
              selectedTab === 'all'
                ? 'text-ml-blue border-b-2 border-ml-blue'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Todas las compras
            <span className="ml-2 text-gray-500">({purchases.length})</span>
          </button>
          <button
            onClick={() => setSelectedTab('pending')}
            className={`flex-1 py-4 px-6 text-sm font-medium transition ${
              selectedTab === 'pending'
                ? 'text-ml-blue border-b-2 border-ml-blue'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            En proceso
            <span className="ml-2 text-gray-500">
              ({purchases.filter(p => p.status === 'pendiente').length})
            </span>
          </button>
          <button
            onClick={() => setSelectedTab('completed')}
            className={`flex-1 py-4 px-6 text-sm font-medium transition ${
              selectedTab === 'completed'
                ? 'text-ml-blue border-b-2 border-ml-blue'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Entregadas
            <span className="ml-2 text-gray-500">
              ({purchases.filter(p => p.status === 'entregado').length})
            </span>
          </button>
          <button
            onClick={() => setSelectedTab('cancelled')}
            className={`flex-1 py-4 px-6 text-sm font-medium transition ${
              selectedTab === 'cancelled'
                ? 'text-ml-blue border-b-2 border-ml-blue'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Canceladas
            <span className="ml-2 text-gray-500">
              ({purchases.filter(p => p.status === 'cancelado').length})
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {filteredPurchases.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.28l-.31-1.243A1 1 0 005 4H3z" />
              </svg>
              <p className="text-gray-500 text-lg">
                {selectedTab === 'all' && 'No tienes compras aún'}
                {selectedTab === 'pending' && 'No hay compras en proceso'}
                {selectedTab === 'completed' && 'No hay compras entregadas'}
                {selectedTab === 'cancelled' && 'No hay compras canceladas'}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Cuando compres algo, aparecerá aquí
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPurchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex gap-4">
                    {/* Imagen del producto */}
                    <img
                      src={purchase.image}
                      alt={purchase.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    {/* Detalles */}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{purchase.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        ID de compra: {purchase.orderId}
                      </p>
                      <p className="text-sm text-gray-500">
                        Fecha: {new Date(purchase.date).toLocaleDateString('es-CO')}
                      </p>

                      {/* Status badge */}
                      <div className="mt-2">
                        {purchase.status === 'pendiente' && (
                          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            ⏳ En proceso
                          </span>
                        )}
                        {purchase.status === 'entregado' && (
                          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            ✓ Entregado
                          </span>
                        )}
                        {purchase.status === 'cancelado' && (
                          <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            ✕ Cancelado
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Precio y acciones */}
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900">
                        ${purchase.total.toLocaleString('es-CO')}
                      </p>
                      <button className="text-sm text-ml-blue hover:underline mt-2 font-medium">
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
