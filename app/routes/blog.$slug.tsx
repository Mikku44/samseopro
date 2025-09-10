import { type LoaderFunctionArgs ,MetaFunction} from '@remix-run/node'

import { useLoaderData } from '@remix-run/react'
import { LuChevronLeft } from 'react-icons/lu'
// import { LuBookmark, LuChevronLeft, LuLink, LuShare2 } from 'react-icons/lu'
import Layout from '~/components/Layout'
import { Article } from '~/models/blogModel'

import { getBlogs } from '~/services/blogService'

export async function loader ({ params }: LoaderFunctionArgs) {
  const slug = params.slug
  if (!slug) {
    throw new Response('Not Found', { status: 404 })
  }
  const articles = getBlogs()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    throw new Response('Not Found', { status: 404 })
  }

  return Response.json(article)
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: 'Article Not Found' },
      { name: 'description', content: 'The article you are looking for does not exist.' }
    ]
  }

  const article: Article = data

  return [
    { title: article.title },
    { name: 'description', content: article.excerpt || article.content?.[0]?.text || 'Read this amazing article!' },
    { property: 'og:title', content: article.title },
    { property: 'og:description', content: article.excerpt || article.content?.[0]?.text || 'Read this amazing article!' },
    { property: 'og:image', content: article.image?.[0] || 'https://placehold.co/1200x600/e2e8f0/0f172a?text=Office+Design' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: article.title },
    { name: 'twitter:description', content: article.excerpt || article.content?.[0]?.text || 'Read this amazing article!' },
    { name: 'twitter:image', content: article.image?.[0] || 'https://placehold.co/1200x600/e2e8f0/0f172a?text=Office+Design' }
  ]
}

export default function BlogSlug () {
  const article = useLoaderData<typeof loader>() as Article

  return (
    <Layout>
       <div className="min-h-screen bg-white  flex justify-center items-start  pb-16  transition-colors duration-300">
      <article className="w-full  overflow-hidden">
        {/* Full-width header image */}
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img
            src={article.image?.[0] || "https://placehold.co/1200x600/e2e8f0/0f172a?text=Office+Design"}
            alt={article.title}
            className="w-full h-full object-cover "
          />
        </div>

        {/* Main Content Container with Two Columns */}
        <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
          {/* Back link and actions */}
          <div className="flex justify-between items-center text-gray-600  mb-6">
            <a href="/" className="flex items-center text-sm hover:text-gray-900  transition-colors">
              <LuChevronLeft className="w-4 h-4 mr-1" />
              All Categories
            </a>
            {/* <div className="flex space-x-4">
              <button className="hover:text-gray-900 transition-colors">
                <LuBookmark className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-900 transition-colors">
                <LuShare2 className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-900 transition-colors">
                <LuLink className="w-5 h-5" />
              </button>
            </div> */}
          </div>

          <div className="grid  gap-8">
          

            {/* Right Column for Content */}
            <div className="md:order-2">
              <h1 className="text-3xl lg:text-5xl  text-gray-900   mb-4">
                {article.title}
              </h1>
              {article.content.map((block, idx) => {
                if (block.type === "h1" || block.type === "h2") {
                  const Tag = block.type === "h1" ? "h1" : "h2";
                  return (
                    <Tag
                      key={idx}
                      className="text-2xl sm:text-3xl  text-gray-800  mt-10 mb-4"
                    >
                      {block.text}
                    </Tag>
                  );
                }
                return (
                  <p
                    key={idx}
                    className="text-lg text-gray-700  leading-relaxed mb-4"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
    </Layout>
  )
}
