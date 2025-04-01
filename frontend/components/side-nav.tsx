import { History, Home, Package, Settings, Users } from "lucide-react"
import Link from "next/link"

export function SideNav() {
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Package, label: "Inventario", href: "/inventory" },
    { icon: History, label: "Historial", href: "/history" },
    { icon: Users, label: "Usuarios", href: "/users" },
    { icon: Settings, label: "Configuración", href: "/settings" },
  ]

  return (
    <div className="py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Aladdin Stock Bot</h2>
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

