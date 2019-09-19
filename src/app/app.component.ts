import { AuthService } from './../core/services/auth.service';
import { CartService } from './../core/services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public cart: CartService,
    public auth: AuthService  
  ) {

  }
  
}
