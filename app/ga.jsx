"use client";

import Script from 'next/script';
import { useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation'

const trackingId = "UA-44444834-1";

export default function GaTag() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');

          window.prevURLForGA = window.location.pathname;
          window.setInterval(function() {
            var currentPathname = window.location.pathname;
            if(prevURLForGA != currentPathname) {
              prevURLForGA = currentPathname;
              window.gtag("config", '${trackingId}', {
                page_path: prevURLForGA,
              });
            }
          }, 1000);
          `,
        }}
      />
    </>
  );
}
