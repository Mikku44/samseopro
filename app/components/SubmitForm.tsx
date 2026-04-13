import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Globe, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  label: string;
  value: string;
  colorClass: string;
  bgClass: string;
}

interface ConsultationFormProps {
  title?: React.ReactNode;
  subtitle?: string;
  features?: Feature[];
  service?: string;
}

const DEFAULT_FEATURES: Feature[] = [
  { 
    icon: Clock, 
    label: 'ความเร็วในการเริ่มงาน', 
    value: 'เปิดแคมเปญได้ภายใน 3-5 วัน', 
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-500/10'
  },
  { 
    icon: Globe, 
    label: 'ขอบเขตบริการ', 
    value: 'ครอบคลุมทุก Platform ในเครือ Google', 
    colorClass: 'text-indigo-400',
    bgClass: 'bg-indigo-500/10'
  }
];

const ConsultationForm: React.FC<ConsultationFormProps> = ({ 
  title = <>วิเคราะห์แผน <br /> <span className="text-blue-500">Google Ads ฟรี!</span></>,
  subtitle = "ให้ผู้เชี่ยวชาญช่วยตรวจสอบบัญชีเดิม หรือวางแผนเริ่มต้นใหม่ เพื่อการใช้เงินที่คุ้มค่าที่สุด",
  features = DEFAULT_FEATURES,
  service = "Google Ads"
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '',service : service });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;
    
    setIsSubmitting(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbx9KqwtrxXTmbAxg3CkqF9vtU7ngdr169dGNddqIM2Z0SpoMn6Mj-X_SfgGyo30GJOuLA/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className='py-24 relative z-10 bg-[#020617] overflow-hidden'>
      <div className='container-x max-w-6xl'>
        <div className='glass-card p-1 md:p-12 relative border border-white/5 rounded-[2.5rem] bg-white/[0.02] '>
          
          {/* Background Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className='grid lg:grid-cols-2 gap-16 relative z-10'>
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              style={{ willChange: "transform, opacity" }}
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-8 leading-tight text-white'>
                {title}
              </h2>
              <p className='text-xl text-slate-300 leading-relaxed mb-10'>
                {subtitle}
              </p>

              {/* Dynamic Features Mapping */}
              <div className='space-y-6'>
                {features.map((f, idx) => (
                  <div key={idx} className='flex items-center p-6 bg-white/[0.03] border border-white/5 rounded-3xl transition-transform hover:translate-x-1 duration-300'>
                    <div className={`w-12 h-12 rounded-full ${f.bgClass} flex items-center justify-center mr-6 shrink-0`}>
                      <f.icon className={`w-6 h-6 ${f.colorClass}`} />
                    </div>
                    <div>
                      <p className='text-sm text-slate-400 uppercase tracking-wider'>{f.label}</p>
                      <p className='text-white font-bold text-lg'>{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ willChange: "transform, opacity" }}
              className='bg-white/[0.03] p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-sm'
            >
              <h3 className='text-2xl font-bold mb-2 text-white'>ขอรับคำปรึกษาฟรี</h3>
              <p className='text-slate-400 mb-8'>กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับพร้อมแผนเบื้องต้น</p>

              <form onSubmit={handleSubmit} className='space-y-5'>
                <input
                  type='text' name='name' value={formData.name} onChange={handleInputChange}
                  placeholder='ชื่อธุรกิจ / ชื่อของคุณ *' required
                  className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white outline-none focus:border-blue-500 transition-all'
                />
                <input
                  type='email' name='email' value={formData.email} onChange={handleInputChange}
                  placeholder='อีเมลติดต่อ *' required
                  className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white outline-none focus:border-blue-500 transition-all'
                />
                <input
                  type='tel' name='phone' value={formData.phone} onChange={handleInputChange}
                  placeholder='เบอร์โทรศัพท์'
                  className='w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white outline-none focus:border-blue-500 transition-all'
                />
                <textarea
                  name='message' value={formData.message} onChange={handleInputChange}
                  placeholder='งบประมาณที่คาดหวัง หรือ เว็บไซต์ของคุณ' rows={3}
                  className='w-full px-6 py-5 bg-white/5 border border-white/10 rounded-[1.5rem] text-white outline-none focus:border-blue-500 transition-all resize-none'
                />

                <button
                  type='submit'
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-5 rounded-full text-white font-bold text-lg transition-all duration-300 ${
                    isSubmitted ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700'
                  } disabled:opacity-50 active:scale-[0.98]`}
                >
                  {isSubmitting ? 'กำลังส่งข้อมูล...' : isSubmitted ? 'ส่งข้อมูลเรียบร้อย!' : 'ปรึกษาผู้เชี่ยวชาญเลย'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;