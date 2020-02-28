import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {

    this.http.get<tourist[]>('http://localhost:8080/s/show/tourists').subscribe(data => {

      this.alltourists = new  Array<tourist>();

      for (let i = 0 ; i < (data.length) ; i++) {
        console.log('dane wczytane z back');
        console.log(data[i]);
        this.alltourists.push(data[i]);
      }
    }
    );

   }
  alltourists: tourist[];




  readtourists(): void {
    this.http.get<tourist[]>('http://localhost:8080/s/show/tourists').subscribe(data => {

      this.alltourists = new  Array<tourist>();

      for (let i = 0 ; i < (data.length) ; i++) {
        console.log('dane wczytane z back');
        console.log(data[i]);
        this.alltourists.push(data[i]);
      }
    }
    );

  }

  gettourists(): tourist[] {

    return this.alltourists;

  }


  addtourist(person: tourist) {
    console.log('START add');
    console.log(person);
    this.http.post<string>('http://localhost:8080/s/add/tourist', person).subscribe(returntourist => {
        console.log(returntourist);
      }
    );
    console.log('END add');
  }

}
