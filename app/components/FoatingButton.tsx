// components/FloatingContact.tsx
import { useState } from 'react'
import { Mail, Phone, MessageSquare, Plus, X } from 'lucide-react'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const lineID = "RundeeAds"
  // Replace this URL with your actual QR code image path
  const qrCodeImage = "/line-qr.jpg"

  return (
    <div className='fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50'>

      {/* LINE QR Code Modal Overlay */}
      {showQR && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6 z-[60]">
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} className="text-slate-500" />
            </button>

            <div className="text-center space-y-4">
              <div className="bg-[#06C755] text-white py-2 px-4 rounded-full inline-block text-sm font-bold">
                LINE Official Account
              </div>
              <h3 className="text-xl font-bold text-slate-900">Scan to Add Friend</h3>

              <div className="bg-slate-50 p-4 rounded-2xl border-2 border-dashed border-slate-200">
                <img
                  src={qrCodeImage}
                  alt="Line QR Code"
                  className="w-full aspect-square object-contain rounded-lg"
                />
              </div>

              <div className="text-slate-500 text-sm">
                ID: <span className="font-mono font-bold text-slate-900">{lineID}</span>
              </div>

              <a
                target='_blank'
                href={`https://line.me/ti/p/${lineID}`}
                className="block w-full py-3 bg-[#06C755] text-white rounded-xl font-bold hover:bg-[#05b34c] transition-all"
              >
                Open in LINE App
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Menu Options */}
      {open && (
        <div className="flex flex-col items-end gap-3 mb-2 animate-in slide-in-from-bottom-4 duration-300">
          {/* Email */}
          <a
            target='_blank'
            href='mailto:rundee.ads@gmail.com'
            className='flex items-center gap-3 px-5 py-2.5 bg-white text-slate-700 shadow-xl rounded-full border border-slate-100 hover:bg-slate-50 transition-all hover:-translate-x-1'
          >
            <span className="text-sm font-medium">Email Us</span>
            <div className="bg-slate-100 p-1.5 rounded-full"><Mail size={18} /></div>
          </a>

          {/* LINE Toggle QR */}
          <button
            onClick={() => setShowQR(true)}
            className='flex items-center gap-3 px-5 py-2.5 bg-[#06C755] text-white shadow-xl rounded-full hover:bg-[#05b34c] transition-all hover:-translate-x-1'
          >
            <span className="text-sm font-bold text-white">Line QR Code</span>
            <div className="bg-white/20 p-1.5 rounded-full"><MessageSquare size={18} /></div>
          </button>

          {/* Phone */}
          <a
            target='_blank'
            href='tel:0954965989'
            className='flex items-center gap-3 px-5 py-2.5 bg-blue-600 text-white shadow-xl rounded-full hover:bg-blue-500 transition-all hover:-translate-x-1'
          >
            <span className="text-sm font-bold">Call Now</span>
            <div className="bg-white/20 p-1.5 rounded-full"><Phone size={18} /></div>
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`p-4 shadow-2xl rounded-full transition-all duration-500 group ${open ? 'bg-slate-800 text-white rotate-[135deg]' : 'bg-red-500 text-white hover:scale-110'
          }`}
      >
        <Plus size={28} className="group-active:scale-90 transition-transform" />
      </button>
    </div>
  )
}