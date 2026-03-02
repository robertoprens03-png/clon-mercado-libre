import { Link } from 'react-router-dom'
import logo2 from '../img/logos/logo2-mercadolibre.webp'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Links principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" state={{ category: 'electronics' }} className="hover:text-ml-yellow transition">Electrónica</Link>
              </li>
              <li>
                <Link to="/" state={{ category: "women's clothing" }} className="hover:text-ml-yellow transition">Moda</Link>
              </li>
              <li>
                <Link to="/" state={{ category: 'jewelery' }} className="hover:text-ml-yellow transition">Accesorios</Link>
              </li>
              <li>
                <Link to="/" state={{ category: 'todos' }} className="hover:text-ml-yellow transition">Hogar y Muebles</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Comprador</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-ml-yellow transition">Mis compras</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Mis favoritos</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Mi carrito</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Devoluciones</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Vendedor</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-ml-yellow transition">Vender en ML</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Mi Mercado</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Ventas</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Mensajes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Sobre Mercado Libre</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-ml-yellow transition">Acerca de</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Ayuda</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Términos y condiciones</Link></li>
              <li><Link to="/" className="hover:text-ml-yellow transition">Privacidad</Link></li>
            </ul>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Información inferior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="font-bold text-white mb-2">📦 Envío gratis</h5>
            <p className="text-xs">Compra en millones de productos con envío gratis</p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">🛡️ Compra protegida</h5>
            <p className="text-xs">Dinero de vuelta si no lo recibes o no es lo que esperabas</p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">💳 Pago seguro</h5>
            <p className="text-xs">Tus datos siempre protegidos</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
          <img className="h-10" src={logo2} alt="Mercado Libre" />
          </div>
          <p className="text-xs text-center">
            © 1999-2026 Mercado Libre Colombia LTDA.
          </p>
          <p className="text-xs text-center text-gray-500 mt-2">
            Calle 100 #7-33, Torre I, Piso 16, Bogotá D.C., Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
