// mailchimp.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  //Mailchimp
  subscribeToMailchimp(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/request-subscribe`, data);
  }

}
