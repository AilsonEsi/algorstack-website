import { Component, HostListener, isDevMode } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as AOS from 'aos';
import { AnalyticsService } from './shared/services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'algorstack';
  isVisible = false;
  isNavigating = false;

  constructor(private router: Router, private analytics: AnalyticsService) {
    if (!isDevMode()) {
      this.analytics.init(); // Only initialize in production
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isNavigating = true;

        // Optional: Reset after a delay (simulate loading)
        setTimeout(() => {
          this.isNavigating = false;
        }, 500);
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

