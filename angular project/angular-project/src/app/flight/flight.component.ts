import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FlightDataSource} from './flight-datasource';
import { FlightService } from './flight.service';
import { flight } from '../flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements AfterViewInit, OnInit {

  constructor(private flightServ: FlightService) {  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<flight>;
  dataSource: FlightDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // tslint:disable-next-line: max-line-length
  displayedColumns = ['flight_id', 'departure_date', 'arrival_date', 'number_of_places', 'turist_number', 'ticket_price', 'addTouris' , 'tourists', 'delButton'];

  delId: number;

  ngOnInit() {
    this.dataSource = new FlightDataSource(this.flightServ);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  change(event) {

    console.log(event);
    console.log(event.path[2].cells[0].innerText);
    const localization = 'http://localhost:4200/tourist/flight/';
    window.location.href = localization + event.path[2].cells[0].innerText;
    // event.path[2].cells[0].innerText <- id of tourist to del



}

addTourist(event) {

  console.log(event);
  console.log(event.path[2].cells[0].innerText);
  const localization = 'http://localhost:4200/flight/addtourist/';
  window.location.href = localization + event.path[2].cells[0].innerText;
  // event.path[2].cells[0].innerText <- id of tourist to del


}


  del(event) {
    if (confirm('Are you sure to delete flight under index' + event.path[2].rowIndex)) {
      // console.log(event);
      // this.flightServ.delFlight(this.dataSource.data[event.path[2].rowIndex - 1]);
      this.delId = event.path[2].cells[0].innerText;
      console.log(event.path[2].cells[0].innerText);
      this.flightServ.delFlight(this.delId);
    }

  }
}
