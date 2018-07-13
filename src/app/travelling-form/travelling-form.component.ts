import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelling-form',
  templateUrl: './travelling-form.component.html',
  styleUrls: ['./travelling-form.component.css']
})
export class TravellingFormComponent implements OnInit {

  public Isset;

  constructor() { }

  public minDate = new Date(2000, 0, 1);
  public maxDate = new Date(2020, 0, 1);
  public trip;

  public cities: string[] = [
    'Mumbai','Pune','Nagpur','Nashik','Thane','Aurangabad','Solapur','Amravati','Kolhapur','Nanded',
    'Sangli','Jalgaon','Akola','Latur'
  ];

  public trip_type: string[] = ['One Way', 'Round Way', 'Multi Trip'];

  public no_of_adults: number[] = [1,2,3,4,5,6,7,8,9];

  public no_of_childen: number[] = [0,1,2,3,4,5,6,7,8];

  public no_of_infants: number[] = [0,1];
  
  
  

  ngOnInit() {
  }

}
