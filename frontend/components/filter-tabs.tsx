"use client"

import { cn } from "@/lib/utils"

type FilterState = "all" | "low-stock" | "borrowed" | "damaged"

interface FilterTabsProps {
  activeFilter: FilterState
  onChange: (filter: FilterState) => void
}

export function FilterTabs({ activeFilter, onChange }: FilterTabsProps) {
  const filters: { id: FilterState; label: string }[] = [
    { id: "all", label: "Todos" },
    { id: "low-stock", label: "Bajo stock" },
    { id: "borrowed", label: "Prestado" },
    { id: "damaged", label: "Dañado" },
  ]

  return (
    <div className="flex overflow-x-auto gap-2 mt-4 pb-1">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onChange(filter.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
            activeFilter === filter.id ? "bg-magenta-500 text-white" : "bg-secondary hover:bg-secondary/80",
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

