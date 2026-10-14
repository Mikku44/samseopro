import { useTranslation } from 'react-i18next';
import { Link } from "react-router";
import { FaLine } from "react-icons/fa6"
import { IoCallOutline } from "react-icons/io5"
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md"

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="backdrop-blur-xl bg-slate-900 text-slate-300 border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">

          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Rundee<span className="text-blue-400">Ads</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {t('footer.description')}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.ourServices')}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/services/seo-training-service" className="hover:text-blue-400 transition-colors">
                  {t('header.seoService')}
                </Link>
              </li>
              <li>
                <Link to="/services/ads-training-service" className="hover:text-blue-400 transition-colors">
                  {t('header.adsTraining')}
                </Link>
              </li>
              <li>
                <Link to="/services/web-maker" className="hover:text-blue-400 transition-colors">
                  {t('header.webDesign')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.contact')}</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MdOutlineLocationOn className="text-xl text-blue-400 shrink-0" />
                <span>{t('footer.location')}</span>
              </div>
              <a href="mailto:rundee.ads@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <MdOutlineEmail className="text-xl text-blue-400 shrink-0" />
                <span>rundee.ads@gmail.com</span>
              </a>
              <a href="tel:0622080994" className="flex items-center gap-3 hover:text-white transition-colors">
                <IoCallOutline className="text-xl text-blue-400 shrink-0" />
                <span>{t('footer.phone')}</span>
              </a>
            </div>
          </div>

          {/* Action Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">{t('footer.followUs')}</h4>
            <a
            target="_blank"
              href="https://line.me/R/ti/p/@rundee"
              rel="nofollow"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl overflow-hidden"
            >
              <div className="bg-green-500 flex items-center gap-5 py-4 px-5 w-full rounded-sm">
                <FaLine className="text-xl size-7 text-white shrink-0"/>
                <div className="text-white w-full text-center">{t('footer.addFriend')}</div>
              </div>
            </a>
            <a href="https://www.google.com/partners/agency?id=4396088046" target="_blank">
              <img src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg" />
            </a>

          </div>



        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}