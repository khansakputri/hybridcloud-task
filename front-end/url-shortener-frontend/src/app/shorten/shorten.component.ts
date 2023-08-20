import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css']
})
export class ShortenComponent {
  fullUrl: string = '';
  shortenedUrl: string | null = null;

  constructor(private http: HttpClient) { }

  shortenUrl() {
    this.http.post<any>('/api/shorten', { full: this.fullUrl }).subscribe(response => {
      this.shortenedUrl = response.short;
    }, error => {
      console.error(error);
      this.shortenedUrl = null;
    });
  }
}
