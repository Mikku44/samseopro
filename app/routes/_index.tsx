import type { MetaFunction } from "@remix-run/node";
import { ArrowRight, BarChart2, Target, TrendingUp, Users } from "lucide-react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Rundeeads" },
    { name: "description", content: "RundeeAds - บริการ SEO แบบมืออาชีพ" },
    { name: "keywords", content: "SEO, การตลาดออนไลน์, คอร์ส SEO, ผู้เชี่ยวชาญ SEO" },
    { property: "og:title", content: "RundeeAds - บริการ SEO แบบมืออาชีพ" },
    { property: "og:description", content: "เพิ่มยอดขาย เพิ่มผู้ชม ด้วยกลยุทธ์ SEO ที่ใช้ได้จริง" },
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
                <div className="inline-block text-[var(--secondary)] font-medium">คุณกำลังจะก้าวเข้าสู่โลกของ</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <span className="bg-blue-100 px-2 py-1 inline-block">RundeeAds</span> ·<br />
                  Organic Growth Builder
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  คนเดียวที่คุ้มค่าเยอะที่สุดใน SEO โปรเจ็คต์ไทย
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white">House of SEO: คอมมูนิตี้ไซด์</button>
                  <button>ติดต่อร่วมงาน</button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 lg:flex lg:justify-end">
                <div className="relative h-[350px] w-full max-w-[450px]">
                  <img
                    src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Digital Marketing Expert"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">
                ร่วมงานกับ <span className="bg-red-100 px-2 py-1">RundeeAds</span> โปรเจ็คต์ ยังไงได้บ้าง?
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
                <p className="text-gray-500">วิเคราะห์เว็บไซต์และกลยุทธ์ SEO ของคุณอย่างละเอียด</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <TrendingUp className="h-10 w-10 text-[var(--secondary)] mb-4" />
                <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
                <p className="text-gray-500">วางแผนเนื้อหาที่ตอบโจทย์ทั้ง User และ Search Engine</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Target className="h-10 w-10 text-[var(--tertiary)] mb-4" />
                <h3 className="text-xl font-bold mb-2">Keyword Research</h3>
                <p className="text-gray-500">ค้นหาคีย์เวิร์ดที่มีศักยภาพสูงสุดสำหรับธุรกิจของคุณ</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-black mb-4" />
                <h3 className="text-xl font-bold mb-2">SEO Training</h3>
                <p className="text-gray-500">อบรมทีมของคุณให้เข้าใจและทำ SEO ได้อย่างมีประสิทธิภาพ</p>
              </div>
            </div>

             <div className="mt-10 text-center flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white flex gap-2">
                ดูบริการทั้งหมด <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">ลูกค้าของเราพูดถึงเราอย่างไร</h2>
              <p className="mt-4 text-gray-500">ความสำเร็จของลูกค้าคือความสำเร็จของเรา</p>
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
                  &quot;หลังจากทำงานร่วมกับทีม SEO ของ RundeeAds ยอดขายของเราเพิ่มขึ้น 200% ภายใน 3 เดือน&quot;
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-bold">คุณสมศรี</p>
                    <p className="text-sm text-gray-500">Marketing Director, บริษัท XYZ</p>
                  </div>
                </div>
                <p className="text-gray-600">&quot;กลยุทธ์ SEO ที่ได้รับคำแนะนำช่วยให้เราอยู่อันดับ 1 ใน Google สำหรับคีย์เวิร์ดหลักของเรา&quot;</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-bold">คุณสมหมาย</p>
                    <p className="text-sm text-gray-500">Owner, ร้าน DEF</p>
                  </div>
                </div>
                <p className="text-gray-600">&quot;คอร์สเรียน SEO ในตำนานเปลี่ยนมุมมองการทำการตลาดออนไลน์ของผมไปเลย คุ้มค่ามาก&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[var(--primary)] text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">พร้อมเริ่มเติบโตอย่างยั่งยืนกับเราหรือยัง?</h2>
            <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
              ปรึกษาฟรี! ให้เราช่วยวิเคราะห์ธุรกิจของคุณและวางแผนกลยุทธ์ SEO ที่เหมาะสมที่สุด
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-700 hover:bg-gray-100">ติดต่อเรา</button>
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
