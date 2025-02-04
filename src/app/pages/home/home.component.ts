import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  videoUrl: SafeResourceUrl;
 
  @ViewChild('youtubeIframe') youtubeIframe!: ElementRef;
  @ViewChild('videoModal') videoModal!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {
    // Sanitize URL to prevent security issues
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/Y7f98aduVJ8'
    );
  }
  
  ngAfterViewInit() {

    this.videoModal.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.stopVideo();
    });
    
    new Swiper('.swiper-container1', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 120,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 120,
        },
      },
    });

    new Swiper('.swiper-container2', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    });
  }

  stopVideo() {
    this.youtubeIframe.nativeElement.src = this.youtubeIframe.nativeElement.src; // Reset iframe src
  }
}
