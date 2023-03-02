import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../pages/home/albums';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class AlbumService {

  albums:any[];

  constructor(private http:HttpClient){
    this.http.get<any[]>("https://jsonplaceholder.typicode.com/albums").subscribe(
      (data)=>{
        this.albums=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  
}
