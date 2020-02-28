import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTouristComponent } from './add-tourist/add-tourist.component';
import { TouristsComponent } from './tourists/tourists.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightComponent } from './flight/flight.component';
import { TouristFlightsComponent } from './tourist-flights/tourist-flights.component';
import { FlightTouristsComponent } from './flight-tourists/flight-tourists.component';
import { AddFlightToTouristComponent } from './add-flight-to-tourist/add-flight-to-tourist.component';
import { AddTouristToFlightComponent } from './add-tourist-to-flight/add-tourist-to-flight.component';


const routes: Routes = [
  { path: 'tourist/add' , component: AddTouristComponent},
  { path: 'tourists' , component: TouristsComponent},
  { path: 'flights' , component: FlightComponent},
  { path: 'flight/add' , component: AddFlightComponent},
  { path: 'flight/tourist/:id' , component: TouristFlightsComponent},
  { path: 'tourist/flight/:id' , component: FlightTouristsComponent},
  { path: 'flight/addtourist/:id' , component: AddFlightToTouristComponent},
  { path: 'tourist/addflight/:id' , component: AddTouristToFlightComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
