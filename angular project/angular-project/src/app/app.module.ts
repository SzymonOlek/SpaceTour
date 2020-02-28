import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddTouristComponent } from './add-tourist/add-tourist.component';
import { TouristsComponent } from './tourists/tourists.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightComponent } from './flight/flight.component';
import { TouristFlightsComponent } from './tourist-flights/tourist-flights.component';
import { FlightTouristsComponent } from './flight-tourists/flight-tourists.component';
import { AddFlightToTouristComponent } from './add-flight-to-tourist/add-flight-to-tourist.component';
import { AddTouristToFlightComponent } from './add-tourist-to-flight/add-tourist-to-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddTouristComponent,
    TouristsComponent,
    AddFlightComponent,
    FlightComponent,
    TouristFlightsComponent,
    FlightTouristsComponent,
    AddFlightToTouristComponent,
    AddTouristToFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
