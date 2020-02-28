import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AddFlightToTouristDataSource} from './add-flight-to-tourist-datasource';
import { ActivatedRoute } from '@angular/router';
import { touristFlight } from '../touristFlight';
import { tourist } from '../tourist';
import { TouristsService } from '../tourists/tourists.service';

@Component({
  selector: 'app-add-flight-to-tourist',
  templateUrl: './add-flight-to-tourist.component.html',
  styleUrls: ['./add-flight-to-tourist.component.css']
})
export class AddFlightToTouristComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<tourist>;
  dataSource: AddFlightToTouristDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // tslint:disable-next-line: max-line-length
  displayedColumns = ['tourist_id', 'name', 'lastname', 'sex', 'country', 'birth', 'delButton'];


  flightID: number;
  delId: number;
  toAdd: touristFlight;

  constructor(private route: ActivatedRoute,  private tfServ: TouristsService ) {
    this.route.params.subscribe( par => {
      this.flightID = par.id;
  }
    );
}


  ngOnInit() {
    this.dataSource = new AddFlightToTouristDataSource(this.tfServ);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  add(event) {
    // console.log('tourist id');
    // console.log(event.path[2].cells[0].innerText);

    this.toAdd = new touristFlight();
    this.toAdd.flight_id = this.flightID;
    this.toAdd.tourist_id = event.path[2].cells[0].innerText;
    this.tfServ.addFlightTourist(this.toAdd);

    // this.tfServ.addFlightTourist(this.toAdd);
  }


}
