import Layout from '~/components/Layout'
import { motion } from 'framer-motion'
import { MetaFunction } from '@remix-run/node'
import {
  BookOpen,
  Package,
  Palette,
  Search,
  Shield,
  Smartphone,
  Zap,
  ArrowRight,
  Monitor,
  Layout as LayoutIcon,
  CheckCircle,
  Globe
} from 'lucide-react'

export const meta: MetaFunction = () => {
  return [
    { title: 'รับออกแบบเว็บไซต์คุณภาพ - RundeeAds | Web Design & Development' },
    {
      name: 'description',
      content:
        'เปลี่ยนเว็บไซต์ให้เป็นเครื่องมือทำเงินที่ทำงานหนักที่สุดของคุณ รับออกแบบเว็บไซต์คุณภาพสูง รองรับมือถือ โหลดเร็ว และเป็นมิตรต่อ SEO'
    },
    {
      name: 'keywords',
      content:
        'รับออกแบบเว็บไซต์, ทำเว็บไซต์, Web Design Thailand, เว็บไซต์ธุรกิจ, SEO Friendly Website, Responsive Design'
    },
    { property: 'og:title', content: 'รับออกแบบเว็บไซต์คุณภาพ - RundeeAds' },
    {
      property: 'og:description',
      content:
        'เปลี่ยนเว็บไซต์ให้กลายเป็นเครื่องมือการตลาดที่แท้จริง ด้วยประสบการณ์กว่า 300 โปรเจกต์'
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://www.rundeeads.com/services/web-maker'
    },
    { property: 'og:site_name', content: 'RundeeAds' },
    { property: 'og:locale', content: 'th_TH' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'RundeeAds' },
    {
      rel: 'canonical',
      href: 'https://www.rundeeads.com/services/web-maker'
    }
  ]
}

const features = [
  {
    icon: <Palette className='w-8 h-8 text-blue-400' />,
    title: 'การออกแบบที่ตอบโจทย์ธุรกิจ',
    subtitle: 'Professional & UI/UX Design',
    description:
      'เราไม่ได้ใช้ Template สำเร็จรูป แต่จะออกแบบดีไซน์เฉพาะสำหรับแบรนด์ของคุณ เพื่อสร้างความน่าเชื่อถือและแตกต่าง โดยเน้นการออกแบบให้ลูกค้าใช้งานง่าย (User Experience) เพื่อนำทางพวกเขาไปสู่การตัดสินใจซื้อได้ง่ายที่สุด'
  },
  {
    icon: <Smartphone className='w-8 h-8 text-indigo-400' />,
    title: 'รองรับทุกการแสดงผล',
    subtitle: 'Mobile Responsive Design',
    description:
      'เว็บไซต์ของคุณจะสวยงามและใช้งานได้อย่างสมบูรณ์แบบในทุกอุปกรณ์ ไม่ว่าจะเป็นคอมพิวเตอร์ แท็บเล็ต หรือโดยเฉพาะบน "มือถือ" ที่เป็นช่องทางหลักของลูกค้าในปัจจุบัน'
  },
  {
    icon: <Search className='w-8 h-8 text-purple-400' />,
    title: 'โครงสร้างที่เป็นมิตรต่อ Google',
    subtitle: 'SEO-Friendly Structure',
    description:
      'เราวางโครงสร้างเว็บไซต์ตามหลักการ SEO พื้นฐานที่สำคัญ เพื่อเป็นรากฐานที่ดีให้เว็บไซต์ของคุณมีโอกาสติดอันดับบน Google ในระยะยาว'
  },
  {
    icon: <Zap className='w-8 h-8 text-amber-400' />,
    title: 'โหลดเร็ว ไม่ให้ลูกค้ารอนาน',
    subtitle: 'Speed Optimization',
    description:
      'เพราะทุกวินาทีมีค่า เราจะปรับแต่งให้เว็บไซต์ของคุณโหลดได้รวดเร็วที่สุด เพื่อมอบประสบการณ์ที่ดีและลดโอกาสการเสียลูกค้าไป'
  },
  {
    icon: <Package className='w-8 h-8 text-emerald-400' />,
    title: 'ฟังก์ชันที่จำเป็นครบครัน',
    subtitle: 'Essential Features',
    description:
      'ไม่ว่าจะเป็นระบบตะกร้าสินค้า (E-commerce), การเชื่อมต่อระบบชำระเงิน, ฟอร์มติดต่อ, แผนที่, ปุ่มแชทผ่าน LINE/Messenger ไปจนถึงการเชื่อมต่อ Social Media ต่างๆ'
  },
  {
    icon: <Shield className='w-8 h-8 text-rose-400' />,
    title: 'ระบบความปลอดภัยพื้นฐาน',
    subtitle: 'Basic Security - SSL',
    description:
      'ติดตั้ง SSL (HTTPS) เพื่อสร้างความปลอดภัยและความมั่นใจให้กับลูกค้าในการกรอกข้อมูลและทำธุรกรรมบนเว็บไซต์ของคุณ'
  }
]

const customerList = [
  {
    src: '/customers/supeerose.svg',
    label: 'Supee Rose - สุพีย์โรส',
    href: '#'
  },
  {
    src: '/customers/tjbatt.jpg',
    label: 'TJ Batt - ตั้งใจขายแบต',
    href: '#'
  },
  {
    src: '/customers/dryergroup.png',
    label: 'Dryer Group - ดรายเออร์ กรุ๊ป',
    href: '#'
  },
  {
    src: '/customers/homsleepsalon.ico',
    label: 'Hom Sleep Salon - ฮอม สลีป ซาลอน',
    href: 'https://www.homsleepsalon.com/'
  },
  {
    src: '/customers/ngulekpatum.ico',
    label: 'Ngulek Patum - งูเหล็กปทุม',
    href: 'https://ngulekpatum.vercel.app/'
  },
  {
    src: '/customers/nextflipestate.ico',
    label: 'Next Flip Estate - เน็กซ์ฟลิป เอสเตท',
    href: 'https://www.nextflipestate.com/'
  },
  {
    src: '/customers/paintproof.ico',
    label: 'PaintProof - เพ็นท์พรูฟ',
    href: 'https://www.paintproof.co.th/'
  },
  {
    src: '/customers/homepropertyconsulting.ico',
    label: 'Home Property Consulting - โฮม พร็อพเพอร์ตี้ คอนซัลติ้ง',
    href: 'https://homepropertyconsultinglimited.com/'
  }
]

export default function WebMaker () {
  return (
    <Layout>
      <div className='min-h-screen relative overflow-hidden'>
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Hero Section */}
        <section className='w-full min-h-[75vh] flex items-center relative overflow-hidden pt-32 pb-20'>
          <div className='container-x relative z-10'>
            <div className='max-w-4xl'>
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-medium text-blue-200/80 tracking-wider uppercase text-white">หากคุณต้องการเพิ่มยอดขาย</span>
              </motion.div>

              <motion.h1
                className='text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-8'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                RundeeAds <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  รับออกแบบเว็บไซต์คุณภาพ
                </span>
              </motion.h1>

              <motion.p
                className='text-xl md:text-2xl text-slate-300/90 leading-relaxed max-w-2xl mb-12'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                เปลี่ยนเว็บไซต์ให้เป็น <span className="text-white font-bold">&quot;เครื่องมือทำเงิน&quot;</span> ที่ทำงานหนักที่สุดของคุณ เพื่อสร้างโอกาสทางธุรกิจที่ยั่งยืน
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a href='tel:0954965989'>
                  <button className='glass-button-primary px-10 py-4 rounded-full text-white font-bold text-lg shadow-[0_0_30px_rgba(59,130,246,0.2)]'>
                    ปรึกษาเราเลย
                  </button>
                </a>
                <a href="#what-we-do">
                  <button className='glass-button px-10 py-4 rounded-full text-white font-semibold text-lg'>
                    รายละเอียดบริการ
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none"></div>
        </section>

        {/* Philosophy Section */}
        <section className='py-24 container-x relative z-10'>
          <div className='max-w-4xl mx-auto text-center space-y-12'>
            <div className="space-y-6">
              <p className='text-xl text-slate-400 leading-relaxed italic'>
                เว็บไซต์ที่ดูดีแต่ไม่สร้างยอดขาย อาจกลายเป็นเพียง <span className='text-white font-bold border-b-2 border-red-500/50'>“ค่าใช้จ่าย”</span> แทนที่จะเป็น <span className='text-white font-bold border-b-2 border-blue-500/50'>“สินทรัพย์”</span> ที่ช่วยขับเคลื่อนธุรกิจ
              </p>
              <h2 className='text-3xl md:text-5xl font-bold text-white tracking-tight'>
                ถึงเวลาเปลี่ยนเว็บไซต์ให้กลายเป็นเครื่องมือการตลาดที่แท้จริง
              </h2>
            </div>

            <div className='glass-card p-12 relative overflow-hidden'>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50"></div>
              <p className='text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-200 bg-clip-text text-transparent'>
                “ธุรกิจจำนวนมากลงทุนโฆษณามหาศาล <br />
                แต่กลับสูญเสียลูกค้าด้วยเว็บไซต์ที่ไม่ตอบโจทย์”
              </p>
            </div>

            <div className='max-w-2xl mx-auto text-slate-400 leading-relaxed text-lg space-y-6'>
              <p>
                เว็บไซต์ที่โหลดช้า ใช้งานบนมือถือไม่สะดวก หรือมีข้อมูลที่สับสน ล้วนทำให้ลูกค้าปิดหนีในทันที
              </p>
              <p>
                เราจึงมุ่งพัฒนา <span className='text-blue-400 font-bold'>เว็บไซต์ที่พร้อมสร้างโอกาสทางธุรกิจ</span> โดยใช้ประสบการณ์จากการทำงานร่วมกับธุรกิจกว่า 300 แห่ง
              </p>
            </div>
          </div>
        </section>

        {/* Customer Success Section */}
        <section className='py-32 relative z-10'>
          <div className='container-x text-center'>
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight'>
              ส่วนหนึ่งจากลูกค้า<span className="text-blue-500">ที่ไว้วางใจเรา</span>
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {customerList.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='glass-card p-10 flex flex-col items-center group cursor-pointer'
                  whileHover={{ y: -10 }}
                >
                  <div className="size-24 rounded-full bg-white/5 flex items-center justify-center p-4 mb-6 group-hover:bg-white/10 transition-all border border-white/5 overflow-hidden">
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={item.label}
                        className='w-full h-full object-contain filter brightness-110'
                      />
                    ) : (
                      <Globe className="w-10 h-10 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className='text-white font-medium group-hover:text-blue-400 transition-colors'>
                    {item.label}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="what-we-do" className='py-32 relative z-10'>
          <div className='container-x'>
            <div className='text-center mb-20'>
              <p className='text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4'>WHAT WE DO</p>
              <h2 className='text-4xl md:text-6xl font-bold text-white tracking-tight mb-6'>
                เราสร้าง <span className="text-blue-500">ระบบการขายออนไลน์</span> ที่สมบูรณ์แบบ
              </h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className='glass-card p-10 flex flex-col group'
                  whileHover={{ y: -10 }}
                >
                  <div className='size-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-all duration-500'>
                    {feature.icon}
                  </div>

                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {feature.title}
                  </h3>

                  <p className='text-sm font-bold text-blue-400 uppercase tracking-wider mb-6'>
                    {feature.subtitle}
                  </p>

                  <p className='text-slate-400 leading-relaxed text-lg'>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className='py-32 relative z-10'>
          <div className='container-x'>
            <div className='glass-card p-16 relative overflow-hidden rounded-[3rem] text-center'>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                <div className="size-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
                  <Monitor className="w-10 h-10 text-blue-400" />
                </div>
                
                <h2 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
                  เป้าหมายสูงสุดคือการสร้าง <br />
                  <span className="text-blue-500">&quot;พนักงานขายที่เก่งที่สุด&quot;</span> ของคุณ
                </h2>
                
                <p className='text-xl text-slate-300 leading-relaxed'>
                  หากคุณพร้อมที่จะเปลี่ยนเว็บไซต์ให้เป็นเครื่องมือสร้างยอดขาย... มาคุยกันครับ
                </p>

                <div className="pt-4">
                  <a
                    href='tel:0954965989'
                    className='glass-button-primary px-12 py-5 rounded-full text-white font-bold text-xl inline-flex items-center hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all'
                  >
                    <BookOpen className='w-6 h-6 mr-3' />
                    โทรสอบถาม 095-496-5989
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
