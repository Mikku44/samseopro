// app/routes/services/google-ads-service.tsx
import Layout from '~/components/Layout'
import type { MetaFunction } from 'react-router';
import { Target, BarChart3, Globe, MessageSquare, MousePointerClick, TrendingUp, Search, CheckCircle, Clock, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const meta: MetaFunction = () => {
    return [
        { title: 'บริการรับทำ Google Ads (PPC) เพิ่มยอดขายทันใจ - RundeeAds' },
        {
            name: 'description',
            content:
                'รับทำ Google Ads โดยทีมงานมืออาชีพ ช่วยคุณประหยัดงบโฆษณา เพิ่มยอดคลิก และสร้าง Conversion ที่คุ้มค่า ROI สูงสุด วัดผลได้จริง'
        },
        {
            name: 'keywords',
            content:
                'Google Ads, รับทำ Google Ads, ยิง Ads Google, PPC Service, Google Search Ads, บริการโฆษณาออนไลน์, Google Shopping Ads'
        },
        { property: 'og:title', content: 'บริการรับทำ Google Ads แบบครบวงจร - RundeeAds' },
        {
            property: 'og:description',
            content:
                'เปลี่ยนงบโฆษณาเป็นยอดขาย ด้วยการยิง Ads ที่แม่นยำและกลยุทธ์จากผู้เชี่ยวชาญ'
        },
        { property: 'og:type', content: 'website' },
        {
            property: 'og:url',
            content: 'https://www.rundeeads.com/services/google-ads-service'
        },
        { property: 'og:site_name', content: 'RundeeAds' },
        { property: 'og:locale', content: 'th_TH' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'RundeeAds' },
        {
            rel: 'canonical',
            href: 'https://www.rundeeads.com/services/google-ads-service'
        }
    ]
}

export default function GoogleAdsService() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // ... logic for submission stays the same
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const characterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Layout>
            <div className='min-h-screen relative overflow-hidden bg-black text-white'>
                {/* Dynamic Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-blue-600/10 rounded-full blur-[100px]"></div>
                </div>

                {/* Hero Section */}
                <section className='w-full min-h-[80vh] flex items-center relative overflow-hidden pt-32 pb-20'>
                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                        alt="google ads service"
                        className="w-full h-full object-cover absolute top-0 opacity-20"
                    />

                    <div className='container-x relative z-10'>
                        <motion.div
                            className='max-w-4xl'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-8">
                                <span className="text-xs font-medium text-blue-400 tracking-wider uppercase">
                                    Google Ads Certified Partner
                                </span>
                            </div>

                            {/* Main Title - No character splitting for a cleaner look */}
                            <h1 className='text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8 text-white'>
                                RundeeAds <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">
                                    ผู้ช่วยสร้างยอดขายด้วย Google Ads
                                </span>
                            </h1>

                            {/* Description */}
                            <p className='text-xl md:text-2xl text-slate-300/90 leading-relaxed max-w-2xl mb-12'>
                                เปลี่ยนการค้นหาให้เป็นลูกค้าจริง ด้วยการวางแผนโฆษณาที่ตรงกลุ่มเป้าหมาย ประหยัดงบ และวัดผล ROI ได้อย่างแม่นยำ
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a href='#register'>
                                    <button className='bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full text-white font-bold text-lg transition-all active:scale-95'>
                                        เริ่มทำโฆษณาวันนี้
                                    </button>
                                </a>
                                <a href="#content">
                                    <button className='glass-button px-10 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all'>
                                        ดูรายละเอียดบริการ
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Fade Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none"></div>
                </section>


                {/* Consultation Form Section */}
                <section id="register" className='py-24 relative z-10'>
                    <div className='container-x max-w-6xl'>
                        <div className='glass-card p-1 md:p-12 overflow-hidden relative border-white/5'>
                            <div className='grid lg:grid-cols-2 gap-16 relative z-10'>
                                <div>
                                    <h2 className='text-4xl md:text-5xl font-bold mb-8 leading-tight'>
                                        วิเคราะห์แผน <br />
                                        <span className="text-blue-500">Google Ads ฟรี!</span>
                                    </h2>
                                    <p className='text-xl text-slate-300 leading-relaxed mb-10'>
                                        ให้ผู้เชี่ยวชาญช่วยตรวจสอบบัญชีเดิม หรือวางแผนเริ่มต้นใหม่ เพื่อการใช้เงินที่คุ้มค่าที่สุด
                                    </p>

                                    <div className='space-y-6'>
                                        <div className='flex items-center p-6 glass rounded-full border-white/5'>
                                            <Clock className='w-6 h-6 text-blue-400 mr-6' />
                                            <div>
                                                <p className='text-sm text-slate-400 uppercase'>ความเร็วในการเริ่มงาน</p>
                                                <p className='text-white font-bold text-lg'>เปิดแคมเปญได้ภายใน 3-5 วัน</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center p-6 glass rounded-full border-white/5'>
                                            <Globe className='w-6 h-6 text-indigo-400 mr-6' />
                                            <div>
                                                <p className='text-sm text-slate-400 uppercase'>ขอบเขตบริการ</p>
                                                <p className='text-white font-bold text-lg'>ครอบคลุมทุก Platform ในเครือ Google</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='glass p-8 md:p-10 rounded-3xl border-white/10 shadow-2xl'>
                                    <h3 className='text-2xl font-bold mb-2'>ขอรับคำปรึกษาฟรี</h3>
                                    <p className='text-slate-400 mb-8'>กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับพร้อมแผนเบื้องต้น</p>

                                    <form onSubmit={handleSubmit} className='space-y-5'>
                                        <input
                                            type='text' name='name' placeholder='ชื่อธุรกิจ / ชื่อของคุณ *' required
                                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white outline-none focus:border-blue-500'
                                        />
                                        <input
                                            type='email' name='email' placeholder='อีเมลติดต่อ *' required
                                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white outline-none focus:border-blue-500'
                                        />
                                        <input
                                            type='tel' name='phone' placeholder='เบอร์โทรศัพท์'
                                            className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white outline-none focus:border-blue-500'
                                        />
                                        <textarea
                                            name='message' placeholder='งบประมาณที่คาดหวัง หรือ เว็บไซต์ของคุณ' rows={3}
                                            className='w-full px-6 py-5 bg-white/5 border border-white/10 rounded-[2rem] text-white outline-none focus:border-blue-500 resize-none'
                                        />

                                        <button
                                            type='submit'
                                            disabled={isSubmitted}
                                            className='w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-full text-white font-bold text-lg transition-all'
                                        >
                                            {isSubmitted ? 'ส่งข้อมูลเรียบร้อย!' : 'ปรึกษาผู้เชี่ยวชาญเลย'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className='pb-20 relative z-10'>
                    <div className='container-x text-center'>
                        <div className="glass-card p-16 relative overflow-hidden rounded-[3rem] border border-white/10">
                            <h2 className='text-3xl md:text-5xl font-bold mb-6'>
                                เลิกเสียเงินทิ้งกับ Ads ที่ไม่ได้ผล
                            </h2>
                            <p className='text-xl text-slate-400 mb-10 max-w-2xl mx-auto'>
                                ติดต่อ RundeeAds เพื่อสร้างแคมเปญโฆษณาที่เน้นผลลัพธ์และการเติบโตอย่างยั่งยืน
                            </p>
                            <a
                                href='tel:0954965989'
                                className='bg-blue-600 hover:bg-blue-700 px-12 py-5 rounded-full text-white font-bold text-xl inline-flex items-center transition-all'
                            >
                                <MessageSquare className='w-6 h-6 mr-3' />
                                โทรสอบถาม: 095-496-5989
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}