import { ReactNode } from 'react'

// import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'
import { LinksFunction } from '@remix-run/react/dist/routeModules';
import FoatingButton from './FoatingButton';

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/icon.png",
      type: "image/jpg",
    },

  ];
};

export default function Layout ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className='flex min-h-screen flex-col'>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Playpen+Sans+Thai:wght@100..800&display=swap'
        rel='stylesheet'
      />

      <link rel="shortcut icon" href="icon.png" type="image/jpg" />

      <link
        href='https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap'
        rel='stylesheet'
      ></link>
      {/* <Banner /> */}
      <Header />
      <FoatingButton />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}
