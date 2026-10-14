import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '~/lib/i18n';
import { TIKTOK_PIXEL_ID, trackTiktokPageview } from '~/lib/tiktok';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
} from "react-router";
import type { LinksFunction } from "react-router";


import "~/app.css";


export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "icon",
    href: "/icon1x1.png"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // Define the GTM script as a string constant to ensure consistency
  const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55FSS299');`;

  // TikTok Pixel base code — https://ads.tiktok.com/help/article/tiktok-pixel
  const tiktokPixelScript = `!function (w, d, t) {
w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._c=ttq._c||{},ttq._c[e]=o,ttq._o=ttq._o||{},ttq._o[e]=n||{};var a=d.createElement("script");a.type="text/javascript",a.async=!0,a.src=r+"?sdkid="+e+"&lib="+t;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(a,s)};
ttq.load('${TIKTOK_PIXEL_ID}');
ttq.page();
}(window, document, 'ttq');`;

  return (
    <html lang={i18n.language || 'th'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: gtmScript }}
        />
        <script
          id="tiktok-pixel"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: tiktokPixelScript }}
        />
      </head>
      <body>
        <noscript suppressHydrationWarning>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55FSS299"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// 3. The default export is the "App" entry point
export default function App() {
  const location = useLocation();

  // React Router เป็น SPA — ยิง ttq.page() ทุกครั้งที่เปลี่ยนหน้า
  // (ครั้งแรก base code ใน <head> ยิงให้แล้ว ส่วนครั้งถัดไป effect นี้ดูแล)
  useEffect(() => {
    trackTiktokPageview();
  }, [location.pathname, location.search]);

  return <Outlet />;
}

// 4. Error Boundary handles 404s and unexpected crashes
export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}