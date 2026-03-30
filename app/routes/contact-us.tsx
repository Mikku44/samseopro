import { useState } from 'react'
import {
  Phone,
  Mail,
  MessageSquare,
  Globe,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageCircle
} from 'lucide-react'
import Layout from '~/components/Layout'
import type { MetaFunction } from '@remix-run/node'
import { FaLine } from 'react-icons/fa6'

export const meta: MetaFunction = () => {
  return [
    { title: 'ติดต่อเรา - RundeeAds | บริการ SEO และ Google Ads มืออาชีพ' },
    {
      name: 'description',
      content:
        'ติดต่อทีมผู้เชี่ยวชาญ RundeeAds สำหรับคำปรึกษาฟรี บริการ SEO, Google Ads และการตลาดออนไลน์ โทร 095-496-5989 หรือ Line @655rkaej'
    },
    {
      name: 'keywords',
      content:
        'ติดต่อ RundeeAds, ปรึกษา SEO ฟรี, Google Ads Thailand, การตลาดออนไลน์, SEO คอนซัลแตนท์, Digital Marketing Agency Thailand'
    },
    {
      property: 'og:title',
      content: 'ติดต่อเรา - RundeeAds | ปรึกษา SEO และ Google Ads ฟรี'
    },
    {
      property: 'og:description',
      content:
        'รับคำปรึกษาฟรีจากผู้เชี่ยวชาญ SEO และ Google Ads ติดต่อ RundeeAds วันนี้เพื่อเติบโตธุรกิจออนไลน์อย่างยั่งยืน'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.rundeeads.com/contact-us' },
    // { property: "og:image", content: "https://www.rundeeads.com/images/contact-og-image.jpg" },
    // { property: "og:image:width", content: "1200" },
    // { property: "og:image:height", content: "630" },
    { property: 'og:site_name', content: 'RundeeAds' },
    { property: 'og:locale', content: 'th_TH' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'ติดต่อเรา - RundeeAds | ปรึกษา SEO และ Google Ads ฟรี'
    },
    {
      name: 'twitter:description',
      content:
        'รับคำปรึกษาฟรีจากผู้เชี่ยวชาญ SEO และ Google Ads ติดต่อ RundeeAds วันนี้'
    },
    // { name: "twitter:image", content: "https://www.rundeeads.com/images/contact-twitter-card.jpg" },

    // Additional SEO
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'RundeeAds' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
    { name: 'language', content: 'Thai' },

    // Local Business Schema
    { name: 'geo.region', content: 'TH' },
    { name: 'geo.placename', content: 'Thailand' },

    // Contact Information
    { name: 'contact:phone_number', content: '+66954965989' },
    { name: 'contact:email', content: 'rundee.ads@gmail.com' },

    // Canonical URL
    { rel: 'canonical', href: 'https://www.rundeeads.com/contact-us' }
  ]
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: unknown) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <Layout>
      <div className='min-h-screen mt-20'>
        {/* Gradient Orbs Background */}
        <div className="gradient-orb w-[500px] h-[500px] bg-purple-500 top-0 left-0"></div>
        <div className="gradient-orb w-[400px] h-[400px] bg-blue-500 bottom-0 right-0"></div>

        {/* Header Section */}
        <section className='bg-gradient-to-b from-blue-800/90 to-blue-950/90 backdrop-blur-md py-20 relative'>
          <div className='container mx-auto px-4 md:px-6 text-center relative z-10'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg'>
              ติดต่อเรา
            </h1>
            <p className='text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed'>
              พร้อมช่วยเหลือธุรกิจของคุณให้เติบโตด้วยกลยุทธ์ SEO และ Google Ads
              ที่มีประสิทธิภาพ
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className='py-16 md:py-24 relative z-10'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <div className='grid lg:grid-cols-3 gap-12'>
              {/* Contact Information */}
              <div className='lg:col-span-1 space-y-8'>
                <div>
                  <h2 className='text-2xl font-bold text-white mb-6 drop-shadow-md'>
                    ช่องทางการติดต่อ
                  </h2>
                  <p className='text-white/80 mb-8 leading-relaxed'>
                    เรายินดีให้คำปรึกษาฟรี!
                    ติดต่อเราผ่านช่องทางที่สะดวกที่สุดสำหรับคุณ
                  </p>
                </div>

                {/* Contact Cards */}
                <div className='space-y-6'>
                  <div className='glass-card p-6 hover:bg-white/25 transition-all duration-300'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg'>
                        <Phone className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-white mb-2'>
                          โทรศัพท์
                        </h3>
                        <p className='text-white font-bold text-lg'>
                          0954965989
                        </p>
                        <p className='text-sm text-white/60 mt-1'>
                          พร้อมรับสายทุกวัน 9:00 - 18:00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='glass-card p-6 hover:bg-white/25 transition-all duration-300'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg'>
                        <MessageSquare className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-white mb-2'>
                          Line Official
                        </h3>
                        <p className='text-white font-bold text-lg'>
                          @655rkaej
                        </p>
                        <p className='text-sm text-white/60 mt-1'>
                          ตอบกลับเร็วที่สุด 24/7
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='glass-card p-6 hover:bg-white/25 transition-all duration-300'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg'>
                        <Mail className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-white mb-2'>
                          อีเมล
                        </h3>
                        <p className='text-white font-bold text-lg'>
                          rundee.ads@gmail.com
                        </p>
                        <p className='text-sm text-white/60 mt-1'>
                          สำหรับข้อมูลโดยละเอียด
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className='glass-card p-6'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <Clock className='w-6 h-6 text-white' />
                    <h3 className='font-semibold text-white'>เวลาทำการ</h3>
                  </div>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-white/70'>จันทร์ - ศุกร์</span>
                      <span className='font-medium text-white'>09:00 - 18:00</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-white/70'>เสาร์</span>
                      <span className='font-medium text-white'>09:00 - 16:00</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-white/70'>อาทิตย์</span>
                      <span className='font-medium text-white'>ปิด</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className='lg:col-span-2'>
                <div className='glass-card p-8'>
                  <div className='mb-8'>
                    <h2 className='text-2xl font-bold text-white mb-4 drop-shadow-md'>
                      ส่งข้อความถึงเรา
                    </h2>
                    <p className='text-white/70'>
                      กรอกฟอร์มด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง
                    </p>
                  </div>

                  <div className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <div className='block text-sm font-medium text-white/80 mb-2'>
                          ชื่อ-นามสกุล *
                        </div>
                        <div className='relative'>
                          <User className='absolute left-3 top-3 h-5 w-5 text-white/50' />
                          <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className='w-full pl-10 pr-4 py-3 glass-button text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                            placeholder='กรุณากรอกชื่อของคุณ'
                          />
                        </div>
                      </div>

                      <div>
                        <div className='block text-sm font-medium text-white/80 mb-2'>
                          อีเมล *
                        </div>
                        <div className='relative'>
                          <Mail className='absolute left-3 top-3 h-5 w-5 text-white/50' />
                          <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className='w-full pl-10 pr-4 py-3 glass-button text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                            placeholder='your@email.com'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <div className='block text-sm font-medium text-white/80 mb-2'>
                          บริษัท/องค์กร
                        </div>
                        <div className='relative'>
                          <Building className='absolute left-3 top-3 h-5 w-5 text-white/50' />
                          <input
                            type='text'
                            name='company'
                            value={formData.company}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 glass-button text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                            placeholder='ชื่อบริษัทหรือองค์กร'
                          />
                        </div>
                      </div>

                      <div>
                        <div className='block text-sm font-medium text-white/80 mb-2'>
                          เบอร์โทรศัพท์
                        </div>
                        <div className='relative'>
                          <Phone className='absolute left-3 top-3 h-5 w-5 text-white/50' />
                          <input
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 glass-button text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                            placeholder='0xx-xxx-xxxx'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <div className='block text-sm font-medium text-white/80 mb-2'>
                          บริการที่สนใจ
                        </div>
                        <select
                          name='service'
                          value={formData.service}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 glass-button text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                        >
                          <option value='' className='text-gray-900'>เลือกบริการ</option>
                          <option value='seo' className='text-gray-900'>SEO Service</option>
                          <option value='google-ads' className='text-gray-900'>Google Ads</option>
                          <option value='social-media' className='text-gray-900'>Social Media Marketing</option>
                          <option value='web-design' className='text-gray-900'>Web Design</option>
                          <option value='consultation' className='text-gray-900'>ปรึกษาทั่วไป</option>
                          <option value='other' className='text-gray-900'>อื่นๆ</option>
                        </select>
                      </div>

                      <div>
                        <div className='block text-sm font-medium text-white/80 mb-2'>
                          งบประมาณโดยประมาณ (บาท/เดือน)
                        </div>
                        <select
                          name='budget'
                          value={formData.budget}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 glass-button text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
                        >
                          <option value='' className='text-gray-900'>เลือกช่วงงบประมาณ</option>
                          <option value='under-10k' className='text-gray-900'>ต่ำกว่า 10,000</option>
                          <option value='10k-30k' className='text-gray-900'>10,000 - 30,000</option>
                          <option value='30k-50k' className='text-gray-900'>30,000 - 50,000</option>
                          <option value='50k-100k' className='text-gray-900'>50,000 - 100,000</option>
                          <option value='over-100k' className='text-gray-900'>มากกว่า 100,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className='block text-sm font-medium text-white/80 mb-2'>
                        รายละเอียดเพิ่มเติม
                      </div>
                      <div className='relative'>
                        <MessageCircle className='absolute left-3 top-3 h-5 w-5 text-white/50' />
                        <textarea
                          name='message'
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          style={{
                            borderRadius: 20
                          }}
                          className='w-full pl-10 pr-4 py-3 glass-button text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none'
                          placeholder='บอกเราเกี่ยวกับธุรกิจของคุณและสิ่งที่คุณต้องการความช่วยเหลือ...'
                        />
                      </div>
                    </div>

                    <div className='flex items-center space-x-3 text-sm text-white/70'>
                      <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                      <span>เราให้ความสำคัญกับความเป็นส่วนตัว ข้อมูลของคุณจะไม่ถูกเปิดเผยต่อบุคคลภายนอก</span>
                    </div>

                    <button
                      type='button'
                      onClick={handleSubmit}
                      disabled={isSubmitted}
                      className='w-full flex items-center justify-center px-8 py-4 glass-button text-white font-semibold hover:bg-white/30 disabled:bg-green-500'
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className='w-5 h-5 mr-2' />
                          ส่งข้อความเรียบร้อย!
                        </>
                      ) : (
                        <>
                          <Send className='w-5 h-5 mr-2' />
                          ส่งข้อความ
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Section */}
        <section className='py-16 backdrop-blur-md bg-blue-900/50 relative z-10'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4 drop-shadow-lg'>
              ต้องการความช่วยเหลือด่วน?
            </h2>
            <p className='text-white/80 mb-8 max-w-2xl mx-auto'>
              ติดต่อเราผ่าน Line Official Account
              สำหรับการตอบกลับที่รวดเร็วที่สุด
            </p>
            <div className='grid md:grid-cols-2 max-w-3xl mx-auto gap-4 items-center justify-center'>
              <a
                href='tel:0954965989'
                className='inline-flex items-center px-8 py-5 glass-button text-white font-semibold hover:bg-white/30'
              >
                <Phone className='w-5 h-5 mr-2' />
                โทรเลย 095-496-5989
              </a>

              <div className="">
                <a
                  href="https://line.me/R/ti/p/@655rkaej"
                  rel="nofollow"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-5 
                   bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700
                    text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <FaLine className="text-2xl" />
                  <span>Add Friend</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
