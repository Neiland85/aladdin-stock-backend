import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { recentMovements, products } from "@/data/mock-data"
import { AlertTriangle, ArrowDownLeft, ArrowRight, ArrowUpRight, Package, Wrench } from "lucide-react"

export function RecentMovements() {
  // Función para formatear números como moneda (EUR)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  const getMovementIcon = (type: string) => {
    switch (type) {
      case "add":
        return <ArrowUpRight className="h-4 w-4" />
      case "remove":
        return <ArrowDownLeft className="h-4 w-4" />
      case "borrow":
        return <ArrowRight className="h-4 w-4" />
      case "return":
        return <Package className="h-4 w-4" />
      case "damage":
        return <AlertTriangle className="h-4 w-4 text-destructive" />
      case "repair":
        return <Wrench className="h-4 w-4" />
      default:
        return null
    }
  }

  const getMovementTypeText = (type: string) => {
    switch (type) {
      case "add":
        return "Añadido al stock"
      case "remove":
        return "Quitado del stock"
      case "borrow":
        return "Prestado"
      case "return":
        return "Devuelto"
      case "damage":
        return "Reportado daño"
      case "repair":
        return "Reparado"
      default:
        return type
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Movimientos Recientes</CardTitle>
        <CardDescription>Últimos movimientos registrados en el sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentMovements.map((movement) => {
            const product = products.find((p) => p.id === movement.productId)
            return (
              <div key={movement.id} className="flex items-start gap-4 p-2 rounded-lg bg-secondary/20">
                <div className="mt-1">{getMovementIcon(movement.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">
                      {product?.name} ({movement.productId})
                    </p>
                    <p className="text-sm text-muted-foreground">{new Date(movement.date).toLocaleDateString()}</p>
                  </div>
                  <p className="text-sm">
                    {getMovementTypeText(movement.type)} - {movement.quantity} unidad(es)
                  </p>
                  {movement.rentalDays && movement.rentalIncome && (
                    <p className="text-sm text-success mt-1">
                      Alquiler: {movement.rentalDays} días - {formatCurrency(movement.rentalIncome)}
                    </p>
                  )}
                  {movement.type === "damage" && movement.damageAmount && (
                    <p className="text-sm text-destructive mt-1">
                      Coste de reparación: {formatCurrency(movement.damageAmount * movement.quantity)}
                    </p>
                  )}
                  {movement.notes && <p className="text-xs text-muted-foreground mt-1">Nota: {movement.notes}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

