import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              Nexoia
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Plataforma inteligente para la gestión de documentación y atención al cliente.
            </p>
          </div>

          {/* Links section 1 */}
          <div>
            <h3 className="font-medium mb-4">Producto</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/manual" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Manual
                </Link>
              </li>
            </ul>
          </div>

          {/* Links section 2 */}
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Términos de servicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                Email: info@nexoia.com
              </li>
              <li className="text-sm text-muted-foreground">
                Teléfono: +34 91 123 45 67
              </li>
              <li className="text-sm text-muted-foreground">
                Madrid, España
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexoia. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}