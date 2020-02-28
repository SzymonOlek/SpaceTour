import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { touristFlight } from '../touristFlight';
import { flight } from '../flight';


@Injectable({
  providedIn: 'root'
})
export class TouristFlightsService {

  constructor(private http: HttpClient) { }
  delFligh: touristFlight;

  getflightsByTouristID(tourID: number): Observable<flight[]> {
    return this.http.get<flight[]>('http://localhost:8080/s/show/flight/tourist/' + tourID);
    }

    delFlight(toDelFlightID: number, toDelTouristID: number) {
      this.delFligh = new touristFlight();
      this.delFligh.flight_id = toDelFlightID;
      this.delFligh.tourist_id = toDelTouristID;
      console.log(this.delFligh);
      this.http.post<string>('http://localhost:8080/s/touristFlight/del', this.delFligh) .subscribe(returnInfo => {
      console.log(returnInfo);
    }
    );
  }
}
