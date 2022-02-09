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

  fColor = 'w3-light-grey';
  cColor = 'w3-light-grey';
  kColor = 'w3-light-grey';

  fColor2 = 'w3-light-grey';
  cColor2 = 'w3-light-grey';
  kColor2 = 'w3-light-grey';

  fahrenheit = 32;
  celsius = 0;

  // Slider Enum:
  // 1 - celsius
  // 2 - Fahrenheit
  // 3 - Kelvin

  set1Fahrenheit() {
    this.slider1 = 2;
    this.fColor = "w3-black";
    this.cColor = "w3-grey";
    this.kColor = "w3-grey";
  }

  set1Celsius() {
    this.slider1 = 1;
    this.fColor = "w3-grey";
    this.cColor = "w3-black";
    this.kColor = "w3-grey";
  }

  set1Kelvin() {
    this.slider1 = 3;
    this.fColor = "w3-grey";
    this.cColor = "w3-grey";
    this.kColor = "w3-black";
  }

  set2Fahrenheit() {
    this.slider2 = 2;
    this.fColor2 = "w3-black";
    this.cColor2 = "w3-grey";
    this.kColor2 = "w3-grey";
  }

  set2Celsius() {
    this.slider2 = 1;
    this.fColor2 = "w3-grey";
    this.cColor2 = "w3-black";
    this.kColor2 = "w3-grey";
  }

  set2Kelvin() {
    this.slider2 = 3;
    this.fColor2 = "w3-grey";
    this.cColor2 = "w3-grey";
    this.kColor2 = "w3-black";
  }

  convertTemp() {
    if (this.slider1 == 2) {
      if (this.slider2 == 1) {
        this.fahrenheitToCelsius();
      } else if (this.slider2 == 3) {
          this.fahrenheitToKelvin();
      } else {
          this.answer = "fahrenheit error";
      }
    } else if (this.slider1 == 1) {
        if (this.slider2 == 2) {
          this.celsiusToFahrenheit();
        } else if (this.slider2 == 3) {
            this.celsiusToKelvin();
        } else {
            this.answer = "celsius error";
        }
    } else if (this.slider1 == 3) {
        if (this.slider2 == 2) {
          this.kelvinToFahrenheit();
        } else if (this.slider2 == 1) {
            this.kelvinToCelsius();
        } else {
            this.answer = "kelvin error";
        }
    } else {
        this.answer = "general error";
    }
  }

  fahrenheitToCelsius() {
    this.answer = (this.num1 - 32) * (5 / 9);
  }

  fahrenheitToKelvin() {
    this.answer = (this.num1 - 32) * (5 / 9) + (273.15);
  }

  celsiusToFahrenheit() {
    this.answer = (this.num1 * (9 / 5)) + 32;
  }

  celsiusToKelvin() {
    this.answer = this.num1 + 273.15;
  }

  kelvinToFahrenheit() {
    this.answer = (this.num1 - 273.15) * (9 / 5) + 32;
  }

  kelvinToCelsius() {
    this.answer = this.num1 - 273.15;
  }

}
