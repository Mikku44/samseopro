import { useState } from 'react'
import {
  Phone, Mail, MessageSquare, Clock,
  CheckCircle, ChevronRight, Loader2
} from 'lucide-react'

import { motion } from 'framer-motion'
import type { MetaFunction } from 'react-router'
import { SLIDE_UP } from '~/const/app'

export const meta: MetaFunction = () => [
  { title: 'ติดต่อเรา - RundeeAds | บริการ SEO และ Google Ads มืออาชีพ' },
  { name: 'description', content: 'ติดต่อ RundeeAds เพื่อปรึกษาการทำ SEO และ Google Ads ฟรี โดยทีมงานมืออาชีพ' }
]

const ContactCard = ({ icon: Icon, title, value, sub, colorClass }: any) => (
  <div className='bg-white border border-slate-100 p-6 rounded-2xl group hover:border-blue-200 transition-colors duration-300'>
    <div className='flex items-center space-x-5'>
      <div className={`w-14 h-14 ${colorClass} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner transition-transform group-hover:scale-110`}>
        <Icon className='w-7 h-7 text-white' />
      </div>
      <div>
        <h3 className='text-sm font-medium text-slate-500 mb-0.5 uppercase tracking-wide'>{title}</h3>
        <p className='text-xl font-bold text-slate-900'>{value}</p>
        <p className='text-xs text-blue-600 font-semibold mt-1'>{sub}</p>
      </div>
    </div>
  </div>
)

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Apps Script Web App URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby2iQWBcpiR-IK-hqouKjn5aiReahOzumhvHYkhmtgVS81ZDd6NoqbvCEgIMZpkOymwXA/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // Because 'no-cors' mode doesn't allow reading the response,
      // we proceed to the success state if no network error occurred.
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("ขออภัย! เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้งหรือติดต่อเราผ่านทางไลน์");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className='relative flex items-center justify-center text-white bg-slate-950 overflow-hidden min-h-[500px]'>
        <div className='absolute inset-0'>
          <img
            src='/working.avif'
            alt='contact rundeeads'
            className='w-full h-full object-cover object-center opacity-40'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent' />
        </div>
        
        <div className="container-x relative z-10 text-center px-4">
            <motion.div {...SLIDE_UP}>
                <h1 className='text-4xl md:text-6xl font-black mb-6'>ติดต่อเรา</h1>
                <p className='text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed'>
                    ยกระดับธุรกิจของคุณไปอีกขั้น ด้วยกลยุทธ์การตลาดที่วัดผลได้จริง <br className="hidden md:block"/>
                    ปรึกษาทีมงานผู้เชี่ยวชาญของเราได้ฟรีวันนี้
                </p>
            </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className='bg-white py-24'>
        <div className='container-x max-w-7xl px-4 mx-auto'>
          
          <div className='grid lg:grid-cols-12 gap-16'>
            {/* Left Column: Info */}
            <div className='lg:col-span-5 space-y-6'>
              <div className='mb-12'>
                <motion.span className="text-blue-600 font-bold tracking-widest uppercase text-sm block mb-4">
                  Get in touch
                </motion.span>
                <h2 className='text-4xl font-black text-slate-900 leading-tight'>
                  พร้อมเริ่มโปรเจกต์ <br /> 
                  <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">ไปกับเราหรือยัง?</span>
                </h2>
              </div>

              <div className="space-y-4">
                <ContactCard
                  icon={Phone}
                  title="Call Center"
                  value="095-496-5989"
                  sub="โทรสอบถามได้ทันที 09:00 - 18:00"
                  colorClass="bg-blue-600"
                />
                <ContactCard
                  icon={MessageSquare}
                  title="Line Support"
                  value="@RundeeAds"
                  sub="แชทคุยกับผู้เชี่ยวชาญ 24 ชม."
                  colorClass="bg-emerald-500"
                />
                <ContactCard
                  icon={Mail}
                  title="Email Support"
                  value="rundee.ads@gmail.com"
                  sub="รับใบเสนอราคาภายใน 1 วัน"
                  colorClass="bg-slate-800"
                />
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 mt-10">
                <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" /> เวลาทำการ
                </h4>
                <div className="space-y-3 text-sm text-slate-600 font-medium">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>จันทร์ - ศุกร์</span>
                    <span className="text-slate-900">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>เสาร์</span>
                    <span className="text-slate-900">09:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className='lg:col-span-7'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)]'
              >
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className="space-y-2">
                      <label className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1'>Full Name</label>
                      <input name='name' value={formData.name} required onChange={handleChange} className='minimal-input' placeholder='ชื่อ-นามสกุล' />
                    </div>
                    <div className="space-y-2">
                      <label className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1'>Phone Number</label>
                      <input name='phone' value={formData.phone} type='tel' required onChange={handleChange} className='minimal-input' placeholder='08x-xxx-xxxx' />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1'>Email Address</label>
                    <input name='email' value={formData.email} type='email' required onChange={handleChange} className='minimal-input' placeholder='example@mail.com' />
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className="space-y-2">
                      <label className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1'>Services</label>
                      <div className="relative">
                        <select name='service' value={formData.service} onChange={handleChange} className='minimal-input appearance-none'>
                          <option value=''>เลือกบริการที่สนใจ</option>
                          <option value='google-ads'>Google Ads (แนะนำ)</option>
                          <option value='seo'>SEO Service</option>
                          <option value='web-dev'>Web Development</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1'>Budget</label>
                      <div className="relative">
                        <select name='budget' value={formData.budget} onChange={handleChange} className='minimal-input appearance-none'>
                          <option value=''>ช่วงงบประมาณ</option>
                          <option value='low'>10,000 - 30,000</option>
                          <option value='mid'>30,000 - 100,000</option>
                          <option value='high'>100,000 ขึ้นไป</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1'>Message</label>
                    <textarea name='message' value={formData.message} rows={4} onChange={handleChange} className='minimal-input py-4 min-h-[120px] resize-none' placeholder='เล่ารายละเอียดโปรเจกต์ของคุณให้เราฟัง...' />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-5 rounded-full font-black text-lg transition-all duration-500 flex items-center justify-center gap-3
                      ${isSubmitted
                        ? 'bg-emerald-500 text-white shadow-emerald-100 shadow-2xl'
                        : isSubmitting 
                          ? 'bg-blue-400 text-white cursor-not-allowed' 
                          : 'bg-blue-800 text-white hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-1'}`}
                  >
                    {isSubmitted ? (
                      <><CheckCircle className='w-6 h-6' /> ส่งข้อมูลสำเร็จ!</>
                    ) : isSubmitting ? (
                      <><Loader2 className='w-6 h-6 animate-spin' /> กำลังส่งข้อมูล...</>
                    ) : (
                      <>ส่งข้อความ <ChevronRight className='w-5 h-5' /></>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .minimal-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background-color: #f8fafc;
          border: 1px solid transparent;
          border-radius: 1rem;
          color: #0f172a;
          font-weight: 500;
          transition: all 0.3s;
        }
        .minimal-input:focus {
          outline: none;
          background-color: white;
          border-color: #bfdbfe;
          box-shadow: 0 0 0 4px #eff6ff;
        }
        .minimal-input::placeholder {
          color: #94a3b8;
        }
      `}} />
    </>
  )
}