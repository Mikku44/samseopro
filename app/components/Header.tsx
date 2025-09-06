import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // << ใช้ตรวจเส้นทางปัจจุบัน

  const menuList = [
    { href: "/", label: "หน้าแรก", id: 1 },
    { href: "/services/seo-training-service", label: "คอร์สอบรม SEO แบบมืออาชีพ", id: 2 },
    { href: "/contact-us", label: "ติดต่อเรา", id: 3 },
  ];

  return (
    <header className="bg-[#121b2a]">
      <div className="container max-w-7xl px-4 mx-auto flex items-center justify-between py-2">
        <a href="/" className="text-xl font-bold">
          <img src="/icon.png" className="w-[100px]" alt="rudeeads logo" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuList?.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                to={item.href}
                key={item.id}
                className={`text-sm font-medium border-b-2 duration-200 ${
                  isActive
                    ? "text-white border-primary"
                    : "text-white border-transparent hover:text-primary hover:border-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-[#121b2a] border-t border-gray-700">
          <ul className="flex flex-col space-y-2 p-4">
            {menuList?.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm font-medium py-2 ${
                      isActive
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
