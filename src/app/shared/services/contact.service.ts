// mailchimp.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private mailchimpUrl:any = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://us17.api.mailchimp.com/3.0/lists/00dd5a8102/members`
    );
  private apiKey = 'x5c248bbafaa1e0a6fddf53093cf1b02a-us17';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  //Mailchimp
  subscribeToMailchimp(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `apikey ${this.apiKey}`
    });
    
    const payload = {
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.name,
        LNAME: '',
        SUBJECT: data.subject,
        MESSAGE: data.message
      }
    };
    
    return this.http.post<any>(this.mailchimpUrl, payload, { headers });
  }

}
