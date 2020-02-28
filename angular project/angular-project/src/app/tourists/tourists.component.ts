import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TouristsDataSource} from './tourists-datasource';
import { TouristsService } from './tourists.service';
import { tourist } from '../tourist';

@Component({
  selector: 'app-tourists',
  templateUrl: './tourists.component.html',
  styleUrls: ['./tourists.component.css']
})
export class TouristsComponent implements AfterViewInit, OnInit {

  constructor(private touristsServ: TouristsService) {  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<tourist>;
  dataSource: TouristsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tourist_id', 'name', 'lastname', 'sex', 'country', 'birth', 'addFlight', 'flights', 'delButton'];
  ngOnInit() {

    this.dataSource = new TouristsDataSource(this.touristsServ);

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  del(event) {
    if (confirm('Are you sure to delete flight under index' + event.path[2].rowIndex)) {
      console.log(event);

      // event.path[2].cells[0].innerText <- id of tourist to del

      this.touristsServ.delTourist(event.path[2].cells[0].innerText);
      window.location.reload();
    }
  }

  change(event) {
      console.log(event);
      console.log(event.path[2].cells[0].innerText);
      const localization = 'http://localhost:4200/flight/tourist/';
      window.location.href = localization + event.path[2].cells[0].innerText;
      // event.path[2].cells[0].innerText <- id of tourist to del
  }

  addflight(event) {
    console.log(event);
    console.log(event.path[2].cells[0].innerText);
    const localization = 'http://localhost:4200/tourist/addflight/';
    window.location.href = localization + event.path[2].cells[0].innerText;
    
    // event.path[2].cells[0].innerText <- id of tourist to del
}


}
