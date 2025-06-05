import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactService } from 'src/app/shared/services/contact.service';
declare var Calendly: any;

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
  loading: boolean = false;
  calendlyLoaded: boolean = false;

  @ViewChild('youtubeIframe') youtubeIframe!: ElementRef;
  @ViewChild('videoModal') videoModal!: ElementRef;

  constructor(private fb: FormBuilder, private contactService: ContactService, private sanitizer: DomSanitizer, private renderer: Renderer2, private el: ElementRef) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {

      this.loading = true;

      this.contactService.subscribeToMailchimp(this.contactForm.value).subscribe({
        complete: () => {
          this.successMessage = 'Message sent successfully!';
          this.loading = false;
          this.contactForm.reset();
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.successMessage = '';
          }, 5000);
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = 'Failed to send message. Please try again later.';
          this.loading = false;
          // Hide error message after 5 seconds
          setTimeout(() => {
            this.errorMessage = '';
          }, 5000);
        }
      });
    }

    /*
      this.contactService.subscribeToHubSpot(this.contactForm.value).subscribe({
        next: (res) => {
          console.log('Contact created:', res);
          this.successMessage = 'Message sent successfully!';
          this.contactForm.reset();
        },
        error: (err) => {
          console.error('Erro ao criar contato:', err);
          this.errorMessage = 'Failed to send message. Please try again later.';
        }
      });
    }
*/
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // Ensure the video stops when the modal is closed
    this.videoModal.nativeElement.addEventListener('hide.bs.modal', () => {
      this.stopVideo();
    });
  }

  openCalendly() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/algorstack/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1' });
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
