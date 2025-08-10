import type { MetaFunction } from "@remix-run/node";
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
  Zap,
} from "lucide-react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Rundee Ads" },
    { name: "description", content: "RundeeAds - บริการ SEO แบบมืออาชีพ" },
    {
      name: "keywords",
      content: "SEO, การตลาดออนไลน์, คอร์ส SEO, ผู้เชี่ยวชาญ SEO",
    },
    { property: "og:title", content: "RundeeAds - บริการ SEO แบบมืออาชีพ" },
    {
      property: "og:description",
      content: "เพิ่มยอดขาย เพิ่มผู้ชม ด้วยกลยุทธ์ SEO ที่ใช้ได้จริง",
    },
  ];
};

export default function Index() {
  return (
    <Layout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block text-[var(--primary)] font-medium">
                  ธุรกิจของคุณพร้อมทะยานสู่โลกออนไลน์หรือยัง?
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <span className="bg-red-100 px-2 py-1 inline-block">
                    RundeeAds
                  </span>{" "}
                  ·<br />
                  Organic Growth Builder
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  คนเดียวที่คุ้มค่าเยอะที่สุดใน SEO โปรเจ็คต์ไทย
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-red-600 hover:bg-red-700 text-white">
                    House of SEO: คอมมูนิตี้ไซด์
                  </button>
                  <button>ติดต่อร่วมงาน</button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 lg:flex lg:justify-end">
                <div className="relative h-[350px] w-full max-w-[450px]">
                  <img
                    alt="Digital Marketing Expert"
                    src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* google ad type1*/}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-red-50 to-emerald-50">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 text-sm font-medium bg-red-100 text-red-800 rounded-full">
                🚀 โซลูชันธุรกิจออนไลน์
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                ธุรกิจของคุณพร้อมทะยานสู่โลกออนไลน์หรือยัง?
              </h1>
              <p className="text-xl md:text-2xl text-red-600 font-semibold">
                ให้ Google Ads พาคุณไปถึงลูกค้าตัวจริง!
              </p>
            </div>

            {/* Problems Section */}
            <div className="mb-12 border-red-200 bg-red-50/50">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-red-800 mb-6">
                  เหนื่อยไหม? กับการที่...
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>ลูกค้าค้นหาธุรกิจของคุณไม่เจอ?</span>
                  </div>
                  <div className="flex items-center space-x-3 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>ยอดขายไม่ปังเท่าที่หวัง?</span>
                  </div>
                  <div className="flex items-center space-x-3 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>คู่แข่งนำหน้าไปหลายก้าว?</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
                  <p className="text-red-800 font-semibold">
                    ถึงเวลาแล้วที่ Google Ads
                    จะเข้ามาเป็นอาวุธลับทางธุรกิจของคุณ!
                  </p>
                </div>
              </div>
            </div>

            {/* Why Google Ads Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                ✨ ทำไมต้อง Google Ads?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="hover:shadow-lg transition-shadow border-red-200">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 text-red-600 mr-3" />
                      <h3 className="font-bold text-lg text-gray-900">
                         ตรงกลุ่มเป้าหมาย
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      แสดงโฆษณาให้คนที่ &quot;กำลังค้นหา&quot;
                      สินค้าหรือบริการของคุณเห็นทันที!
                    </p>
                  </div>
                </div>

                <div className="hover:shadow-lg transition-shadow border-red-200">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-8 h-8 text-red-600 mr-3" />
                      <h3 className="font-bold text-lg text-gray-900">
                         อยู่เหนือคู่แข่ง
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      ปรากฏโดดเด่นบนหน้าแรก Google
                      เพิ่มโอกาสให้ลูกค้าคลิกหาคุณก่อนใคร
                    </p>
                  </div>
                </div>

                <div className="hover:shadow-lg transition-shadow border-red-200">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-8 h-8 text-red-600 mr-3" />
                      <h3 className="font-bold text-lg text-gray-900">
                        วัดผลได้จริง
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      รู้ว่าเงินทุกบาทที่จ่ายไป คุ้มค่าแค่ไหน ติดตาม ROI
                      ได้ชัดเจน
                    </p>
                  </div>
                </div>

                <div className="hover:shadow-lg transition-shadow border-red-200">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="w-8 h-8 text-red-600 mr-3" />
                      <h3 className="font-bold text-lg text-gray-900">
                         ควบคุมงบประมาณง่าย
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      กำหนดงบได้ตามต้องการ ไม่บานปลาย
                    </p>
                  </div>
                </div>

                <div className="hover:shadow-lg transition-shadow border-red-200 md:col-span-2 lg:col-span-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-8 h-8 text-red-600 mr-3" />
                      <h3 className="font-bold text-lg text-gray-900">
                         เห็นผลลัพธ์ไว
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      สร้าง Traffic, Leads, และยอดขายได้รวดเร็วกว่าที่คิด
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mb-12 bg-gradient-to-r from-red-600 to-red-600 text-white border-0">
              <div className="p-8 text-center">
                <p className="text-lg md:text-xl leading-relaxed">
                  ในยุคที่การแข่งขันสูง การทำให้ธุรกิจของคุณ{" "}
                  <span className="font-bold">&quot;ถูกค้นพบ&quot;</span>{" "}
                  คือกุญแจสำคัญสู่ความสำเร็จ
                </p>
                <p className="text-xl md:text-2xl font-bold mt-4">
                  Google Ads คือคำตอบ!
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
                <div className="flex items-center justify-center mb-4">
                  {/* <CheckCircle className="w-6 h-6 text-green-500 mr-2" /> */}
                  {/* <span className="text-lg font-semibold text-gray-900">
                    👉 อย่ารอช้า!
                  </span> */}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  เริ่มต้นสร้างแคมเปญ Google Ads ของคุณวันนี้
                </h3>

                <p className="text-lg text-gray-700 mb-8">
                  แล้วปลดล็อกศักยภาพธุรกิจให้เติบโตแบบก้าวกระโดด!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
                    เริ่มต้นเลย
                    {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
                  </button>

                  <button className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg">
                    ดูข้อมูลเพิ่มเติม
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  🔗 ปรึกษาฟรี | ไม่มีค่าใช้จ่ายเริ่มต้น | รับประกันผลลัพธ์
                </p>
              </div>
            </div>
          </div>
        </section>

{/* google ad type2 */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-red-50 to-emerald-50">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 text-sm font-medium bg-red-100 text-red-800 rounded-full">
            บริการ Google Ads โดยมืออาชีพ
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
             เพิ่มยอดขาย ขยายธุรกิจให้ปัง!
          </h1>
          <p className="text-xl md:text-2xl text-red-600 font-semibold">ด้วยบริการทำ Google Ads โดยมืออาชีพ</p>
        </div>

        {/* Questions Section */}
        <div className="mb-12 border-red-200 bg-white">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">อยากให้ธุรกิจของคุณ...</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-red-50">
                <TrendingUp className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">เข้าถึงลูกค้าใหม่ได้มากขึ้น?</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-red-50">
                <Users className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">สร้างแบรนด์ให้เป็นที่รู้จักในวงกว้าง?</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-red-50">
                <Award className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">แซงหน้าคู่แข่งบนโลกออนไลน์?</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-red-50">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">แต่ไม่มีเวลาศึกษา หรือทำ Google Ads เองแล้วไม่เห็นผล?</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-red-600 text-white rounded-lg text-center">
              <p className="text-xl font-semibold">ให้ทีมงานผู้เชี่ยวชาญของเราดูแล! </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            บริการ Google Ads ของเราครอบคลุม:
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="hover:shadow-lg transition-shadow border-red-200">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">✅ วิเคราะห์ธุรกิจและกลุ่มเป้าหมาย</h3>
                    <p className="text-gray-700">เพื่อวางกลยุทธ์ที่ใช่ที่สุด</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg transition-shadow border-red-200">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">✅ คัดเลือก Keyword แม่นยำ</h3>
                    <p className="text-gray-700">ให้โฆษณาของคุณแสดงต่อคนที่ &quote;พร้อมซื้อ&quote;</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg transition-shadow border-red-200">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">✅ สร้างสรรค์ข้อความโฆษณาดึงดูดใจ</h3>
                    <p className="text-gray-700">เพิ่ม CTR (Click-Through Rate)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg transition-shadow border-red-200">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">✅ บริหารจัดการงบประมาณอย่างคุ้มค่า</h3>
                    <p className="text-gray-700">ให้ทุกบาททุกสตางค์สร้างผลลัพธ์</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg transition-shadow border-red-200">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">✅ ติดตามผลและปรับปรุงแคมเปญต่อเนื่อง</h3>
                    <p className="text-gray-700">เพื่อประสิทธิภาพสูงสุด</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hover:shadow-lg transition-shadow border-red-200">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">✅ รายงานผลชัดเจน เข้าใจง่าย</h3>
                    <p className="text-gray-700">เห็นความก้าวหน้าของธุรกิจ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-8 bg-white border-2 border-red-200 shadow-xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">💬 ปรึกษาฟรี! ไม่มีค่าใช้จ่าย</h3>
              <p className="text-lg text-gray-700">เพื่อประเมินโอกาสทางธุรกิจของคุณบน Google Ads</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                <Phone className="w-8 h-8 text-red-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1"> ติดต่อเราเลย</h4>
                <p className="text-red-600 font-medium text-center">099-999-9999</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                <Globe className="w-8 h-8 text-red-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">เว็บไซต์</h4>
                <p className="text-red-600 font-medium text-center">www.rundeeads.com</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                <MessageSquare className="w-8 h-8 text-red-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">Line ID</h4>
                <p className="text-red-600 font-medium text-center">@rundeeads</p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className= "flex bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
                ติดต่อเราตอนนี้
                <ArrowRight className="m-1 w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Hashtags */}
        <div className="flex flex-wrap justify-center gap-2 text-sm text-red-600">
          <span className="bg-red-50 px-3 py-1 rounded-full">#GoogleAds</span>
          <span className="bg-red-50 px-3 py-1 rounded-full">#การตลาดออนไลน์</span>
          <span className="bg-red-50 px-3 py-1 rounded-full">#เพิ่มยอดขาย</span>
          <span className="bg-red-50 px-3 py-1 rounded-full">#ธุรกิจออนไลน์</span>
          <span className="bg-red-50 px-3 py-1 rounded-full">#DigitalMarketing</span>
          <span className="bg-red-50 px-3 py-1 rounded-full">#rundeeads</span>
        </div>
      </div>
    </section>

        {/* Services Section */}
        {/* <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">
                ร่วมงานกับ{" "}
                <span className="bg-red-100 px-2 py-1">RundeeAds</span>{" "}
                โปรเจ็คต์ ยังไงได้บ้าง?
              </h2>
              <p className="mt-4 text-gray-500">
                ธุรกิจหลักของเมอยู่ภายใต้ชื่อ SEO โปรเจ็คต์ไทย
                <br />
                แต่ตัวตนของเมเป็นมากกว่า
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BarChart2 className="h-10 w-10 text-[var(--primary)] mb-4" />
                <h3 className="text-xl font-bold mb-2">SEO Audit</h3>
                <p className="text-gray-500">
                  วิเคราะห์เว็บไซต์และกลยุทธ์ SEO ของคุณอย่างละเอียด
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <TrendingUp className="h-10 w-10 text-[var(--primary)] mb-4" />
                <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
                <p className="text-gray-500">
                  วางแผนเนื้อหาที่ตอบโจทย์ทั้ง User และ Search Engine
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Target className="h-10 w-10 text-[var(--primary)] mb-4" />
                <h3 className="text-xl font-bold mb-2">Keyword Research</h3>
                <p className="text-gray-500">
                  ค้นหาคีย์เวิร์ดที่มีศักยภาพสูงสุดสำหรับธุรกิจของคุณ
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-[var(--primary)] mb-4" />
                <h3 className="text-xl font-bold mb-2">SEO Training</h3>
                <p className="text-gray-500">
                  อบรมทีมของคุณให้เข้าใจและทำ SEO ได้อย่างมีประสิทธิภาพ
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button className="bg-red-600 hover:bg-red-700 text-white">
                ดูบริการทั้งหมด <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">
                ลูกค้าของเราพูดถึงเราอย่างไร
              </h2>
              <p className="mt-4 text-gray-500">
                ความสำเร็จของลูกค้าคือความสำเร็จของเรา
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-bold">คุณสมชาย</p>
                    <p className="text-sm text-gray-500">CEO, บริษัท ABC</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &quot;หลังจากทำงานร่วมกับทีม SEO ของ RundeeAds
                  ยอดขายของเราเพิ่มขึ้น 200% ภายใน 3 เดือน&quot;
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-bold">คุณสมศรี</p>
                    <p className="text-sm text-gray-500">
                      Marketing Director, บริษัท XYZ
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &quot;กลยุทธ์ SEO ที่ได้รับคำแนะนำช่วยให้เราอยู่อันดับ 1 ใน Google
                  สำหรับคีย์เวิร์ดหลักของเรา&quot;
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-bold">คุณสมหมาย</p>
                    <p className="text-sm text-gray-500">Owner, ร้าน DEF</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  &quot;คอร์สเรียน SEO
                  ในตำนานเปลี่ยนมุมมองการทำการตลาดออนไลน์ของผมไปเลย คุ้มค่ามาก&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[var(--primary)] text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              พร้อมเริ่มเติบโตอย่างยั่งยืนกับเราหรือยัง?
            </h2>
            <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
              ปรึกษาฟรี! ให้เราช่วยวิเคราะห์ธุรกิจของคุณและวางแผนกลยุทธ์ SEO
              ที่เหมาะสมที่สุด
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-700 hover:bg-gray-100">
                ติดต่อเรา
              </button>
              <button className="border-white text-white hover:bg-white hover:text-red-700">
                ดูผลงานของเรา
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}