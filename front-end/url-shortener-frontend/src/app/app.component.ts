import { Component } from '@angular/core';
import { ShortenService } from './services/shorten.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShortenService]
})
export class AppComponent {
  title = 'url-shortener-frontend';
}
