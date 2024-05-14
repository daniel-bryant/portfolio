"use client"

import { useFlavorState } from "@/contexts/FlavorContext"

export default function FlavorButton() {
  const { flavor, emoji, cycleFlavor } = useFlavorState()

  return (
    <button onClick={cycleFlavor} title={flavor}>{emoji}</button>
  )
}
