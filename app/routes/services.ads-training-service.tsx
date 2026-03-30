// app/routes/services/seo-training-service.tsx
import Layout from '~/components/Layout'
import type { MetaFunction } from '@remix-run/node'
import { motion } from 'framer-motion'
import GoogleAdsCourseTimeline from '~/components/Course'
import CourseTargetAudience from '~/components/TargetAudiuce'
import CoursePricing from '~/components/Pricing'
import { FaCircleCheck } from 'react-icons/fa6'

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

export default function SEOTrainingService() {
  return (
    <Layout>
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className='w-full min-h-[70vh] flex items-center relative overflow-hidden pt-32 pb-20'>
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
              <span className="text-xs font-medium text-blue-200/80 tracking-wider uppercase">เรียนกับอดีต Account Manager จาก Google</span>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-8'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              RundeeAds <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                คอร์สอบรม Google Ads แบบมืออาชีพ
              </span>
            </motion.h1>

            <motion.p
              className='text-xl md:text-2xl text-slate-300/90 leading-relaxed max-w-2xl mb-12'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              เรียน Google Ads กับอดีตคนใน Google ตัวจริง! เปลี่ยนงบโฆษณาให้เป็นกำไร ด้วยกลยุทธ์ที่ใช้ได้ผลจริง พร้อมทริกที่ไม่มีบอกในคู่มือทั่วไป
            </motion.p>

          
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none"></div>
      </section>

      <section className="mt-10">
        <div className="container-x mx-auto py-16 flex items-center justify-between md:flex-row flex-col-reverse gap-10">

          {/* Text Content */}
          <div className="md:basis-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              เคยไหม?
            </h2>

            <ul className="mt-6 space-y-4">
              {[
                'ลงเงินกับ Google Ads ไปเท่าไหร่ก็ไม่เห็นผลลัพธ์',
                'รู้สึกเหมือนเอาเงินไปทิ้ง งบโฆษณาบานปลาย ควบคุมไม่ได้',
                'พยายามทำเองแล้ว แต่เจอฟีเจอร์เยอะแยะไปหมดจนงง ไม่รู้จะเริ่มตรงไหน',
                'อยากจ้างเอเจนซี่ แต่ก็อยากเข้าใจภาพรวมและคุยกับเขารู้เรื่อง',
                'เห็นคู่แข่งอยู่อันดับ 1 ตลอด แต่ทำยังไงก็แซงไม่ได้'
              ].map((text, i) => (
                <li
                  key={i}
                  className="
              flex gap-3 items-start rounded-xl p-4
              bg-white/10 backdrop-blur-lg
              border border-white/20
              shadow-lg shadow-black/10
              hover:bg-white/20 transition
            "
                >
                  <FaCircleCheck className="text-blue-500 mt-0.5 shrink-0 text-lg" />
                  <span className="text-sm md:text-base leading-relaxed text-white/90">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="max-w-[500px] mt-6 leading-relaxed text-white/80">
              <span className="font-semibold text-white">
                หยุดเสียเงินและเวลาไปกับการลองผิดลองถูก!
              </span>{' '}
              ผมจะสอนคุณให้ใช้ Google Ads อย่างมืออาชีพ เข้าใจทุกซอกทุกมุม
              และสร้างแคมเปญที่ทำกำไรให้ธุรกิจของคุณได้จริง
            </div>
          </div>

          {/* Image */}
          <div className="relative md:basis-1/2 flex justify-center">
            <div className="relative">

              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[--secondary]/30 to-[--tertiary]/30 blur-2xl opacity-60 rounded-2xl" />

              <img
                src="/dashboard.webp"
                alt="Google Ads dashboard preview"
                className="
            relative z-10 w-full max-w-[400px] md:max-w-[500px]
            rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-xl
          "
              />

            </div>
          </div>

        </div>
      </section>

      {/* <section className='relative w-full flex overflow-hidden'>
        <div className='bg-[--secondary] h-[150px] rotate-12 w-[2000px] translate-y-[130px] -translate-x-10 mt-10'></div>
        <div className='bg-[--secondary] h-[150px] -rotate-12 w-[2000px] translate-y-[130px] translate-x-10 mt-10'></div>
      </section> */}

      <section className=' overflow-hidden bg-[url("/bg.avif")] bg-cover bg-center text-white relative z-10'>
        <div className='container-x mx-auto py-16 flex items-center justify-between md:flex-row-reverse flex-col-reverse gap-10'>
          {/* image */}
          <div className='relative space-y-3'>
            <div
              className='p-2 rounded-full size-[80px] flex
            items-center justify-center
            border border-white/20 bg-white/5 backdrop-blur-sm text-white/80'
            >
              <img width={200} src='/google.png' alt='app google ads' />
            </div>
            <div
              className='p-2 rounded-full size-[300px]  flex
            items-center justify-center
            border border-white/20 bg-white/5 backdrop-blur-sm text-white/80'
            >
              <img width={300} src='/googleads.png' alt='app google ads' />
            </div>
            <div
              className='p-2 rounded-full size-[120px] flex
            items-center justify-center
            border border-white/20 bg-white/5 backdrop-blur-sm text-white/80'
            >
              <img width={200} src='/google.webp' alt='app google ads' />
            </div>
            <div
              className='p-2 rounded-full size-[60px] flex
            items-center justify-center absolute right-0 top-0
            border border-white/20 bg-white/5 backdrop-blur-sm text-white/80'
            >
              <img width={200} src='/adse.svg' alt='app google ads' />
            </div>
            <div
              className='p-2 rounded-full size-[60px] flex
            items-center justify-center absolute right-0 bottom-0
            border border-white/20 bg-white/5 backdrop-blur-sm text-white/80'
            >
              <img width={200} src='/adse.svg' alt='app google ads' />
            </div>
          </div>
          {/* Content */}
          <div className='md:basis-1/2 space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold text-white'>
              ทำไมต้องเรียนคอร์สนี้กับเรา?
            </h2>
            <p className='text-lg text-white/80'>
              ประสบการณ์ที่หาจากตำราเล่มไหนไม่ได้
            </p>
            <p className='leading-relaxed text-white/90'>
              ผมไม่ใช่แค่คนที่ใช้ Google Ads เป็น แต่ผมคือ{' '}
              <b>อดีต Account Manager ของ Google Ads</b> ที่เคยทำงานกับ Google
              โดยตรง
              หน้าที่ของผมคือการดูแลและให้คำปรึกษาเจ้าของธุรกิจและเอเจนซี่ชั้นนำ
              เพื่อสร้างแคมเปญที่ประสบความสำเร็จ
            </p>

            {/* Key points */}
            <div className='space-y-6'>
              <div className='p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm'>
                <b className='block mb-1'>ประสบการณ์ดูแลกว่า 1,000 บัญชี</b>
                <p className='text-white/80 text-base'>
                  ผมเห็นมาแล้วทุกรูปแบบธุรกิจ ทุกปัญหา และทุกกลยุทธ์
                  ทำให้รู้ว่าธุรกิจแบบคุณต้องใช้กลยุทธ์แบบไหนถึงจะเห็นผลเร็วที่สุด
                </p>
              </div>
              <div className='p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm'>
                <b className='block mb-1'>รู้ลึกจาก &quot;คนใน&quot;</b>
                <p className='text-white/80 text-base'>
                  คุณจะได้เรียนรู้เทคนิคและเคล็ดลับมากมายที่ไม่มีบอกในคู่มือทั่วไป
                  เป็นทริกที่ผมเคยใช้แนะนำลูกค้าตอนทำงานอยู่ที่ Google
                </p>
              </div>
              <div className='p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm'>
                <b className='block mb-1'>สอนด้วยภาษาคน ไม่ใช่ศัพท์เทคนิค</b>
                <p className='text-white/80 text-base'>
                  ผมจะย่อยเรื่องยากๆ ให้คุณเข้าใจง่ายและนำไปใช้ได้ทันที
                  ไม่ต้องปวดหัวกับคำศัพท์การตลาดที่ซับซ้อน
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[80vh] relative mt-5 z-10'>
        <div className='container-x mx-auto py-10 text-center'>
          <h2 className=' md:text-5xl py-2 text-4xl font-bold mb-1 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
            สิ่งที่คุณจะได้เรียนรู้ในคอร์สนี้
          </h2>
          <div className='md:text-5xl py-2 text-4xl '>
            ครบทุกฟีเจอร์ตั้งแต่เริ่มต้น
          </div>

          <div className='mt-5 text-white/60 text-lg'>
            เราจะเริ่มสอนคุณตั้งแต่ศูนย์ ไปจนถึงขั้นแอดวานซ์แบบจับมือทำ
            คุณจะเข้าใจและทำเองได้ทั้งหมด
          </div>
        </div>

        <section className='mb-10  overflow-hidden relative text-white min-h-[500px]'>
          <div className='container-x'>
            <GoogleAdsCourseTimeline />
          </div>
        </section>

        <section className='md:py-20 py-10  bg-[url("/bg.avif")] overflow-hidden relative text-white min-h-[500px]'>
          <div className='container-x'>
            <CourseTargetAudience />
          </div>
        </section>
        <section className='md:py-20 py-10 overflow-hidden relative text-white min-h-[500px]'>
            <CoursePricing />
          
        </section>
      </section>
    </Layout>
  )
}
