import type { Product, FinancialSummary, Movement } from "@/types/product"

export const products: Product[] = [
  {
    id: "FL-300W",
    name: "Foco LED 300W",
    category: "Iluminación",
    available: 12,
    borrowed: 3,
    damaged: 1,
    location: "Almacén Principal",
    lastMovement: "2023-04-10",
    purchasePrice: 249.99,
    rentalPriceDaily: 25,
    rentalPriceWeekly: 125,
    purchaseDate: "2022-06-15",
    totalUnits: 16,
  },
  {
    id: "FL-500W",
    name: "Foco LED 500W",
    category: "Iluminación",
    available: 8,
    borrowed: 4,
    damaged: 0,
    location: "Almacén Principal",
    lastMovement: "2023-04-15",
    purchasePrice: 349.99,
    rentalPriceDaily: 35,
    rentalPriceWeekly: 175,
    purchaseDate: "2022-05-20",
    totalUnits: 12,
  },
  {
    id: "LB-RGB",
    name: "Barra LED RGB",
    category: "Iluminación",
    available: 5,
    borrowed: 0,
    damaged: 0,
    location: "Almacén Secundario",
    lastMovement: "2023-04-02",
    purchasePrice: 189.99,
    rentalPriceDaily: 20,
    rentalPriceWeekly: 100,
    purchaseDate: "2022-07-10",
    totalUnits: 5,
  },
  {
    id: "LS-BEAM",
    name: "Láser Beam 2000",
    category: "Efectos",
    available: 2,
    borrowed: 2,
    damaged: 0,
    location: "Almacén Principal",
    lastMovement: "2023-04-18",
    purchasePrice: 1299.99,
    rentalPriceDaily: 120,
    rentalPriceWeekly: 600,
    purchaseDate: "2021-11-05",
    totalUnits: 4,
  },
  {
    id: "SM-FOG",
    name: "Máquina de Humo Pro",
    category: "Efectos",
    available: 3,
    borrowed: 1,
    damaged: 1,
    location: "Almacén Secundario",
    lastMovement: "2023-04-05",
    purchasePrice: 499.99,
    rentalPriceDaily: 50,
    rentalPriceWeekly: 250,
    purchaseDate: "2022-03-15",
    totalUnits: 5,
  },
  {
    id: "CT-DMX",
    name: "Controlador DMX",
    category: "Control",
    available: 4,
    borrowed: 1,
    damaged: 0,
    location: "Oficina Técnica",
    lastMovement: "2023-04-12",
    purchasePrice: 799.99,
    rentalPriceDaily: 80,
    rentalPriceWeekly: 400,
    purchaseDate: "2022-01-20",
    totalUnits: 5,
  },
  {
    id: "PR-WASH",
    name: "Cabeza Móvil Wash",
    category: "Iluminación",
    available: 0,
    borrowed: 8,
    damaged: 0,
    location: "Evento Ushuaïa",
    lastMovement: "2023-04-20",
    purchasePrice: 2499.99,
    rentalPriceDaily: 200,
    rentalPriceWeekly: 1000,
    purchaseDate: "2021-05-10",
    totalUnits: 8,
  },
  {
    id: "PR-SPOT",
    name: "Cabeza Móvil Spot",
    category: "Iluminación",
    available: 1,
    borrowed: 5,
    damaged: 2,
    location: "Evento Pacha",
    lastMovement: "2023-04-19",
    purchasePrice: 2899.99,
    rentalPriceDaily: 250,
    rentalPriceWeekly: 1250,
    purchaseDate: "2021-06-15",
    totalUnits: 8,
  },
  {
    id: "ST-TRUSS",
    name: "Truss Aluminio 3m",
    category: "Estructura",
    available: 15,
    borrowed: 10,
    damaged: 0,
    location: "Almacén Principal",
    lastMovement: "2023-04-08",
    purchasePrice: 149.99,
    rentalPriceDaily: 15,
    rentalPriceWeekly: 75,
    purchaseDate: "2022-02-10",
    totalUnits: 25,
  },
  {
    id: "CB-PWR",
    name: "Cable Alimentación 10m",
    category: "Cableado",
    available: 25,
    borrowed: 15,
    damaged: 5,
    location: "Almacén Principal",
    lastMovement: "2023-04-14",
    purchasePrice: 29.99,
    rentalPriceDaily: 5,
    rentalPriceWeekly: 25,
    purchaseDate: "2022-04-05",
    totalUnits: 45,
  },
  {
    id: "CB-DMX",
    name: "Cable DMX 5m",
    category: "Cableado",
    available: 2,
    borrowed: 0,
    damaged: 0,
    location: "Almacén Secundario",
    lastMovement: "2023-04-17",
    purchasePrice: 19.99,
    rentalPriceDaily: 3,
    rentalPriceWeekly: 15,
    purchaseDate: "2022-08-20",
    totalUnits: 2,
  },
  {
    id: "ST-BASE",
    name: "Base Elevación",
    category: "Estructura",
    available: 0,
    borrowed: 0,
    damaged: 4,
    location: "Taller Reparación",
    lastMovement: "2023-04-03",
    purchasePrice: 399.99,
    rentalPriceDaily: 40,
    rentalPriceWeekly: 200,
    purchaseDate: "2021-12-10",
    totalUnits: 4,
  },
  {
    id: "EF-STRB",
    name: "Estrobo LED 1500W",
    category: "Efectos",
    available: 3,
    borrowed: 0,
    damaged: 1,
    location: "Almacén Principal",
    lastMovement: "2023-04-11",
    purchasePrice: 599.99,
    rentalPriceDaily: 60,
    rentalPriceWeekly: 300,
    purchaseDate: "2022-02-15",
    totalUnits: 4,
  },
  {
    id: "PR-BEAM",
    name: "Cabeza Móvil Beam",
    category: "Iluminación",
    available: 4,
    borrowed: 6,
    damaged: 0,
    location: "Evento Amnesia",
    lastMovement: "2023-04-16",
    purchasePrice: 3299.99,
    rentalPriceDaily: 300,
    rentalPriceWeekly: 1500,
    purchaseDate: "2021-04-20",
    totalUnits: 10,
  },
]

export const locations = [
  "Almacén Principal",
  "Almacén Secundario",
  "Oficina Técnica",
  "Taller Reparación",
  "Evento Ushuaïa",
  "Evento Pacha",
  "Evento Amnesia",
  "Evento Hï Ibiza",
]

export const categories = ["Iluminación", "Efectos", "Control", "Estructura", "Cableado", "Audio", "Video"]

export const movementTypes = [
  { id: "add", label: "Añadir al stock", icon: "ArrowUpRight" },
  { id: "remove", label: "Quitar del stock", icon: "ArrowDownLeft" },
  { id: "borrow", label: "Prestar", icon: "ArrowRight" },
  { id: "return", label: "Devolver", icon: "Package" },
  { id: "damage", label: "Reportar daño", icon: "AlertTriangle" },
  { id: "repair", label: "Reparar", icon: "Wrench" },
]

// Datos de ejemplo para movimientos recientes
export const recentMovements: Movement[] = [
  {
    id: "MOV-001",
    productId: "PR-WASH",
    type: "borrow",
    quantity: 8,
    date: "2023-04-20",
    location: "Evento Ushuaïa",
    user: "Carlos Rodríguez",
    rentalDays: 7,
    rentalIncome: 11200, // 8 unidades * 200€/día * 7 días
  },
  {
    id: "MOV-002",
    productId: "PR-SPOT",
    type: "borrow",
    quantity: 5,
    date: "2023-04-19",
    location: "Evento Pacha",
    user: "Laura Martínez",
    rentalDays: 3,
    rentalIncome: 3750, // 5 unidades * 250€/día * 3 días
  },
  {
    id: "MOV-003",
    productId: "PR-SPOT",
    type: "damage",
    quantity: 2,
    date: "2023-04-19",
    location: "Evento Pacha",
    user: "Laura Martínez",
    notes: "Daño en el motor de rotación",
    damageAmount: 450, // Coste estimado de reparación por unidad
  },
  {
    id: "MOV-004",
    productId: "PR-BEAM",
    type: "borrow",
    quantity: 6,
    date: "2023-04-16",
    location: "Evento Amnesia",
    user: "Miguel Ángel",
    rentalDays: 5,
    rentalIncome: 9000, // 6 unidades * 300€/día * 5 días
  },
  {
    id: "MOV-005",
    productId: "ST-BASE",
    type: "damage",
    quantity: 4,
    date: "2023-04-03",
    location: "Taller Reparación",
    user: "Javier López",
    notes: "Bases dañadas durante el transporte",
    damageAmount: 200, // Coste estimado de reparación por unidad
  },
]

// Función para calcular el resumen financiero
export function calculateFinancialSummary(): FinancialSummary {
  // Valor total del inventario (precio de compra * unidades totales)
  const totalInventoryValue = products.reduce((sum, product) => sum + product.purchasePrice * product.totalUnits, 0)

  // Valor de los equipos en alquiler
  const activeRentalValue = products.reduce((sum, product) => sum + product.rentalPriceDaily * product.borrowed, 0)

  // Valor de los equipos dañados
  const damagedValue = products.reduce((sum, product) => sum + product.purchasePrice * product.damaged, 0)

  // Ingresos mensuales estimados por alquiler (asumiendo 15 días de alquiler al mes)
  const monthlyRentalIncome = products.reduce(
    (sum, product) => sum + product.rentalPriceDaily * product.borrowed * 15,
    0,
  )

  // Ingresos anuales estimados
  const yearlyRentalIncome = monthlyRentalIncome * 12

  // ROI (Return on Investment) - Retorno anual / Inversión total * 100
  const roi = (yearlyRentalIncome / totalInventoryValue) * 100

  // Pérdidas totales por daños
  const totalDamageLoss = recentMovements
    .filter((m) => m.type === "damage" && m.damageAmount)
    .reduce((sum, m) => sum + (m.damageAmount || 0) * m.quantity, 0)

  return {
    totalInventoryValue,
    activeRentalValue,
    damagedValue,
    monthlyRentalIncome,
    yearlyRentalIncome,
    roi,
    totalDamageLoss,
  }
}

