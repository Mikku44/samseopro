import { FaSearch, FaGoogle, FaDesktop } from "react-icons/fa"

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
        href: "/services/ads-training-service",
        label: "คอร์สอบรม Google Ads",
        desc: "เรียนกับอดีตคนใน Google ตัวจริง",
        icon: FaGoogle,
      },
      {
        href: "/services/web-maker",
        label: "บริการออกแบบเว็บไซต์",
        desc: "เว็บไซต์สวย ใช้งานง่าย รองรับ SEO",
        icon: FaDesktop,
      },
    ],
  },
  {
    href: "/google-ads-service", label: "Google Ads Service",
  },
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