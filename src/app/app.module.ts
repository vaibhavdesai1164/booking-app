import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashComponent,DialogOverviewExampleDialog } from './admin-dash/admin-dash.component';
import { BookingDashComponent } from './booking-dash/booking-dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule,MatFormFieldModule, MatFormFieldControl} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashComponent,
    DialogOverviewExampleDialog,
    BookingDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [],
  bootstrap: [AdminDashComponent]
})
export class AppModule { }
