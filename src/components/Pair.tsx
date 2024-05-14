import { PropsWithChildren } from "react"

export default function Line({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center gap-2">
      {children}
    </div>
  )
}
