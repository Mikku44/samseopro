import { Link } from "@remix-run/react"
import { Search } from "lucide-react"



export default function Header() {
  return (
    <header className="border-b">
      <div className="container  max-w-7xl mx-auto flex items-center justify-between py-4">
        <span className="text-xl font-bold">SamSEOPro</span>
        {/* <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">หน้าหลัก</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary">ติดต่อ</Link>
        </nav> */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <input type="search" placeholder="Search" className="w-[200px] pl-8" />
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          </div>
          <button className="md:hidden">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
