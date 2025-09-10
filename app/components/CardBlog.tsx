import { Link } from "@remix-run/react"
import { Article } from "~/models/blogModel"


interface CardBlogProps {
  data: Article
}

export default function CardBlog({ data }: Readonly<CardBlogProps>) {
  return (
    <Link
      to={`/blog/${data.slug}`}
      className="min-w-[200px] w-[280px] grid border border-gray-200/80 h-[350px] bg-white rounded-xl "
    >
      <div className="h-[150px] flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={data.image[0] || "/icon.png"}
          alt={data.title}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="flex flex-col gap-2 mt-3 p-4">
        <div className="text-lg font-medium text-[--secondary] line-clamp-2">
          {data.title}
        </div>
        <div className="text-sm line-clamp-3 text-black/50">
          {data.excerpt}
        </div>
      </div>
    </Link>
  )
}
