import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url = "http://localhost:5050/qrcode/generate";

  constructor(private http: HttpClient) { }

  getqrcode(text) : Observable<any> {
  	let data  = { text: text };
  	return this.http.post(this.url, data);
  }
}
