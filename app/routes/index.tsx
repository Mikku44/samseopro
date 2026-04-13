import { MetaFunction } from 'react-router';
import {
  ArrowRight,
  Compass,
  Feather,
  FileText,
  RefreshCw,
  Search,
  Wallet,
} from 'lucide-react';
import CardBlog from '~/components/CardBlog';
import { EmblaCarousel } from '~/components/Draggable';
import { getBlogs } from '~/services/blogService';

export const meta: MetaFunction = () => {
  return [
    { title: 'Rundee Ads | Professional SEO & Ads Services' },
    { name: 'description', content: 'RundeeAds - บริการ SEO และ Ads แบบมืออาชีพ เพื่อการเติบโตที่ยั่งยืน' },
    { name: 'keywords', content: 'SEO, การตลาดออนไลน์, คอร์ส SEO, ผู้เชี่ยวชาญ SEO, Google Ads' },
    { property: 'og:title', content: 'RundeeAds - บริการ SEO แบบมืออาชีพ' },
    { property: 'og:description', content: 'เพิ่มยอดขาย เพิ่มผู้ชม ด้วยกลยุทธ์ SEO ที่ใช้ได้จริง' }
  ];
};

const serviceList = [
  { id: 1, title: 'Strategic Analysis', description: 'วิเคราะห์ธุรกิจและกลุ่มเป้าหมาย เพื่อวางกลยุทธ์ที่แม่นยำที่สุด', icon: <Compass /> },
  { id: 2, title: 'Keyword Selection', description: 'คัดเลือก Keyword ให้โฆษณาของคุณแสดงต่อคนที่ "พร้อมซื้อ"', icon: <Search /> },
  { id: 3, title: 'Creative Copywriting', description: 'สร้างสรรค์ข้อความโฆษณาดึงดูดใจ เพิ่ม Click-Through Rate (CTR)', icon: <Feather /> },
  { id: 4, title: 'Budget Management', description: 'บริหารจัดการงบประมาณอย่างคุ้มค่า ให้ทุกบาทสร้างผลลัพธ์สูงสุด', icon: <Wallet /> },
  { id: 5, title: 'Campaign Optimization', description: 'ติดตามผลและปรับปรุงแคมเปญต่อเนื่อง เพื่อประสิทธิภาพสูงสุด', icon: <RefreshCw /> },
  { id: 6, title: 'Transparent Reporting', description: 'รายงานผลชัดเจน เข้าใจง่าย เห็นความก้าวหน้าของธุรกิจชัดเจน', icon: <FileText /> }
];

const teamList = [
  {
    src: "/team3.jpg",
    name: "PPC & Ads Manager",
    role: "Ads Strategy Expert",
    description: "ผู้ดูแลแคมเปญโฆษณาออนไลน์ที่เชี่ยวชาญการบริหารงบประมาณและเพิ่ม CTR ให้เกิดผลลัพธ์สูงสุด"
  },
  {
    src: "/team1.jpg",
    name: "SEO Specialist",
    role: "Search Engine Expert",
    description: "ผู้เชี่ยวชาญด้านการวิเคราะห์คีย์เวิร์ดและการวางกลยุทธ์ SEO ที่ช่วยให้ธุรกิจติดอันดับ Google อย่างยั่งยืน"
  },
  {
    src: "/team2.jpg",
    name: "Digital Marketing Consultant",
    role: "Strategic Advisor",
    description: "ที่ปรึกษาด้านการตลาดดิจิทัลที่สามารถวางแผนและนำเสนอโซลูชันที่ครอบคลุมสำหรับธุรกิจทุกขนาด"
  }
];

export default function Index() {
  const blogs = getBlogs();

  return (
    <>


      {/* Hero Section */}
      <section className="w-full min-h-[90vh] bg-[#051f43] flex items-center relative overflow-hidden px-4 md:px-0">
        <div className="container-x relative z-10 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT/TOP SIDE: Text Content */}
          <div className='flex flex-col justify-center gap-8 pt-24 pb-12 md:py-24'>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium text-blue-200/80 tracking-wider uppercase">Scale Your Business Faster</span>
            </div>

            <div className="space-y-4">
              <h1 className='text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white'>
                RundeeAds <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Organic Growth Builder
                </span>
              </h1>
              <p className='text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-xl'>
                ยกระดับธุรกิจของคุณด้วยกลยุทธ์ SEO และ Ads ที่ออกแบบมาเพื่อสร้างยอดขายและการเติบโตที่ยั่งยืน
              </p>
            </div>
          </div>

          {/* RIGHT/BOTTOM SIDE: Image (Now visible on all screens) */}
          <div className='flex relative items-center justify-center pb-24 md:pb-0'>
            <img
              src={teamList[0].src}
              alt={teamList[0].name}
              className="h-[300px] md:h-[450px] w-auto rounded-full object-cover transition-transform duration-1000 shadow-2xl"
            />
          </div>

        </div>

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-10'></div>
      </section>
      {/* Featured Leadership Section */}
      {/* <div className="relative max-w-6xl mx-auto px-6 py-24">
        {teamList.slice(0, 1).map((item, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
            <div className="relative overflow-hidden flex items-center justify-center">
              <img src={item.src} alt={item.name} className=" md:h-auto h-[300px] w-auto rounded-full object-cover transition-transform duration-1000" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full w-fit">
                Lead Strategist
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight ">{item.name}</h2>
              <div className="relative">
                <p className="text-lg text-slate-600 leading-relaxed relative z-10">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* Services Grid */}
      <section id="services" className='py-24 container-x relative z-10'>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              บริการของเรา<span className="text-blue-500">ที่พร้อมซัพพอร์ต</span>คุณ
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              เราดูแลทุกขั้นตอนของการทำโฆษณาออนไลน์ เพื่อผลลัพธ์ที่วัดผลได้จริง
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {serviceList.map(item => (
            <div key={item.id} className='glass-card group p-8 flex flex-col gap-6 transition-all duration-300'>
              <div className='size-14 rounded-2xl bg-blue-500  text-white flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20'>
                {item.icon}
              </div>
              <div className='space-y-3'>
                <h3 className='text-xl font-bold '>{item.title}</h3>
                <p className='text-slate-400 leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog/Carousel Section */}
      <section className='py-20 relative bg-[--primary-color]'>
        <div className='container-x'>
          {/* <h2 className='text-3xl md:text-5xl font-bold mb-12 text-white'>ความรู้และ <span className="text-blue-400">อัปเดตการตลาดใหม่ๆ</span></h2> */}
          <div className='overflow-hidden rounded-2xl glass-card p-4 md:p-8'>
            <EmblaCarousel>
              {blogs.map((data, index) => (
                <CardBlog data={data} key={index} />
              ))}
            </EmblaCarousel>
          </div>
        </div>
      </section>


      {/* Contact CTA */}
      <section id='contact' className='py-20 container-x'>
        <div className=' p-20 text-center relative overflow-hidden rounded-3xl bg-[#051f43] text-white/80'>
          <h3 className='text-3xl md:text-4xl font-bold mb-6'>เริ่มวางแผนธุรกิจกับเราวันนี้</h3>
          <p className='text-xl text-slate-300 mb-10 max-w-3xl mx-auto'>ปรึกษาฟรี! ทีมงานของเราพร้อมช่วยวิเคราะห์และวางแผนเพื่อให้คุณได้รับ ROI ที่คุ้มค่าที่สุด</p>
          <div className='flex justify-center'>
            <a href='/contact-us' className='bg-black group flex items-center gap-3 px-12 py-5 rounded-full font-bold text-xl'>
              ติดต่อเราเพื่อเริ่มต้น <ArrowRight className='group-hover:translate-x-1 duration-100' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}