import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FlightTouristsDataSource} from './flight-tourists-datasource';
import { ActivatedRoute } from '@angular/router';
import { tourist } from '../tourist';
import { TouristsService } from '../tourists/tourists.service';

@Component({
  selector: 'app-flight-tourists',
  templateUrl: './flight-tourists.component.html',
  styleUrls: ['./flight-tourists.component.css']
})
export class FlightTouristsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<tourist>;
  dataSource: FlightTouristsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tourist_id', 'name', 'lastname', 'sex', 'country', 'birth', 'delButton'];

  flightID: number;
  delId: number;

  constructor(private route: ActivatedRoute, private tfServ: TouristsService ) {
    this.route.params.subscribe( par => {
      this.flightID = par.id;
  }
    );
}

  ngOnInit() {
    this.dataSource = new FlightTouristsDataSource(this.tfServ, this.flightID);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  del(event) {
    console.log(event.path[2].cells[0].innerText);
    this.delId = event.path[2].cells[0].innerText;
    console.log(event.path[2].cells[0].innerText);
    this.tfServ.delFlight(this.flightID, this.delId);
  }
}
