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

  fColor!: string;
  cColor!: string;
  kColor!: string;

  fColor2!: string;
  cColor2!: string;
  kColor2!: string;

  fahrenheit = 32;
  celsius = 0;

  // Slider Enum:
  // 1 - celsius
  // 2 - Fahrenheit
  // 3 - Kelvin

  set1Fahrenheit() {
    this.slider1 = 2;
    this.fColor = "w3-red";
    this.cColor = "w3-grey";
    this.kColor = "w3-grey";
  }

  set1Celsius() {
    this.slider1 = 1;
    this.fColor = "w3-grey";
    this.cColor = "w3-red";
    this.kColor = "w3-grey";
  }

  set1Kelvin() {
    this.slider1 = 3;
    this.fColor = "w3-grey";
    this.cColor = "w3-grey";
    this.kColor = "w3-red";
  }

  set2Fahrenheit() {
    this.slider2 = 2;
    this.fColor2 = "w3-red";
    this.cColor2 = "w3-grey";
    this.kColor2 = "w3-grey";
  }

  set2Celsius() {
    this.slider2 = 1;
    this.fColor2 = "w3-grey";
    this.cColor2 = "w3-red";
    this.kColor2 = "w3-grey";
  }

  set2Kelvin() {
    this.slider2 = 3;
    this.fColor2 = "w3-grey";
    this.cColor2 = "w3-grey";
    this.kColor2 = "w3-red";
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
          this.answer = (this.num1 - 273.15) * (9 / 5) + 32;
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
