import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  videoUrl: SafeResourceUrl = '';
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
 
  @ViewChild('youtubeIframe') youtubeIframe!: ElementRef;
  @ViewChild('videoModal') videoModal!: ElementRef;

  constructor(private fb: FormBuilder, private contactService: ContactService, private sanitizer: DomSanitizer) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.subscribeToMailchimp(this.contactForm.value).subscribe(
        () => {
          this.successMessage = 'Message sent successfully!';
          this.contactForm.reset();
        },
        (error) => {
          this.errorMessage = 'Failed to send message. Please try again later.';
        }
      );
    }
  }

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
