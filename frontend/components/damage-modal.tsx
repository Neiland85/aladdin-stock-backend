"use client"

import type React from "react"

import { useState } from "react"
import { AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Product } from "@/types/product"

interface DamageModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product | null
  onSubmit?: (data: any) => void
}

export function DamageModal({ open, onOpenChange, product, onSubmit }: DamageModalProps) {
  const [formData, setFormData] = useState({
    quantity: 1,
    damageAmount: 0,
    notes: "",
  })

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (onSubmit && product) {
      onSubmit({
        productId: product.id,
        type: "damage",
        quantity: formData.quantity,
        damageAmount: formData.damageAmount,
        notes: formData.notes,
        date: new Date().toISOString(),
        id: `DMG-${Date.now()}`,
        user: "Usuario Actual",
        location: product.location,
      })
    }
    onOpenChange(false)
    // Reset form
    setFormData({
      quantity: 1,
      damageAmount: 0,
      notes: "",
    })
  }

  // Función para formatear números como moneda (EUR)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Registrar daño
          </DialogTitle>
          <DialogDescription>
            {product ? `Registrar daño para ${product.name} (${product.id})` : "Registrar daño para el producto"}
          </DialogDescription>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="quantity">Cantidad de unidades dañadas</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                max={product?.available || 1}
                value={formData.quantity}
                onChange={(e) => handleChange("quantity", Number.parseInt(e.target.value))}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="damageAmount" className="font-medium">
                Coste estimado del daño (€)
              </Label>
              <Input
                id="damageAmount"
                type="number"
                min="0"
                step="0.01"
                value={formData.damageAmount}
                onChange={(e) => handleChange("damageAmount", Number.parseFloat(e.target.value))}
                required
                className="border-destructive/30 focus-visible:ring-destructive/30"
              />
              {formData.damageAmount > 0 && (
                <p className="text-xs text-muted-foreground">
                  Coste total: {formatCurrency(formData.damageAmount * formData.quantity)}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="notes">Descripción del daño</Label>
              <Textarea
                id="notes"
                placeholder="Describe el tipo de daño y sus causas..."
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                className="resize-none"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              Registrar daño
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

