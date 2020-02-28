import { Component, OnInit } from '@angular/core';
import { NewFlightService } from '../add/new-flight.service';
import { flight } from '../flight';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private flightService: NewFlightService) { }

  newFlight: flight = new flight();

  ngOnInit(): void {
  }


  add() {
    console.log(this.newFlight);

    this.flightService.addFlight(this.newFlight);
    this.newFlight =  new flight();

  }

  reset() {
    this.newFlight = new flight();
  }




}
