import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function VenderPage({
  isLoggedIn = false,
  onSearch = () => {},
  onLoginClick = () => {},
  onLogoutClick = () => {},
  cart = [],
  favorites = [],
  onCartClick = () => {},
  onCategorySelect = () => {}
}) {
  const benefits = [
    {
      icon: '📦',
      title: 'Llegá a millones de compradores',
      description: 'Publicá tus productos y accedé a la base de compradores más grande de Latinoamérica.'
    },
    {
      icon: '🚚',
      title: 'Envíos con Mercado Envíos',
      description: 'Usá nuestra red de logística para enviar tus productos de forma rápida y segura.'
    },
    {
      icon: '💳',
      title: 'Cobrá con Mercado Pago',
      description: 'Recibí tu dinero de forma segura con todas las opciones de pago disponibles.'
    },
    {
      icon: '📊',
      title: 'Gestioná tus ventas',
      description: 'Controlá tu stock, ventas y reputación desde un solo lugar.'
    },
    {
      icon: '🛡️',
      title: 'Segurito Vendedor',
      description: 'Protección para vos y tus productos ante devoluciones o inconvenientes.'
    },
    {
      icon: '💰',
      title: 'Sin costo de publicación',
      description: 'Publicá gratis. Solo pagás una comisión cuando vendés.'
    }
  ]

  const steps = [
    { number: '1', title: 'Creá tu cuenta', description: 'Registrate gratis en Mercado Libre en menos de 2 minutos.' },
    { number: '2', title: 'Publicá tu producto', description: 'Agregá fotos, descripción, precio y stock de lo que querés vender.' },
    { number: '3', title: 'Recibí tus pedidos', description: 'Cuando alguien compre, te avisamos y gestionás el envío desde la plataforma.' },
    { number: '4', title: 'Cobrá tu dinero', description: 'Recibís el pago directo en tu cuenta de Mercado Pago.' }
  ]

  return (
    <div className="min-h-screen bg-ml-gray flex flex-col">
      <Navbar
        onSearch={onSearch}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
        cartCount={cart.length}
        onCartClick={onCartClick}
        favoritesCount={favorites.length}
        onCategorySelect={onCategorySelect}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ml-yellow py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Vendé en Mercado Libre
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Llegá a millones de compradores y hacé crecer tu negocio con la plataforma de e-commerce líder en Latinoamérica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isLoggedIn ? (
                <button className="bg-ml-blue text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition">
                  Publicar un producto
                </button>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="bg-ml-blue text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
                >
                  Comenzar a vender gratis
                </button>
              )}
              <Link
                to="/"
                className="bg-white text-gray-800 font-bold px-8 py-4 rounded-lg text-lg border border-gray-300 hover:bg-gray-50 transition"
              >
                Ver productos disponibles
              </Link>
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '+100M', label: 'Compradores activos' },
                { value: '+350M', label: 'Publicaciones activas' },
                { value: '18', label: 'Países de presencia' },
                { value: '99%', label: 'Satisfacción compradores' }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold text-ml-blue">{stat.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ¿Por qué vender en Mercado Libre?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              ¿Cómo funciona?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-ml-yellow text-gray-900 font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-ml-blue py-14 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Registrate gratis y empezá a vender hoy mismo. Sin comisión inicial.
            </p>
            <button
              onClick={onLoginClick}
              className="bg-ml-yellow text-gray-900 font-bold px-10 py-4 rounded-lg text-lg hover:brightness-95 transition"
            >
              {isLoggedIn ? 'Publicar mi primer producto' : 'Crear mi cuenta gratis'}
            </button>
          </div>
        </section>
      </main>

      <Footer onCategorySelect={onCategorySelect} />
    </div>
  )
}
