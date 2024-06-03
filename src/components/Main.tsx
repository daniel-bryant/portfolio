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
        <div className="flex justify-between font-semibold">
          <a href="/" className="text-2xl">🚀</a>
          <div className="flex gap-4 text-lg">
            <a href="https://medium.com/@danieljoseph.dev">Blog</a>
            <a href="https://rails101.github.io">Rails 101</a>
            <FlavorButton />
          </div>
        </div>
        {children}
      </div>
    </main>
  )
}
