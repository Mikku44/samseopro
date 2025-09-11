import { Link } from "@remix-run/react"
import { FaLine } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { RiMapPinFill } from "react-icons/ri"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container  max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">RundeeAds</h3>
            <p className="text-sm">ผู้เชี่ยวชาญด้านการตลาดออนไลน์และ SEO ที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">บริการของเรา</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/seo-training-service" className="hover:text-white">บริการรับทำ SEOแบบมืออาชีพ</Link></li>
              <li><Link to="/services/ads-training-service" className="hover:text-white">คอร์สอบรม Gpogle Ads แบบมืออาชีพ</Link></li>
              <li><Link to="/services/web-maker" className="hover:text-white">บริการออกแบบเว็บไซต์</Link></li>
              {/* <li><Link to="#" className="hover:text-white">ตรวจสอบ SEO</Link></li>
              <li><Link to="#" className="hover:text-white">Content Strategy</Link></li>
              <li><Link to="#" className="hover:text-white">Keyword Research</Link></li>
              <li><Link to="#" className="hover:text-white">SEO Training</Link></li> */}
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-bold mb-4 text-white">ความรู้</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white">บทความ</Link></li>
              <li><Link to="#" className="hover:text-white">คอร์สเรียน</Link></li>
              <li><Link to="#" className="hover:text-white">คำถามที่พบบ่อย</Link></li>
              <li><Link to="#" className="hover:text-white">กรณีศึกษา</Link></li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">ติดต่อ Rundde Ads</h3>
            <ul className="space-y-2 text-sm">
              <a 
              href="/#" rel="nofollow"
              className="flex gap-1 items-center"><RiMapPinFill className="text-2xl" />กรุงเทพมหานคร ประเทศไทย</a>
              <a 
              href="mailto:rundee.ads@gmail.com" rel="nofollow"
              className="flex gap-1 items-center"><MdEmail className="text-2xl"/> rundee.ads@gmail.com</a>
              <a 
              href="tel:0954965989" rel="nofollow"
              className="flex gap-1 items-center"><IoCall className="text-2xl"/> 0954965989</a>
              <a 
              href="https://line.me/R/ti/p/@655rkaej" rel="nofollow"
              className="flex gap-1 items-center"><FaLine className="text-xl" /> @655rkaej</a>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© 2025 RundeeAds. สงวนลิขสิทธิ์ทั้งหมด.</p>
        </div>
      </div>
    </footer>
  )
}
