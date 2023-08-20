import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShortenService } from '../services/shorten.service';
import { Shorten } from '../shorten';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css']
})
export class ShortenComponent implements OnInit{

  urls: Shorten[] = [];

  constructor(
    private shortenService: ShortenService
  ) {}

  ngOnInit() {
    this.shortenService.getURLs().subscribe({
      next: (urls) => {
        console.log(urls);
        this.urls = urls;
      },

      error: (error) => {
        console.log(error);
      },
    });
  }
}
