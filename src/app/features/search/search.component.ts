import { CartService } from './../../../core/services/cart.service';
import { Hotel, Room } from './../../model/hotel';
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
  active: Hotel;
  activeImage: string;

  constructor(
    private http: HttpClient,
    private cart: CartService
    ) {
    this.searchHotels(this.text);
  }



  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>('http://localhost:3000/hotels?q=' + text)
    .subscribe(result => {
      this.hotels = result;
      // this.active = this.hotels[0];
      this.setActive(this.hotels[0]);
    });
  }

  setActive(hotel: Hotel) {
    this.active = hotel;
    this.activeImage = hotel.images[0];
  }

  sendEmail({email, msg}) {
    window.alert(`sent:
    ${email}
    ${msg}
    ${this.active.email}
    `);
  }

  addToCart(room: Room, active: Hotel) {
    this.cart.addToCart(active, room);
  }

}
