import { Component, inject } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  cars: Car[] = [];
  carsService: CarsService = inject(CarsService);

  constructor() {
    this.cars = this.carsService.getCars();
  }
}
