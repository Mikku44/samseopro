// app/routes/services/google-ads-service.tsx

import type { MetaFunction } from 'react-router';
import {  BarChart3, Globe, MessageSquare, MousePointerClick, TrendingUp, Search, CheckCircle, Clock, Send } from 'lucide-react'
import { BsStars } from "react-icons/bs";
import { motion } from 'framer-motion'
import { useState } from 'react'
import { customerList } from '~/const/app';
import ConsultationForm from '~/components/SubmitForm';

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>
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

                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">
                                    หยุดเผาเงินทิ้งกับ<br /> Google Ads...
                                </span>

                            </h1>

                            {/* Description */}
                            <p className='text-xl md:text-2xl text-slate-300/90 leading-relaxed max-w-2xl mb-12'>
                                แล้วให้ "อดีตคนใน" พลิกแอดพัง ให้กลายเป็นเครื่องจักรผลิตยอดขาย <br />
                                <div className="text-lg">จากประสบการณ์ตรงในฐานะอดีต Account Manager ที่ Google (Vendor) กว่า 4 ปี ดูแลมาแล้วกว่า 1,000 บัญชี ผมรู้ความลับว่าทำไมแอดคุณถึงกินเงินฟรี และรู้ "ทางลัดหลังบ้าน" ที่จะพาคุณไปอยู่หน้าแรกเพื่อกวาดยอดขาย... โดยที่คุณไม่ต้องนั่งเดาอีกต่อไป</div>
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a href="https://line.me/R/ti/p/@rundee" target="_blank">
                                    <button className='bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full text-white font-bold text-lg transition-all active:scale-95'>
                                        ทักไลน์ตอนนี้
                                    </button>
                                </a>
                                <a href="#register">
                                    <button className='glass-button px-10 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all'>
                                        ตรวจสุขภาพบัญชีโฆษณาฟรี!
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Fade Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none"></div>
                </section>

                <section className='py-32 relative z-10 bg-[#020617] overflow-hidden'>
                    <div className='container-x'>
                        {/* Minimal Header */}
                        <div className="max-w-3xl mb-20">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className='text-3xl md:text-4xl font-semibold text-white tracking-tight'
                            >
                                ส่วนหนึ่งจากลูกค้า<span className="text-slate-500 font-normal"> ที่ไว้วางใจให้เราดูแล</span>
                            </motion.h2>
                            <div className="w-12 h-[1px] bg-blue-500 mt-6"></div>
                        </div>
                    </div>

                    {/* Marquee Container */}
                    <div className="relative flex overflow-hidden border-y border-white/5 bg-white/[0.01] py-12">
                        <motion.div
                            className="flex whitespace-nowrap"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                duration: 30, // Adjust speed here (higher = slower)
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[...customerList, ...customerList].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='group flex flex-col items-center justify-center px-12 md:px-20 border-r border-white/5 transition-colors hover:bg-white/[0.02]'
                                >
                                    <div className="relative z-10 h-12 md:h-16 flex items-center justify-center mb-4">
                                        {item.src ? (
                                            <img
                                                src={item.src}
                                                alt={item.label}
                                                className='max-h-full w-auto object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500'
                                            />
                                        ) : (
                                            <Globe className="w-8 h-8 text-slate-600 group-hover:text-blue-500 transition-colors" />
                                        )}
                                    </div>

                                    <p className='text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-slate-500 font-medium '>
                                        {item.label}
                                    </p>
                                </a>
                            ))}
                        </motion.div>

                        {/* Optional: Gradient Overlays for a "fade out" effect at the edges */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20"></div>
                    </div>
                </section>

                {/* Pain Point Section - Minimalist Version */}
                <section className='py-24 relative z-10'>
                    <div className='container-x max-w-4xl'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className='space-y-20'
                        >
                            {/* Header */}
                            <div className="space-y-4">
                                <span className="text-red-500 font-medium tracking-[0.2em] uppercase text-sm">The Problem</span>
                                <h2 className='text-4xl md:text-6xl font-light leading-tight text-white'>
                                    คุณกำลังรู้สึกว่าโฆษณากำลัง <br />
                                    <span className="font-bold text-red-500">"เผาเงิน"</span> ทิ้งอยู่ใช่ไหม?
                                </h2>
                            </div>

                            {/* Content Grid */}
                            <div className='grid md:grid-cols-2 gap-16 border-t border-white/10 pt-16'>
                                <div className="space-y-6">
                                    <p className='text-xl text-slate-200 leading-relaxed font-light'>
                                        จ่ายค่าแอดหลักหมื่น แต่ผลลัพธ์กลับมีแค่ยอดคลิกที่ <span className="text-white font-medium italic">"กินไม่ได้"</span>
                                    </p>
                                    <p className='text-slate-400 leading-relaxed text-lg'>
                                        คนทักเงียบ คู่แข่งดันราคา และเอเจนซี่ที่ทำได้เพียง "ลองผิดลองถูก"<br /> บนงบประมาณของคุณ
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <p className='text-xl text-yellow-500/90 leading-relaxed italic'>
                                        "ระบบ Google ไม่ได้ถูกออกแบบมาให้คุณประหยัดเงินที่สุด แต่ถูกออกแบบมาให้คุณใช้งบให้หมดง่ายที่สุด"
                                    </p>
                                    <p className='text-slate-400  text-lg'>
                                        หากใช้ค่า Default ตามที่ระบบแนะนำ... คุณกำลังปล่อยให้เงินรั่วไหลโดยไม่จำเป็น
                                    </p>
                                </div>
                            </div>

                            {/* Subtle Footer */}
                            <div className="pt-10 flex justify-center">
                                <div className="flex items-center gap-4 text-slate-500">
                                    <div className="w-12 h-[1px] bg-slate-800"></div>
                                    <p className="text-sm tracking-widest uppercase">Stop losing profit</p>
                                    <div className="w-12 h-[1px] bg-slate-800"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Why Us Section - Professional Insight */}
                <section className='py-24 relative z-10'>
                    <div className='container-x'>
                        <div className='text-center mb-16'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className='text-3xl md:text-5xl font-bold mb-6'
                            >
                                ทำไมธุรกิจถึงเลือกให้
                                <span className="text-transparent bg-clip-text bg-gradient-to-r px-2 from-blue-400 via-red-400 to-yellow-400 ">
                                    "อดีตคนใน"
                                </span>
                                ดูแลแอดให้?
                            </motion.h2>

                        </div>

                        <div className='grid md:grid-cols-3 gap-8'>
                            {/* Feature 1 */}
                            <div

                                className='glass-card p-8 border-white/5 hover:border-blue-500/30 transition-all duration-300'
                            >
                                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <BsStars className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-white'>ปิดก๊อกเงินรั่ว อุดรอยรั่วทันที</h3>
                                <p className='text-slate-400 leading-relaxed  text-lg'>
                                    ผมไม่สนยอด Impression หรือตัวเลขสวยๆ ที่หลอกตา ผมสนแค่ว่า <span className="text-white font-semibold">"คีย์เวิร์ดไหนทำเงิน"</span> และ <span className="text-red-400 font-semibold">"คีย์เวิร์ดไหนกินเงินฟรี"</span> ผมจะเข้าไปตัดส่วนที่ขาดทุนทิ้งทันที และเทงบทั้งหมดไปที่ตัวที่สร้างกำไรให้คุณ
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className='glass-card p-8 border-white/5 hover:border-blue-500/30 transition-all duration-300'
                            >
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <TrendingUp className="w-8 h-8 text-blue-500" />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-white'>จ่ายค่าคลิกถูกกว่า แต่แย่งลูกค้าคู่แข่งได้</h3>
                                <p className='text-slate-400 leading-relaxed  text-lg'>
                                    การประมูลไม่ได้วัดกันที่เงินหนาเพียงอย่างเดียว ด้วยเทคนิคการดัน <span className="text-blue-400 font-semibold">Quality Score</span> แบบวงใน จะทำให้แอดของคุณโชว์ในตำแหน่งที่สูงกว่าคู่แข่งได้... โดยที่คุณอาจจะ <span className="text-white font-semibold">จ่ายค่าคลิกน้อยกว่าพวกเขา</span> ด้วยซ้ำ
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className='glass-card p-8 border-white/5 hover:border-blue-500/30 transition-all duration-300'
                            >
                                <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                                    <MousePointerClick className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className='text-2xl font-bold mb-4 text-white'>เปลี่ยน "คนแปลกหน้า" เป็น "ลูกค้าพร้อมโอน"</h3>
                                <p className='text-slate-400 leading-relaxed  text-lg'>
                                    เราจะไม่ยิงแอดหว่านแหให้เปลืองงบ แต่เราจะดักจับคนที่มี <span className="text-yellow-400 font-semibold">Search Intent</span> (ความต้องการซื้อระดับสูงสุด) ให้เขาเจอบริการของคุณเป็นคลิกแรก และตัดสินใจซื้อเป็นคลิกสุดท้าย
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Scope Section */}
                <section className='py-24 relative z-10 bg-white/5'>
                    <div className='container-x'>
                        <div className='max-w-4xl mx-auto text-center mb-16'>
                            <h2 className='text-3xl md:text-5xl font-bold mb-6 italic'>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">
                                    Service Scope
                                </span>
                                <br />บริการของผมครอบคลุมอะไรบ้าง?
                            </h2>
                            <p className='text-xl text-slate-400'>บริการแบบ One-Stop ที่ผมจะลุยให้คุณ:</p>
                        </div>

                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                            {[
                                {
                                    icon: <Search className="w-8 h-8 text-blue-400" />,
                                    title: "Google Search Ads",
                                    desc: "ดักลูกค้าที่พร้อมจ่าย ด้วยคีย์เวิร์ดทำเงินที่แม่นยำที่สุด"
                                },
                                {
                                    icon: <TrendingUp className="w-8 h-8 text-red-400" />,
                                    title: "Performance Max (PMax)",
                                    desc: "ใช้ AI ขั้นสุดยอด ดันโฆษณาไปเจอลูกค้าในทุกแพลตฟอร์มของ Google ในแคมเปญเดียว"
                                },
                                {
                                    icon: <Globe className="w-8 h-8 text-yellow-400" />,
                                    title: "GDN & Remarketing",
                                    desc: "ตามติดลูกค้าที่เคยเข้าเว็บคุณ ให้กลับมาซื้อซ้ำจนกว่าจะตัดสินใจ"
                                },
                                {
                                    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
                                    title: "Conversion Tracking",
                                    desc: "วางระบบหลังบ้านให้เห็น Data ชัดเจน 100% ว่า ยอดโอน มาจากแอดตัวไหน"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}

                                    className="p-8 rounded-[2rem] bg-black border border-white/10 flex flex-col items-center text-center"
                                >
                                    <div className="mb-6">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-slate-400  text-lg leading-relaxed ">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Special Offer & Final CTA */}
                <section className='py-24 relative z-10 overflow-hidden'>
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className='container-x max-w-5xl relative z-10'>
                        <div className='glass-card p-10 md:p-20 border-blue-500/30 text-center relative overflow-hidden'>


                            <h2 className='text-3xl md:text-5xl font-bold mb-8'>
                                ข้อเสนอพิเศษ... <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">สำหรับคนที่ไม่อยากเผาเงินทิ้งอีกต่อไป</span>
                            </h2>

                            <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-300 mb-12 text-left md:text-center">
                                <p>
                                    ในฐานะคนที่ดูหลังบ้านมานับพันธุรกิจ ผมเข้าใจดีครับว่าคุณเหนื่อยกับการวัดดวง ถ้ายิงแอดอยู่แล้วแต่ผลลัพธ์พัง หรือเป็นมือใหม่ที่อยากเริ่มแต่กลัวเจ็บหนัก... ให้ผมช่วยดูให้ก่อนครับ
                                </p>

                                <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-3xl">
                                    <p className='text-white font-bold text-xl md:text-2xl mb-4 text-center'>
                                        ทักไลน์วันนี้ รับสิทธิ์ "ตรวจสุขภาพบัญชีโฆษณา" (Account Audit) เจาะลึกแบบชี้จุดตาย... ฟรี!
                                    </p>
                                    <p className="text-center text-blue-300">
                                        (ปกติบริการนี้มีมูลค่า 5,000 บาท - <span className="text-red-400 font-bold underline">แต่ผมรับจำกัดเพียง 5 คิว/สัปดาห์ เท่านั้น</span> เพื่อให้ผมสามารถวิเคราะห์และดูแลแต่ละเคสได้อย่างเต็มที่)
                                    </p>
                                </div>

                                <p className="text-center italic">
                                    ทักมาพูดคุย ปรึกษาปัญหาแอดกับผมก่อนได้ครับ ไม่จ้างไม่เป็นไร ผมยินดีให้คำแนะนำ แค่อยากชี้จุดรั่วไหลให้ คุณจะได้ไม่เสียเงินฟรีๆ ให้กับระบบอีกต่อไป
                                </p>
                            </div>

                            <motion.a
                                href="https://line.me/R/ti/p/@rundee"
                                target="_blank"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-8 md:px-12 py-6 rounded-full text-xl md:text-2xl font-black shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all'
                            >
                                <MessageSquare className="w-8 h-8" />
                                คลิกที่นี่ ทัก LINE ปรึกษาฟรี!
                            </motion.a>

                            <p className="mt-6 text-slate-500 flex items-center justify-center gap-2">
                                <CheckCircle className="w-4 h-4" /> นัดคิวตรวจบัญชีโฆษณาได้ทันที
                            </p>
                        </div>
                    </div>
                </section>


             <ConsultationForm />

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
        </>
    )
}