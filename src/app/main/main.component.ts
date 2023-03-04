import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  albums: any;
  photos: any;
  constructor(private http: HttpClient) {
    http
      .get('https://jsonplaceholder.typicode.com/albums')
      .subscribe((response) => {
        this.albums = response
      });

    http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((response) => {
        this.photos = response;
      });
  }

  // getFirstTenData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl).pipe(
  //     map((response) => response.slice(0, 10)) // İlk 10 veriyi al
  //   );
  // }
}
