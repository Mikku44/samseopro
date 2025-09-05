import { MetaFunction } from '@remix-run/react'
import {
  ArrowRight,
  BarChart3,
  Compass,
  DollarSign,
  Feather,
  FileText,
  Globe,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Wallet,
  Zap
} from 'lucide-react'
import CardBlog from '~/components/CardBlog'
import { EmblaCarousel } from '~/components/Draggable'
import Layout from '~/components/Layout'

export const meta: MetaFunction = () => {
  return [
    { title: 'Rundee Ads' },
    { name: 'description', content: 'RundeeAds - บริการ SEO แบบมืออาชีพ' },
    {
      name: 'keywords',
      content: 'SEO, การตลาดออนไลน์, คอร์ส SEO, ผู้เชี่ยวชาญ SEO'
    },
    { property: 'og:title', content: 'RundeeAds - บริการ SEO แบบมืออาชีพ' },
    {
      property: 'og:description',
      content: 'เพิ่มยอดขาย เพิ่มผู้ชม ด้วยกลยุทธ์ SEO ที่ใช้ได้จริง'
    }
  ]
}

const serviceList = [
  {
    id: 1,
    title: 'Strategic Business & Audience Analysis',
    description: 'วิเคราะห์ธุรกิจและกลุ่มเป้าหมาย เพื่อวางกลยุทธ์ที่ใช่ที่สุด',
    icon: <Compass />
  },
  {
    id: 2,
    title: 'Precise Keyword Selection',
    description:
      'คัดเลือก Keyword แม่นยำ ให้โฆษณาของคุณแสดงต่อคนที่ "พร้อมซื้อ"',
    icon: <Search />
  },
  {
    id: 3,
    title: 'Creative Ad Copywriting',
    description:
      'สร้างสรรค์ข้อความโฆษณาดึงดูดใจ เพิ่ม CTR (Click-Through Rate)',
    icon: <Feather />
  },
  {
    id: 4,
    title: 'Effective Budget Management',
    description:
      'บริหารจัดการงบประมาณอย่างคุ้มค่า ให้ทุกบาททุกสตางค์สร้างผลลัพธ์',
    icon: <Wallet />
  },
  {
    id: 5,
    title: 'Continuous Campaign Optimization',
    description: 'ติดตามผลและปรับปรุงแคมเปญต่อเนื่อง เพื่อประสิทธิภาพสูงสุด',
    icon: <RefreshCw />
  },
  {
    id: 6,
    title: 'Clear & Transparent Reporting',
    description: 'รายงานผลชัดเจน เข้าใจง่าย เห็นความก้าวหน้าของธุรกิจ',
    icon: <FileText />
  }
]
export default function Index () {
  return (
    <Layout>
      <section
        className="w-full h-screen max-h-[32rem] p-5 md:p-24 relative overflow-hidden
          bg-[url('/blue.jpg')] bg-cover bg-no-repeat bg-center"
      >
        {/* Text Content */}
        <div className='h-full max-w-7xl md:px-20 mx-auto md:m-0 m-auto py-5 flex flex-col  justify-center gap-5 relative z-10'>
          <div className='text-sm text-white/30'>
            เพิ่มยอดขาย ขยายธุรกิจให้ปัง!
          </div>
          <h1 className='md:text-5xl text-4xl text-white font-bold'>
            RundeeAds <br />
            Organic Growth Builder
          </h1>

          <h2 className='text-white mt-4'>
            ให้คำแนะนำจากผู้ให้คำปรึกษา SEO ที่ไว้ใจได้
          </h2>

          <button className='relative z-10 px-5 w-fit'>ติดต่อเรา</button>
        </div>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/80'></div>
      </section>

      <section className='md:py-20 py-10 container-x min-h-[500px] flex justify-center flex-col'>
        <h2 className='text-3xl font-bold mb-10'>
          {' '}
          บริการ Rundee Ads ของเราครอบคลุม:?
        </h2>
        <div className='flex md:flex-row flex-col justify-between gap-4'>
          {serviceList.map(item => (
            <div key={item.id} className='flex items-center flex-col gap-2'>
              <div className='rounded-md bg-blue-950 flex p-2 text-white text-2xl size-[80px] items-center justify-center'>
                {item.icon}
              </div>
              <div className='text-center'>
                <div className='font-medium'>{item.title}</div>
                <div className='text-sm text-black/50'>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='md:py-20 py-10 bg-blue-950 overflow-hidden relative text-white min-h-[500px]'>
        <div
          className=' w-[300px] h-[600px] absolute left-[50%] rotate-45 top-0
        opacity-30 bg-gradient-to-r to-blue-800 from-blue-300
        rounded-t-[100%] rounded-e-[100px]  rounded-br-[700px]'
        ></div>
        <div className='container-x'>
          <div className='text-sm text-white/30'>
            ให้เราเป็นส่วนหนึ่งที่ทำให้
          </div>
          <h2 className='text-3xl font-bold mb-10'>
            {' '}
            ธุรกิจของคุณทะยานสู่โลกออนไลน์
          </h2>

          <div className='max-w-screen mx-auto overflow-hidden rounded-xl'>
            <EmblaCarousel>
              {[1, 2, 3, 4, 5].map(item => (
                <CardBlog key={item} />
              ))}
            </EmblaCarousel>
          </div>
        </div>
      </section>

      <section className='md:py-20 py-10 container-x'>
        <h2 className='text-3xl font-bold'> ทำไมต้อง RundeeAds?</h2>

        <div className='grid md:grid-cols-3 gap-8 mt-10'>
          <div className='group'>
            <div className='bg-white border border-gray-200 hover:border-red-300 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4'>
                  <Target className='w-6 h-6 text-red-600' />
                </div>
                <h3 className='font-bold text-lg text-gray-900'>
                  ตรงกลุ่มเป้าหมาย
                </h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                แสดงโฆษณาให้คนที่ &quot;กำลังค้นหา&quot;
                สินค้าหรือบริการของคุณเห็นทันที!
              </p>
            </div>
          </div>

          <div className='group'>
            <div className='bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4'>
                  <TrendingUp className='w-6 h-6 text-blue-600' />
                </div>
                <h3 className='font-bold text-lg text-gray-900'>
                  อยู่เหนือคู่แข่ง
                </h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                ปรากฏโดดเด่นบนหน้าแรก Google เพิ่มโอกาสให้ลูกค้าคลิกหาคุณก่อนใคร
              </p>
            </div>
          </div>

          <div className='group'>
            <div className='bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4'>
                  <BarChart3 className='w-6 h-6 text-yellow-600' />
                </div>
                <h3 className='font-bold text-lg text-gray-900'>
                  วัดผลได้จริง
                </h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                รู้ว่าเงินทุกบาทที่จ่ายไป คุ้มค่าแค่ไหน ติดตาม ROI ได้ชัดเจน
              </p>
            </div>
          </div>

          <div className='group'>
            <div className='bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4'>
                  <DollarSign className='w-6 h-6 text-green-600' />
                </div>
                <h3 className='font-bold text-lg text-gray-900'>
                  ควบคุมงบประมาณง่าย
                </h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                กำหนดงบได้ตามต้องการ ไม่บานปลาย
              </p>
            </div>
          </div>

          <div className='group md:col-span-2'>
            <div className='bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4'>
                  <Zap className='w-6 h-6 text-purple-600' />
                </div>
                <h3 className='font-bold text-lg text-gray-900'>
                  เห็นผลลัพธ์ไว
                </h3>
              </div>
              <p className='text-gray-600 leading-relaxed'>
                สร้าง Traffic, Leads, และยอดขายได้รวดเร็วกว่าที่คิด
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[--secondary] py-10'>
        <div className='mb-12 container-x px-4 '>
          <div className='bg-white p-8'>
            <div className='text-center mb-8'>
              <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                ปรึกษาฟรี! ไม่มีค่าใช้จ่าย
              </h3>
              <p className='text-xl text-gray-600'>
                เพื่อประเมินโอกาสทางธุรกิจของคุณบน Google Ads
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='flex flex-col items-center p-6 bg-gray-50 rounded-xl'>
                <Phone className='w-8 h-8 text-[#121b2a] mb-3' />
                <h4 className='font-semibold text-gray-900 mb-2'>
                  ติดต่อเราเลย
                </h4>
                <p className='text-[#121b2a] font-bold text-lg'>0954965989</p>
              </div>

              <div className='flex flex-col items-center p-6 bg-gray-50 rounded-xl'>
                <Globe className='w-8 h-8 text-[#121b2a] mb-3' />
                <h4 className='font-semibold text-gray-900 mb-2'>เว็บไซต์</h4>
                <p className='text-[#121b2a] font-bold text-lg'>
                  www.rundeeads.com
                </p>
              </div>

              <div className='flex flex-col items-center p-6 bg-gray-50 rounded-xl'>
                <MessageSquare className='w-8 h-8 text-[#121b2a] mb-3' />
                <h4 className='font-semibold text-gray-900 mb-2'>Line ID</h4>
                <p className='text-[#121b2a] font-bold text-lg'>@655rkaej</p>
              </div>
            </div>

            <div className='flex justify-center'>
              <a href='/contact-us'>
                <button className='flex items-center px-8 py-4 bg-[#121b2a] hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors'>
                  ติดต่อเราตอนนี้
                  <ArrowRight className='w-5 h-5 ml-2' />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Hashtags */}
        <div className='flex flex-wrap justify-center gap-3'>
          <span className='bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium'>
            #GoogleAds
          </span>
          <span className='bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium'>
            #การตลาดออนไลน์
          </span>
          <span className='bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium'>
            #เพิ่มยอดขาย
          </span>
          <span className='bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium'>
            #ธุรกิจออนไลน์
          </span>
          <span className='bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium'>
            #DigitalMarketing
          </span>
          <span className='bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium'>
            #rundeeads
          </span>
        </div>
      </section>

      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              ทีมงานของเรา
            </h2>
            <p className='text-xl text-gray-600'>
              ผู้เชี่ยวชาญที่พร้อมช่วยให้ธุรกิจของคุณเติบโต
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-8 transition-all duration-300'>
              <div className='flex flex-col items-center gap-4 mb-6 text-center'>
                <div className='h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600'></div>
                <div>
                  <p className='font-bold text-gray-900 text-lg'>คุณสมชาย</p>
                  <p className='text-sm text-gray-500'>SEO Specialist</p>
                </div>
              </div>
              <p className='text-gray-600 leading-relaxed text-center'>
                ผู้เชี่ยวชาญด้านการวิเคราะห์คีย์เวิร์ดและการวางกลยุทธ์ SEO
                ที่ช่วยให้ธุรกิจติดอันดับ Google อย่างยั่งยืน
              </p>
            </div>

            <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-8 transition-all duration-300'>
              <div className='flex flex-col items-center gap-4 mb-6 text-center'>
                <div className='h-24 w-24 rounded-full bg-gradient-to-br from-pink-500 to-red-600'></div>
                <div>
                  <p className='font-bold text-gray-900 text-lg'>คุณสมศรี</p>
                  <p className='text-sm text-gray-500'>PPC & Ads Manager</p>
                </div>
              </div>
              <p className='text-gray-600 leading-relaxed text-center'>
                ผู้ดูแลแคมเปญโฆษณาออนไลน์ที่เชี่ยวชาญการบริหารงบประมาณและเพิ่ม
                CTR ให้เกิดผลลัพธ์สูงสุด
              </p>
            </div>

            <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-8 transition-all duration-300'>
              <div className='flex flex-col items-center gap-4 mb-6 text-center'>
                <div className='h-24 w-24 rounded-full bg-gradient-to-br from-green-500 to-blue-600'></div>
                <div>
                  <p className='font-bold text-gray-900 text-lg'>คุณสมหมาย</p>
                  <p className='text-sm text-gray-500'>
                    Digital Marketing Consultant
                  </p>
                </div>
              </div>
              <p className='text-gray-600 leading-relaxed text-center'>
                ที่ปรึกษาด้านการตลาดดิจิทัลที่สามารถวางแผนและนำเสนอโซลูชันที่ครอบคลุมสำหรับธุรกิจทุกขนาด
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
