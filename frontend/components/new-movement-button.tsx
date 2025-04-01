"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewMovementButtonProps {
  onClick: () => void
}

export function NewMovementButton({ onClick }: NewMovementButtonProps) {
  return (
    <Button
      className="w-full gap-2 bg-gradient-to-r from-magenta-500 to-amber-500 hover:from-magenta-600 hover:to-amber-600 text-white"
      onClick={onClick}
    >
      <Plus className="h-5 w-5" />
      <span>Registrar nuevo movimiento</span>
    </Button>
  )
}

