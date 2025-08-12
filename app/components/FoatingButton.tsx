// components/FloatingContact.tsx
import { useState } from 'react'
import { Mail, Phone, MessageSquare, Plus } from 'lucide-react'

export default function FloatingContact () {
  const [open, setOpen] = useState(false)

  return (
    <div className='fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50'>
      {open && (
        <>
          {/* Email */}
          <a
            href='mailto:rundee.ads@gmail.com'
            className='flex items-center gap-2 px-3 py-2 bg-white shadow-md rounded-full border border-gray-200 hover:bg-gray-50 transition'
          >
            <Mail size={18} />
            <span>Email</span>
          </a>

          {/* LINE */}
          <a
            href='https://line.me/ti/p/@655rkaej'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-3 py-2 bg-green-500 text-white shadow-md rounded-full hover:bg-green-600 transition'
          >
            <MessageSquare size={18} />
            <span>LINE</span>
          </a>

          {/* Phone */}
          <a
            href='tel:0954965989'
            className='flex items-center gap-2 px-3 py-2 bg-blue-500 text-white shadow-md rounded-full hover:bg-blue-600 transition'
          >
            <Phone size={18} />
            <span>Phone</span>
          </a>
        </>
      )}

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-transform duration-300 ${
          open ? 'rotate-45' : 'rotate-0'
        }`}
      >
        <Plus size={24} />
      </button>
    </div>
  )
}
