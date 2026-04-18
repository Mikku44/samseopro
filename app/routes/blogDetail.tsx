import { Link, type LoaderFunctionArgs, MetaFunction } from 'react-router';
import { useLoaderData } from 'react-router';
import { useEffect } from 'react';
import {
  LuCalendar,
  LuChevronLeft,
  LuClock,
  LuLink,
  LuShare2,
  LuTag,
  LuTwitter,
  LuFacebook
} from 'react-icons/lu';

import { Article } from '~/models/blogModel';
import { getBlogs } from '~/services/blogService';

/**
 * LOADER: Fetches the specific article and filters other blogs for the sidebar
 */
export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  const allBlogs = getBlogs();
  const article = allBlogs.find((a) => a.slug === slug);

  if (!article) {
    throw new Response('Not Found', { status: 404 });
  }

  // Get up to 3 related blogs, excluding the current one
  const relatedBlogs = allBlogs
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  return { article, relatedBlogs };
}

/**
 * META: Dynamic SEO tags based on article content
 */
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: 'Article Not Found' },
      { name: 'description', content: 'The article you are looking for does not exist.' }
    ];
  }

  const { article } = data;

  return [
    { title: `${article.title} | Your Agency Name` },
    { name: 'description', content: article.excerpt },
    { property: 'og:title', content: article.title },
    { property: 'og:description', content: article.excerpt },
    { property: 'og:image', content: article.image?.[0] || '/og-default.jpg' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: article.title },
    { name: 'twitter:image', content: article.image?.[0] },
  ];
};

export default function BlogSlug() {
  const { article, relatedBlogs } = useLoaderData<typeof loader>();

  // Ensure page scrolls to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.slug]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("คัดลอกลิงก์เรียบร้อยแล้ว!");
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <article className="w-full">

        {/* HERO SECTION: Full-width with Overlay */}
        <div className="w-full h-[400px] md:h-[650px] overflow-hidden relative">
          <img
            src={article.image?.[0] || "https://placehold.co/1200x600/e2e8f0/0f172a?text=Office+Design"}
            alt={article.title}
            className="w-full h-full object-cover"
          />

          {/* Visual Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Title Overlay Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags?.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-600 text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl shadow-sm">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* CONTENT CONTAINER */}
        <div className="container mx-auto max-w-7xl p-6 lg:p-12">

          {/* Breadcrumbs & Meta Bar */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-12 border-b border-gray-100 pb-8">
            <Link to="/blog" className="group flex items-center text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors">
              <LuChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
              กลับไปหน้าบล็อก
            </Link>

            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span className="flex items-center"><LuCalendar className="mr-2 w-4 h-4" /> 24 ม.ค. 2024</span>
              <span className="flex items-center"><LuClock className="mr-2 w-4 h-4" /> อ่าน 5 นาที</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* MAIN COLUMN (8 cols) */}
            <div className="lg:col-span-8">

              {/* Excerpt Section */}
              <p className="text-xl md:text-2xl text-slate-500 italic leading-relaxed mb-12 border-l-4 border-blue-600 pl-6">
                {article.excerpt}
              </p>

              {/* Dynamic Content Rendering */}
              <section className="prose prose-lg prose-slate max-w-none">
                {article.content.map((block, idx) => {
                  if (block.type === "h1" || block.type === "h2") {
                    const Tag = block.type === "h1" ? "h1" : "h2";
                    return (
                      <Tag key={idx} className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-20">
                        {block.text}
                      </Tag>
                    );
                  }
                  return (
                    <p key={idx} className="text-lg text-gray-700 leading-[1.8] mb-8">
                      {block.text}
                    </p>
                  );
                })}
              </section>

              {/* Bottom Tags */}
              <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-gray-100">
                <span className="text-sm font-bold text-gray-400 mr-2 self-center">TAGS:</span>
                {article.tags?.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-xs font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share Tools */}
              <div className="mt-12 p-8 bg-slate-50 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">แชร์บทความนี้</h4>
                  <p className="text-sm text-gray-500">หากคุณเห็นว่าบทความนี้มีประโยชน์ ส่งต่อให้เพื่อนของคุณได้เลย</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={copyLink} className="p-3 bg-white border border-gray-200 rounded-full hover:shadow-md transition-shadow text-gray-600" title="Copy Link">
                    <LuLink className="w-5 h-5" />
                  </button>
                  <button onClick={shareOnFacebook} className="p-3 bg-[#1877F2] text-white rounded-full hover:opacity-90 transition-opacity" title="Share on Facebook">
                    <LuFacebook className="w-5 h-5" />
                  </button>
                  <button onClick={shareOnTwitter} className="p-3 bg-[#1DA1F2] text-white rounded-full hover:opacity-90 transition-opacity" title="Share on Twitter">
                    <LuTwitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* SIDEBAR COLUMN (4 cols) */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="sticky top-24">

                {/* Related Blogs Widget */}
                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-2 h-8 bg-blue-600 mr-4 rounded-full"></span>
                  บทความที่เกี่ยวข้อง
                </h3>

                <div className="space-y-8">
                  {relatedBlogs.length > 0 ? (
                    relatedBlogs.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/blog/${related.slug}`}
                        className="group flex gap-5 items-start"
                      >
                        <div className="w-28 h-20 shrink-0 bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                          <img
                            src={related.image?.[0] || "/placeholder.jpg"}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-[15px] font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                            {related.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-3">
                            <span className="text-[10px] font-bold uppercase tracking-tight text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                              {related.tags?.[0] || 'Marketing'}
                            </span>
                            <span className="text-[11px] text-gray-400 font-medium">
                              • 2 นาที
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 italic">ไม่มีบทความที่เกี่ยวข้องในขณะนี้</p>
                  )}
                </div>

                {/* Sidebar Banner / CTA */}
                <div className="mt-16 p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-600/30 transition-colors" />

                  <h4 className="text-xl font-bold mb-3 relative z-10">วิเคราะห์บัญชี Ads ฟรี!</h4>
                  <p className="text-sm text-slate-400 mb-8 relative z-10 leading-relaxed">
                    ให้ผู้เชี่ยวชาญช่วยตรวจสอบแคมเปญของคุณ เพื่อหาจุดที่สามารถประหยัดงบและเพิ่มยอดขายได้ทันที
                  </p>

                  <Link
                    to="/contact-us"
                    className="w-full flex items-center justify-center py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-bold transition-all transform active:scale-95 relative z-10"
                  >
                    รับคำปรึกษาตอนนี้
                  </Link>
                </div>

                {/* Simple Footer Links for Sidebar */}
                {/* <div className="mt-8 px-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link to="/about" className="text-xs text-gray-400 hover:text-blue-600">เกี่ยวกับเรา</Link>
                  <Link to="/services" className="text-xs text-gray-400 hover:text-blue-600">บริการของเรา</Link>
                  <Link to="/privacy" className="text-xs text-gray-400 hover:text-blue-600">นโยบายความเป็นส่วนตัว</Link>
                </div> */}

              </div>
            </aside>

          </div>
        </div>
      </article>
    </div>
  );
}