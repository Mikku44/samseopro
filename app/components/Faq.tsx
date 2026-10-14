import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const faqData = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          {t('faq.title')}
        </h2>
        <p className="text-center text-gray-500 mb-12">
          {t('faq.subtitle')}
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