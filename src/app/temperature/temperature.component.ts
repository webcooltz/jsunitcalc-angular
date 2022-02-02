import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  num1!: number;
  num2!: number;
  slider1!: number;
  slider2!: number;
  answer!: number | string;

  fahrenheit = 32;
  celsius = 0;

  // Slider Enum:
  // 1 - celsius
  // 2 - Fahrenheit
  // 3 - Kelvin

  set1Fahrenheit() {
    this.slider1 = 2;
  }

  set1Celsius() {
    this.slider1 = 1;
  }

  set1Kelvin() {
    this.slider1 = 3;
  }

  set2Fahrenheit() {
    this.slider2 = 2;
  }

  set2Celsius() {
    this.slider2 = 1;
  }

  set2Kelvin() {
    this.slider2 = 3;
  }

  convertTemp() {
    if (this.slider1 == 2) {
      // F to C case
      if (this.slider2 == 1) {
        this.answer = (this.num1 - 32) * (5 / 9);
      // F to K case
      } else if (this.slider2 == 3) {
        this.answer = (this.num1 - 32) * (5 / 9) + (273.15);
      // F error handling
      } else {
        this.answer = "fahrenheit error";
      }
    } else if (this.slider1 == 1) {
      // C to F case
        if (this.slider2 == 2) {
          this.answer = (this.num1 * (9 / 5)) + 32;
      // C to K case
        } else if (this.slider2 == 3) {
          this.answer = this.num1 + 273.15;
      // C error handling
        } else {
          this.answer = "celsius error";
        }
    } else if (this.slider1 == 3) {
      // K to F case
        if (this.slider2 == 2) {
          this.answer =
      // K to C case
        } else if (this.slider2 == 1) {
          this.answer = this.num1 - 273.15;
      // K error handling
        } else {
          this.answer = "kelvin error";
        }
    } else {
      this.answer = "general error";
    }
  }

  // TODO - split into smaller functions, call them when statements are met(?)

}
