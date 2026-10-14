export const TIKTOK_PIXEL_ID = "DB681IRC77U7A7QI87R0";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ttq?: any;
  }
}

type TiktokEventName =
  | "ViewContent"
  | "Contact"
  | "SubmitForm"
  | "AddToCart"
  | "InitiateCheckout"
  | "CompletePayment"
  | "Search"
  | "Download";

/** ส่ง event ไปยัง TikTok Pixel (ปลอดภัยถ้า pixel ยังโหลดไม่เสร็จ) */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function trackTiktokEvent(event: TiktokEventName, params?: Record<string, any>) {
  if (typeof window === "undefined") return;
  try {
    window.ttq?.track?.(event, params);
  } catch {
    // ignore tracking errors - ไม่ควรทำให้เว็บพัง
  }
}

/** ส่ง pageview (ใช้ตอนเปลี่ยนหน้าใน SPA) */
export function trackTiktokPageview() {
  if (typeof window === "undefined") return;
  try {
    window.ttq?.page?.();
  } catch {
    // ignore
  }
}
