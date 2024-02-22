import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  @Output() formSubmitted = new EventEmitter<any>();
  @Input({ required: true }) car: any;
  @Input( { required: true }) carName: string = "";

  reservationData = {
    car: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    startDate: '',
    endDate: ''
  };

  onSubmit() {
    this.reservationData.car = this.carName;
    console.log('Foglalás adatok:', this.reservationData);
    this.formSubmitted.emit(this.reservationData);
  }
}
