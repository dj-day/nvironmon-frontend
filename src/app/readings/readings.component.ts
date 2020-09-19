import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {

  readings: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getReadings();
  }

  getReadings() {
    this.http.get('http://localhost:5000/api/readings')
      .subscribe(
      response => {
        this.readings = response;
      }, 
      error => {
        console.log(error);
      });
  }

}
