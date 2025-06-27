import { Component, ElementRef, Renderer2, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isHome: boolean = false;
 @Input() navigateToSection!: (fragment: string) => void;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        this.isHome = !(url.includes('services') || url.includes('jobs') || url.includes('about_us'));
        this.updateNavbar();
      }
    });
  }

  ngAfterViewInit(): void {
    const navbar = this.elRef.nativeElement.querySelector("#navbar");
    const toggler = this.elRef.nativeElement.querySelector("#navbar-toggler-button");

    const updateNavbarOnScroll = () => {
      if (this.isHome) {
        if (window.scrollY > 50 || navbar.classList.contains("nav-open")) {
          navbar.style.background = "linear-gradient(135deg, #1EB2CC, #006EBC)";
        } else {
          navbar.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))";
        }
      } else {
        navbar.style.background = "linear-gradient(135deg, #1EB2CC, #006EBC)";
      }
    };

    toggler.addEventListener("click", function () {
      navbar.classList.toggle("nav-open");
      updateNavbarOnScroll();
    });

    window.addEventListener("scroll", updateNavbarOnScroll);
    updateNavbarOnScroll(); // Initial state
  }

  updateNavbar() {
    const navbar = this.elRef.nativeElement.querySelector("#navbar");

    if (this.isHome) {
      navbar.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))";
    } else {
      navbar.style.background = "linear-gradient(135deg, #1EB2CC, #006EBC)";
    }
  }
}
