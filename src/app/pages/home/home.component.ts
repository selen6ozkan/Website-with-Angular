import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Album } from './albums';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

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
