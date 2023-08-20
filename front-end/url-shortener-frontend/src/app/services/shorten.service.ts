import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ShortenService {
    constructor(private http: HttpClient) { }

    getURLs(): Observable<any> {
        const url = environment.baseURL;
        return this.http.get(url);
    }
}
