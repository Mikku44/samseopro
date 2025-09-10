import Layout from '~/components/Layout'
import { motion } from 'framer-motion'
import { MetaFunction } from '@remix-run/node'
import {
  BookOpen,
  Package,
  Palette,
  Search,
  Shield,
  Smartphone,
  Zap
} from 'lucide-react'

export const meta: MetaFunction = () => {
  return [
    { title: 'อบรม SEO แบบมืออาชีพ - RundeeAds | รับออกแบบเว็บไซต์' },
    {
      name: 'description',
      content:
        'คอร์สอบรม SEO จากผู้เชี่ยวชาญ เรียนรู้การทำ SEO อย่างถูกต้อง เข้าใจกลยุทธ์การตลาดออนไลน์ ปฏิบัติได้จริง พร้อมใบประกาศนียบัตร'
    },
    {
      name: 'keywords',
      content:
        'SEO Training, อบรม SEO, คอร์ส SEO, SEO Workshop, สอน SEO, รับออกแบบเว็บไซต์, Digital Marketing Training'
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
      content: 'https://www.rundeeads.com/services/web-maker'
    },
    { property: 'og:site_name', content: 'RundeeAds' },
    { property: 'og:locale', content: 'th_TH' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'RundeeAds' },
    {
      rel: 'canonical',
      href: 'https://www.rundeeads.com/services/web-maker'
    }
  ]
}

const features = [
  {
    icon: <Palette className='w-8 h-8 text-green-600' />,
    title: 'การออกแบบที่ตอบโจทย์ธุรกิจ',
    subtitle: '(Professional & UI/UX Design)',
    description:
      'เราไม่ได้ใช้ Template สำเร็จรูป แต่จะออกแบบดีไซน์เฉพาะสำหรับแบรนด์ของคุณ เพื่อสร้างความน่าเชื่อถือและแตกต่าง โดยเน้นการออกแบบให้ลูกค้าใช้งานง่าย (User Experience) เพื่อนำทางพวกเขาไปสู่การตัดสินใจซื้อได้ง่ายที่สุด'
  },
  {
    icon: <Smartphone className='w-8 h-8 text-green-600' />,
    title: 'รองรับทุกการแสดงผล',
    subtitle: '(Mobile Responsive Design)',
    description:
      'เว็บไซต์ของคุณจะสวยงามและใช้งานได้อย่างสมบูรณ์แบบในทุกอุปกรณ์ ไม่ว่าจะเป็นคอมพิวเตอร์ แท็บเล็ต หรือโดยเฉพาะบน "มือถือ" ที่เป็นช่องทางหลักของลูกค้าในปัจจุบัน'
  },
  {
    icon: <Search className='w-8 h-8 text-green-600' />,
    title: 'โครงสร้างที่เป็นมิตรต่อ Google',
    subtitle: '(SEO-Friendly Structure)',
    description:
      'เราวางโครงสร้างเว็บไซต์ตามหลักการ SEO พื้นฐานที่สำคัญ เพื่อเป็นรากฐานที่ดีให้เว็บไซต์ของคุณมีโอกาสติดอันดับบน Google ในระยะยาว'
  },
  {
    icon: <Zap className='w-8 h-8 text-green-600' />,
    title: 'โหลดเร็ว ไม่ให้ลูกค้ารอนาน',
    subtitle: '(Speed Optimization)',
    description:
      'เพราะทุกวินาทีมีค่า เราจะปรับแต่งให้เว็บไซต์ของคุณโหลดได้รวดเร็วที่สุด เพื่อมอบประสบการณ์ที่ดีและลดโอกาสการเสียลูกค้าไป'
  },
  {
    icon: <Package className='w-8 h-8 text-green-600' />,
    title: 'ฟังก์ชันการใช้งานที่จำเป็นครบครัน',
    subtitle: '(Essential Features)',
    description:
      'ไม่ว่าจะเป็นระบบตะกร้าสินค้า (E-commerce), การเชื่อมต่อระบบชำระเงิน, ฟอร์มติดต่อ, แผนที่, ปุ่มแชทผ่าน LINE/Messenger ไปจนถึงการเชื่อมต่อ Social Media ต่างๆ'
  },
  {
    icon: <Shield className='w-8 h-8 text-green-600' />,
    title: 'ระบบความปลอดภัยพื้นฐาน',
    subtitle: '(Basic Security - SSL)',
    description:
      'ติดตั้ง SSL (HTTPS) เพื่อสร้างความปลอดภัยและความมั่นใจให้กับลูกค้าในการกรอกข้อมูลและทำธุรกรรมบนเว็บไซต์ของคุณ'
  }
]

const customerList = [
  {
    src: '/customers/supeerose.svg',
    label: 'supee rose - สุพีย์โรส บริการจัดสวนดอกไม้'
  },
  {
    src: '/customers/tjbatt.jpg',
    label: 'TJ Batt - ตั้งใจขายแบต บริการเปลี่ยนแบตนอกพื้นที่เขตกรุงเทพ'
  },
  {
    src: '/customers/dryergroup.png',
    label: 'Dryer Group - The huminity Expert'
  }
]

export default function WebMaker () {
  return (
    <Layout>
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
            หากคุณต้องการเพิ่มยอดขาย
          </motion.div>

          <motion.h1
            className='md:text-5xl text-4xl text-white font-bold'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            RundeeAds <br />
            รับออกแบบเว็บไซต์คุณภาพ
          </motion.h1>

          <motion.h2
            className='text-white mt-4'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            เปลี่ยนเว็บไซต์ให้เป็น &quot;เครื่องมือทำเงิน&quot;
            ที่ทำงานหนักที่สุดของคุณ
            <br />
            คุณเคยรู้สึกไหมครับว่าเว็บไซต์ที่คุณมีอยู่...
            มันไม่เคยทำงานให้คุณเลย?
          </motion.h2>
        </div>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/80'></div>
      </motion.section>
      <section className='mt-10'>
        {/* <div className=''>ได้รับความไว้วางใจจาก</div>
        <div className='flex gap-3 py-4 '>
          {customerList.map(item => (
            <img
              key={item.label}
              src={item.src}
              className='size-[100px]  invert-1'
              alt={item.label}
            />
          ))}
        </div> */}

        <section className='container-x mx-auto py-16'>
          {/* Intro */}
          <div className='md:max-w-[600px] mx-auto text-center space-y-6'>
            <p className='text-lg text-gray-700 leading-relaxed'>
              เว็บไซต์ที่ดูดีแต่ไม่สร้างยอดขาย อาจกลายเป็นเพียง{' '}
              <span className='font-semibold'>“ค่าใช้จ่าย”</span>
              แทนที่จะเป็น <span className='font-semibold'>“สินทรัพย์”</span>
              ที่ช่วยขับเคลื่อนธุรกิจ
            </p>

            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              ถึงเวลาเปลี่ยนเว็บไซต์ให้กลายเป็นเครื่องมือการตลาดที่แท้จริง
            </h2>
          </div>

          {/* Highlight Quote */}
          <div className='text-center py-12'>
            <p
              className='text-2xl md:text-3xl font-semibold 
      bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent'
            >
              “ธุรกิจจำนวนมากลงทุนโฆษณามหาศาล <br />
              แต่กลับสูญเสียลูกค้าด้วยเว็บไซต์ที่ไม่ตอบโจทย์”
            </p>
          </div>

          {/* Explanation */}
          <div className='md:max-w-[600px] mx-auto text-center text-gray-700 leading-relaxed space-y-4'>
            <p>
              เว็บไซต์ที่โหลดช้า ใช้งานบนมือถือไม่สะดวก หรือมีข้อมูลที่สับสน
              ล้วนทำให้ลูกค้าปิดหนีในทันที
            </p>
            <p>
              เราจึงมุ่งพัฒนา{' '}
              <span className='font-semibold'>
                เว็บไซต์ที่พร้อมสร้างโอกาสทางธุรกิจ
              </span>
              โดยใช้ประสบการณ์จากการทำงานร่วมกับธุรกิจกว่า 300 แห่ง
            </p>
          </div>
        </section>

        <section className='py-16 bg-[url("/bg.avif")]  text-white/80'>
          <div className='container-x mx-auto text-center'>
            {/* Section Heading */}
            <h2 className='text-3xl md:text-4xl font-bold mb-10'>
              ส่วนหนึ่งจากลูกค้าของเรา
            </h2>

            {/* Customer Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
              {customerList.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 
                  p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow'
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className='h-16 object-contain mb-4'
                  />
                  <p className='text-sm text-center'>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-gray-50 py-16 px-4'>
          <div className='max-w-6xl mx-auto'>
            {/* Header */}
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-light text-gray-800 mb-6'>
                เราทำอะไรบ้าง{' '}
                <div className='text-gray-500 text-4xl'>WHAT WE DO</div>
              </h2>
              <div className='max-w-3xl mx-auto'>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  ผมไม่ได้สร้างแค่{' '}
                  <span className='font-semibold'>&quot;เว็บสวยๆ&quot;</span>{' '}
                  แต่ผมสร้าง
                  <span className='font-semibold text-blue-600'>
                    {' '}
                    &quot;ระบบการขายออนไลน์&quot;
                  </span>{' '}
                  ที่สมบูรณ์แบบให้คุณ ซึ่งประกอบไปด้วย:
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300'
                >
                  {/* Icon with background */}
                  <div className='w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6'>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className='text-lg font-bold text-gray-800 mb-2'>
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className='text-sm font-medium text-blue-600 mb-4'>
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className='text-gray-600 leading-relaxed text-sm'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className=' w-full h-screen max-h-[600px] p-5 md:p-24 relative overflow-hidden
         bg-blue-800 bg-cover bg-no-repeat bg-center *:
         bg-[url("/bg.avif")] text-white flex items-center justify-center flex-col gap-5
         text-xl text-center'
        >
          <div className='max-w-[500px] mx-auto'>
            เป้าหมายสูงสุดของผมคือการสร้างเว็บไซต์ที่จะกลายเป็น
            &quot;พนักงานขายที่เก่งที่สุด&quot; ของคุณ ทำงานตลอด 24 ชั่วโมง
            และเป็นศูนย์กลางการตลาดดิจิทัลที่แข็งแกร่ง
            เพื่อให้คุณโปรโมตธุรกิจได้อย่างมั่นใจ
          </div>

          <div className=''>
            หากคุณพร้อมที่จะเปลี่ยนเว็บไซต์ของคุณให้เป็นเครื่องมือสร้างยอดขาย...
            มาคุยกันครับ
          </div>

          <a
            href='tel:0954965989'
            className='inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-semibold rounded-lg transition-colors'
          >
            <BookOpen className='w-5 h-5 mr-2' />
            โทรสอบถาม 095-496-5989
          </a>
        </section>
      </section>
    </Layout>
  )
}
