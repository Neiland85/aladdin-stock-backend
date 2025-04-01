"use client"

import { useState } from "react"
import { Header } from "./header"
import { SearchBar } from "./search-bar"
import { FilterTabs } from "./filter-tabs"
import { ProductCard } from "./product-card"
import { NewMovementButton } from "./new-movement-button"
import { MovementModal } from "./movement-modal"
import { DamageModal } from "./damage-modal"
import { Footer } from "./footer"
import { FinancialSummary } from "./financial-summary"
import { RecentMovements } from "./recent-movements"
import { products } from "@/data/mock-data"
import type { Product, Movement } from "@/types/product"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type FilterState = "all" | "low-stock" | "borrowed" | "damaged"

export function StockDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<FilterState>("all")
  const [movementModalOpen, setMovementModalOpen] = useState(false)
  const [damageModalOpen, setDamageModalOpen] = useState(false)
  const [selectedAction, setSelectedAction] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = products.filter((product) => {
    // Filter by search query
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.id.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filter by state
    if (activeFilter === "low-stock" && product.available > 3) return false
    if (activeFilter === "borrowed" && product.borrowed === 0) return false
    if (activeFilter === "damaged" && product.damaged === 0) return false

    return true
  })

  const handleProductAction = (action: string, product: Product) => {
    setSelectedProduct(product)

    if (action === "damage") {
      setDamageModalOpen(true)
    } else {
      setSelectedAction(action)
      setMovementModalOpen(true)
    }
  }

  const handleMovementSubmit = (data: Movement) => {
    // En una aplicación real, aquí se enviaría la información a la API
    console.log("Nuevo movimiento registrado:", data)

    // Mostrar notificación de éxito
    toast({
      title: "Movimiento registrado",
      description: `Se ha registrado un movimiento de ${data.quantity} unidades para ${products.find((p) => p.id === data.productId)?.name}`,
    })
  }

  const handleDamageSubmit = (data: any) => {
    // En una aplicación real, aquí se enviaría la información a la API
    console.log("Nuevo daño registrado:", data)

    // Mostrar notificación de éxito
    toast({
      title: "Daño registrado",
      description: `Se ha registrado un daño de ${data.quantity} unidades para ${products.find((p) => p.id === data.productId)?.name} con un coste de ${new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(data.damageAmount * data.quantity)}`,
      variant: "destructive",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-6 mx-auto max-w-5xl">
        <Tabs defaultValue="inventory" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="inventory">Inventario</TabsTrigger>
            <TabsTrigger value="financial">Financiero</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterTabs activeFilter={activeFilter} onChange={setActiveFilter} />

            <div className="mt-6 space-y-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAction={handleProductAction} />
                ))
              ) : (
                <div className="p-8 text-center rounded-lg bg-card">
                  <p className="text-lg text-muted-foreground">
                    No se encontraron productos que coincidan con tu búsqueda.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="financial">
            <FinancialSummary />
            <div className="mt-6">
              <RecentMovements />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="sticky bottom-0 w-full p-4 mt-auto bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <NewMovementButton onClick={() => setMovementModalOpen(true)} />
          <Footer />
        </div>
      </div>

      <MovementModal open={movementModalOpen} onOpenChange={setMovementModalOpen} onSubmit={handleMovementSubmit} />

      <DamageModal
        open={damageModalOpen}
        onOpenChange={setDamageModalOpen}
        product={selectedProduct}
        onSubmit={handleDamageSubmit}
      />

      <Toaster />
    </div>
  )
}

