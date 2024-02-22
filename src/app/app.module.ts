import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importáljuk az FormsModule-t

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    ReservationFormComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
