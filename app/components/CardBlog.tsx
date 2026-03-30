import { Link } from "@remix-run/react"
import { Article } from "~/models/blogModel"
import { ArrowUpRight } from "lucide-react" // Optional: adds a nice touch

interface CardBlogProps {
  data: Article
}

export default function CardBlog({ data }: Readonly<CardBlogProps>) {
  return (
    <Link
      to={`/blog/${data.slug}`}
      className="group block w-[320px] h-[420px] glass-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={data.image[0] || "/icon.png"}
          alt={data.title}
          className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Date or Category Tag (Optional) */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-bold bg-white/90 backdrop-blur-md text-blue-600 rounded-full shadow-sm">
            Insights
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col p-6 h-[220px] justify-between">
        <div>
          <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-300 transition-colors duration-300 leading-snug">
            {data.title}
          </h3>
          <p className="mt-3 text-sm text-slate-200 line-clamp-3 leading-relaxed">
            {data.excerpt}
          </p>
        </div>

        {/* Action Footer */}
        <div className="flex items-center text-blue-300 text-sm font-bold gap-1 mt-auto group/btn">
          <span>Read Article</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </div>
      </div>
    </Link>
  )
}