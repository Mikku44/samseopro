import { useTranslation } from 'react-i18next';

export default function CourseTargetAudience() {
  const { t } = useTranslation();
  const audiences = [
    {
      title: t('adsTraining.audience1Title'),
      desc: t('adsTraining.audience1Desc'),
    },
    {
      title: t('adsTraining.audience2Title'),
      desc: t('adsTraining.audience2Desc'),
    },
    {
      title: t('adsTraining.audience3Title'),
      desc: t('adsTraining.audience3Desc'),
    },
    {
      title: t('adsTraining.audience4Title'),
      desc: t('adsTraining.audience4Desc'),
    },
  ];

  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-10 text-center">
          <div className="text-white/80 text-lg">{t('adsTraining.audienceSubtitle')}</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t('adsTraining.audienceTitle')}
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-base"
            >
              <h3 className="text-lg font-medium  mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
