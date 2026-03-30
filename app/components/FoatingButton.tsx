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
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6 z-[60]">
          <div className="glass-card p-8 shadow-2xl max-w-sm w-full relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={20} className="text-white" />
            </button>

            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-full inline-block text-sm font-bold backdrop-blur-sm">
                LINE Official Account
              </div>
              <h3 className="text-xl font-bold text-white">Scan to Add Friend</h3>

              <div className="bg-white/10 p-4 rounded-2xl border-2 border-dashed border-white/30 backdrop-blur-sm">
                <img
                  src={qrCodeImage}
                  alt="Line QR Code"
                  className="w-full aspect-square object-contain rounded-lg"
                />
              </div>

              <div className="text-white/80 text-sm">
                ID: <span className="font-mono font-bold text-white">{lineID}</span>
              </div>

              <a
                target='_blank'
                href={`https://line.me/ti/p/${lineID}`}
                className="block w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg"
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
            className='flex items-center gap-3 px-5 py-2.5 glass-button text-white shadow-xl hover:bg-white/30 transition-all hover:-translate-x-1'
          >
            <span className="text-sm font-medium">Email Us</span>
            <div className="bg-white/20 p-1.5 rounded-full"><Mail size={18} /></div>
          </a>

          {/* LINE Toggle QR */}
          <button
            onClick={() => setShowQR(true)}
            className='flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl rounded-full hover:from-green-600 hover:to-emerald-700 transition-all hover:-translate-x-1'
          >
            <span className="text-sm font-bold text-white">Line QR Code</span>
            <div className="bg-white/20 p-1.5 rounded-full"><MessageSquare size={18} /></div>
          </button>

          {/* Phone */}
          <a
            target='_blank'
            href='tel:0954965989'
            className='flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all hover:-translate-x-1'
          >
            <span className="text-sm font-bold">Call Now</span>
            <div className="bg-white/20 p-1.5 rounded-full"><Phone size={18} /></div>
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`p-4 shadow-2xl rounded-full transition-all duration-500 group backdrop-blur-md border border-white/20 ${
          open 
            ? 'bg-slate-800/80 text-white rotate-[135deg]' 
            : 'bg-gradient-to-br from-red-500 to-pink-600 text-white hover:scale-110'
        }`}
      >
        <Plus size={28} className="group-active:scale-90 transition-transform" />
      </button>
    </div>
  )
}