"use client"

import { PropsWithChildren, createContext, useContext, useState } from 'react'

type Flavor = "latte" | "frappe" | "macchiato" | "mocha"
type Emoji = "🥛" | "🍺" | "☕️" | "🍫"

type FlavorMap<T> = {
  latte: T
  frappe: T
  macchiato: T
  mocha: T
}

const NextFlavor: FlavorMap<Flavor> = {
  latte: "frappe",
  frappe: "macchiato",
  macchiato: "mocha",
  mocha: "latte",
}

const FlavorEmoji: FlavorMap<Emoji> = {
  latte: "🥛",
  frappe: "🍺",
  macchiato: "☕️",
  mocha: "🍫",
}

type FlavorState = {
  flavor: Flavor
  emoji: Emoji
  cycleFlavor: () => void
}

const FlavorContext = createContext<FlavorState>({
  flavor: "latte",
  emoji: "🥛",
  cycleFlavor: () => console.error("Default cycleFlavor called!"),
})

export function useFlavorState() {
  return useContext(FlavorContext)
}

export function FlavorProvider({ children }: PropsWithChildren) {
  const [flavor, setFlavor] = useState<Flavor>("latte")

  const emoji: Emoji = FlavorEmoji[flavor]
  const cycleFlavor = () => { setFlavor(NextFlavor[flavor]) }

  const value: FlavorState = { flavor, emoji, cycleFlavor }

  return (
    <FlavorContext.Provider value={value}>
      {children}
    </FlavorContext.Provider>
  )
}
