import { Link } from "react-router";
import { Article } from "~/models/blogModel"
import { ArrowRight } from "lucide-react"

interface CardBlogProps {
  data: Article
}

export default function CardBlog({ data }: Readonly<CardBlogProps>) {
  return (
    <Link
      to={`/blog/${data.slug}`}
      className="group block max-w-[350px] bg-white border border-slate-100 rounded-[20px]
      overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100"
    >
      {/* Image Section: Cleaner Aspect Ratio */}
      <div className="relative h-[220px] overflow-hidden m-2 rounded-[15px]">
        <img
          src={data.image[0] || "/icon.png"}
          alt={data.title}
          className="object-cover h-full w-full transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Category Tag: Subtle & Minimal */}
        <div className="absolute top-3 left-3">
          <span className="px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] font-bold bg-white/80 backdrop-blur-md text-slate-800 rounded-full">
            Journal
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col p-6 pt-4">
        <div className="space-y-3">
          {/* Subtle Date */}
          <time className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            April 11, 2026
          </time>
          
          <h3 className="text-xl font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {data.title}
          </h3>
          
          <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed font-medium">
            {data.excerpt}
          </p>
        </div>

        {/* Minimal Footer with Red Accent */}
        <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between text-slate-900">
          <span className="text-xs font-bold uppercase tracking-wider">Read More</span>
          <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}