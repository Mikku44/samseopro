// app/routes/services/seo-training-service.tsx
import Layout from '~/components/Layout'
import type { MetaFunction } from 'react-router';
import { BookOpen, Users, CheckCircle, Clock, Send, ArrowRight, Target, BarChart3, Globe, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const meta: MetaFunction = () => {
  return [
    { title: 'อบรม SEO แบบมืออาชีพ - RundeeAds | SEO Training Service' },
    {
      name: 'description',
      content:
        'บริการรับทำ SEOจากผู้เชี่ยวชาญ เรียนรู้การทำ SEO อย่างถูกต้อง เข้าใจกลยุทธ์การตลาดออนไลน์ ปฏิบัติได้จริง พร้อมใบประกาศนียบัตร'
    },
    {
      name: 'keywords',
      content:
        'SEO Training, อบรม SEO, คอร์ส SEO, SEO Workshop, สอน SEO, เรียน SEO, Digital Marketing Training'
    },
    { property: 'og:title', content: 'อบรม SEO แบบมืออาชีพ - RundeeAds' },
    {
      property: 'og:description',
      content:
        'เรียนรู้การทำ SEO อย่างถูกต้องกับผู้เชี่ยวชาญ พร้อมเวิร์กชอปปฏิบัติจริง'
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://www.rundeeads.com/services/seo-training-service'
    },
    { property: 'og:site_name', content: 'RundeeAds' },
    { property: 'og:locale', content: 'th_TH' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'RundeeAds' },
    {
      rel: 'canonical',
      href: 'https://www.rundeeads.com/services/seo-training-service'
    }
  ]
}

export default function SEOTrainingService() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzQmgdhOim_POLNraGZWQ8Nn8qd3R5cCbnJ6V6EzzREWpqvdr4Qk6Akse8qlRkMpDreEQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(false);
      alert("Something went wrong. Please try again.");
    }
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Layout>
      <div className='min-h-screen relative overflow-hidden bg-black'>
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Hero Section */}
        <section className='w-full min-h-[70vh] flex items-center relative overflow-hidden pt-32 pb-20'>
          <img src="/team.avif" alt="seo training service" className="w-full h-full object-cover absolute top-0" />
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
                <span className="text-xs font-medium text-blue-200/80 tracking-wider uppercase">ยกระดับทักษะ SEO ของคุณ</span>
              </motion.div>

              <motion.h1
                className='text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-8'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {/* Wrap each character in RundeeAds in a motion.span with variants and delay */}
                {'RundeeAds'.split('').map((char, index) => (
                  <motion.span key={index} variants={characterVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 + index * 0.1 }}>
                    {char}
                  </motion.span>
                ))}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  {/* Wrap each character in "บริการรับทำ SEOแบบมืออาชีพ" in a motion.span with variants and delay */}
                  {'บริการรับทำ SEO แบบมืออาชีพ'.split('').map((char, index) => (
                    <motion.span key={index} variants={characterVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 + index * 0.1 }}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                className='text-xl md:text-2xl text-slate-300/90 leading-relaxed max-w-2xl mb-12'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {/* Wrap each character in the paragraph in a motion.span with variants and delay */}
                {'เรียนรู้การทำ SEO อย่างถูกต้อง ปฏิบัติได้จริง เพิ่มอันดับเว็บไซต์บน Google ด้วยกลยุทธ์ที่ใช้ได้ผลจริงในปี 2024'.split('').map((char, index) => (
                  <motion.span key={index} variants={characterVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 + index * 0.05 }}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a href='#register'>
                  <button className='bg-blue-800 px-10 py-4 rounded-full text-white font-bold text-lg'>
                    ลงทะเบียนเรียน
                  </button>
                </a>
                <a href="#content">
                  <button className='glass-button px-10 py-4 rounded-full text-white font-semibold text-lg'>
                    รายละเอียดคอร์ส
                  </button>
                </a>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none"></div>
        </section>

        {/* Benefits Section */}
        <section id="content" className='py-24 md:py-32 container-x relative z-10'>
          <div className="text-center mb-20">
            <motion.p
              className='text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              INVEST IN YOUR FUTURE
            </motion.p>
            <h2 className='text-4xl md:text-6xl font-bold text-white tracking-tight mb-6'>
              สิ่งที่คุณจะได้รับจาก<span className="text-blue-500">การอบรม</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                title: 'หลักการทำ SEO เชิงลึก',
                icon: <Target className="w-8 h-8 text-blue-400" />,
                description: 'เข้าใจทั้ง On-page และ Off-page อย่างลึกซึ้ง พร้อมเทคนิค Keyword Optimization ที่แม่นยำ',
                items: ['Technical SEO Audit', 'Content Architecture', 'Link Building Strategy']
              },
              {
                title: 'Workshop ปฏิบัติจริง',
                icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
                description: 'เรียนรู้ผ่านกรณีศึกษาจริงจาก 5 ประเภทธุรกิจ เพื่อให้คุณนำไปปรับใช้ได้กับทุกสถานการณ์',
                items: ['E-commerce Strategy', 'Local SEO Focus', 'Penalty Recovery']
              },
              {
                title: 'เครื่องมือระดับมืออาชีพ',
                icon: <Globe className="w-8 h-8 text-purple-400" />,
                description: 'เชี่ยวชาญการใช้เครื่องมือวิเคราะห์ระดับโลก อาทิ GSC, GA4, Ahrefs และการใช้ AI ช่วยงาน SEO',
                items: ['Data-Driven Insights', 'Competitor Analysis', 'AI-Powered Content']
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                className='bg-white/5 rounded-xl p-10 group'
                whileHover={{ y: -10 }}
              >
                <div className="size-16 rounded-full bg-white/5 border
                 border-white/10 flex items-center justify-center mb-8
                  group-hover:bg-blue-500/20 transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>{card.title}</h3>
                <p className='text-slate-400 leading-relaxed mb-6'>{card.description}</p>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Course Details Grid */}
        <section className="py-24 container-x relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: 'แผนปฏิบัติการ SEO 3 เดือน',
                img: 'https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=1170&auto=format&fit=crop',
                desc: 'ระบบติดตามผลและ Key Milestones ที่ช่วยให้คุณเห็นความก้าวหน้าอย่างชัดเจน'
              },
              {
                title: 'ใบประกาศนียบัตรรับรอง',
                img: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1216&auto=format&fit=crop',
                desc: 'การันตีความรู้ความสามารถ พร้อมสิทธิ์เข้ากลุ่มที่ปรึกษาหลังจบการอบรม'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className='py-24 md:py-32 relative z-10'>
          <div className='container-x max-w-6xl'>
            <div

              className='glass-card p-1 md:p-12 overflow-hidden relative border-white/5'>
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] -mr-48 -mt-48"></div>

              <div className='grid lg:grid-cols-2 gap-16 relative z-10'>
                <div>
                  <h2 className='text-4xl md:text-5xl font-bold text-white mb-8 leading-tight'>
                    พร้อมยกระดับ <br />
                    <span className="text-blue-500">ธุรกิจของคุณหรือยัง?</span>
                  </h2>
                  <p className='text-xl text-slate-300 leading-relaxed mb-10'>
                    คอร์สนี้ออกแบบมาสำหรับนักการตลาด เจ้าของธุรกิจ และฟรีแลนซ์ที่ต้องการผลลัพธ์ที่จับต้องได้จริง
                  </p>

                  <div className='space-y-6'>
                    <div className='flex items-center p-6 glass rounded-full border-white/5'>
                      <div className="p-3 bg-blue-500/10 rounded-full mr-6">
                        <Clock className='w-6 h-6 text-blue-400' />
                      </div>
                      <div>
                        <p className='text-sm text-slate-400 uppercase tracking-widest'>ระยะเวลาอบรม</p>
                        <p className='text-white font-bold text-lg'>1 วันเต็ม (09:00 - 17:00)</p>
                      </div>
                    </div>

                    <div className='flex items-center p-6 glass rounded-full border-white/5'>
                      <div className="p-3 bg-indigo-500/10 rounded-full mr-6">
                        <Users className='w-6 h-6 text-indigo-400' />
                      </div>
                      <div>
                        <p className='text-sm text-slate-400 uppercase tracking-widest'>รูปแบบการเรียน</p>
                        <p className='text-white font-bold text-lg'>Intensive Workshop</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div
                  style={{
                    borderRadius: 20
                  }}
                  className='glass p-8 md:p-10 rounded-sm border-white/10 shadow-2xl'>
                  <h3 className='text-2xl font-bold text-white mb-2'>ลงทะเบียนสำรองที่นั่ง</h3>
                  <p className='text-slate-400 mb-8'>กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับภายใน 24 ชม.</p>

                  <form onSubmit={handleSubmit} className='space-y-5'>
                    <input
                      type='text'
                      name='name'
                      placeholder='ชื่อ-นามสกุล *'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-white/10 transition-all outline-none'
                    />
                    <input
                      type='email'
                      name='email'
                      placeholder='อีเมล *'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-white/10 transition-all outline-none'
                    />
                    <input
                      type='tel'
                      name='phone'
                      placeholder='เบอร์โทรศัพท์'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-white/10 transition-all outline-none'
                    />
                    <textarea
                      name='message'
                      placeholder='ความต้องการเพิ่มเติม'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className='w-full px-6 py-5 bg-white/5 border border-white/10 rounded-[2rem] text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-white/10 transition-all outline-none resize-none'
                    />

                    <button
                      type='submit'
                      disabled={isSubmitted}
                      className='w-full bg-blue-800  py-5 rounded-full text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all'
                    >
                      {isSubmitted ? (
                        <span className="flex items-center justify-center">
                          <CheckCircle className='w-5 h-5 mr-2' />
                          ส่งข้อมูลเรียบร้อย!
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className='w-5 h-5 mr-2' />
                          ลงทะเบียนเลย
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className='pb-20 relative z-10'>
          <div className='container-x text-center'>
            <div className="glass-card p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r  rounded-3xl
              border-white/10 border from-blue-600/10 to-indigo-600/10"></div>
              <div className="relative z-10">
                <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                  ต้องการข้อมูลเพิ่มเติม?
                </h2>
                <p className='text-xl text-slate-400 mb-10 max-w-2xl mx-auto'>
                  โทรสอบถามรายละเอียดคอร์สและรอบการอบรมที่ว่างอยู่ได้โดยตรง
                </p>
                <a
                  href='tel:0954965989'
                  className='bg-blue-800 px-12 py-5 rounded-full text-white font-bold text-xl inline-flex items-center'
                >
                  <MessageSquare className='w-6 h-6 mr-3' />
                  095-496-5989
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
