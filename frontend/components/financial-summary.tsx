import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { calculateFinancialSummary } from "@/data/mock-data"
import { AlertTriangle, Euro } from "lucide-react"

export function FinancialSummary() {
  const summary = calculateFinancialSummary()

  // Función para formatear números como moneda (EUR)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Valor Total Inventario</CardTitle>
          <Euro className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(summary.totalInventoryValue)}</div>
          <p className="text-xs text-muted-foreground">Valor de compra de todos los equipos</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Valor en Alquiler</CardTitle>
          <Euro className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(summary.activeRentalValue)}</div>
          <p className="text-xs text-muted-foreground">Ingresos diarios por equipos alquilados</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pérdidas por Daños</CardTitle>
          <AlertTriangle className="h-4 w-4 text-destructive/70" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">{formatCurrency(summary.totalDamageLoss)}</div>
          <p className="text-xs text-muted-foreground">Coste total de reparaciones</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">ROI Anual</CardTitle>
          <Euro className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summary.roi.toFixed(2)}%</div>
          <p className="text-xs text-muted-foreground">Retorno anual sobre la inversión</p>
        </CardContent>
      </Card>
    </div>
  )
}

