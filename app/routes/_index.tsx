import { MetaFunction } from '@remix-run/react'
import {
  ArrowRight,
  BarChart3,
  Compass,
  DollarSign,
  Feather,
  FileText,
  Globe,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Wallet,
  Zap
} from 'lucide-react'
import CardBlog from '~/components/CardBlog'
import { EmblaCarousel } from '~/components/Draggable'
import Layout from '~/components/Layout'
import { getBlogs } from '~/services/blogService'

export const meta: MetaFunction = () => {
  return [
    { title: 'Rundee Ads' },
    { name: 'description', content: 'RundeeAds - บริการ SEO แบบมืออาชีพ' },
    {
      name: 'keywords',
      content: 'SEO, การตลาดออนไลน์, คอร์ส SEO, ผู้เชี่ยวชาญ SEO'
    },
    { property: 'og:title', content: 'RundeeAds - บริการ SEO แบบมืออาชีพ' },
    {
      property: 'og:description',
      content: 'เพิ่มยอดขาย เพิ่มผู้ชม ด้วยกลยุทธ์ SEO ที่ใช้ได้จริง'
    }
  ]
}

const serviceList = [
  {
    id: 1,
    title: 'Strategic Business & Audience Analysis',
    description: 'วิเคราะห์ธุรกิจและกลุ่มเป้าหมาย เพื่อวางกลยุทธ์ที่ใช่ที่สุด',
    icon: <Compass />
  },
  {
    id: 2,
    title: 'Precise Keyword Selection',
    description:
      'คัดเลือก Keyword แม่นยำ ให้โฆษณาของคุณแสดงต่อคนที่ "พร้อมซื้อ"',
    icon: <Search />
  },
  {
    id: 3,
    title: 'Creative Ad Copywriting',
    description:
      'สร้างสรรค์ข้อความโฆษณาดึงดูดใจ เพิ่ม CTR (Click-Through Rate)',
    icon: <Feather />
  },
  {
    id: 4,
    title: 'Effective Budget Management',
    description:
      'บริหารจัดการงบประมาณอย่างคุ้มค่า ให้ทุกบาททุกสตางค์สร้างผลลัพธ์',
    icon: <Wallet />
  },
  {
    id: 5,
    title: 'Continuous Campaign Optimization',
    description: 'ติดตามผลและปรับปรุงแคมเปญต่อเนื่อง เพื่อประสิทธิภาพสูงสุด',
    icon: <RefreshCw />
  },
  {
    id: 6,
    title: 'Clear & Transparent Reporting',
    description: 'รายงานผลชัดเจน เข้าใจง่าย เห็นความก้าวหน้าของธุรกิจ',
    icon: <FileText />
  }
]


const teamList = [
  {
    src: "/team3.jpg",
    name: "PPC & Ads Manager",
    role: "PPC & Ads Manager",
    description: "ผู้ดูแลแคมเปญโฆษณาออนไลน์ที่เชี่ยวชาญการบริหารงบประมาณและเพิ่ม CTR ให้เกิดผลลัพธ์สูงสุด"
  },
  {
    src: "/team1.jpg",
    name: "SEO",
    role: "SEO Specialist",
    description: "ผู้เชี่ยวชาญด้านการวิเคราะห์คีย์เวิร์ดและการวางกลยุทธ์ SEO ที่ช่วยให้ธุรกิจติดอันดับ Google อย่างยั่งยืน"
  },
  {
    src: "/team2.jpg",
    name: "DMC",
    role: "Digital Marketing Consultant",
    description: "ที่ปรึกษาด้านการตลาดดิจิทัลที่สามารถวางแผนและนำเสนอโซลูชันที่ครอบคลุมสำหรับธุรกิจทุกขนาด"
  },
]
export default function Index() {

  const blogs = getBlogs();
  return (
    <Layout>
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[15%] w-[25%] h-[25%] bg-purple-600/10 rounded-full blur-[80px]"></div>
      </div>

      <section
        className="w-full min-h-[85vh] flex items-center relative overflow-hidden px-4 md:px-0"
      >
        <div className="container-x relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className='flex flex-col justify-center gap-8 py-12 md:py-24'>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium text-blue-200/80 tracking-wider uppercase">เพิ่มยอดขาย ขยายธุรกิจให้ปัง!</span>
            </div>

            <div className="space-y-4">
              <h1 className='text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white'>
                RundeeAds <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Organic Growth Builder
                </span>
              </h1>

              <p className='text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-xl'>
                ให้คำแนะนำจากผู้ให้คำปรึกษา SEO ที่ไว้ใจได้ เพื่อสร้างการเติบโตอย่างยั่งยืนบนโลกออนไลน์
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={'/contact-us'}>
                <div 
                style={{
                  borderRadius: '9999px',
                }}
                className='glass-button-primary px-10 py-4 rounded-xl text-white font-bold text-lg shadow-[0_0_30px_rgba(59,130,246,0.2)]'>
                  ติดต่อเรา
                </div>
              </a>
              <a href="#services">
                <button className='glass-button px-10 py-4 rounded-xl text-white font-semibold text-lg hover:bg-white/10'>
                  ดูบริการของเรา
                </button>
              </a>
            </div>
          </div>

          <div className='hidden md:block relative'>
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
            <img
              src='/computer.png'
              className='w-full relative z-10 animate-float drop-shadow-2xl'
              alt='Organic Growth Builder'
            />
          </div>
        </div>

        {/* Bottom Fade */}
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-10'></div>
      </section>

      <section id="services" className='py-24 md:py-32 container-x relative z-10'>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              บริการของเรา<span className="text-blue-500">ครอบคลุม</span>อะไรบ้าง?
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              เราดูแลทุกขั้นตอนของการทำโฆษณาออนไลน์ เพื่อให้ธุรกิจของคุณเติบโตอย่างยั่งยืนและมีประสิทธิภาพสูงสุด
            </p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent hidden md:block mb-6 ml-12"></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {serviceList.map(item => (
            <div key={item.id} className='glass-card group p-8 flex flex-col gap-6'>
              <div className='size-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300'>
                {item.icon}
              </div>
              <div className='space-y-3'>
                <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>{item.title}</h3>
                <p className='text-slate-400 leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='md:py-20 py-10 overflow-hidden relative text-white min-h-[500px]'>
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px]
             bg-gradient-to-br from-blue-500/20 to-transparent
             rounded-full border border-white/10 backdrop-blur-[2px]
             rotate-12 pointer-events-none z-0"
        ></div>
        <div className='container-x'>
          <div className="mb-12 ">
            <span className='text-sm uppercase tracking-[0.2em] text-white/60 font-semibold'>
              ให้เราเป็นส่วนหนึ่งที่ทำให้
            </span>
            <h2 className='text-3xl md:text-5xl font-extrabold mt-2 tracking-tight drop-shadow-lg'>
              ธุรกิจของคุณทะยานสู่โลกออนไลน์ <br />
              <span className="text-white/80 text-2xl md:text-3xl font-medium">ด้วยกลยุทธ์ที่เราเชี่ยวชาญ</span>
            </h2>
          </div>

          <div className='max-w-screen mx-auto overflow-hidden rounded-xl glass-card p-8'>
            <EmblaCarousel>
              {blogs.map((data, index) => (
                <CardBlog data={data} key={index} />
              ))}
            </EmblaCarousel>
          </div>
        </div>
      </section>

      <section className='md:py-32 py-20 container-x relative z-10'>
        <div className="text-center mb-20">
          <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tight mb-4'>
            ทำไมต้อง <span className="text-blue-500">RundeeAds?</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='glass-card group p-8'>
            <div className='w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/30 group-hover:bg-blue-500/30 transition-all'>
              <Target className='w-7 h-7 text-blue-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>ตรงกลุ่มเป้าหมาย</h3>
            <p className='text-slate-400 leading-relaxed text-lg'>
              แสดงโฆษณาให้คนที่ &quot;กำลังค้นหา&quot; สินค้าหรือบริการของคุณเห็นทันที เพิ่มโอกาสในการปิดการขายได้แม่นยำที่สุด
            </p>
          </div>

          <div className='glass-card group p-8'>
            <div className='w-14 h-14 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:bg-indigo-500/30 transition-all'>
              <TrendingUp className='w-7 h-7 text-indigo-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>อยู่เหนือคู่แข่ง</h3>
            <p className='text-slate-400 leading-relaxed text-lg'>
              ปรากฏโดดเด่นบนหน้าแรก Google ด้วยกลยุทธ์ที่เหนือชั้น เพิ่มโอกาสให้ลูกค้าคลิกหาคุณก่อนใครในทุกการค้นหา
            </p>
          </div>

          <div className='glass-card group p-8'>
            <div className='w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 border border-purple-500/30 group-hover:bg-purple-500/30 transition-all'>
              <BarChart3 className='w-7 h-7 text-purple-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>วัดผลได้จริง</h3>
            <p className='text-slate-400 leading-relaxed text-lg'>
              โปร่งใสทุกขั้นตอน รู้ว่าเงินทุกบาทที่จ่ายไปคุ้มค่าแค่ไหน ติดตาม ROI และความก้าวหน้าได้ชัดเจนผ่านรายงานที่เข้าใจง่าย
            </p>
          </div>

          <div className='glass-card group p-8'>
            <div className='w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30 group-hover:bg-emerald-500/30 transition-all'>
              <DollarSign className='w-7 h-7 text-emerald-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>ควบคุมงบประมาณง่าย</h3>
            <p className='text-slate-400 leading-relaxed text-lg'>
              บริหารจัดการงบประมาณได้อย่างยืดหยุ่น กำหนดงบได้ตามต้องการ ไม่บานปลาย และเกิดประสิทธิภาพสูงสุดในทุกระดับงบประมาณ
            </p>
          </div>

          <div className='glass-card group p-8 lg:col-span-2 flex flex-col md:flex-row md:items-center gap-8'>
            <div className='w-20 h-20 shrink-0 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500/30 transition-all'>
              <Zap className='w-10 h-10 text-amber-400' />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>เห็นผลลัพธ์ไว</h3>
              <p className='text-slate-400 leading-relaxed text-lg'>
                สร้าง Traffic, Leads, และยอดขายได้อย่างรวดเร็ว ด้วยระบบการปรับปรุงแคมเปญแบบ Real-time ที่ช่วยให้คุณไม่พลาดทุกโอกาสทางธุรกิจ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='py-20 relative z-10 container-x'>
        <div className='flex flex-wrap justify-center gap-3 mb-16'>
          {['#GoogleAds', '#การตลาดออนไลน์', '#เพิ่มยอดขาย', '#ธุรกิจออนไลน์', '#DigitalMarketing', '#rundeeads'].map((tag) => (
            <span key={tag} className='px-4 py-2 rounded-full glass border-white/5 text-sm font-medium text-blue-300/80 hover:border-blue-500/30 transition-all cursor-default'>
              {tag}
            </span>
          ))}
        </div>

        <div className='glass-card p-1 md:p-12 overflow-hidden relative'>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[80px] -ml-32 -mb-32"></div>

          <div className='relative z-10'>
            <div className='text-center mb-16'>
              <h3 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                ปรึกษาฟรี! <span className="text-blue-500">ไม่มีค่าใช้จ่าย</span>
              </h3>
              <p className='text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed'>
                ทีมผู้เชี่ยวชาญพร้อมให้คำแนะนำและประเมินโอกาสทางธุรกิจของคุณบน Google Ads เพื่อผลลัพธ์ที่ดีที่สุด
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6 mb-12'>
              <div
              style={{borderRadius:20}}
              className='flex flex-col items-center p-8 glass rounded-2xl border-white/5 hover:border-blue-500/20 transition-all'>
                <div className="p-4 bg-blue-500/10 rounded-full mb-6">
                  <Phone className='w-8 h-8 text-blue-400' />
                </div>
                <h4 className='font-semibold text-slate-400 mb-2 uppercase tracking-wider text-sm'>ติดต่อเราเลย</h4>
                <p className='text-white font-bold text-2xl tracking-tight'>095-496-5989</p>
              </div>

              <div
              style={{borderRadius:20}}
              className='flex flex-col items-center p-8 glass rounded-2xl border-white/5 hover:border-indigo-500/20 transition-all'>
                <div className="p-4 bg-indigo-500/10 rounded-full mb-6">
                  <Globe className='w-8 h-8 text-indigo-400' />
                </div>
                <h4 className='font-semibold text-slate-400 mb-2 uppercase tracking-wider text-sm'>เว็บไซต์</h4>
                <p className='text-white font-bold text-2xl tracking-tight uppercase'>rundeeads.com</p>
              </div>

              <div
              style={{borderRadius:20}}
              className='flex flex-col items-center p-8 glass rounded-2xl border-white/5 hover:border-purple-500/20 transition-all'>
                <div className="p-4 bg-purple-500/10 rounded-full mb-6">
                  <MessageSquare className='w-8 h-8 text-purple-400' />
                </div>
                <h4 className='font-semibold text-slate-400 mb-2 uppercase tracking-wider text-sm'>Line ID</h4>
                <p className='text-white font-bold text-2xl tracking-tight'>@655rkaej</p>
              </div>
            </div>

            <div className='flex justify-center'>
              <a href='/contact-us'>
                <div className='glass-button-primary flex gap-2 items-center  px-12 py-5 rounded-full
                 text-white font-bold text-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]'>
                  เริ่มวางแผนธุรกิจกับเรา
                  <ArrowRight className='w-6 h-6 ml-3' />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='py-32 relative z-10'>
        <div className='container-x'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              ทีมงานของเรา
            </h2>
            <p className='text-xl text-slate-400 max-w-2xl mx-auto'>
              ผู้เชี่ยวชาญด้าน Digital Marketing ที่พร้อมจะผลักดันธุรกิจของคุณให้ก้าวไปอีกขั้น
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamList.map((item, index) => (
              <div key={index} className='glass-card group overflow-hidden relative aspect-[4/5]'>
                <img
                  src={item.src}
                  alt={item.name}
                  className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className='absolute bottom-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                  <div className="mb-4">
                    <p className='font-bold text-2xl text-white mb-1'>{item.name}</p>
                    <p className='text-blue-400 font-medium tracking-wide uppercase text-sm'>{item.role}</p>
                  </div>
                  <p className='text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
