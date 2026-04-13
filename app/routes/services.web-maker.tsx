import { motion } from 'framer-motion'
import { Link, MetaFunction } from 'react-router';
import {

  Globe,
  ArrowRight
} from 'lucide-react'
import { customerList, SLIDE_UP, webPackages } from '~/const/app';

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
    icon: <div className='font-bold text-4xl'>1</div>,
    title: 'การออกแบบที่ตอบโจทย์ธุรกิจ',
    subtitle: 'Professional & UI/UX Design',
    description:
      'เราไม่ได้ใช้ Template สำเร็จรูป แต่จะออกแบบดีไซน์เฉพาะสำหรับแบรนด์ของคุณ เพื่อสร้างความน่าเชื่อถือและแตกต่าง โดยเน้นการออกแบบให้ลูกค้าใช้งานง่าย (User Experience) เพื่อนำทางพวกเขาไปสู่การตัดสินใจซื้อได้ง่ายที่สุด'
  },
  {
    icon: <div className='font-bold text-4xl'>2</div>,
    title: 'รองรับทุกการแสดงผล',
    subtitle: 'Mobile Responsive Design',
    description:
      'เว็บไซต์ของคุณจะสวยงามและใช้งานได้อย่างสมบูรณ์แบบในทุกอุปกรณ์ ไม่ว่าจะเป็นคอมพิวเตอร์ แท็บเล็ต หรือโดยเฉพาะบน "มือถือ" ที่เป็นช่องทางหลักของลูกค้าในปัจจุบัน'
  },
  {
    icon: <div className='font-bold text-4xl'>3</div>,
    title: 'โครงสร้างที่เป็นมิตรต่อ Google',
    subtitle: 'SEO-Friendly Structure',
    description:
      'เราวางโครงสร้างเว็บไซต์ตามหลักการ SEO พื้นฐานที่สำคัญ เพื่อเป็นรากฐานที่ดีให้เว็บไซต์ของคุณมีโอกาสติดอันดับบน Google ในระยะยาว'
  },
  {
    icon: <div className='font-bold text-4xl'>4</div>,
    title: 'โหลดเร็ว ไม่ให้ลูกค้ารอนาน',
    subtitle: 'Speed Optimization',
    description:
      'เพราะทุกวินาทีมีค่า เราจะปรับแต่งให้เว็บไซต์ของคุณโหลดได้รวดเร็วที่สุด เพื่อมอบประสบการณ์ที่ดีและลดโอกาสการเสียลูกค้าไป'
  },
  {
    icon: <div className='font-bold text-4xl'>5</div>,
    title: 'ฟังก์ชันที่จำเป็นครบครัน',
    subtitle: 'Essential Features',
    description:
      'ไม่ว่าจะเป็นระบบตะกร้าสินค้า (E-commerce), การเชื่อมต่อระบบชำระเงิน, ฟอร์มติดต่อ, แผนที่, ปุ่มแชทผ่าน LINE/Messenger ไปจนถึงการเชื่อมต่อ Social Media ต่างๆ'
  },
  {
    icon: <div className='font-bold text-4xl'>6</div>,
    title: 'ระบบความปลอดภัยพื้นฐาน',
    subtitle: 'Basic Security - SSL',
    description:
      'ติดตั้ง SSL (HTTPS) เพื่อสร้างความปลอดภัยและความมั่นใจให้กับลูกค้าในการกรอกข้อมูลและทำธุรกรรมบนเว็บไซต์ของคุณ'
  }
]



export default function WebMaker() {
  return (
    <>
      <div className='min-h-screen relative overflow-hidden bg-[--primary-color]'>
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Hero Section */}
        <section className='w-full min-h-screen lg:min-h-[85vh] flex items-center relative overflow-hidden bg-[#020617] pt-20 pb-20'>
          {/* Background Decorative Element */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className='container-x w-full relative z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>

              {/* Content Left */}
              <div className='lg:col-span-7 order-2 lg:order-1'>
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-blue-200 tracking-[0.1em] uppercase">
                    หากคุณต้องการเพิ่มยอดขาย
                  </span>
                </motion.div>

                <motion.h1
                  className='text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  RundeeAds <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">
                    รับออกแบบเว็บไซต์คุณภาพ
                  </span>
                </motion.h1>

                <motion.p
                  className='text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-12'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  เปลี่ยนเว็บไซต์ให้เป็น <span className="text-blue-400 font-bold">&quot;เครื่องมือทำเงิน&quot;</span>
                  ที่ทำงานหนักที่สุดแทนคุณ พร้อมโครงสร้างที่รองรับการปิดการขายและ SEO อย่างเต็มรูปแบบ
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <a href='tel:0954965989' className="group">
                    <button className='bg-blue-600 hover:bg-blue-500 transition-all duration-300 px-10 py-4 rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:-translate-y-1'>
                      ปรึกษาเราเลย
                    </button>
                  </a>
                  <a href="#what-we-do">
                    <button className='bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm px-10 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300'>
                      รายละเอียดบริการ
                    </button>
                  </a>
                </motion.div>
              </div>

              {/* Image Right - Styled as a "Window" */}
              <div className='lg:col-span-5 order-1 lg:order-2 relative'>
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"

                >
                  {/* Browser UI Mockup Header */}
                  <div className="absolute top-0 w-full h-8 bg-white/10 backdrop-blur-md flex items-center gap-1.5 px-4 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <img
                    src="/web.avif"
                    className='w-full h-[400px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700'
                    alt="web maker"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent"></div>
                </div>

                {/* Floating Stats Badge */}
                <div
                  className="absolute -bottom-6 -left-6 bg-blue-900/90 
                  backdrop-blur-xl p-5 rounded-2xl border border-blue-400/20 shadow-xl hidden md:block"

                >
                  <p className="text-blue-200 text-xs uppercase tracking-widest mb-1">Conversion Rate</p>
                  <p className="text-white text-3xl font-bold">+150%</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none"></div>
        </section>

        {/* Philosophy Section */}
        <section className='py-24 container-x'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            // variants={simpleFade}
            className='max-w-4xl mx-auto text-center space-y-8'
          >
            <p className='text-xl text-slate-400 italic'>
              เว็บไซต์ที่ดูดีแต่ไม่สร้างยอดขาย อาจกลายเป็นเพียง <span className='text-rose-400 font-bold'>“ค่าใช้จ่าย”</span> แทนที่จะเป็น <span className='text-blue-400 font-bold'>“สินทรัพย์”</span>
            </p>

            <h2 className='text-3xl md:text-5xl font-bold text-white'>
              ถึงเวลาเปลี่ยนเว็บไซต์ให้กลายเป็นเครื่องมือการตลาดที่แท้จริง
            </h2>

            <div className='bg-white/5 border border-white/10 p-10 rounded-2xl'>
              <p className='text-2xl md:text-3xl font-semibold text-blue-100'>
                “ธุรกิจจำนวนมากลงทุนโฆษณามหาศาล <br /> แต่กลับสูญเสียลูกค้าด้วยเว็บไซต์ที่ไม่ตอบโจทย์”
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8 text-left pt-8'>
              <div className="space-y-3">
                <h4 className="text-rose-400 font-bold uppercase text-sm">The Challenge</h4>
                <p className="text-slate-400">เว็บไซต์โหลดช้า หรือใช้งานบนมือถือยาก ทำให้ลูกค้าปิดหนีทันที</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-blue-400 font-bold uppercase text-sm">The Results</h4>
                <p className="text-slate-400">เราสร้างเว็บไซต์ที่พร้อมปิดการขาย จากประสบการณ์ดูแลธุรกิจกว่า 300+ แห่ง</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className='py-24 bg-[#020617]'>
          <div className='container-x'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4 text-white/80'>แพ็กเกจทำเว็บไซต์</h2>
              <p className='text-lg text-gray-600'>เว็บไซต์มืออาชีพในราคาโปร่งใส</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {webPackages.map((pkg, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-3xl border-2 flex flex-col transition-all duration-300 hover:shadow-xl
                    ${pkg.highlight
                      ? 'border-black shadow-2xl scale-105 z-10 bg-white/90 relative'
                      : 'border-gray-100 shadow-sm hover:border-gray-300 bg-white/90'
                    }`}
                >
                  {pkg.highlight && (
                    <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold self-start mb-4 tracking-wider">
                      MOST POPULAR
                    </span>
                  )}

                  <h3 className='text-xl font-bold mb-2'>{pkg.name}</h3>
                  <p className='text-gray-500 mb-4 text-sm'>{pkg.description}</p>
                  <p className='text-xs text-gray-400 mb-4'>{pkg.bestFor}</p>

                  <div className='mb-4'>
                    <span className='text-3xl font-bold'>{pkg.price}</span>
                    <span className='text-gray-500 text-sm ml-1'>{pkg.period}</span>
                    <div className='text-xs text-gray-400 mt-1'>{pkg.baht}</div>
                  </div>

                  <ul className='space-y-3 mb-6 flex-grow'>
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className='flex items-start text-xs text-gray-700'>
                        <span className='mr-2 text-emerald-500 font-bold'>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to='/contact-us' className="mt-auto">
                    <div
                      className={`w-full text-sm font-semibold transition-all text-center py-2 rounded-full
                        ${pkg.highlight ? 'bg-black text-white ' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                    
                    >
                      Get Started
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-32 relative z-10 bg-[#020617]'>
          <div className='container-x'>
            {/* Minimal Header */}
            <div className="max-w-3xl mb-20">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                // variants={fadeIn}
                className='text-3xl md:text-4xl font-semibold text-white tracking-tight'
              >
                ส่วนหนึ่งจากลูกค้า<span className="text-slate-500 font-normal"> ที่ไว้วางใจให้เราดูแล</span>
              </motion.h2>
              <div className="w-12 h-[1px] bg-blue-500 mt-6"></div>
            </div>

            {/* Clean Grid  */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-white/5'>
              {customerList.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  // variants={fadeIn}
                  className='group relative aspect-square md:aspect-video flex flex-col items-center justify-center p-8 border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors overflow-hidden'
                >
                  {/* Logo Container */}
                  <div className="relative z-10 h-16 w-full flex items-center justify-center mb-4">
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={item.label}
                        className='max-h-full max-w-[140px] object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500'
                      />
                    ) : (
                      <Globe className="w-8 h-8 text-slate-600 group-hover:text-blue-500 transition-colors" />
                    )}
                  </div>

                  {/* Label - subtle reveal */}
                  <p className='text-[13px] uppercase tracking-[0.2em] text-slate-500 font-medium transition-opacity duration-300'>
                    {item.label}
                  </p>

                  {/* Subtle corner accent on hover */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-blue-500/0 group-hover:w-2 group-hover:h-2 group-hover:border-blue-500/40 transition-all duration-300"></div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="what-we-do" className='py-32 relative z-10 bg-[#020617]'>
          <div className='container-x'>
            {/* Minimal Header */}
            <div className='mb-20'>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className='text-blue-500 font-bold tracking-[0.3em] text-xs mb-4'
              >
                OUR CORE EXPERTISE
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-4xl md:text-5xl font-bold text-white tracking-tight'
              >
                เราสร้าง <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">ระบบการขายออนไลน์</span> <br className="hidden md:block" />
                ที่สมบูรณ์แบบเพื่อธุรกิจของคุณ
              </motion.h2>
            </div>

            {/* Feature Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden'>
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  // variants={cardVariant}
                  className='bg-[#020617] p-10 flex flex-col group relative transition-colors hover:bg-white/[0.02]'
                >
                  {/* React Icon with subtle glow */}
                  <div className='mb-8 relative'>
                    <div className='text-3xl text-blue-500 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-500'>
                      {feature.icon} {/* Pass React Icons here like <FiLayout /> */}
                    </div>
                    <div className="absolute -inset-2 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="mt-auto">
                    <p className='text-[10px] font-bold text-blue-500/60 uppercase tracking-[0.2em] mb-3'>
                      {feature.subtitle}
                    </p>
                    <h3 className='text-2xl font-bold text-white mb-4'>
                      {feature.title}
                    </h3>
                    <p className='text-slate-400 leading-relaxed text-base mb-8 line-clamp-3 group-hover:text-slate-300 transition-colors'>
                      {feature.description}
                    </p>


                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className='h-[600px] flex items-center justify-center bg-[var(--tertiary-color)]'>
          <div className='box-container w-full px-4'>
            <div className='w-full h-[550px] relative overflow-hidden rounded-[3rem] shadow-2xl'>

              {/* Gradient & Content Overlay */}
              <div
                className='w-full h-full bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/60 to-transparent 
            flex flex-col justify-center items-center md:items-start p-8 md:p-20 absolute z-[9] top-0 left-0'
              >
                <motion.div
                  {...SLIDE_UP}
                  className="space-y-6 max-w-[600px] text-center md:text-left"
                >


                  <h2 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
                    เป้าหมายสูงสุดคือการสร้าง <br />
                    <span className="text-blue-500">"พนักงานขายที่เก่งที่สุด"</span>
                  </h2>

                  <p className='text-lg md:text-xl text-slate-300 leading-relaxed max-w-md'>
                    หากคุณพร้อมที่จะเปลี่ยนเว็บไซต์ให้เป็นเครื่องมือสร้างยอดขาย... มาคุยกันครับ
                  </p>

                  <div className="pt-4">
                    <Link
                      to='/contact-us'
                      className='group h-[60px] px-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full 
                  inline-flex gap-3 items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/40'
                    >
                      <span className='font-bold text-lg'>โทรสอบถาม 095-496-5989</span>
                      <ArrowRight className='size-5 group-hover:translate-x-2 duration-200' />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Background Image */}
              <img
                src='/cta.avif' // Keep your original image or replace with a tech-focused one
                loading='lazy'
                alt='Digital Salesperson Background'
                className='w-full h-full object-cover object-center'
              />

              {/* Optional: Add a slight blue tint to the image to match the theme */}
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
