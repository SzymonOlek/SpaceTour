import { Component, OnInit } from '@angular/core';
import { tourist } from '../tourist';
import { TouristsService } from '../add/tourists.service';


@Component({
  selector: 'app-add-tourist',
  templateUrl: './add-tourist.component.html',
  styleUrls: ['./add-tourist.component.css']
})
export class AddTouristComponent implements OnInit {

  constructor(private touristsService: TouristsService) { }

  tour: tourist = new tourist();
  newtourist: tourist = new tourist();
  maxdate: string;
  private tourists: Array<tourist> = new Array<tourist>();

  ngOnInit(): void {
  }

  add() {
    console.log(this.newtourist);
    this.touristsService.addtourist(this.newtourist);
    this.newtourist =  new tourist();

  }

  reset() {

    this.newtourist = new tourist();
  }



}
