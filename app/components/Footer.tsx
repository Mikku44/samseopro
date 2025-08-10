import { Link } from "@remix-run/react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container  max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">RundeeAds</h3>
            <p className="text-sm">ผู้เชี่ยวชาญด้านการตลาดออนไลน์และ SEO ที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">บริการของเรา</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white">SEO Audit</Link></li>
              <li><Link to="#" className="hover:text-white">Content Strategy</Link></li>
              <li><Link to="#" className="hover:text-white">Keyword Research</Link></li>
              <li><Link to="#" className="hover:text-white">SEO Training</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">ความรู้</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white">บทความ</Link></li>
              <li><Link to="#" className="hover:text-white">คอร์สเรียน</Link></li>
              <li><Link to="#" className="hover:text-white">คำถามที่พบบ่อย</Link></li>
              <li><Link to="#" className="hover:text-white">กรณีศึกษา</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">ติดต่อเรา</h3>
            <ul className="space-y-2 text-sm">
              <li>อีเมล: rundee.ads@gmail.com</li>
              <li>โทร: 0954965989</li>
              <li>ที่อยู่: กรุงเทพมหานคร ประเทศไทย</li>
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
