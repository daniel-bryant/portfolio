import { PropsWithChildren } from "react"

type Props = {
  title: string
}

export default function Article(
  { children, title }: PropsWithChildren<Props>
) {
  return (
    <article className="my-4">
      <div className="text-2xl font-semibold">
        {title}
      </div>

      {children}
    </article>
  )
}
