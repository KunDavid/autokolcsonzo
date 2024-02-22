import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  @Input() cars: any[] = [];
  @Output() carSelected = new EventEmitter<any>();

  constructor() {}

  selectCar(car: any) {
    this.carSelected.emit(car);
  }
}