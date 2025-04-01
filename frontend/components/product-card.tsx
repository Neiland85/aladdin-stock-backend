"use client"

import { AlertTriangle, ArrowDownLeft, ArrowUpRight, Calendar, Euro, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types/product"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductCardProps {
  product: Product
  onAction?: (action: string, product: Product) => void
}

export function ProductCard({ product, onAction }: ProductCardProps) {
  const getStatusColor = () => {
    if (product.damaged > 0) return "destructive"
    if (product.borrowed > 0) return "warning"
    if (product.available <= 3) return "warning"
    return "success"
  }

  const getStatusText = () => {
    if (product.damaged > 0) return "Dañado"
    if (product.borrowed > 0) return "Prestado"
    if (product.available <= 3) return "Bajo stock"
    return "Disponible"
  }

  const handleAction = (action: string) => {
    if (onAction) {
      onAction(action, product)
    }
  }

  // Función para formatear números como moneda (EUR)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  // Calcular el valor total de inventario para este producto
  const totalInventoryValue = product.purchasePrice * product.totalUnits

  // Calcular el valor actual de los equipos disponibles
  const availableValue = product.purchasePrice * product.available

  // Calcular el valor de los equipos prestados
  const borrowedValue = product.purchasePrice * product.borrowed

  // Calcular el valor de los equipos dañados
  const damagedValue = product.purchasePrice * product.damaged

  // Calcular ingresos diarios por alquiler
  const dailyRentalIncome = product.rentalPriceDaily * product.borrowed

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ID: {product.id} • {product.category}
                </p>
              </div>
              <Badge variant={getStatusColor()}>{getStatusText()}</Badge>
            </div>

            <Tabs defaultValue="inventory" className="mt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="inventory">Inventario</TabsTrigger>
                <TabsTrigger value="financial">Financiero</TabsTrigger>
              </TabsList>

              <TabsContent value="inventory" className="space-y-4">
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Disponibles</p>
                    <p className="text-xl font-semibold">{product.available}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Prestados</p>
                    <p className="text-xl font-semibold">{product.borrowed}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dañados</p>
                    <p className="text-xl font-semibold">{product.damaged}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{product.location}</p>
                  </div>
                  {product.lastMovement && (
                    <div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Último movimiento
                      </p>
                      <p className="font-medium">{new Date(product.lastMovement).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="financial">
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Precio Compra</p>
                    <p className="text-lg font-semibold">{formatCurrency(product.purchasePrice)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Valor Total</p>
                    <p className="text-lg font-semibold">{formatCurrency(totalInventoryValue)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Alquiler Diario</p>
                    <p className="text-lg font-semibold">{formatCurrency(product.rentalPriceDaily)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Alquiler Semanal</p>
                    <p className="text-lg font-semibold">{formatCurrency(product.rentalPriceWeekly)}</p>
                  </div>
                </div>

                <div className="mt-4 p-2 bg-secondary/30 rounded-md">
                  <p className="text-sm font-medium flex items-center gap-1">
                    <Euro className="h-3 w-3" /> Balance Actual
                  </p>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    <div>
                      <p className="text-xs text-muted-foreground">Disponible</p>
                      <p className="font-medium">{formatCurrency(availableValue)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Prestado</p>
                      <p className="font-medium">{formatCurrency(borrowedValue)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Dañado</p>
                      <p className="font-medium text-destructive">{formatCurrency(damagedValue)}</p>
                    </div>
                  </div>
                  {product.borrowed > 0 && (
                    <div className="mt-2 pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">Ingresos diarios por alquiler</p>
                      <p className="font-medium text-success">{formatCurrency(dailyRentalIncome)}</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex md:flex-col gap-2 p-4 bg-secondary/50 justify-between">
            <Button
              variant="default"
              size="sm"
              className="gap-1 bg-magenta-500 hover:bg-magenta-600"
              onClick={() => handleAction("add")}
            >
              <ArrowUpRight className="h-4 w-4" />
              <span>Añadir</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1" onClick={() => handleAction("remove")}>
              <ArrowDownLeft className="h-4 w-4" />
              <span>Quitar</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1" onClick={() => handleAction("return")}>
              <Package className="h-4 w-4" />
              <span>Devolver</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1" onClick={() => handleAction("damage")}>
              <AlertTriangle className="h-4 w-4" />
              <span>Reportar</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

