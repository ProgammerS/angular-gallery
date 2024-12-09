import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://picsum.photos/400";  // URL for a random 500x500 image

  constructor(private http: HttpClient) {}

  getRandomImage(): Observable<Blob> {
    // Fetching the image as a Blob
    return this.http.get(this.url, { responseType: 'blob' });
  }
}
