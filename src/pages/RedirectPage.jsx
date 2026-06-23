import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const redirects = {
  "/academy/booklet": "https://www.figma.com/slides/AdcmoUcleIzn8gtGFtvEYK/Booklet-ArachnoVa-Academy-(BasPro)?node-id=2-439&t=e8wXSkLiHTiR4HfQ-1",
  "/academy/evaluation": "https://forms.gle/YWGea3bFusN9hc5E8",
  "/academy": "https://forms.gle/47BD69dSta8wDPrV8",
  "/client-evaluation": "https://forms.gle/JiMFkhp88KmL1xR89",
  "/open-recruitment": "https://forms.gle/sTQDcQKCpXgfa2b79",
};

export default function RedirectPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = redirects[pathname];
    if (url) {
      window.location.replace(url);
    }
  }, [pathname]);

  return null;
}
