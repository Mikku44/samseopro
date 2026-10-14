import { motion } from 'framer-motion'
import { FaCircleCheck } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';

export default function GoogleAdsCourseTimeline () {
  const { t } = useTranslation();
  const parts = [
  {
    part: t('adsTraining.coursePart1'),
    title: t('adsTraining.coursePart1Title'),
    items: [
      t('adsTraining.coursePart1Item1'),
      t('adsTraining.coursePart1Item2'),
      t('adsTraining.coursePart1Item3')
    ]
  },
  {
    part: t('adsTraining.coursePart2'),
    title: t('adsTraining.coursePart2Title'),
    items: [
      t('adsTraining.coursePart2Item1'),
      t('adsTraining.coursePart2Item2'),
      t('adsTraining.coursePart2Item3'),
      t('adsTraining.coursePart2Item4')
    ]
  },
  {
    part: t('adsTraining.coursePart3'),
    title: t('adsTraining.coursePart3Title'),
    items: [
      t('adsTraining.coursePart3Item1'),
      t('adsTraining.coursePart3Item2'),
      t('adsTraining.coursePart3Item3'),
      t('adsTraining.coursePart3Item4')
    ]
  },
  {
    part: t('adsTraining.coursePart4'),
    title: t('adsTraining.coursePart4Title'),
    items: [
      t('adsTraining.coursePart4Item1'),
      t('adsTraining.coursePart4Item2')
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
}

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

  return (
    <section className='relative w-full text-white '>
      <div className='container mx-auto px-4 '>
        {/* <header className="mb-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">หลักสูตร Google Ads – ไทม์ไลน์การเรียน</h2>
          <p className="text-neutral-600 mt-2 text-sm md:text-base">เรียนเป็นลำดับขั้น ตั้งแต่ปูพื้นฐานไปจนถึงทำจริง วิเคราะห์ ปรับแต่ง และเวิร์กชอปเฉพาะธุรกิจคุณ</p>
        </header> */}

        <motion.ol
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className='relative space-y-8'
        >
          {parts.map(section => (
            <motion.li
              key={section.part}
              variants={item}
              className='relative pl-6'
            >
              {/* Node
              <div className='absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[--secondary] ring-4 ring-white ' /> */}

              {/* Card */}
              <div className='space-y-3 p-6 rounded-2xl border border-gray-500/20 shadow bg-blue-200/5 backdrop-blur-sm'>
                <div>
                  <span className='block text-sm font-medium text-blue-500 '>
                    {section.part}
                  </span>
                  <h3 className='text-lg md:text-xl font-semibold from-blue-500 to-green-500 text-transparent bg-clip-text bg-gradient-to-r'>
                    {section.title}
                  </h3>
                </div>

                <ul className='space-y-2'>
                  {section.items.map((point, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <FaCircleCheck className='text-blue-500 text-xl' />
                      <span className='leading-relaxed text-sm md:text-base'>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
