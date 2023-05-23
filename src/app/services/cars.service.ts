import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  static nextId = 5;

  cars: Car[] = [
    {
      id: 1,
      imageUrl:
        'https://1.bp.blogspot.com/-UDeSbQOl6Xw/YBbHmuETpWI/AAAAAAADcA0/1GtFMcj9y8AD82pAPcotqMWESxTfLuJEwCNcBGAsYHQ/s2048/248334_XC90_Plug-In_Hybrid_Inscription_T8_in_Birch_Light_Metallic.jpg',
      model: 'Volvo XC90',
      description:
        'The Volvo XC90 is a mid-size luxury crossover SUV manufactured and marketed by Volvo Cars since 2002 and now in its second generation.',
      type: 'SUV',
    },
    {
      id: 2,
      imageUrl:
        'https://1.bp.blogspot.com/-UDeSbQOl6Xw/YBbHmuETpWI/AAAAAAADcA0/1GtFMcj9y8AD82pAPcotqMWESxTfLuJEwCNcBGAsYHQ/s2048/248334_XC90_Plug-In_Hybrid_Inscription_T8_in_Birch_Light_Metallic.jpg',
      model: 'Volvo XC90',
      description:
        'The Volvo XC90 is a mid-size luxury crossover SUV manufactured and marketed by Volvo Cars since 2002 and now in its second generation.',
      type: 'SUV',
    },
    {
      id: 3,
      imageUrl:
        'https://1.bp.blogspot.com/-UDeSbQOl6Xw/YBbHmuETpWI/AAAAAAADcA0/1GtFMcj9y8AD82pAPcotqMWESxTfLuJEwCNcBGAsYHQ/s2048/248334_XC90_Plug-In_Hybrid_Inscription_T8_in_Birch_Light_Metallic.jpg',
      model: 'Volvo XC90',
      description:
        'The Volvo XC90 is a mid-size luxury crossover SUV manufactured and marketed by Volvo Cars since 2002 and now in its second generation.',
      type: 'SUV',
    },
    {
      id: 4,
      imageUrl:
        'https://1.bp.blogspot.com/-UDeSbQOl6Xw/YBbHmuETpWI/AAAAAAADcA0/1GtFMcj9y8AD82pAPcotqMWESxTfLuJEwCNcBGAsYHQ/s2048/248334_XC90_Plug-In_Hybrid_Inscription_T8_in_Birch_Light_Metallic.jpg',
      model: 'Volvo XC90',
      description:
        'The Volvo XC90 is a mid-size luxury crossover SUV manufactured and marketed by Volvo Cars since 2002 and now in its second generation.',
      type: 'SUV',
    },
  ];

  constructor() {}

  getCars(): Car[] {
    return this.cars;
  }

  getCar(id: number): Car | undefined {
    return this.cars.find((car) => car.id === id);
  }
}
