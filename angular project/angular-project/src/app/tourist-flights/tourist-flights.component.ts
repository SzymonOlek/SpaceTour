import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TouristFlightsDataSource} from './tourist-flights-datasource';
import { flight } from '../flight';
import { ActivatedRoute } from '@angular/router';
import { TouristFlightsService } from './tourist-flights.service';

@Component({
  selector: 'app-tourist-flights',
  templateUrl: './tourist-flights.component.html',
  styleUrls: ['./tourist-flights.component.css']
})
export class TouristFlightsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<flight>;
  dataSource: TouristFlightsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['flight_id', 'departure_date', 'arrival_date', 'number_of_places', 'turist_number', 'ticket_price', 'delButton'];
  delId: number;

  touristID: number;

  constructor(private route: ActivatedRoute, private tfServ: TouristFlightsService ) {
    this.route.params.subscribe( par => {
      this.touristID = par.id;
  }
    );

}


  ngOnInit() {
    this.dataSource = new TouristFlightsDataSource(this.tfServ,  this.touristID);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  del(event) {
    if (confirm('Are you sure to delete flight under index' + event.path[2].rowIndex)) {
      // console.log(event);
      // this.flightServ.delFlight(this.dataSource.data[event.path[2].rowIndex - 1]);
      this.delId = event.path[2].cells[0].innerText;
      console.log(event.path[2].cells[0].innerText);
      this.tfServ.delFlight(this.delId, this.touristID);
    }

  }

}
