// app/routes/services/seo-training-service.tsx
import Layout from '~/components/Layout'
import type { MetaFunction } from '@remix-run/node'

import GoogleAdsCourseTimeline from '~/components/Course'
import CourseTargetAudience from '~/components/TargetAudiuce'
import CoursePricing from '~/components/Pricing'

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
  return (
    <Layout>
      <section
        className=' w-full h-screen max-h-[32rem] p-5 md:p-24 relative overflow-hidden
         bg-blue-800 bg-cover bg-no-repeat bg-center *:
         bg-[url("/background(2).jpg")]'
      >
        {/* Text Content */}
        <div className='h-full max-w-7xl md:px-20 mx-auto md:m-0 m-auto py-5 flex flex-col  justify-center gap-5 relative z-10'>
          <div className=' text-white/80'>เพิ่มยอดขาย ขยายธุรกิจให้ปัง!</div>
          <h1 className='md:text-5xl text-4xl text-white font-bold'>
            RundeeAds <br />
            คอร์สอบรม Google Ads แบบมืออาชีพ
          </h1>

          <h2 className='text-white mt-4'>
            เรียน Google Ads กับอดีตคนใน Google ตัวจริง!
            เปลี่ยนงบโฆษณาให้เป็นกำไร ด้วยกลยุทธ์ที่ใช้ได้ผลจริง <br />
            สอนโดยอดีต Account Manager จาก Google ที่ดูแลบัญชีมาแล้วกว่า 1,000
            ธุรกิจ
          </h2>
        </div>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/80'></div>
      </section>

      <section className='min-h-[80vh] mt-10'>
        <div className=' container-x  mx-auto py-10 flex items-center justify-between md:flex-row flex-col'>
          <div className=''>
            <h2 className='text-4xl font-bold text-[--secondary]'>เคยไหม?</h2>
            <ul className='mt-5 space-y-2'>
              <li className='rounded-xl bg-white px-4 py-4 shadow border border-black/10'>
                ลงเงินกับ Google Ads ไปเท่าไหร่ก็ไม่เห็นผลลัพธ์
              </li>
              <li className='rounded-xl bg-white px-4 py-4 shadow border border-black/10'>
                รู้สึกเหมือนเอาเงินไปทิ้ง งบโฆษณาบานปลาย ควบคุมไม่ได้
              </li>
              <li className='rounded-xl bg-white px-4 py-4 shadow border border-black/10'>
                พยายามทำเองแล้ว แต่เจอฟีเจอร์เยอะแยะไปหมดจนงง
                ไม่รู้จะเริ่มตรงไหน
              </li>
              <li className='rounded-xl bg-white px-4 py-4 shadow border border-black/10'>
                อยากจ้างเอเจนซี่ แต่ก็อยากเข้าใจภาพรวมและคุยกับเขารู้เรื่อง
              </li>
              <li className='rounded-xl bg-white px-4 py-4 shadow border border-black/10'>
                เห็นคู่แข่งอยู่อันดับ 1 ตลอด แต่ทำยังไงก็แซงไม่ได้
              </li>
            </ul>
            <div className='max-w-[500px] mt-5'>
              <span className='font-bold'>
                หยุดเสียเงินและเวลาไปกับการลองผิดลองถูก!
              </span>{' '}
              ผมจะสอนคุณให้ใช้ Google Ads อย่างมืออาชีพ เข้าใจทุกซอกทุกมุม
              และสร้างแคมเปญที่ทำกำไรให้ธุรกิจของคุณได้จริง
            </div>
          </div>

          <div className='mt-10 relative '>
            <img
              src='/bussiness.jpg'
              className=' md:max-w-[420px] w-full'
              alt='search vector'
            />
            {/* <div className="bg-gradient-to-r to-blue-300 from-blue-950 
            rounded-b-[100px] rounded-l-[200px]
            w-[300px] h-[100px] rounded-t-[300px] "></div>
           
            <div className="bg-gradient-to-r to-blue-300 from-blue-950 
            rounded-b-[100px] rounded-r-[200px] mt-2
            w-[300px] h-[100px] rounded-t-[300px] "></div> */}
          </div>
        </div>
      </section>

      {/* <section className='relative w-full flex overflow-hidden'>
        <div className='bg-[--secondary] h-[150px] rotate-12 w-[2000px] translate-y-[130px] -translate-x-10 mt-10'></div>
        <div className='bg-[--secondary] h-[150px] -rotate-12 w-[2000px] translate-y-[130px] translate-x-10 mt-10'></div>
      </section> */}

      <section className='min-h-[80vh] bg-[--secondary] text-white relative z-10'>
        <div className='container-x mx-auto py-10 flex items-center justify-between md:flex-row-reverse flex-col'>
          <div className='md:basis-1/2'>
            <h2 className='text-4xl font-bold text-[--tertiary]'>
              ทำไมต้องเรียนคอร์สนี้กับเรา??
            </h2>
            <div className='text-lg'>ประสบการณ์ที่หาจากตำราเล่มไหนไม่ได้</div>
            <div className='mt-5'>
              ผมไม่ใช่แค่คนที่ใช้ Google Ads เป็น แต่ผมคือ{' '}
              <b>อดีต Account Manager ของ Google Ads</b> ที่เคยทำงานอยู่กับ
              Google โดยตรง
              หน้าที่ของผมคือการดูแลและให้คำปรึกษาเจ้าของธุรกิจและเอเจนซี่ชั้นนำ
              ให้พวกเขาสร้างแคมเปญที่ประสบความสำเร็จ
            </div>

            <div className='mt-5 space-y-5'>
              <div className='bg-[--tertiary]  p-4 rounded-tr-xl rounded-l-2xl'>
                <b>ประสบการณ์ดูแลกว่า 1,000 บัญชี:</b>{' '}
                ผมเห็นมาแล้วทุกรูปแบบธุรกิจ ทุกปัญหา
                ทุกกลยุทธ์ที่เวิร์คและไม่เวิร์ค
                ทำให้ผมรู้ว่าธุรกิจแบบคุณต้องใช้กลยุทธ์แบบไหนถึงจะเห็นผลเร็วที่สุด
              </div>
              <div className='bg-[--tertiary]  p-4 rounded-tr-xl rounded-l-2xl'>
                <b>รู้ลึกจาก &quot;คนใน&quot;:</b>
                คุณจะได้เรียนรู้เทคนิคและเคล็ดลับมากมายที่ไม่มีบอกในคู่มือทั่วไป
                เป็นทริกที่ผมใช้แนะนำลูกค้าตอนทำงานอยู่ที่ Google
              </div>
              <div className='bg-[--tertiary]  p-4 rounded-tr-xl rounded-l-2xl'>
                <b>สอนด้วยภาษาคน ไม่ใช่ศัพท์เทคนิค: </b>ผมจะย่อยเรื่องยากๆ
                ให้คุณเข้าใจง่าย เอาไปปรับใช้ได้ทันที
                ไม่ต้องปวดหัวกับคำศัพท์การตลาดที่ซับซ้อน
              </div>
            </div>
          </div>

          <div className='mt-10 relative'>
            <div
              className='md:block hidden bg-gradient-to-r to-blue-300 from-blue-950 
        rounded-b-[100px] rounded-l-[200px]
        w-[300px] h-[100px] rounded-t-[300px]'
            ></div>

            <div
              className='md:block hidden bg-gradient-to-r to-blue-300 from-blue-950 
        rounded-b-[100px] rounded-r-[200px] mt-2
        w-[300px] h-[100px] rounded-t-[300px]'
            ></div>
          </div>
        </div>
      </section>
{/* 
      <section className='relative w-full flex overflow-hidden rotate-180'>
        <div className='bg-[--secondary] h-[150px] px-[100px] rotate-12 w-[2000px] translate-y-[130px] -translate-x-10 mt-10'></div>
        <div className='bg-[--secondary] h-[150px] px-[100px] -rotate-12 w-[2000px] translate-y-[130px] translate-x-10 mt-10'></div>
      </section> */}

      <section className='min-h-[80vh] relative z-10'>
        <div className='container-x mx-auto py-10 text-center'>
          <h2 className='text-4xl font-bold text-[--secondary] mb-1'>
            สิ่งที่คุณจะได้เรียนรู้ในคอร์สนี้
          </h2>
          <div className='text-2xl'>(ครบทุกฟีเจอร์ตั้งแต่เริ่มต้น)</div>

          <div className='mt-5 text-black/60 text-lg'>
            เราจะเริ่มสอนคุณตั้งแต่ศูนย์ ไปจนถึงขั้นแอดวานซ์แบบจับมือทำ
            คุณจะเข้าใจและทำเองได้ทั้งหมด
          </div>
        </div>

        <section className='md:py-20 py-10  overflow-hidden relative text-white min-h-[500px]'>
          <div className='container-x'>
            <GoogleAdsCourseTimeline />
          </div>
        </section>

        <section className='md:py-20 py-10 bg-blue-950 overflow-hidden relative text-white min-h-[500px]'>
          <div className='container-x'>
            <CourseTargetAudience />
          </div>
        </section>
        <section className='md:py-20 py-10  overflow-hidden relative text-white min-h-[500px]'>
          <div className='container-x'>
            <CoursePricing />
          </div>
        </section>
      </section>
    </Layout>
  )
}
