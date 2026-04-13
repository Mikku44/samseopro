import { Link, type LoaderFunctionArgs } from 'react-router';
import { useLoaderData } from 'react-router';
import { LuSearch, LuArrowRight, LuCalendar, LuClock } from 'react-icons/lu';
import { getBlogs } from '~/services/blogService';
import { Article } from '~/models/blogModel';

export async function loader() {
  const blogs = getBlogs();
  return { blogs };
}

export const meta = () => {
  return [
    { title: "Insights & Updates | Digital Marketing Blog" },
    { name: "description", content: "รวมเทคนิคการตลาดออนไลน์ Google Ads และกลยุทธ์การเติบโตสำหรับธุรกิจ SME" }
  ];
};


export default function BlogIndex() {
  const { blogs } = useLoaderData<typeof loader>();
  
  // The first blog is treated as the "Featured" post
  const featuredPost = blogs[0];
  const regularPosts = blogs.slice(1);

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header Section */}
      <section className="bg-black border-b min-h-[500px] flex items-center justify-center border-slate-200 pt-20 pb-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-200 mb-6 leading-tight">
              Blog & <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              แบ่งปันประสบการณ์ กลยุทธ์ และเทคนิคการทำโฆษณาออนไลน์ให้เห็นผลจริง 
              จากมุมมองของคนทำงานเบื้องหลัง
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-6 py-16">
        
        {/* FEATURED POST SECTION */}
        {featuredPost && (
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-8 flex items-center">
              <span className="w-10 h-[2px] bg-blue-600 mr-4"></span>
              บทความแนะนำ
            </h2>
            <Link 
              to={`/blog/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 gap-8 md:gap-12 bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="h-[300px] lg:h-[500px] overflow-hidden">
                <img 
                  src={featuredPost.image?.[0]} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex gap-3 mb-6">
                  {featuredPost.tags?.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-slate-500 line-clamp-3 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-slate-400 text-sm font-medium">
                  <span className="flex items-center mr-6"><LuCalendar className="mr-2" /> 24 ม.ค. 2024</span>
                  <span className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                    อ่านต่อ <LuArrowRight className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* LATEST POSTS GRID */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">บทความทั้งหมด</h2>
          <div className="relative hidden md:block">
             <input 
              type="text" 
              placeholder="ค้นหาบทความ..." 
              className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-64 transition-all"
             />
             <LuSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {regularPosts.map((post) => (
            <Link 
              key={post.slug} 
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image?.[0]} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold uppercase text-slate-900 shadow-sm">
                    {post.tags?.[0] || 'Marketing'}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                   <LuCalendar className="mr-1" /> 24 Jan 2024 • <LuClock className="ml-1 mr-1" /> 5 min read
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-blue-600 font-bold text-sm">
                  อ่านบทความนี้ <LuArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 p-8 md:p-16 bg-blue-600 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -ml-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">เริ่มสร้างยอดขายด้วย Google Ads วันนี้</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
              หากคุณมีคำถามหรือต้องการคำแนะนำในการวางแผนโฆษณา เราพร้อมช่วยวิเคราะห์ให้ฟรีไม่มีค่าใช้จ่าย
            </p>
            <Link 
              to="/contact-us" 
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-black rounded-full hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              ติดต่อรับคำปรึกษาฟรี
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}