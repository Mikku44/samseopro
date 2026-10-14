// app/routes/services/seo-training-service.tsx

import type { MetaFunction } from 'react-router';
import { motion } from 'framer-motion'
import GoogleAdsCourseTimeline from '~/components/Course'
import CourseTargetAudience from '~/components/TargetAudiuce'
import CoursePricing from '~/components/Pricing'
import { useTranslation } from 'react-i18next';
import { FaCircleCheck } from 'react-icons/fa6'

export const meta: MetaFunction = () => {
  return [
    { title: 'คอร์สอบรม Google Ads แบบมืออาชีพ - RundeeAds | Google Ads Training' },
    {
      name: 'description',
      content:
        'คอร์สอบรม Google Ads จากอดีตคนใน Google เรียนรู้กลยุทธ์การทำโฆษณาอย่างถูกต้อง เพิ่มยอดขาย และบริหารงบประมาณอย่างมีประสิทธิภาพ'
    },
    {
      name: 'keywords',
      content:
        'Google Ads Training, อบรม Google Ads, คอร์ส Google Ads, เรียน Google Ads, สอน Google Ads, Google Ads Workshop'
    },
    { property: 'og:title', content: 'คอร์สอบรม Google Ads แบบมืออาชีพ - RundeeAds' },
    {
      property: 'og:description',
      content:
        'เรียนรู้ Google Ads กับอดีต Account Manager จาก Google ตัวจริง พร้อมทริกเพิ่มยอดขาย'
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://www.rundeeads.com/services/ads-training-service'
    },
    { property: 'og:site_name', content: 'RundeeAds' },
    { property: 'og:locale', content: 'th_TH' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'RundeeAds' },
    {
      rel: 'canonical',
      href: 'https://www.rundeeads.com/services/ads-training-service'
    }
  ]
}

export default function AdsTrainingService() {
  const { t } = useTranslation();
  return (
    <>
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[var(--primary-color)]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className='w-full min-h-[70vh] flex items-center relative overflow-hidden pt-32 pb-20'>

        <img src="/gray.avif" alt="ads training service hero"
        
        className='w-full h-full object-cover absolute top-0'/>
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
              <span className="text-xs font-medium text-blue-200/80 tracking-wider uppercase">{t('adsTraining.heroBadge')}</span>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-8'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              RundeeAds <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                {t('adsTraining.heroTitleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              className='text-xl md:text-2xl text-slate-300/90 leading-relaxed max-w-2xl mb-12'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('adsTraining.heroDesc')}
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
{t('adsTraining.painPointTitle')}
            </h2>

            <ul className="mt-6 space-y-4">
              {[1, 2, 3, 4, 5].map(i => t(`adsTraining.painPoint${i}`)).map((text, i) => (
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
                {t('adsTraining.stopWasting')}
              </span>{' '}
              {t('adsTraining.taughtByMe')}
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
              {t('adsTraining.whyTitle')}
            </h2>
            <p className='text-lg text-white/80'>
              {t('adsTraining.whySubtitle')}
            </p>
            <p className='leading-relaxed text-white/90'>
              {t('adsTraining.whyDescStart')}{' '}
              <b>{t('adsTraining.whyDescBold')}</b>{' '}
              {t('adsTraining.whyDescEnd')}
            </p>

            {/* Key points */}
            <div className='space-y-6'>
              <div className='p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm'>
                <b className='block mb-1'>{t('adsTraining.whyPoint1Title')}</b>
                <p className='text-white/80 text-base'>
                  {t('adsTraining.whyPoint1Desc')}
                </p>
              </div>
              <div className='p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm'>
                <b className='block mb-1'>{t('adsTraining.whyPoint2Title')}</b>
                <p className='text-white/80 text-base'>
                  {t('adsTraining.whyPoint2Desc')}
                </p>
              </div>
              <div className='p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm'>
                <b className='block mb-1'>{t('adsTraining.whyPoint3Title')}</b>
                <p className='text-white/80 text-base'>
                  {t('adsTraining.whyPoint3Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[80vh] relative mt-5 z-10'>
        <div className='container-x mx-auto py-10 text-center'>
          <h2 className=' md:text-5xl py-2 text-4xl font-bold mb-1 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
            {t('adsTraining.learnTitle')}
          </h2>
          <div className='md:text-5xl py-2 text-4xl text-white'>
            {t('adsTraining.learnTitleEnd')}
          </div>

          <div className='mt-5 text-white/60 text-lg'>
            {t('adsTraining.learnDesc')}
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
    </>
  )
}
