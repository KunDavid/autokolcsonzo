import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', pricePerDay: 50, availabilityStartDate: '2024-02-22', availabilityEndDate: '2024-03-22' },
    { id: 2, brand: 'Ford', model: 'Focus', pricePerDay: 60, availabilityStartDate: '2024-02-20', availabilityEndDate: '2024-03-15' },
    { id: 3, brand: 'Honda', model: 'Civic', pricePerDay: 55, availabilityStartDate: '2024-02-25', availabilityEndDate: '2024-03-20' },
    { id: 4, brand: 'Chevrolet', model: 'Malibu', pricePerDay: 65, availabilityStartDate: '2024-02-18', availabilityEndDate: '2024-03-25' },
    { id: 5, brand: 'Nissan', model: 'Altima', pricePerDay: 70, availabilityStartDate: '2024-02-21', availabilityEndDate: '2024-03-18' },
    { id: 6, brand: 'Hyundai', model: 'Elantra', pricePerDay: 45, availabilityStartDate: '2024-02-23', availabilityEndDate: '2024-03-17' },
    { id: 7, brand: 'Volkswagen', model: 'Jetta', pricePerDay: 55, availabilityStartDate: '2024-02-24', availabilityEndDate: '2024-03-19' },
    { id: 8, brand: 'Toyota', model: 'Camry', pricePerDay: 70, availabilityStartDate: '2024-02-26', availabilityEndDate: '2024-03-23' },
    { id: 9, brand: 'Ford', model: 'Fusion', pricePerDay: 65, availabilityStartDate: '2024-02-19', availabilityEndDate: '2024-03-24' },
    { id: 10, brand: 'Honda', model: 'Accord', pricePerDay: 75, availabilityStartDate: '2024-02-27', availabilityEndDate: '2024-03-22' },
    { id: 11, brand: 'Chevrolet', model: 'Impala', pricePerDay: 80, availabilityStartDate: '2024-02-28', availabilityEndDate: '2024-03-25' },
    { id: 12, brand: 'Nissan', model: 'Sentra', pricePerDay: 55, availabilityStartDate: '2024-02-20', availabilityEndDate: '2024-03-15' },
    { id: 13, brand: 'Hyundai', model: 'Sonata', pricePerDay: 60, availabilityStartDate: '2024-02-21', availabilityEndDate: '2024-03-16' },
    { id: 14, brand: 'Volkswagen', model: 'Passat', pricePerDay: 65, availabilityStartDate: '2024-02-22', availabilityEndDate: '2024-03-17' },
    { id: 15, brand: 'Toyota', model: 'Yaris', pricePerDay: 50, availabilityStartDate: '2024-02-23', availabilityEndDate: '2024-03-18' },
    { id: 16, brand: 'Ford', model: 'Escape', pricePerDay: 70, availabilityStartDate: '2024-02-24', availabilityEndDate: '2024-03-19' },
    { id: 17, brand: 'Honda', model: 'CR-V', pricePerDay: 80, availabilityStartDate: '2024-02-25', availabilityEndDate: '2024-03-20' },
    { id: 18, brand: 'Chevrolet', model: 'Equinox', pricePerDay: 75, availabilityStartDate: '2024-02-26', availabilityEndDate: '2024-03-21' },
    { id: 19, brand: 'Nissan', model: 'Rogue', pricePerDay: 65, availabilityStartDate: '2024-02-27', availabilityEndDate: '2024-03-22' },
    { id: 20, brand: 'Hyundai', model: 'Tucson', pricePerDay: 60, availabilityStartDate: '2024-02-28', availabilityEndDate: '2024-03-23' },
    { id: 21, brand: 'Volkswagen', model: 'Tiguan', pricePerDay: 75, availabilityStartDate: '2024-02-29', availabilityEndDate: '2024-03-24' }
  ];

  selectedCar: any;
  showReservationForm = false;
  searchDate: string = '';
  reservedCars: any[] = [];

  get filteredCars() {
    if (!this.searchDate) {
      return this.cars;
    }
    const searchDateObj = new Date(this.searchDate);
    return this.cars.filter(car =>
      new Date(car.availabilityStartDate) <= searchDateObj &&
      new Date(car.availabilityEndDate) >= searchDateObj
    );
  }

  reserve(car: any) {
    console.log('Foglalás:', car);
    this.selectedCar = car;
    this.showReservationForm = true;
  }

  onSubmit(formData: any) {
    console.log('Foglalás adatok:', formData);
    this.reservedCars.push(formData);
  }
}
