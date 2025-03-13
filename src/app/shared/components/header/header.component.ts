import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbarBackground: string = 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))'; 

  @HostListener('window:scroll', [])
onScroll(): void {
  if (window.scrollY > 50) {
    this.navbarBackground = 'linear-gradient(135deg, rgba(30, 178, 204, 0.9), rgba(0, 110, 188, 0.9))';
  } else {
    this.navbarBackground = 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))'; // Lighter gradient on top
  }
}
 
}
