import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-form',
  template: `
  <form #f="ngForm" (submit)="search.emit(f.value.text)">
  <input
    type="text"
    placeholder="City (Rome or Milan)"
    [ngModel]="text"
    name="text"
  />
  <button type="submit">SEARCH</button>
  </form>
  `,
  styles: []
})
export class HotelFormComponent {
  @Input() text: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
}
