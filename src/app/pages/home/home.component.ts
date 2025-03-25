import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  videoUrl: SafeResourceUrl = '';
 
  @ViewChild('youtubeIframe') youtubeIframe!: ElementRef;
  @ViewChild('videoModal') videoModal!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    // Ensure the video stops when the modal is closed
    this.videoModal.nativeElement.addEventListener('hide.bs.modal', () => {
      this.stopVideo();
    });
  }

  loadVideo(videoId: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
  }

  stopVideo() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(''); // Clears the iframe to stop video playback
  } 
}
