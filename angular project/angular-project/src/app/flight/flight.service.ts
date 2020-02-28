import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flight } from '../flight';
import { tourist } from '../tourist';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  delFligh: flight;

  getflights(): Observable<flight[]> {
    return this.http.get<flight[]>('http://localhost:8080/s/show/flights');
    }

  delFlight(toDel: number) {
    this.delFligh = new flight();
    this.delFligh.flight_id = toDel;
    this.delFligh.turist_number = 1;
    console.log(this.delFligh);
    this.http.post<string>('http://localhost:8080/s/flights/del', this.delFligh) .subscribe(returnInfo => {
    console.log(returnInfo);
    window.location.reload();
  }
  );
}

}
