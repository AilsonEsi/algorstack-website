// mailchimp.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private backendUrl = 'http://localhost:3000/request-subscribe'; // Your Node.js server

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  //Mailchimp
  subscribeToMailchimp(data: any): Observable<any> {
    return this.http.post<any>(this.backendUrl, data);
  }

}
