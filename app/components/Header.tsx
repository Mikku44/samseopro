import { NavigationMenu } from '@base-ui-components/react/navigation-menu'
import { Accordion } from '@base-ui-components/react/accordion'
import '../css/theme.css'
import styles from '../css/index.module.css'
import { useState, useEffect } from 'react'

const menuList = [
  { href: '/', content: [], label: 'หน้าแรก', id: 1 },
  {
    href: '/services/seo-training-service',
    content: [
      {
        href: '/services/seo-training-service',
        description: 'เพิ่มอันดับเว็บไซต์ติดหน้าแรก Google',
        title: 'บริการรับทำ SEO แบบมืออาชีพ',
        icon: ''
      },
      {
        href: '/services/ads-training-service',
        description: 'โฆษณา Google Ads ให้ได้ผลลัพธ์จริง',
        title: 'คอร์สอบรม Google Ads แบบมืออาชีพ',
        icon: ''
      }
    ],
    label: 'คอร์สเรียน',
    id: 2
  },
  {
    href: '/services/web-maker',
    content: [],
    label: 'บริการออกแบบเว็บไซต์',
    id: 4
  }
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ─── Desktop + Tablet Nav ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          scrolled
            ? 'py-2 bg-[#0a0f1e]/90 backdrop-blur-xl shadow-[0_4px_32px_-4px_rgba(0,0,0,0.6)]  border-white/5'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 group">
            <img
              src="/icon.png"
              alt="rudeeads logo"
              className="h-9 w-auto filter brightness-110 drop-shadow-[0_0_10px_rgba(99,179,237,0.4)] group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <NavigationMenu.Root className={`${styles.Root} hidden md:block`}>
            <NavigationMenu.List className={`${styles.List} flex items-center gap-1`}>
              {menuList.map(item =>
                !item.content?.length ? (
                  <NavigationMenu.Item key={item.id}>
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5 group"
                    >
                      {item.label}
                     
                    </Link>
                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item key={item.id}>
                    <NavigationMenu.Trigger
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5 group"
                    >
                      {item.label}
                      <NavigationMenu.Icon className={`${styles.Icon} transition-transform duration-200 group-data-[state=open]:rotate-180`}>
                        <ChevronDownIcon />
                      </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className={styles.Content}>
                      <ul className="grid gap-2 p-3 w-[340px]">
                        {item.content.map(sub => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                            >
                              <span className="text-2xl mt-0.5 shrink-0">{sub.icon}</span>
                              <div>
                                <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
                                  {sub.title}
                                </p>
                                <p className="text-xs text-white/50 mt-0.5 leading-relaxed">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                )
              )}
            </NavigationMenu.List>

            <NavigationMenu.Portal>
              <NavigationMenu.Positioner
                className={styles.Positioner}
                sideOffset={12}
                style={{ zIndex: 9999 }}
                collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
                collisionAvoidance={{ side: 'none' }}
              >
                <NavigationMenu.Popup
                  className={`${styles.Popup} bg-[#0d1426]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)]`}
                >
                  <NavigationMenu.Arrow className={styles.Arrow}>
                    <ArrowSvg />
                  </NavigationMenu.Arrow>
                  <NavigationMenu.Viewport className={styles.Viewport} />
                </NavigationMenu.Popup>
              </NavigationMenu.Positioner>
            </NavigationMenu.Portal>
          </NavigationMenu.Root>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="/contact-us"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] transition-all duration-300"
            >
              ติดต่อเรา
              <ArrowRight />
            </a>

            {/* Hamburger — mobile only */}
            <button
              aria-label={mobileOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
            >
              <span
                className={`absolute block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Drawer ─── */}
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <nav
        aria-label="Mobile navigation"
        className={`md:hidden fixed top-0 right-0 bottom-0 z-[999] w-[min(320px,90vw)] bg-[#0b1120] border-l border-white/8 flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 ">
          <a href="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/icon.png"
              alt="rudeeads logo"
              className="h-8 w-auto filter brightness-110"
            />
          </a>
          <button
            aria-label="ปิดเมนู"
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          <ul className="space-y-1">
            {menuList.map((item, i) =>
              !item.content?.length ? (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.id}>
                  <Accordion.Root >
                    <Accordion.Item value={item.label}>
                      <Accordion.Header>
                        <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 group">
                          {item.label}
                          <ChevronDownIcon className="h-4 w-4 opacity-50 group-hover:opacity-80 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-400" />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Panel className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                        <ul className="mt-1 ml-4 pl-4 border-l border-white/10 space-y-1 pb-2">
                          {item.content.map(sub => (
                            <li key={sub.href}>
                              <a
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg group"
                              >
                                <span className="text-lg">{sub.icon}</span>
                                <div>
                                  <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-200">
                                    {sub.title}
                                  </p>
                                  <p className="text-xs text-white/35 mt-0.5">{sub.description}</p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion.Root>
                </li>
              )
            )}
          </ul>
        </div>

        {/* CTA at bottom */}
        <div className="px-4 pb-8 pt-4 border-t border-white/8">
          <a
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:shadow-[0_0_32px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            ติดต่อเรา
            <ArrowRight />
          </a>
          <p className="text-center text-xs text-white/25 mt-3">© 2024 Rudeeads. All rights reserved.</p>
        </div>
      </nav>
    </>
  )
}

/* ── Helpers ── */

function Link(props: NavigationMenu.Link.Props & { className?: string }) {
  const { className, ...rest } = props
  return (
    <NavigationMenu.Link
      className={className}
      render={<a href={props.href} />}
      {...rest}
    />
  )
}

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className={styles.ArrowFill}
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className={styles.ArrowOuterStroke}
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className={styles.ArrowInnerStroke}
      />
    </svg>
  )
}