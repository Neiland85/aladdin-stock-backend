"use client"

import type React from "react"

import { useState } from "react"
import { AlertTriangle, ArrowDownLeft, ArrowRight, ArrowUpRight, Euro, Package, Wrench, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { products, locations, movementTypes } from "@/data/mock-data"
import { Separator } from "@/components/ui/separator"

interface MovementModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (data: any) => void
}

export function MovementModal({ open, onOpenChange, onSubmit }: MovementModalProps) {
  const [formData, setFormData] = useState({
    productId: "",
    type: "",
    quantity: 1,
    location: "",
    notes: "",
    rentalDays: 1,
  })

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Calcular ingresos por alquiler si es un movimiento de tipo 'borrow'
    let rentalIncome
    if (formData.type === "borrow" && selectedProduct) {
      rentalIncome = selectedProduct.rentalPriceDaily * formData.quantity * formData.rentalDays
    }

    if (onSubmit) {
      onSubmit({
        ...formData,
        date: new Date().toISOString(),
        id: `MOV-${Date.now()}`,
        user: "Usuario Actual",
        rentalDays: formData.type === "borrow" ? formData.rentalDays : undefined,
        rentalIncome,
      })
    }
    onOpenChange(false)
    // Reset form
    setFormData({
      productId: "",
      type: "",
      quantity: 1,
      location: "",
      notes: "",
      rentalDays: 1,
    })
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ArrowUpRight":
        return <ArrowUpRight className="h-4 w-4" />
      case "ArrowDownLeft":
        return <ArrowDownLeft className="h-4 w-4" />
      case "ArrowRight":
        return <ArrowRight className="h-4 w-4" />
      case "Package":
        return <Package className="h-4 w-4" />
      case "AlertTriangle":
        return <AlertTriangle className="h-4 w-4" />
      case "Wrench":
        return <Wrench className="h-4 w-4" />
      default:
        return null
    }
  }

  const selectedProduct = products.find((p) => p.id === formData.productId)

  // Función para formatear números como moneda (EUR)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  // Calcular el valor financiero del movimiento
  const calculateFinancialImpact = () => {
    if (!selectedProduct || !formData.type) return null

    switch (formData.type) {
      case "add":
        return {
          label: "Coste de adquisición",
          value: selectedProduct.purchasePrice * formData.quantity,
          type: "expense",
        }
      case "borrow":
        return {
          label: "Ingresos por alquiler",
          value: selectedProduct.rentalPriceDaily * formData.quantity * formData.rentalDays,
          type: "income",
        }
      case "damage":
        return {
          label: "Pérdida por daño",
          value: selectedProduct.purchasePrice * formData.quantity,
          type: "loss",
        }
      default:
        return null
    }
  }

  const financialImpact = calculateFinancialImpact()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Registrar Nuevo Movimiento</DialogTitle>
          <DialogDescription>
            Completa el formulario para registrar un nuevo movimiento en el inventario.
          </DialogDescription>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="product">Producto</Label>
              <Select value={formData.productId} onValueChange={(value) => handleChange("productId", value)} required>
                <SelectTrigger id="product">
                  <SelectValue placeholder="Seleccionar producto" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name} ({product.id})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedProduct && (
              <div className="grid grid-cols-3 gap-2 p-2 bg-secondary/30 rounded-md text-sm">
                <div>
                  <span className="text-muted-foreground">Disponibles:</span>
                  <p className="font-medium">{selectedProduct.available}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Prestados:</span>
                  <p className="font-medium">{selectedProduct.borrowed}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Dañados:</span>
                  <p className="font-medium">{selectedProduct.damaged}</p>
                </div>
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="type">Tipo de Movimiento</Label>
              <Select value={formData.type} onValueChange={(value) => handleChange("type", value)} required>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  {movementTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      <div className="flex items-center gap-2">
                        {getIcon(type.icon)}
                        <span>{type.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="quantity">Cantidad</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) => handleChange("quantity", Number.parseInt(e.target.value))}
                required
              />
            </div>

            {formData.type === "borrow" && (
              <div className="grid gap-2">
                <Label htmlFor="rentalDays">Días de Alquiler</Label>
                <Input
                  id="rentalDays"
                  type="number"
                  min="1"
                  value={formData.rentalDays}
                  onChange={(e) => handleChange("rentalDays", Number.parseInt(e.target.value))}
                  required
                />
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="location">Ubicación</Label>
              <Select value={formData.location} onValueChange={(value) => handleChange("location", value)} required>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Seleccionar ubicación" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="notes">Notas</Label>
              <Textarea
                id="notes"
                placeholder="Añade información adicional sobre este movimiento..."
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                className="resize-none"
                rows={3}
              />
            </div>

            {financialImpact && (
              <>
                <Separator />
                <div className="flex items-center justify-between p-2 rounded-md bg-secondary/20">
                  <div className="flex items-center gap-2">
                    <Euro className="h-4 w-4" />
                    <span>{financialImpact.label}:</span>
                  </div>
                  <span
                    className={`font-bold ${financialImpact.type === "income" ? "text-success" : financialImpact.type === "loss" ? "text-destructive" : ""}`}
                  >
                    {formatCurrency(financialImpact.value)}
                  </span>
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-magenta-500 to-amber-500 hover:from-magenta-600 hover:to-amber-600"
            >
              Registrar Movimiento
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

