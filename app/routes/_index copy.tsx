import type { MetaFunction } from 'react-router';
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  MessageCircle,
  MessageSquare,
  Phone,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'
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

export default function Index () {
  return (
    <Layout>
      <main className='flex-1 scroll-smooth'>
        {/* Hero Section */}
        <section className='py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 items-center'>
              <div className='space-y-8'>
                <div className='inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                  ธุรกิจของคุณพร้อมทะยานสู่โลกออนไลน์หรือยัง?
                </div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight'>
                  <span className='text-blue-600'>RundeeAds</span>
                  <br />
                  <span className='text-gray-600 text-3xl md:text-4xl lg:text-5xl font-normal'>
                    Organic Growth Builder
                  </span>
                </h1>

                <p className='text-xl text-gray-600 leading-relaxed'>
                  คนเดียวที่คุ้มค่าเยอะที่สุดใน SEO โปรเจ็คต์ไทย
                </p>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <a
                    href='#learnmore'
                    className='px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors'
                  >
                    อ่านเพิ่มเติม
                  </a>
                  {/* <button className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg transition-colors">
                    ติดต่อร่วมงาน
                  </button> */}
                </div>
              </div>

              <div className='relative'>
                <div className='relative h-[400px] w-full max-w-[500px] mx-auto'>
                  <div className='absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl transform rotate-3'></div>
                  <img
                    alt='Digital Marketing Expert'
                    src='https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className='relative object-cover rounded-2xl w-full h-full shadow-2xl'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Ads Section 1 */}
        <section className='py-24 bg-white'>
          <div className='container px-4 md:px-6 max-w-6xl mx-auto'>
            {/* Header */}
            <div className='text-center mb-16'>
              <div className='inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6'>
                🚀 โซลูชันธุรกิจออนไลน์
              </div>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
                ธุรกิจของคุณพร้อมทะยานสู่โลกออนไลน์หรือยัง?
              </h1>
              <p className='text-2xl text-red-600 font-semibold'>
                ให้ Google Ads พาคุณไปถึงลูกค้าตัวจริง!
              </p>
            </div>

            {/* Problems Section */}
            <div className='mb-16'>
              <div className='bg-red-50 border border-red-100 rounded-2xl p-8'>
                <h2 className='text-2xl font-bold text-red-800 mb-8 text-center'>
                  เหนื่อยไหม? กับการที่...
                </h2>
                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='flex items-center space-x-3 text-red-700'>
                    <div className='w-3 h-3 bg-red-500 rounded-full flex-shrink-0'></div>
                    <span className='font-medium'>
                      ลูกค้าค้นหาธุรกิจของคุณไม่เจอ?
                    </span>
                  </div>
                  <div className='flex items-center space-x-3 text-red-700'>
                    <div className='w-3 h-3 bg-red-500 rounded-full flex-shrink-0'></div>
                    <span className='font-medium'>
                      ยอดขายไม่ปังเท่าที่หวัง?
                    </span>
                  </div>
                  <div className='flex items-center space-x-3 text-red-700'>
                    <div className='w-3 h-3 bg-red-500 rounded-full flex-shrink-0'></div>
                    <span className='font-medium'>
                      คู่แข่งนำหน้าไปหลายก้าว?
                    </span>
                  </div>
                </div>
                <div className='mt-8 p-6 bg-red-600 text-white rounded-xl text-center'>
                  <p className='text-xl font-semibold'>
                    ถึงเวลาแล้วที่ Google Ads
                    จะเข้ามาเป็นอาวุธลับทางธุรกิจของคุณ!
                  </p>
                </div>
              </div>
            </div>

            {/* Why Google Ads Section */}
            <div className='mb-16'>
              <h2 className='text-3xl font-bold text-center mb-12 text-gray-900'>
                ✨ ทำไมต้อง Google Ads?
              </h2>

              <div className='grid md:grid-cols-3 gap-8'>
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
                      ปรากฏโดดเด่นบนหน้าแรก Google
                      เพิ่มโอกาสให้ลูกค้าคลิกหาคุณก่อนใคร
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
                      รู้ว่าเงินทุกบาทที่จ่ายไป คุ้มค่าแค่ไหน ติดตาม ROI
                      ได้ชัดเจน
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
            </div>

            {/* Summary Section */}
            <div className='mb-16'>
              <div className='bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white p-8 text-center'>
                <p className='text-xl leading-relaxed mb-4'>
                  ในยุคที่การแข่งขันสูง การทำให้ธุรกิจของคุณ{' '}
                  <span className='font-bold underline'>
                    &quot;ถูกค้นพบ&quot;
                  </span>{' '}
                  คือกุญแจสำคัญสู่ความสำเร็จ
                </p>
                <p className='text-2xl font-bold'>Google Ads คือคำตอบ!</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className='text-center'>
              <div className='bg-white border border-gray-200 rounded-2xl shadow-xl p-8'>
                <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                  เริ่มต้นสร้างแคมเปญ Google Ads ของคุณวันนี้
                </h3>

                <p className='text-xl text-gray-600 mb-8'>
                  แล้วปลดล็อกศักยภาพธุรกิจให้เติบโตแบบก้าวกระโดด!
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                  <button className='px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors'>
                    เริ่มต้นเลย
                  </button>

                  <button className='px-8 py-4 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors'>
                    ดูข้อมูลเพิ่มเติม
                  </button>
                </div>

                <p className='text-sm text-gray-500 mt-6'>
                  🔗 ปรึกษาฟรี | ไม่มีค่าใช้จ่ายเริ่มต้น | รับประกันผลลัพธ์
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Ads Section 2 */}
        <section id='learnmore' className='py-24 bg-gray-50'>
          <div className='container px-4 md:px-6 max-w-6xl mx-auto'>
            {/* Header */}
            <div className='text-center mb-16'>
              <div className='inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6'>
                บริการ Google Ads โดยมืออาชีพ
              </div>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
                เพิ่มยอดขาย ขยายธุรกิจให้ปัง!
              </h1>
              <p className='text-2xl text-red-600 font-semibold'>
                ด้วยบริการทำ Google Ads โดยมืออาชีพ
              </p>
            </div>

            {/* Questions Section */}
            <div className='mb-16'>
              <div className='bg-white border border-gray-200 rounded-2xl p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
                  อยากให้ธุรกิจของคุณ...
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='flex items-center space-x-4 p-4 rounded-xl bg-red-50'>
                    <TrendingUp className='w-6 h-6 text-red-600 flex-shrink-0' />
                    <span className='text-gray-800 font-medium'>
                      เข้าถึงลูกค้าใหม่ได้มากขึ้น?
                    </span>
                  </div>
                  <div className='flex items-center space-x-4 p-4 rounded-xl bg-red-50'>
                    <Users className='w-6 h-6 text-red-600 flex-shrink-0' />
                    <span className='text-gray-800 font-medium'>
                      สร้างแบรนด์ให้เป็นที่รู้จักในวงกว้าง?
                    </span>
                  </div>
                  <div className='flex items-center space-x-4 p-4 rounded-xl bg-red-50'>
                    <Award className='w-6 h-6 text-red-600 flex-shrink-0' />
                    <span className='text-gray-800 font-medium'>
                      แซงหน้าคู่แข่งบนโลกออนไลน์?
                    </span>
                  </div>
                  <div className='flex items-center space-x-4 p-4 rounded-xl bg-red-50'>
                    <Clock className='w-6 h-6 text-red-600 flex-shrink-0' />
                    <span className='text-gray-800 font-medium'>
                      แต่ไม่มีเวลาศึกษา หรือทำ Google Ads เองแล้วไม่เห็นผล?
                    </span>
                  </div>
                </div>
                <div className='mt-8 p-6 rounded-xl text-center'>
                  <p className='text-3xl text-slate-800 font-semibold'>
                    ให้ทีมงานผู้เชี่ยวชาญของเราดูแล!
                  </p>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className='mb-16'>
              <h2 className='text-3xl font-bold text-center mb-12 text-gray-900'>
                บริการ Google Ads ของเราครอบคลุม:
              </h2>

              <div className='grid md:grid-cols-2 gap-8'>
                <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Users className='w-6 h-6 text-red-600' />
                    </div>
                    <div>
                      <h3 className='font-bold text-lg text-gray-900 mb-2'>
                        ✅ วิเคราะห์ธุรกิจและกลุ่มเป้าหมาย
                      </h3>
                      <p className='text-gray-600'>
                        เพื่อวางกลยุทธ์ที่ใช่ที่สุด
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <CheckCircle className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='font-bold text-lg text-gray-900 mb-2'>
                        ✅ คัดเลือก Keyword แม่นยำ
                      </h3>
                      <p className='text-gray-600'>
                        ให้โฆษณาของคุณแสดงต่อคนที่ &quot;พร้อมซื้อ&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <MessageCircle className='w-6 h-6 text-yellow-600' />
                    </div>
                    <div>
                      <h3 className='font-bold text-lg text-gray-900 mb-2'>
                        ✅ สร้างสรรค์ข้อความโฆษณาดึงดูดใจ
                      </h3>
                      <p className='text-gray-600'>
                        เพิ่ม CTR (Click-Through Rate)
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <BarChart3 className='w-6 h-6 text-red-600' />
                    </div>
                    <div>
                      <h3 className='font-bold text-lg text-gray-900 mb-2'>
                        ✅ บริหารจัดการงบประมาณอย่างคุ้มค่า
                      </h3>
                      <p className='text-gray-600'>
                        ให้ทุกบาททุกสตางค์สร้างผลลัพธ์
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <TrendingUp className='w-6 h-6 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='font-bold text-lg text-gray-900 mb-2'>
                        ✅ ติดตามผลและปรับปรุงแคมเปญต่อเนื่อง
                      </h3>
                      <p className='text-gray-600'>เพื่อประสิทธิภาพสูงสุด</p>
                    </div>
                  </div>
                </div>

                <div className='bg-white border border-gray-200 hover:shadow-lg rounded-xl p-6 transition-all duration-300'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <BarChart3 className='w-6 h-6 text-yellow-600' />
                    </div>
                    <div>
                      <h3 className='font-bold text-lg text-gray-900 mb-2'>
                        ✅ รายงานผลชัดเจน เข้าใจง่าย
                      </h3>
                      <p className='text-gray-600'>เห็นความก้าวหน้าของธุรกิจ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className='mb-12'>
              <div className='bg-white border border-gray-200 rounded-2xl shadow-xl p-8'>
                <div className='text-center mb-8'>
                  <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                    ปรึกษาฟรี! ไม่มีค่าใช้จ่าย
                  </h3>
                  <p className='text-xl text-gray-600'>
                    เพื่อประเมินโอกาสทางธุรกิจของคุณบน Google Ads
                  </p>
                </div>

                <div className='grid md:grid-cols-3 gap-6 mb-8'>
                  <div className='flex flex-col items-center p-6 bg-red-50 rounded-xl'>
                    <Phone className='w-8 h-8 text-red-600 mb-3' />
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      ติดต่อเราเลย
                    </h4>
                    <p className='text-red-600 font-bold text-lg'>0954965989</p>
                  </div>

                  <div className='flex flex-col items-center p-6 bg-blue-50 rounded-xl'>
                    <Globe className='w-8 h-8 text-blue-600 mb-3' />
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      เว็บไซต์
                    </h4>
                    <p className='text-blue-600 font-bold text-lg'>
                      www.rundeeads.com
                    </p>
                  </div>

                  <div className='flex flex-col items-center p-6 bg-yellow-50 rounded-xl'>
                    <MessageSquare className='w-8 h-8 text-yellow-600 mb-3' />
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      Line ID
                    </h4>
                    <p className='text-yellow-600 font-bold text-lg'>
                      @655rkaej
                    </p>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <a href='/contact-us'>
                    <button className='flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors'>
                      ติดต่อเราตอนนี้
                      <ArrowRight className='w-5 h-5 ml-2' />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Hashtags */}
            <div className='flex flex-wrap justify-center gap-3'>
              <span className='bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium'>
                #GoogleAds
              </span>
              <span className='bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium'>
                #การตลาดออนไลน์
              </span>
              <span className='bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium'>
                #เพิ่มยอดขาย
              </span>
              <span className='bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium'>
                #ธุรกิจออนไลน์
              </span>
              <span className='bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium'>
                #DigitalMarketing
              </span>
              <span className='bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium'>
                #rundeeads
              </span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className='container-x px-4 bg-[--secondary] py-10'>
          <div className='mb-12'>
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

        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-4xl font-bold mb-6 text-white'>
              พร้อมเริ่มเติบโตอย่างยั่งยืนกับเราหรือยัง?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
              ปรึกษาฟรี! ให้เราช่วยวิเคราะห์ธุรกิจของคุณและวางแผนกลยุทธ์ SEO
              ที่เหมาะสมที่สุด
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a href='/contact-us'>
                <button className='px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-semibold rounded-lg transition-colors'>
                  ติดต่อเรา
                </button>
              </a>
              {/* <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transition-colors">
                ดูผลงานของเรา
              </button> */}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
