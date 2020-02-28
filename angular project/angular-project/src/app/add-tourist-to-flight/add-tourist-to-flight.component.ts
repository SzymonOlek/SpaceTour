import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AddTouristToFlightDataSource} from './add-tourist-to-flight-datasource';
import { FlightService } from '../flight/flight.service';
import { flight } from '../flight';
import { ActivatedRoute } from '@angular/router';
import { touristFlight } from '../touristFlight';
import { TouristsService } from '../tourists/tourists.service';

@Component({
  selector: 'app-add-tourist-to-flight',
  templateUrl: './add-tourist-to-flight.component.html',
  styleUrls: ['./add-tourist-to-flight.component.css']
})
export class AddTouristToFlightComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<flight>;
  dataSource: AddTouristToFlightDataSource;


  touristID: number;
  toAdd: touristFlight;


  constructor(private flightServ: FlightService, private route: ActivatedRoute, private tfServ: TouristsService) {
    this.route.params.subscribe( par => {
      this.touristID = par.id;
   });
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // tslint:disable-next-line: max-line-length
  displayedColumns = ['flight_id', 'departure_date', 'arrival_date', 'number_of_places', 'turist_number', 'ticket_price', 'addTouris'];

  ngOnInit() {
    this.dataSource = new AddTouristToFlightDataSource(this.flightServ);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  addTourist(event) {
    // console.log('flight id');
    // console.log(event.path[2].cells[0].innerText);
    // console.log('tour id');
    // console.log(this.touristID);

    this.toAdd = new touristFlight();
    this.toAdd.tourist_id = this.touristID;
    this.toAdd.flight_id = event.path[2].cells[0].innerText;
    this.tfServ.addFlightTourist(this.toAdd);
  }

}
