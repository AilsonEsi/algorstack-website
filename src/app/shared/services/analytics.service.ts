// src/app/services/analytics.service.ts

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private trackingId = 'G-2T8GE2JM0N'; // replace with your actual ID

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  init() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Only load if not already loaded
    if ((<any>window).gtag) return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.trackingId}');
    `;
    document.head.appendChild(script2);
  }
}
