// app/routes/services/seo-training-service.tsx
import Layout from '~/components/Layout'
import type { MetaFunction } from '@remix-run/node'
import { BookOpen, Users, CheckCircle, Clock, Send } from 'lucide-react'
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

export default function SEOTrainingService () {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <Layout>
      <div className='min-h-screen bg-gray-50'>
        {/* Hero */}

        <motion.section
          className=' w-full h-screen max-h-[600px] p-5 md:p-24 relative overflow-hidden
         bg-blue-800 bg-cover bg-no-repeat bg-center *:
         bg-[url("/bg.avif")]'
        >
          {/* Text Content */}
          <div className='h-full max-w-7xl md:px-20 mx-auto md:m-0 m-auto py-5 flex flex-col justify-center gap-5 relative z-10'>
            <motion.div
              className='text-white/80'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              เพิ่มยอดขาย ขยายธุรกิจให้ปัง!
            </motion.div>

            <motion.h1
              className='md:text-5xl text-4xl text-white font-bold'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            >
              RundeeAds <br />
              บริการรับทำ SEOแบบมืออาชีพ
            </motion.h1>

            <motion.h2
              className='text-white mt-4'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >
              เรียนรู้การทำ SEO อย่างถูกต้อง ปฏิบัติได้จริง
              เพิ่มอันดับเว็บไซต์บน Google ด้วยกลยุทธ์ที่ใช้ได้ผล
            </motion.h2>
          </div>

          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/80'></div>
        </motion.section>

        <section className='py-16 md:py-24 mx-auto  container md:max-w-[70vw] max-w-[90vw]'>
          <motion.div
            className='text-gray-500/80 text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            ถ้าคุณเรียนกับเรา
          </motion.div>
          <h2
            className='md:text-5xl text-3xl font-bold mb-14 text-center py-3
          bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'
          >
            สิ่งที่คุณจะได้รับจากการอบรม
          </h2>

          <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl mb-16'>
            <img
              src='/background(2).jpg'
              alt='background'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
          <ul className='grid gap-10 md:gap-14 md:grid-cols-2 text-gray-800'>
            {[
              {
                title:
                  'เข้าใจหลักการทำ SEO ทั้ง On-page และ Off-page อย่างลึกซึ้ง',
                img: 'https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?q=80&w=1170&auto=format&fit=crop',
                items: [
                  'การปรับโครงสร้างเว็บไซต์ให้เป็นมิตรกับ SEO',
                  'เทคนิคการเขียนเนื้อหาให้ติดอันดับ (Keyword Optimization)',
                  'การออกแบบโครงสร้างลิงก์ภายใน (Internal Linking)',
                  'กลยุทธ์สร้างลิงก์คุณภาพจากเว็บภายนอก (Backlink Building)',
                  'การทำ Technical SEO เพื่อแก้ไขปัญหาการจัดอันดับ'
                ]
              },
              {
                title:
                  'Workshop ปฏิบัติจริง กับกรณีศึกษา 5 ธุรกิจที่แตกต่างกัน',
                img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop',
                items: [
                  'E-commerce: เทคนิคเพิ่มอันดับสำหรับหน้าสินค้า',
                  'เว็บบริการ: กลยุทธ์ดึงดูดลูกค้าในพื้นที่ (Local SEO)',
                  'เว็บเนื้อหา: การสร้าง Traffic จากบทความยาว (Long-form Content)',
                  'เว็บใหม่: วิธีเร่งให้ติดอันดับเร็วขึ้น',
                  'เว็บที่มีปัญหาโดนแพนด้าลงโทษ (Google Penalty)'
                ]
              },
              {
                title: 'เชี่ยวชาญเครื่องมือวิเคราะห์ SEO ครบทุกด้าน',
                img: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop',
                items: [
                  'Google Search Console - วิเคราะห์ปัญหาจาก Google โดยตรง',
                  'Google Analytics 4 - ติดตามพฤติกรรมผู้ใช้',
                  'Ahrefs/SEMrush - วิเคราะห์คู่แข่งและโอกาสคีย์เวิร์ด',
                  'Screaming Frog - สแกนหาปัญหา Technical SEO',
                  'ChatGPT + SEO Tools - ใช้ AI ช่วยงาน SEO'
                ]
              },
              {
                title: 'เทคนิคการสร้างเนื้อหาแบบ SEO ที่ได้ผลจริงในปี 2024',
                img: 'https://images.unsplash.com/photo-1682420636597-0786f3406a94?q=80&w=627&auto=format&fit=crop',
                items: [
                  'การเขียนให้ตอบโจทย์ EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)',
                  'การใช้ AI ช่วยงาน SEO อย่างถูกวิธี',
                  'เทคนิค Featured Snippet เพื่อยึดตำแหน่งอันดับ 0',
                  'กลยุทธ์ Content Cluster สำหรับเพิ่ม Authority',
                  'การทำ Video SEO สำหรับ YouTube และ Google Video'
                ]
              },
              {
                title: 'แผนปฏิบัติการ SEO 3 เดือน พร้อมระบบติดตามผล',
                img: 'https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=1170&auto=format&fit=crop',
                items: [
                  'แบบฟอร์ม Audit เว็บไซต์แบบละเอียด',
                  'แผนงานรายเดือนพร้อม Key Milestones',
                  'เทมเพลตรายงานผลให้ลูกค้า/ทีมงาน',
                  'ระบบติดตามความคืบหน้าแบบ KPI Dashboard'
                ]
              },
              {
                title: 'ใบประกาศนียบัตรพร้อมสิทธิพิเศษสำหรับสมาชิก',
                img: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1216&auto=format&fit=crop',
                items: [
                  'ใบประกาศนียบัตรรับรองโดย RundeeAds และพันธมิตร',
                  'สิทธิ์เข้ากลุ่มปรึกษาปัญหา SEO หลังอบรม',
                  'สิทธิ์รับอัปเดตเนื้อหาเวอร์ชันล่าสุดฟรี 1 ปี',
                  'ส่วนลดพิเศษสำหรับคอร์สอัพสกิลอื่นๆ',
                  'โอกาสได้รับการแนะนำงานจากเครือข่ายพันธมิตร'
                ]
              },
              {
                title: 'การเข้าสู่ชุมชนนัก SEO มืออาชีพ',
                img: 'https://images.unsplash.com/photo-1591518756833-0a5e1a15a0b9?q=80&w=687&auto=format&fit=crop',
                items: [
                  'เข้ากลุ่มปิดสำหรับศิษย์เก่า',
                  'โอกาสร่วมงาน Networking Event ทุก 3 เดือน',
                  'ระบบ Mentorship จากผู้เชี่ยวชาญ',
                  'พื้นที่แบ่งปันผลงานและกรณีศึกษาจริง'
                ]
              }
            ].map((card, i) => (
              <li
                key={i}
                className='flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300'
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className='h-64 w-full object-cover'
                />
                <div className='flex flex-col p-6 space-y-4'>
                  <h3 className='text-lg md:text-xl font-semibold'>
                    {card.title}
                  </h3>
                  <ul className='list-disc ml-5 space-y-2 text-sm text-gray-600'>
                    {card.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Service Details */}
        <section className='py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl grid lg:grid-cols-2 gap-16'>
            {/* Left - Content */}
            <div>
              <h2 className='text-4xl font-bold mb-8 text-gray-900 leading-tight'>
                สิ่งที่คุณจะได้รับจากการอบรม
              </h2>

              <ul className='space-y-5 text-gray-700'>
                <li className='flex items-start'>
                  <CheckCircle className='text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0' />
                  <span>เข้าใจหลักการทำ SEO ทั้ง On-page และ Off-page</span>
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0' />
                  <span>Workshop ปฏิบัติจริง พร้อมตัวอย่างจากเคสจริง</span>
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0' />
                  <span>เรียนรู้เครื่องมือวิเคราะห์ SEO ที่มืออาชีพใช้</span>
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='text-green-500 w-6 h-6 mt-1 mr-3 flex-shrink-0' />
                  <span>ใบประกาศนียบัตรเมื่อจบคอร์ส</span>
                </li>
              </ul>

              <div className='mt-10 space-y-4'>
                <div className='flex items-center text-gray-800'>
                  <Users className='text-indigo-600 w-6 h-6 mr-3 flex-shrink-0' />
                  <span>เหมาะสำหรับนักการตลาด, เจ้าของธุรกิจ, ฟรีแลนซ์</span>
                </div>
                <div className='flex items-center text-gray-800'>
                  <Clock className='text-indigo-600 w-6 h-6 mr-3 flex-shrink-0' />
                  <span>ระยะเวลาอบรม: 1 วันเต็ม (09:00 - 17:00)</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className='bg-white rounded-2xl border border-gray-200 p-10 shadow-xl'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                ลงทะเบียนอบรม
              </h3>
              <p className='text-gray-600 mb-8 leading-relaxed'>
                กรอกฟอร์มเพื่อสำรองที่นั่ง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
              </p>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor='name' className='sr-only'>
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='ชื่อ-นามสกุล *'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    อีเมล
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='อีเมล *'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition'
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='sr-only'>
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    placeholder='เบอร์โทรศัพท์'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='sr-only'>
                    ความต้องการเพิ่มเติม
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='ความต้องการเพิ่มเติม'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition resize-none'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitted}
                  className='w-full flex items-center justify-center px-6 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors'
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className='w-5 h-5 mr-2' />
                      ส่งข้อมูลเรียบร้อย!
                    </>
                  ) : (
                    <>
                      <Send className='w-5 h-5 mr-2' />
                      ส่งข้อมูลลงทะเบียน
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-16 bg-[url("/bg.avif")] text-center text-white'>
          <h2 className='text-3xl font-bold mb-4'>
            พร้อมเริ่มเรียนรู้ SEO อย่างจริงจัง?
          </h2>
          <p className='max-w-2xl mx-auto mb-8 text-indigo-100'>
            สำรองที่นั่งของคุณวันนี้เพื่อยกระดับทักษะการทำการตลาดออนไลน์
          </p>
          <a
            href='tel:0954965989'
            className='inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-semibold rounded-lg transition-colors'
          >
            <BookOpen className='w-5 h-5 mr-2' />
            โทรสอบถาม 095-496-5989
          </a>
        </section>
      </div>
    </Layout>
  )
}
