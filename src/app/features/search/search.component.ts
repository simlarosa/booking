import { Hotel } from './../../model/hotel';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  text = 'Milano';
  hotels: Hotel[];

  constructor(private http: HttpClient) { 
    this.searchHotels(this.text);
  }

  

  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>('http://localhost:3000/hotels?q=' + text)
    .subscribe(result => {
      this.hotels = result;
    });
  }

}
