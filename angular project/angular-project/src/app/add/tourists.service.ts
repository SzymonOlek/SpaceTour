import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tourist } from '../tourist';
import { flight } from '../flight';
import { touristFlight } from '../touristFlight';

@Injectable({
  providedIn: 'root'
})
export class TouristsService {

  constructor(private http: HttpClient) { }

  addtourist(person: tourist) {

    this.http.post<string>('http://localhost:8080/s/add/tourist', person).subscribe(returntourist => {
        console.log(returntourist);
      }
    );
  }



}
