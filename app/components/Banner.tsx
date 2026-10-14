import { useTranslation } from 'react-i18next';

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
      <p>{t('banner.text')}</p>
    </div>
  )
}
