// app/routes/services/seo-training-service.tsx
import Layout from '~/components/Layout'
import type { MetaFunction } from '@remix-run/node'
import { BookOpen, Users, CheckCircle, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export const meta: MetaFunction = () => {
  return [
    { title: 'อบรม SEO แบบมืออาชีพ - RundeeAds | SEO Training Service' },
    {
      name: 'description',
      content:
        'คอร์สอบรม SEO จากผู้เชี่ยวชาญ เรียนรู้การทำ SEO อย่างถูกต้อง เข้าใจกลยุทธ์การตลาดออนไลน์ ปฏิบัติได้จริง พร้อมใบประกาศนียบัตร'
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
        <section className='bg-gradient-to-b from-indigo-600 to-indigo-700 py-20 text-center text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              คอร์สอบรม SEO แบบมืออาชีพ
            </h1>
            <p className='text-xl max-w-2xl mx-auto leading-relaxed'>
              เรียนรู้การทำ SEO อย่างถูกต้อง ปฏิบัติได้จริง
              เพิ่มอันดับเว็บไซต์บน Google ด้วยกลยุทธ์ที่ใช้ได้ผล
            </p>
          </div>
        </section>

        <section className='py-16 md:py-24 mx-auto  container md:max-w-[70vw] max-w-[90vw]'>
          <h2 className='md:text-5xl text-3xl font-bold mb-14 text-center text-blue-500'>
            สิ่งที่คุณจะได้รับจากการอบรม
          </h2>
          <ul className='space-y-14 text-gray-700'>
            <li className='flex items-center flex-col bg-white rounded-xl p-10 gap-4 justify-between'>
              <img
                src='https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='หลักการทำ SEO'
                className='w-[300px] h-[300px] rounded-lg object-cover'
              />
              <div>
                <p className='font-semibold'>
                  เข้าใจหลักการทำ SEO ทั้ง On-page และ Off-page อย่างลึกซึ้ง
                </p>
                <p className='text-sm text-gray-600'>
                  เรียนรู้ตั้งแต่พื้นฐานจนถึงเทคนิคระดับสูง รวมถึง:
                  <ul className='list-disc ml-5 mt-2 space-y-1'>
                    <li>การปรับโครงสร้างเว็บไซต์ให้เป็นมิตรกับ SEO</li>
                    <li>
                      เทคนิคการเขียนเนื้อหาให้ติดอันดับ (Keyword Optimization)
                    </li>
                    <li>การออกแบบโครงสร้างลิงก์ภายใน (Internal Linking)</li>
                    <li>
                      กลยุทธ์สร้างลิงก์คุณภาพจากเว็บภายนอก (Backlink Building)
                    </li>
                    <li>การทำ Technical SEO เพื่อแก้ไขปัญหาการจัดอันดับ</li>
                  </ul>
                </p>
              </div>
            </li>
            <li className='flex items-center flex-col bg-white rounded-xl p-10 gap-4 md:flex-row-reverse justify-between'>
              <img 
                src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Workshop SEO'
                className='w-[300px] h-[300px] rounded-lg object-cover'
              />
              <div>
                <p className='font-semibold'>
                  Workshop ปฏิบัติจริง กับกรณีศึกษา 5 ธุรกิจที่แตกต่างกัน
                </p>
                <p className='text-sm text-gray-600'>
                  ลงมือทำจริงทุกขั้นตอนผ่านตัวอย่างธุรกิจจริง:
                  <ul className='list-disc ml-5 mt-2 space-y-1'>
                    <li>E-commerce: เทคนิคเพิ่มอันดับสำหรับหน้าสินค้า</li>
                    <li>เว็บบริการ: กลยุทธ์ดึงดูดลูกค้าในพื้นที่ (Local SEO)</li>
                    <li>
                      เว็บเนื้อหา: การสร้าง Traffic จากบทความยาว (Long-form
                      Content)
                    </li>
                    <li>เว็บใหม่: วิธีเร่งให้ติดอันดับเร็วขึ้น</li>
                    <li>เว็บที่มีปัญหาโดนแพนด้าลงโทษ (Google Penalty)</li>
                  </ul>
                </p>
              </div>
            </li>
            <li className='flex items-center flex-col bg-white rounded-xl p-10 gap-4 justify-between'>
              <img
                src='https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='SEO Tools'
                className='w-[300px] h-[300px] rounded-lg object-cover'
              />
              <div>
                <p className='font-semibold'>
                  เชี่ยวชาญเครื่องมือวิเคราะห์ SEO ครบทุกด้าน
                </p>
                <p className='text-sm text-gray-600'>
                  ฝึกใช้งานเครื่องมือระดับมืออาชีพทั้งฟรีและเสียเงิน:
                  <ul className='list-disc ml-5 mt-2 space-y-1'>
                    <li>
                      Google Search Console - วิเคราะห์ปัญหาจาก Google โดยตรง
                    </li>
                    <li>Google Analytics 4 - ติดตามพฤติกรรมผู้ใช้</li>
                    <li>Ahrefs/SEMrush - วิเคราะห์คู่แข่งและโอกาสคีย์เวิร์ด</li>
                    <li>Screaming Frog - สแกนหาปัญหา Technical SEO</li>
                    <li>ChatGPT + SEO Tools - ใช้ AI ช่วยงาน SEO</li>
                  </ul>
                </p>
              </div>
            </li>
            <li className='flex items-center flex-col bg-white rounded-xl p-10 gap-4 md:flex-row-reverse justify-between'>
              <img
                src='https://images.unsplash.com/photo-1682420636597-0786f3406a94?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='SEO Content'
                className='w-[300px] h-[300px] rounded-lg object-cover'
              />
              <div>
                <p className='font-semibold'>
                  เทคนิคการสร้างเนื้อหาแบบ SEO ที่ได้ผลจริงในปี 2024
                </p>
                <p className='text-sm text-gray-600'>
                  อัปเดตเทคนิคล่าสุดที่ทำงานได้ผล:
                  <ul className='list-disc ml-5 mt-2 space-y-1'>
                    <li>
                      การเขียนให้ตอบโจทย์ EEAT (Experience, Expertise,
                      Authoritativeness, Trustworthiness)
                    </li>
                    <li>การใช้ AI ช่วยงาน SEO อย่างถูกวิธี</li>
                    <li>เทคนิค Featured Snippet เพื่อยึดตำแหน่งอันดับ 0</li>
                    <li>กลยุทธ์ Content Cluster สำหรับเพิ่ม Authority</li>
                    <li>การทำ Video SEO สำหรับ YouTube และ Google Video</li>
                  </ul>
                </p>
              </div>
            </li>
            <li className='flex items-center flex-col bg-white rounded-xl p-10 gap-4 justify-between'>
              <img
                src='https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='SEO Strategy'
                className='w-[300px] h-[300px] rounded-lg object-cover'
              />
              <div>
                <p className='font-semibold'>
                  แผนปฏิบัติการ SEO 3 เดือน พร้อมระบบติดตามผล
                </p>
                <p className='text-sm text-gray-600'>
                  รับเทมเพลตและเครื่องมือสำหรับ:
                  <ul className='list-disc ml-5 mt-2 space-y-1'>
                    <li>แบบฟอร์ม Audit เว็บไซต์แบบละเอียด</li>
                    <li>แผนงานรายเดือนพร้อม Key Milestones</li>
                    <li>เทมเพลตรายงานผลให้ลูกค้า/ทีมงาน</li>
                    <li>ระบบติดตามความคืบหน้าแบบ KPI Dashboard</li>
                  </ul>
                </p>
              </div>
            </li>
            <li className='flex items-center flex-col bg-white rounded-xl p-10 gap-4 md:flex-row-reverse justify-between'>
              <img
                src='https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1216&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='SEO Certificate'
                className='w-[300px] h-[300px] rounded-lg object-cover'
              />
              <div>
                <p className='font-semibold'>
                  ใบประกาศนียบัตรพร้อมสิทธิพิเศษสำหรับสมาชิก
                </p>
                <p className='text-sm text-gray-600'>
                  <ul className='list-disc ml-5 mt-2 space-y-1'>
                    <li>ใบประกาศนียบัตรรับรองโดย RundeeAds และพันธมิตร</li>
                    <li>สิทธิ์เข้ากลุ่มปรึกษาปัญหา SEO หลังอบรม</li>
                    <li>สิทธิ์รับอัปเดตเนื้อหาเวอร์ชันล่าสุดฟรี 1 ปี</li>
                    <li>ส่วนลดพิเศษสำหรับคอร์สอัพสกิลอื่นๆ</li>
                    <li>โอกาสได้รับการแนะนำงานจากเครือข่ายพันธมิตร</li>
                  </ul>
                </p>
              </div>
            </li>
            <li className='flex items-center flex-col bg-white rounded-xl p-10 gap-4 justify-between'>
              <img
                src='https://images.unsplash.com/photo-1591518756833-0a5e1a15a0b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='SEO Community'
                className='w-[300px] h-[300px] rounded-lg object-cover'
              />
              <div>
                <p className='font-semibold'>การเข้าสู่ชุมชนนัก SEO มืออาชีพ</p>
                <p className='text-sm text-gray-600'>
                  <ul className='list-disc ml-5 mt-2 space-y-1'>
                    <li>เข้ากลุ่มปิดสำหรับศิษย์เก่า</li>
                    <li>โอกาสร่วมงาน Networking Event ทุก 3 เดือน</li>
                    <li>ระบบ Mentorship จากผู้เชี่ยวชาญ</li>
                    <li>พื้นที่แบ่งปันผลงานและกรณีศึกษาจริง</li>
                  </ul>
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Service Details */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl grid lg:grid-cols-2 gap-12'>
            {/* Left - Content */}
            <div>
              <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                สิ่งที่คุณจะได้รับจากการอบรม
              </h2>
              <ul className='space-y-4 text-gray-700'>
                <li className='flex items-start'>
                  <CheckCircle className='text-green-500 w-6 h-6 mt-1 mr-3' />
                  เข้าใจหลักการทำ SEO ทั้ง On-page และ Off-page
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='text-green-500 w-6 h-6 mt-1 mr-3' />
                  Workshop ปฏิบัติจริง พร้อมตัวอย่างจากเคสจริง
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='text-green-500 w-6 h-6 mt-1 mr-3' />
                  เรียนรู้เครื่องมือวิเคราะห์ SEO ที่มืออาชีพใช้
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='text-green-500 w-6 h-6 mt-1 mr-3' />
                  ใบประกาศนียบัตรเมื่อจบคอร์ส
                </li>
              </ul>

              <div className='mt-8 space-y-4'>
                <div className='flex items-center'>
                  <Users className='text-indigo-600 w-6 h-6 mr-3' />
                  <span>เหมาะสำหรับนักการตลาด, เจ้าของธุรกิจ, ฟรีแลนซ์</span>
                </div>
                <div className='flex items-center'>
                  <Clock className='text-indigo-600 w-6 h-6 mr-3' />
                  <span>ระยะเวลาอบรม: 1 วันเต็ม (09:00 - 17:00)</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className='bg-white rounded-2xl border border-gray-200 p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                ลงทะเบียนอบรม
              </h3>
              <p className='text-gray-600 mb-6'>
                กรอกฟอร์มเพื่อสำรองที่นั่ง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
              </p>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <input
                    type='text'
                    name='name'
                    placeholder='ชื่อ-นามสกุล *'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500'
                  />
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='อีเมล *'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500'
                  />
                </div>
                <div>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='เบอร์โทรศัพท์'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500'
                  />
                </div>
                <div>
                  <textarea
                    name='message'
                    placeholder='ความต้องการเพิ่มเติม'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none'
                  />
                </div>
                <button
                  type='submit'
                  disabled={isSubmitted}
                  className='w-full flex items-center justify-center px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors'
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
        <section className='py-16 bg-indigo-600 text-center text-white'>
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
