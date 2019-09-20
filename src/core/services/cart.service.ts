import { AuthService } from './auth.service';
import { Hotel, Room } from './../../app/model/hotel';
import { CartItem } from './../../app/model/cart-item';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items: CartItem[] = [];

    constructor(private auth: AuthService) {}

    addToCart(hotel: Hotel, room: Room) {
        this.items = [
            ...this.items,
        {
            hotel,
            room,
            creationDate: Date.now()
        }
      ];
    }

    removeFromCart(cartItem: CartItem) {
      this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate);
    }

    proceed() {
        window.alert(`
        Total item: ${this.items.length},
        Order by: ${this.auth.data.name}
        `);
    }

}

