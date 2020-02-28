import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flight } from '../flight';

@Injectable({
  providedIn: 'root'
})
export class NewFlightService {

  constructor(private http: HttpClient) { }

  addFlight(newFlight: flight) {

    this.http.post<string>('http://localhost:8080/s/add/flight', newFlight).subscribe(returnInfo => {
        console.log(returnInfo);
      }
    );
  }
}
