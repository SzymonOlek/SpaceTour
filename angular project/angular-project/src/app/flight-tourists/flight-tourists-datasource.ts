import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { tourist } from '../tourist';
import { TouristsService } from '../tourists/tourists.service';
import { ActivatedRoute } from '@angular/router';

/**
 * Data source for the FlightTourists view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class FlightTouristsDataSource extends DataSource<tourist> {
  data: tourist[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private touristsServ: TouristsService, private flightID: number ) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<tourist[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const alltourists: Observable<tourist[]> = this.touristsServ.getTouristsByFlightID(this.flightID)
    .pipe(map(data => {
      this.data = data;

      this.paginator.length = this.data.length;

      return data;
    }));

    const dataMutations = [
      alltourists,
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
  private getPagedData(data: tourist[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: tourist[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'tourist_id': return compare(a.tourist_id, b.tourist_id, isAsc);
        case 'lastname': return compare(a.lastname, b.lastname, isAsc);
        case 'country': return compare(a.country, b.country, isAsc);
        case 'sex': return compare(a.sex, b.sex, isAsc);
        case 'birth': return compare(a.birth, b.birth, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
