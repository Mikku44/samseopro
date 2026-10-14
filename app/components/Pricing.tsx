import { FaCircleCheck } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';

export default function CoursePricingCTA() {
  const { t } = useTranslation();
  const benefits = [
    t('adsTraining.pricingBenefit1'),
    t('adsTraining.pricingBenefit2'),
    t('adsTraining.pricingBenefit3'),
    t('adsTraining.pricingBenefit4'),
  ]

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-br  to-neutral-900 text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 opacity-30 blur-3xl " />

      <div className="relative container mx-auto max-w-5xl">

        {/* Glass Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10 md:p-16 text-center">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t('adsTraining.pricingTitle')}
          </h2>

          {/* Price */}
          <div className="mt-8 mb-10">
            <p className="text-lg text-white/70">
              {t('adsTraining.pricingSubtitle')}
            </p>
            <p className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent mt-2'> 
              {t('adsTraining.pricingPrice')} </p>
           
          </div>

          {/* Benefits */}
          <div className="max-w-xl mx-auto text-left mb-12">
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              {t('adsTraining.pricingWhatYouGet')}
            </h3>

            <ul className="space-y-4">
              {benefits.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <FaCircleCheck className="text-blue-500 text-lg mt-1 shrink-0" />
                  <span className="text-sm md:text-base text-white/80 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Content */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              {t('adsTraining.pricingCta')}
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              {t('adsTraining.pricingCtaDetail1')}{' '}
              <span className="font-semibold text-white">{t('adsTraining.pricingCtaBold1')}</span>{' '}
              {t('adsTraining.pricingCtaAnd')}{' '}
              <span className="font-semibold text-white">{t('adsTraining.pricingCtaBold2')}</span>{' '}
              {t('adsTraining.pricingCtaDetail2')}
            </p>

            <p className="text-sm md:text-base text-red-500 font-bold">
              {t('adsTraining.pricingLimited')}
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                target="_blank"
                href="https://line.me/R/ti/p/@rundee"
                rel="noreferrer"
              >
                <button
                  className="
                    px-10 py-4 rounded-2xl text-lg font-medium
                    bg-white text-neutral-900
                    hover:bg-white/90
                    transition-all duration-300
                    shadow-lg hover:shadow-xl
                    hover:scale-[1.03]
                  "
                >
                  {t('adsTraining.pricingButton')}
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}