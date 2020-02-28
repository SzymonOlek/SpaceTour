import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { flight } from '../flight';
import { TouristFlightsService } from './tourist-flights.service';


/**
 * Data source for the TouristFlights view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TouristFlightsDataSource extends DataSource<flight> {
  data: flight[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private tfServ: TouristFlightsService , private tourID: number) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<flight[]> {
    const allflights: Observable<flight[]> = this.tfServ.getflightsByTouristID(this.tourID)
    .pipe(map(data => {
      this.data = data;

      this.paginator.length = this.data.length;

      return data;
    }));

    const dataMutations = [
      allflights,
      this.paginator.page,
      this.sort.sortChange
    ];


    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: flight[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: flight[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'flight_id': return compare(a.flight_id, b.flight_id, isAsc);
        case 'departure_date': return compare(+a.departure_date, +b.departure_date, isAsc);
        case 'arrival_date': return compare(+a.arrival_date, +b.arrival_date, isAsc);
        case 'number_of_places': return compare(a.number_of_places, b.number_of_places, isAsc);
        case 'turist_number': return compare(a.turist_number, b.turist_number, isAsc);
        case 'ticket_price': return compare(+a.ticket_price, +b.ticket_price, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
