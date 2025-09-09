
import { FaCircleCheck } from 'react-icons/fa6'

export default function CoursePricingCTA () {
  const benefits = [
    'คอร์สสอนสด/ออนไลน์ (ระบุรูปแบบการสอน) แบบเข้มข้น',
    'เอกสารประกอบการเรียน',
    'ไฟล์ Template สำหรับวางแผนแคมเปญ',
    '[พิเศษ] เซสชั่นให้คำปรึกษา วิเคราะห์กลยุทธ์เฉพาะธุรกิจของคุณ'
  ]

  return (
    <section className='relative w-full rounded-3xl text-neutral-900 bg-gradient-to-br
     from-neutral-100 via-white to-neutral-200 border'>
      <div className='container mx-auto px-4 py-20 text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight'>
          ค่าใช้จ่ายในการเรียน
        </h2>

        <div className='mb-8'>
          <p className='text-xl md:text-2xl font-medium'>
            ทั้งหมดนี้ในราคาเพียง
          </p>
          <p className='text-4xl md:text-5xl font-bold bg-gradient-to-r 
          from-blue-500 to-green-400 bg-clip-text text-transparent mt-2'>
            9,900 บาท
          </p>
        </div>

        <div className='h-1 w-16 bg-[--secondary] rounded-full mx-auto mb-8'></div>

        {/* Benefits */}
        <div className='max-w-2xl mx-auto text-left mb-12'>
          <h3 className='text-lg md:text-xl font-semibold mb-4'>
            ราคานี้รวมอะไรบ้าง?
          </h3>
          <ul className='space-y-3'>
            {benefits.map((point, idx) => (
              <li key={idx} className='flex items-start gap-3'>
                 <FaCircleCheck className='text-blue-900 text-xl' />
                <span className='leading-relaxed text-sm md:text-base'>
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className='max-w-3xl mx-auto space-y-6'>
          <p className='text-lg md:text-xl font-medium leading-relaxed'>
            พร้อมเปลี่ยนงบโฆษณาที่เคยเสียไป ให้กลายเป็นกำไรแล้วหรือยัง?
          </p>
          <p className='text-base md:text-lg text-neutral-700 leading-relaxed'>
            การลงทุนครั้งนี้ ไม่ใช่แค่การเรียนวิธีใช้เครื่องมือ แต่คือการซื้อ{' '}
            <span className='font-semibold'>&quot;ประสบการณ์&quot;</span> และ{' '}
            <span className='font-semibold'>&quot;ทางลัด&quot;</span>{' '}
            สู่ความสำเร็จจากคนที่เห็นภาพรวมมาแล้วกว่าพันธุรกิจ
          </p>
          <p className='text-base md:text-lg font-medium text-[--secondary]'>
            รับจำนวนจำกัด เพื่อการดูแลอย่างทั่วถึง!
          </p>

          <div className='flex flex-col md:flex-row gap-4 justify-center pt-4'>
            <a
              target='_blank'
              href='https://line.me/R/ti/p/@655rkaej'
              rel='noreferrer'
            >
              <button className='rounded-2xl px-8 py-4 text-lg to-blue-600 from-blue-800 bg-gradient-to-r text-white
               shadow-lg shadow-[--tertiary]/30 hover:scale-105
                transition-transform'>
                ลงทะเบียนเรียนเลย
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
