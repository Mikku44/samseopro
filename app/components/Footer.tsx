import { Link } from "react-router";
import { FaLine } from "react-icons/fa6"
import { IoCallOutline } from "react-icons/io5"
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md"

export default function Footer() {
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
              ผู้เชี่ยวชาญด้านการตลาดออนไลน์และ SEO
              ที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืนในยุคดิจิทัล
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">บริการของเรา</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/services/seo-training-service" className="hover:text-blue-400 transition-colors">
                  บริการรับทำ SEO มืออาชีพ
                </Link>
              </li>
              <li>
                <Link to="/services/ads-training-service" className="hover:text-blue-400 transition-colors">
                  คอร์สอบรม Google Ads
                </Link>
              </li>
              <li>
                <Link to="/services/web-maker" className="hover:text-blue-400 transition-colors">
                  บริการออกแบบเว็บไซต์
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">การติดต่อ</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MdOutlineLocationOn className="text-xl text-blue-400 shrink-0" />
                <span>กรุงเทพมหานคร ประเทศไทย</span>
              </div>
              <a href="mailto:rundee.ads@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <MdOutlineEmail className="text-xl text-blue-400 shrink-0" />
                <span>rundee.ads@gmail.com</span>
              </a>
              <a href="tel:0954965989" className="flex items-center gap-3 hover:text-white transition-colors">
                <IoCallOutline className="text-xl text-blue-400 shrink-0" />
                <span>095-496-5989</span>
              </a>
            </div>
          </div>

          {/* Action Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">ติดตามเรา</h4>
            <a
              href="https://line.me/ti/p/RundeeAds"
              rel="nofollow"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl overflow-hidden"
            >
              <img src="/line-qr.jpg" alt="SAMSEOPRO Line QR Code" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase">
          <p>© 2026 RundeeAds. All Rights Reserved.</p>
          {/* <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}