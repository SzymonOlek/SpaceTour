import { Injectable } from '@angular/core';
import { tourist } from '../tourist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { touristFlight } from '../touristFlight';

@Injectable({
  providedIn: 'root'
})
export class TouristsService {

  constructor(private http: HttpClient) {

  }

  delTour: tourist;
  delFligh: touristFlight;

  gettourists(): Observable<tourist[]> {
  return this.http.get<tourist[]>('http://localhost:8080/s/show/tourists');
  }

  getTouristsByFlightID(flightID: number): Observable<tourist[]> {
    return this.http.get<tourist[]>('http://localhost:8080/s/show/tourist/flight/' + flightID);
  }


  delTourist(toDel: number) {
    this.delTour = new tourist();
    this.delTour.tourist_id = toDel;
    this.delTour.name = 'temp';

    this.http.post<string>('http://localhost:8080/s/tourist/del', this.delTour).subscribe(returnInfo => {
       console.log(returnInfo);
    }
    );
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

  addFlightTourist(flightobj: touristFlight) {
  this.http.post<string>('http://localhost:8080/s/add/flightTourist', flightobj).subscribe(returntourist => {
      console.log(returntourist);
    }
  );

}
}
