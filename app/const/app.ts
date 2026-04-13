import { FaSearch, FaGoogle, FaDesktop } from "react-icons/fa"
import { FaArrowTrendUp } from "react-icons/fa6";

export const MENU = [
  {
    href: "/", label: "หน้าแรก",
  },
  {
    href: "#services", label: "บริการของเรา",
    subMenu: [
      {
        href: "/services/seo-training-service",
        label: "บริการรับทำ SEO มืออาชีพ",
        desc: "เพิ่มอันดับ Google อย่างยั่งยืน",
        icon: FaSearch,
      },
      {
        href: "/google-ads-service", label: "บริการรับทำ Google Ads",
        desc: "ดันเว็ปไซต์ขึ้นหน้าแรก Google อย่างรวดเร็วด้วย Google Ads",
        icon: FaArrowTrendUp ,
      },
      {
        href: "/services/ads-training-service",
        label: "คอร์สอบรม Google Ads",
        desc: "เรียนกับอดีตคนใน Google ตัวจริง",
        icon: FaGoogle,
      },

    ],
  },


  {
    href: "/services/web-maker",
    label: "บริการออกแบบเว็บไซต์",

  },
  {
    href: "/blog",
    label: "เทคนิคการตลาดออนไลน์",

  },
]

export const customerList = [
  {
    src: '/customers/supeerose.svg',
    label: 'Supee Rose - สุพีย์โรส',
    href: '#'
  },
  {
    src: '/customers/tjbatt.jpg',
    label: 'TJ Batt - ตั้งใจขายแบต',
    href: '#'
  },
  {
    src: '/customers/dryergroup.png',
    label: 'Dryer Group - ดรายเออร์ กรุ๊ป',
    href: '#'
  },
  {
    src: '/customers/homsleepsalon.ico',
    label: 'Hom Sleep Salon - ฮอม สลีป ซาลอน',
    href: 'https://www.homsleepsalon.com/'
  },
  {
    src: '/customers/ngulekpatum.ico',
    label: 'Ngulek Patum - งูเหล็กปทุม',
    href: 'https://ngulekpatum.vercel.app/'
  },
  {
    src: '/customers/nextflipestate.ico',
    label: 'Next Flip Estate - เน็กซ์ฟลิป เอสเตท',
    href: 'https://www.nextflipestate.com/'
  },
  {
    src: '/customers/paintproof.ico',
    label: 'PaintProof - เพ็นท์พรูฟ',
    href: 'https://www.paintproof.co.th/'
  },
  {
    src: '/customers/homepropertyconsulting.ico',
    label: 'Home Property Consulting - โฮม พร็อพเพอร์ตี้ คอนซัลติ้ง',
    href: 'https://homepropertyconsultinglimited.com/'
  }
]

export const SLIDE_UP = {
  initial: {
    y: 20,
    opacity: 0
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const webPackages = [
  {
    name: 'Basic Landing Page',
    price: '5,900.-',
    period: 'เริ่มต้น',
    baht: 'ประมาณ $170',
    description: 'เน้นความเร็วและดีไซน์ที่ทันสมัย เพื่อสร้างตัวตนบนโลกออนไลน์',
    features: [
      '1 หน้า Landing Page (Single Page)',
      'ฟรี! Domain + Hosting 1 ปีแรก',
      'Responsive Design รองรับมือถือ',
      'ความเร็วโหลดสูง (Optimize Speed)',
      'ปุ่มติดต่อด่วน Line / Messenger / โทร',
      'Google Analytics setup',
      '1 round of revisions',
      '5-7 วันจัดส่ง'
    ],
    highlight: false,
    bestFor: 'สินค้า แคมเปญ หรือสร้างตัวตนออนไลน์'
  },
  {
    name: 'Business Website',
    price: '7,900.-',
    period: 'เริ่มต้น',
    baht: 'ประมาณ $230',
    description: 'เพิ่มความน่าเชื่อถือด้วยข้อมูลที่ครบถ้วน พร้อมระบบบทความเพื่อ SEO',
    features: [
      'เว็บไซต์ 3-4 หน้า (Home, Service, Blog, etc.)',
      'ฟรี! Domain + Hosting 1 ปีแรก',
      'ระบบบทความ (Blog) รองรับการทำ SEO',
      'รองรับ Google Search Console & Analytics',
      'Custom Design ตามสไตล์แบรนด์',
      'Contact & inquiry forms',
      'Social media integration',
      '2 สัปดาห์ support',
      '3-4 สัปดาห์จัดส่ง'
    ],
    highlight: true,
    bestFor: 'ธุรกิจ SME และ Startup'
  },
  {
    name: 'Mini E-Commerce',
    price: '15,900.-',
    period: 'เริ่มต้น',
    baht: 'ประมาณ $460',
    description: 'เปิดร้านค้าออนไลน์ขนาดเล็ก ลงสินค้าพร้อมขายได้ทันที',
    features: [
      'ระบบรายการสินค้า & ตะกร้าสินค้า',
      'ฟรี! Domain + Hosting 1 ปีแรก',
      'แจ้งเตือนออเดอร์ใหม่ผ่าน Line / Gmail',
      'ชำระเงินแบบแนบสลิป (ไม่ต้องมีหลังบ้านซับซ้อน)',
      'SSL Certificate ปลอดภัยสำหรับธุรกรรม',
      'Mobile responsive',
      'Inventory tracking',
      '1 เดือน support',
      '4-6 สัปดาห์จัดส่ง'
    ],
    highlight: false,
    bestFor: 'ร้านค้าออนไลน์ ธุรกิจ E-Commerce'
  },
  {
    name: 'Web App & Custom SaaS',
    price: '25,000.-',
    period: 'เริ่มต้น',
    baht: 'ประมาณ $720',
    description: 'ระบบเฉพาะทางที่มีการจัดการข้อมูล Database และ User',
    features: [
      'ระบบสมาชิก Login/Register',
      'ฟรี! Domain + Hosting 1 ปีแรก',
      'Dashboard หลังบ้านจัดการข้อมูล',
      'เชื่อมต่อ API หรือ Third-party',
      'Scalable Architecture รองรับผู้ใช้จำนวนมาก',
      'Custom functionality',
      'Database integration',
      'Documentation & training',
      '1 เดือน support',
      '6-8 สัปดาห์จัดส่ง'
    ],
    highlight: false,
    bestFor: 'SaaS, ระบบภายใน, Web Applications'
  }
]