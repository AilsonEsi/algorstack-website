// mailchimp.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private mailchimpUrl = 'https://us17.api.mailchimp.com/3.0/lists/00dd5a8102/members';
  private hubspotUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
  private backendUrl = 'http://localhost:3000/request-subscribe'; // Your Node.js server
  private apiKey = '5c248bbafaa1e0a6fddf53093cf1b02a-us17';
  private hubspotAccessToken = 'pat-na1-7397e872-a1bf-42a7-ba1c-5ce9879a1e6a';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  //Mailchimp
  subscribeToMailchimp(data: any): Observable<any> {
   return this.http.post<any>(this.backendUrl, data);
  }

  //Hubspot
  subscribeToHubSpot(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Authorization': `Bearer ${this.hubspotAccessToken}`
    });

    const payload = {
      properties: {
        email: data.email,
        firstname: data.name,
      }
    };

    return this.http.post(this.hubspotUrl, payload, { headers });
  }

}
