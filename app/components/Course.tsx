import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const parts = [
  {
    part: "Part 1",
    title: "ปูพื้นฐานให้แน่น",
    items: [
      "Google Ads คืออะไร? ทำไมธุรกิจของคุณต้องใช้?",
      "เข้าใจภาพรวมและประเภทของแคมเปญทั้งหมด (Search, Display, YouTube, Shopping, PMax)",
      "วิธีตั้งค่าบัญชี Google Ads ที่ถูกต้องตั้งแต่ครั้งแรก เพื่อไม่ให้มีปัญหาตามมา",
    ],
  },
  {
    part: "Part 2",
    title: "วางแผนและลงมือสร้างแคมเปญ",
    items: [
      "การวิเคราะห์ Keyword (คำค้นหา) ที่ใช่สำหรับธุรกิจคุณ หาคำที่ทำเงินและปิดการขายได้",
      "วิธีเขียนข้อความโฆษณา (Ad Copy) ให้น่าคลิกและเอาชนะคู่แข่ง",
      "สอนสร้างแคมเปญ Google Search Ads แบบละเอียดทุกขั้นตอน",
      "รู้จักและใช้งาน Ad Extensions ส่วนขยายโฆษณาที่จะทำให้โฆษณาของคุณโดดเด่นกว่าใคร",
    ],
  },
  {
    part: "Part 3",
    title: "วัดผลและต่อยอดสู่ขั้นแอดวานซ์",
    items: [
      "การติดตั้ง Conversion Tracking เพื่อวัดผลว่าโฆษณาของคุณสร้างยอดขายได้จริงหรือไม่",
      "วิธีอ่านรีพอร์ตและวิเคราะห์ข้อมูล เพื่อปรับปรุงแคมเปญให้ดีขึ้นเรื่อยๆ",
      "เทคนิคการทำ Remarketing ตามหลอนลูกค้าที่เคยเข้าเว็บ แต่ยังไม่ซื้อ",
      "เคล็ดลับการ Optimize โฆษณา ลดค่าคลิก เพิ่มผลลัพธ์ โดยใช้งบเท่าเดิม",
    ],
  },
  {
    part: "Part 4",
    title: "Workshop และกลยุทธ์พิเศษ",
    items: [
      "[พิเศษ!] วิเคราะห์กลยุทธ์ที่เหมาะสมกับธุรกิจของคุณโดยเฉพาะ: เราจะดูธุรกิจของคุณและแนะนำว่าควรใช้แคมเปญแบบไหน งบประมาณเท่าไหร่ ถึงจะคุ้มค่าที่สุด",
      "[ไม่มีในคู่มือ!] แชร์ทริกสำคัญจากประสบการณ์ตรง: เช่น วิธีจัดการกับคู่แข่ง, เทคนิค Bidding Strategy ที่ได้ผล, การดู Quality Score และวิธีปรับปรุง",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function GoogleAdsCourseTimeline() {
  return (
    <section className="relative w-full text-neutral-900 ">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">หลักสูตร Google Ads – ไทม์ไลน์การเรียน</h2>
          <p className="text-neutral-600 mt-2 text-sm md:text-base">เรียนเป็นลำดับขั้น ตั้งแต่ปูพื้นฐานไปจนถึงทำจริง วิเคราะห์ ปรับแต่ง และเวิร์กชอปเฉพาะธุรกิจคุณ</p>
        </header>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="relative ml-6 space-y-8 border-l border-neutral-200 "
        >
          {parts.map((section) => (
            <motion.li key={section.part} variants={item} className="relative pl-6">
              {/* Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[--secondary] ring-4 ring-white " />

              {/* Card */}
              <div className="space-y-3">
                <div>
                  <span className="block text-sm font-medium text-[--secondary]">{section.part}</span>
                  <h3 className="text-lg md:text-xl font-semibold">{section.title}</h3>
                </div>

                <ul className="space-y-2">
                  {section.items.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-[--secondary]" aria-hidden="true" />
                      <span className="leading-relaxed text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
