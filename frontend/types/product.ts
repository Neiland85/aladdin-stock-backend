export interface Product {
  id: string
  name: string
  category: string
  available: number
  borrowed: number
  damaged: number
  location: string
  lastMovement?: string
  purchasePrice: number // Precio de compra por unidad
  rentalPriceDaily: number // Precio de alquiler diario
  rentalPriceWeekly: number // Precio de alquiler semanal
  purchaseDate: string // Fecha de adquisición
  totalUnits: number // Total de unidades (available + borrowed + damaged)
}

export interface Movement {
  id: string
  productId: string
  type: "add" | "remove" | "borrow" | "return" | "damage" | "repair"
  quantity: number
  date: string
  location: string
  notes?: string
  user: string
  rentalDays?: number // Días de alquiler (para movimientos de tipo 'borrow')
  rentalIncome?: number // Ingresos por alquiler
  damageAmount?: number // Coste estimado del daño (para movimientos de tipo 'damage')
}

export interface FinancialSummary {
  totalInventoryValue: number
  activeRentalValue: number
  damagedValue: number
  monthlyRentalIncome: number
  yearlyRentalIncome: number
  roi: number // Return on Investment (%)
  totalDamageLoss: number // Pérdidas totales por daños
}

