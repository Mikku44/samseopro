import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer } : {question: string, answer: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown 
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-blue-600`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const RundeeFAQ = () => {
  const faqData = [
    {
      question: "บริการหลักของ Rundee Ads มีอะไรบ้าง?",
      answer: "เราเชี่ยวชาญด้านการทำการตลาดออนไลน์แบบครบวงจร ครอบคลุมทั้งการทำ SEO เพื่อติดอันดับต้นๆ บน Google, การยิงโฆษณา Google Ads (SEM), การออกแบบเว็บไซต์ที่เน้นยอดขาย และคอร์สอบรมการตลาดดิจิทัล"
    },
    {
      question: "ทำไมต้องเลือกทำโฆษณากับ Rundee Ads?",
      answer: "ทีมงานของเรานำโดยอดีต Account Manager จาก Google Ads โดยตรง เรามีความเข้าใจลึกซึ้งในระบบหลังบ้านและอัลกอริทึม ช่วยให้คุณวางกลยุทธ์ได้แม่นยำและใช้งบประมาณได้อย่างคุ้มค่าที่สุด"
    },
    {
      question: "การทำ SEO กับ Rundee Ads ต่างจากที่อื่นอย่างไร?",
      answer: "เราเน้นการทำ SEO สายขาวที่ยั่งยืน โดยเริ่มตั้งแต่การปรับโครงสร้างเว็บไซต์ (On-Page) ไปจนถึงการสร้าง Content ที่มีคุณภาพและการทำ Backlink ที่ปลอดภัย เพื่อให้อันดับของคุณคงอยู่ได้ในระยะยาว"
    },
    {
      question: "เริ่มต้นปรึกษาต้องทำอย่างไร?",
      answer: "คุณสามารถทักแชทเพื่อปรึกษาและวิเคราะห์ธุรกิจเบื้องต้นได้ฟรี โดยไม่มีค่าใช้จ่าย เพื่อวางแผนก่อนเริ่มดำเนินการจริง"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          คำถามที่พบบ่อย (FAQ)
        </h2>
        <p className="text-center text-gray-500 mb-12">
          ทุกข้อสงสัยเกี่ยวกับบริการของ Rundee Ads เรามีคำตอบให้คุณ
        </p>
        
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* <div className="mt-12 p-6 bg-blue-50 rounded-2xl flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">ยังมีข้อสงสัยอื่นเพิ่มเติม?</h3>
          <p className="text-blue-700 mb-6">สอบถามทีมงานผู้เชี่ยวชาญของเราได้โดยตรงผ่าน Line</p>
          <a 
            href="https://line.me/ti/p/@rundee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white px-8 py-3 rounded-full font-bold hover:bg-[#05a647] transition-colors"
          >
            <MessageCircle size={20} />
            LINE @rundee
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default RundeeFAQ;