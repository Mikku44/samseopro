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

export default function ContactUs () {
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
      <div className='min-h-screen bg-gray-50'>
        {/* Header Section */}
        <section className='bg-gradient-to-b from-blue-600 to-blue-700 py-20'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              ติดต่อเรา
            </h1>
            <p className='text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed'>
              พร้อมช่วยเหลือธุรกิจของคุณให้เติบโตด้วยกลยุทธ์ SEO และ Google Ads
              ที่มีประสิทธิภาพ
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
            <div className='grid lg:grid-cols-3 gap-12'>
              {/* Contact Information */}
              <div className='lg:col-span-1 space-y-8'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                    ช่องทางการติดต่อ
                  </h2>
                  <p className='text-gray-600 mb-8 leading-relaxed'>
                    เรายินดีให้คำปรึกษาฟรี!
                    ติดต่อเราผ่านช่องทางที่สะดวกที่สุดสำหรับคุณ
                  </p>
                </div>

                {/* Contact Cards */}
                <div className='space-y-6'>
                  <div className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <Phone className='w-6 h-6 text-blue-600' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-gray-900 mb-2'>
                          โทรศัพท์
                        </h3>
                        <p className='text-blue-600 font-bold text-lg'>
                          0954965989
                        </p>
                        <p className='text-sm text-gray-500 mt-1'>
                          พร้อมรับสายทุกวัน 9:00 - 18:00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <MessageSquare className='w-6 h-6 text-green-600' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-gray-900 mb-2'>
                          Line Official
                        </h3>
                        <p className='text-green-600 font-bold text-lg'>
                          @655rkaej
                        </p>
                        <p className='text-sm text-gray-500 mt-1'>
                          ตอบกลับเร็วที่สุด 24/7
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <Globe className='w-6 h-6 text-purple-600' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-gray-900 mb-2'>
                          เว็บไซต์
                        </h3>
                        <p className='text-purple-600 font-bold text-lg'>
                          www.rundeeads.com
                        </p>
                        <p className='text-sm text-gray-500 mt-1'>
                          ข้อมูลเพิ่มเติมและบล็อก
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <Mail className='w-6 h-6 text-red-600' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-gray-900 mb-2'>
                          อีเมล
                        </h3>
                        <p className='text-red-600 font-bold text-lg'>
                          rundee.ads@gmail.com
                        </p>
                        <p className='text-sm text-gray-500 mt-1'>
                          สำหรับข้อมูลโดยละเอียด
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className='bg-blue-50 border border-blue-200 rounded-xl p-6'>
                  <div className='flex items-center space-x-3 mb-4'>
                    <Clock className='w-6 h-6 text-blue-600' />
                    <h3 className='font-semibold text-gray-900'>เวลาทำการ</h3>
                  </div>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>จันทร์ - ศุกร์</span>
                      <span className='font-medium'>09:00 - 18:00</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>เสาร์</span>
                      <span className='font-medium'>09:00 - 16:00</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>อาทิตย์</span>
                      <span className='font-medium'>ปิด</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className='lg:col-span-2'>
                <div className='bg-white border border-gray-200 rounded-2xl p-8 shadow-lg'>
                  <div className='mb-8'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                      ส่งข้อความถึงเรา
                    </h2>
                    <p className='text-gray-600'>
                      กรอกฟอร์มด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง
                    </p>
                  </div>

                  <div className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <div className='block text-sm font-medium text-gray-700 mb-2'>
                          ชื่อ-นามสกุล *
                        </div>
                        <div className='relative'>
                          <User className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                          <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            placeholder='กรุณากรอกชื่อของคุณ'
                          />
                        </div>
                      </div>

                      <div>
                        <div className='block text-sm font-medium text-gray-700 mb-2'>
                          อีเมล *
                        </div>
                        <div className='relative'>
                          <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                          <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            placeholder='your@email.com'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <div className='block text-sm font-medium text-gray-700 mb-2'>
                          บริษัท/องค์กร
                        </div>
                        <div className='relative'>
                          <Building className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                          <input
                            type='text'
                            name='company'
                            value={formData.company}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            placeholder='ชื่อบริษัทหรือองค์กร'
                          />
                        </div>
                      </div>

                      <div>
                        <div className='block text-sm font-medium text-gray-700 mb-2'>
                          เบอร์โทรศัพท์
                        </div>
                        <div className='relative'>
                          <Phone className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                          <input
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            placeholder='0xx-xxx-xxxx'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <div className='block text-sm font-medium text-gray-700 mb-2'>
                          บริการที่สนใจ
                        </div>
                        <select
                          name='service'
                          value={formData.service}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        >
                          <option value=''>เลือกบริการ</option>
                          <option value='seo'>SEO Service</option>
                          <option value='google-ads'>Google Ads</option>
                          <option value='social-media'>
                            Social Media Marketing
                          </option>
                          <option value='web-design'>Web Design</option>
                          <option value='consultation'>ปรึกษาทั่วไป</option>
                          <option value='other'>อื่นๆ</option>
                        </select>
                      </div>

                      <div>
                        <div className='block text-sm font-medium text-gray-700 mb-2'>
                          งบประมาณโดยประมาณ (บาท/เดือน)
                        </div>
                        <select
                          name='budget'
                          value={formData.budget}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        >
                          <option value=''>เลือกช่วงงบประมาณ</option>
                          <option value='under-10k'>ต่ำกว่า 10,000</option>
                          <option value='10k-30k'>10,000 - 30,000</option>
                          <option value='30k-50k'>30,000 - 50,000</option>
                          <option value='50k-100k'>50,000 - 100,000</option>
                          <option value='over-100k'>มากกว่า 100,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className='block text-sm font-medium text-gray-700 mb-2'>
                        รายละเอียดเพิ่มเติม
                      </div>
                      <div className='relative'>
                        <MessageCircle className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                        <textarea
                          name='message'
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                          placeholder='บอกเราเกี่ยวกับธุรกิจของคุณและสิ่งที่คุณต้องการความช่วยเหลือ...'
                        />
                      </div>
                    </div>

                    <div className='flex items-center space-x-3 text-sm text-gray-600'>
                      <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
                      <span>
                        เราจะไม่เผยแพร่ข้อมูลส่วนตัวของคุณให้กับบุคคลที่สาม
                      </span>
                    </div>

                    <button
                      type='button'
                      onClick={handleSubmit}
                      disabled={isSubmitted}
                      className='w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-green-500 text-white font-semibold rounded-lg transition-colors'
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
        <section className='py-16 bg-blue-600'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              ต้องการความช่วยเหลือด่วน?
            </h2>
            <p className='text-blue-100 mb-8 max-w-2xl mx-auto'>
              ติดต่อเราผ่าน Line Official Account
              สำหรับการตอบกลับที่รวดเร็วที่สุด
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:0954965989'
                className='inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-semibold rounded-lg transition-colors'
              >
                <Phone className='w-5 h-5 mr-2' />
                โทรเลย 095-496-5989
              </a>

              <a
                href='https://line.me/R/ti/p/@655rkaej'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='w-[300px] h-auto'
                  src='/addline.webp'
                  alt='add line button'
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
