import { PropsWithChildren } from "react"

type Props = {
  title: string
}

export default function Article({ children, title }: PropsWithChildren<Props>) {
  return (
    <article className="my-4">
      <h1 className="text-2xl font-semibold my-4">{title}</h1>
      <div className="flex flex-col gap-4 pl-4">
        {children}
      </div>
    </article>
  )
}
