"use client"

import FlavorButton from "@/components/FlavorButton"
import { useFlavorState } from "@/contexts/FlavorContext"
import { PropsWithChildren } from "react"

export default function Main({ children }: PropsWithChildren) {
  const { flavor } = useFlavorState()

  return (
    <main className={
      "flex flex-col min-h-screen items-center justify-start p-12"
        + " bg-base "
        + flavor
    }>
      <div className="w-full max-w-lg text-text">
        <div className="flex flex-row justify-between text-2xl">
          <a href="/" className="font-semibold">Daniel Joseph Bryant</a>
          <FlavorButton />
        </div>
        {children}
      </div>
    </main>
  )
}
