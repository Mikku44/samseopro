import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { MENU } from '~/const/app'
import { FaChevronDown } from 'react-icons/fa' // Example icon for toggle

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false)
  // Track which sub-menu is expanded
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null)
  
  const location = useLocation()

  function handleOpen() {
    setIsOpen(prev => !prev)
    setExpandedSubMenu(null) // Reset submenus when closing/opening drawer
  }

  const toggleSubMenu = (label: string) => {
    setExpandedSubMenu(expandedSubMenu === label ? null : label)
  }

  return (
    <nav className='md:hidden flex'>
      <button onClick={handleOpen}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='md:size-[36px] size-[32px] hover:opacity-80 text-white'
          viewBox='0 0 24 24'
        >
          <path fill='currentColor' d='M3 14.5q-.2 0-.35-.15T2.5 14t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15m0-4q-.2 0-.35-.15T2.5 10t.15-.35T3 9.5t.35.15t.15.35t-.15.35t-.35.15M6 19q-.425 0-.712-.288T5 18t.288-.712T6 17t.713.288T7 18t-.288.713T6 19m0-4q-.425 0-.712-.288T5 14t.288-.712T6 13t.713.288T7 14t-.288.713T6 15m0-4q-.425 0-.712-.288T5 10t.288-.712T6 9t.713.288T7 10t-.288.713T6 11m0-4q-.425 0-.712-.288T5 6t.288-.712T6 5t.713.288T7 6t-.288.713T6 7m4 8.5q-.625 0-1.062-.437T8.5 14t.438-1.062T10 12.5t1.063.438T11.5 14t-.437 1.063T10 15.5m0-4q-.625 0-1.062-.437T8.5 10t.438-1.062T10 8.5t1.063.438T11.5 10t-.437 1.063T10 11.5m0 7.5q-.425 0-.712-.288T9 18t.288-.712T10 17t.713.288T11 18t-.288.713T10 19m0-12q-.425 0-.712-.288T9 6t.288-.712T10 5t.713.288T11 6t-.288.713T10 7m0 14.5q-.2 0-.35-.15T9.5 21t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15m0-18q-.2 0-.35-.15T9.5 3t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15m4 12q-.625 0-1.062-.437T12.5 14t.438-1.062T14 12.5t1.063.438T15.5 14t-.437 1.063T14 15.5m0-4q-.625 0-1.062-.437T12.5 10t.438-1.062T14 8.5t1.063.438T15.5 10t-.437 1.063T14 11.5m0 7.5q-.425 0-.712-.288T13 18t.288-.712T14 17t.713.288T15 18t-.288.713T14 19m0-12q-.425 0-.712-.288T13 6t.288-.712T14 5t.713.288T15 6t-.288.713T14 7m0 14.5q-.2 0-.35-.15T13.5 21t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15m0-18q-.2 0-.35-.15T13.5 3t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15M18 19q-.425 0-.712-.288T17 18t.288-.712T18 17t.713.288T19 18t-.288.713T18 19m0-4q-.425 0-.712-.288T17 14t.288-.712T18 13t.713.288T19 14t-.288.713T18 15m0-4q-.425 0-.712-.288T17 10t.288-.712T18 9t.713.288T19 10t-.288.713T18 11m0-4q-.425 0-.712-.288T17 6t.288-.712T18 5t.713.288T19 6t-.288.713T18 7m3 7.5q-.2 0-.35-.15T20.5 14t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15m0-4q-.2 0-.35-.15T20.5 10t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15' />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 bg-black/80 backdrop-blur-sm h-screen z-40'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className='fixed top-0 right-0 h-full w-[280px] bg-[#1a1a1a] z-50 p-6 flex flex-col gap-6 shadow-2xl'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button
                className='self-end text-white text-2xl'
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              <div className='flex flex-col gap-2 text-lg'>
                {MENU.map(menu => {
                  const hasSubMenu = menu.subMenu && menu.subMenu.length > 0
                  const isActive = location.pathname === menu.href
                  const isExpanded = expandedSubMenu === menu.label

                  return (
                    <div key={menu.label} className="flex flex-col">
                      {/* Main Item */}
                      <div className="flex items-center justify-between">
                        <Link
                          to={hasSubMenu ? "#" : menu.href}
                          onClick={(e) => {
                            if (hasSubMenu) {
                              e.preventDefault()
                              toggleSubMenu(menu.label)
                            } else {
                              setIsOpen(false)
                            }
                          }}
                          className={`flex-1 py-2 transition-colors ${
                            isActive ? 'text-blue-800 font-semibold' : 'text-white'
                          }`}
                        >
                          {menu.label}
                        </Link>
                        
                        {hasSubMenu && (
                          <motion.button
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            onClick={() => toggleSubMenu(menu.label)}
                            className="text-white p-2"
                          >
                            <FaChevronDown size={14} />
                          </motion.button>
                        )}
                      </div>

                      {/* Sub Menu Items */}
                      <AnimatePresence>
                        {hasSubMenu && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col pl-4 border-l border-white/10 ml-1"
                          >
                            {menu.subMenu.map(sub => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="py-3 flex flex-col"
                              >
                                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                                  {sub.icon && <sub.icon className="text-blue-800" />}
                                  {sub.label}
                                </div>
                                <span className="text-[10px] text-white/50 leading-tight">
                                  {sub.desc}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              <div className='mt-auto flex items-center gap-3'>
                <Link
                  to='/contact-us'
                  onClick={() => setIsOpen(false)}
                  className='flex-1 bg-blue-800 text-white text-center py-3 rounded-lg font-medium hover:opacity-90'
                >
                  ติดต่อเรา
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}