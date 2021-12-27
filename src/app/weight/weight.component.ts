import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  kilograms = 1;

  pounds = 2.205;
}
