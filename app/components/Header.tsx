// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation(); // << ใช้ตรวจเส้นทางปัจจุบัน

//   const menuList = [
//     { href: "/", label: "หน้าแรก", id: 1 },
//     { href: "/services/seo-training-service", label: "บริการรับทำ SEOแบบมืออาชีพ", id: 2 },
//     { href: "/services/ads-training-service", label: "บริการรับทำ SEOแบบมืออาชีพ", id: 3 },
//     { href: "/services/web-maker", label: "บริการออกแบบเว็บไซต์", id: 4 },
//     { href: "/contact-us", label: "ติดต่อเรา", id: 5 },
//   ];

//   return (
//     <header className="bg-[#121b2a]">
//       <div className="container max-w-7xl px-4 mx-auto flex items-center justify-between py-2">
//         <a href="/" className="text-xl font-bold">
//           <img src="/icon.png" className="w-[100px]" alt="rudeeads logo" />
//         </a>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {menuList?.map((item) => {
//             const isActive = location.pathname === item.href;
//             return (
//               <Link
//                 to={item.href}
//                 key={item.id}
//                 className={`text-sm font-medium border-b-2 duration-200 ${
//                   isActive
//                     ? "text-white border-primary"
//                     : "text-white border-transparent hover:text-primary hover:border-white"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl bg-transparent"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <nav className="md:hidden bg-[#121b2a] border-t border-gray-700">
//           <ul className="flex flex-col space-y-2 p-4">
//             {menuList?.map((item) => {
//               const isActive = location.pathname === item.href;
//               return (
//                 <li key={item.id}>
//                   <Link
//                     to={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`block text-sm font-medium py-2 ${
//                       isActive
//                         ? "text-primary"
//                         : "text-white hover:text-primary"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

import { NavigationMenu } from '@base-ui-components/react/navigation-menu'
import { Accordion } from '@base-ui-components/react/accordion'
import '../css/theme.css'
import styles from '../css/index.module.css'
import { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

const menuList = [
  { href: '/', content: [], label: 'หน้าแรก', id: 1 },
  {
    href: '/services/seo-training-service',

    content: [
      {
        href: '/services/seo-training-service',
        description: 'SEO',
        title: 'บริการรับทำ SEOแบบมืออาชีพ'
      },
      {
        href: '/services/ads-training-service',
        description: 'Google Ads',
        title: 'คอร์สอบรม Google Ads แบบมืออาชีพ'
      }
    ],
    label: 'คอร์สเรียน',
    id: 2
  },
  // {
  //   href: '/services/ads-training-service',

  //   content: [],
  //   label: 'บริการรับทำ SEOแบบมืออาชีพ',
  //   id: 3
  // },
  {
    href: '/services/web-maker',
    content: [],
    label: 'บริการออกแบบเว็บไซต์',
    id: 4
  }
  // { href: '/contact-us', content: [], label: 'ติดต่อเรา', id: 5 }
]

export default function Header () {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <>
      <NavigationMenu.Root
        className={`${styles.Root} sticky top-0 z-[99] py-2 shadow`}
      >
        <div className=' container-x mx-auto'>
          <NavigationMenu.List
            className={`${styles.List}  flex items-center justify-between`}
          >
            <Link href='/'>
              <a href='/' className='text-xl font-bold'>
                <img
                  src='/icon.png'
                  className='w-[100px]'
                  alt='rudeeads logo'
                />
              </a>
            </Link>

            <div className=' md:flex hidden justify-between '>
              {menuList.map(item =>
                item?.content?.length <= 0 ? (
                  <NavigationMenu.Item key={item.label}>
                    <Link className={styles.Trigger} href={item.href}>
                      {item.label}
                    </Link>
                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item key={item.label}>
                    <NavigationMenu.Trigger className={styles.Trigger}>
                      {item.label}
                      <NavigationMenu.Icon className={styles.Icon}>
                        <ChevronDownIcon />
                      </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={styles.Content}>
                      <ul className={styles.FlexLinkList}>
                        {item?.content?.map(item => (
                          <li key={item?.href}>
                            <Link className={styles.LinkCard} href={item?.href}>
                              <h3 className={styles.LinkTitle}>
                                {item?.title}
                              </h3>
                              <p className={styles.LinkDescription}>
                                {item?.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                )
              )}

              <a href='/contact-us' className='button bg-white px-4 w-[120px] rounded-full text-center'>
                ติดต่อเรา
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className='md:hidden text-[30px] text-white'
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <IoClose /> : <IoIosMenu />}
            </button>
          </NavigationMenu.List>

          <NavigationMenu.Portal>
            <NavigationMenu.Positioner
              className={styles.Positioner}
              sideOffset={10}
              collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
              collisionAvoidance={{ side: 'none' }}
            >
              <NavigationMenu.Popup className={styles.Popup}>
                <NavigationMenu.Arrow className={styles.Arrow}>
                  <ArrowSvg />
                </NavigationMenu.Arrow>
                <NavigationMenu.Viewport className={styles.Viewport} />
              </NavigationMenu.Popup>
            </NavigationMenu.Positioner>
          </NavigationMenu.Portal>
        </div>
      </NavigationMenu.Root>

      {mobileOpen && (
        <div className='md:hidden bg-[var(--color-gray-50)] sticky top-14 z-[99] shadow-md'>
          <ul className='flex flex-col p-4 space-y-2'>
            {menuList.map(item =>
              item?.content?.length <= 0 ? (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='block rounded-lg px-3 py-2 text-lg font-medium hover:bg-gray-200'
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.label}>
                  <Accordion.Root>
                    <Accordion.Item value={item.label}>
                      <Accordion.Header>
                        <Accordion.Trigger className='flex w-full items-center justify-between rounded-lg px-3 py-2 text-lg font-medium hover:bg-gray-200'>
                          {item.label}
                          <ChevronDownIcon className='h-5 w-5 transition-transform data-[state=open]:rotate-180' />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Panel className='pl-5 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden'>
                        <ul className='mt-2 space-y-1'>
                          {item?.content?.map(sub => (
                            <li key={sub.href}>
                              <a
                                href={sub.href}
                                className='block rounded-md px-3 py-2 text-sm hover:bg-gray-100'
                              >
                                {sub.title}
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
      )}
    </>
  )
}

function Link (props: NavigationMenu.Link.Props) {
  return (
    <NavigationMenu.Link
      render={
        // Use the `render` prop to render your framework's Link component
        // for client-side routing.
        // e.g. `<NextLink href={props.href} />` instead of `<a />`.
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a href={props.href} />
      }
      {...props}
    />
  )
}

function ChevronDownIcon (props: React.ComponentProps<'svg'>) {
  return (
    <svg width='10' height='10' viewBox='0 0 10 10' fill='none' {...props}>
      <path d='M1 3.5L5 7.5L9 3.5' stroke='currentcolor' strokeWidth='1.5' />
    </svg>
  )
}

function ArrowSvg (props: React.ComponentProps<'svg'>) {
  return (
    <svg width='20' height='10' viewBox='0 0 20 10' fill='none' {...props}>
      <path
        d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'
        className={styles.ArrowFill}
      />
      <path
        d='M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z'
        className={styles.ArrowOuterStroke}
      />
      <path
        d='M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z'
        className={styles.ArrowInnerStroke}
      />
    </svg>
  )
}
