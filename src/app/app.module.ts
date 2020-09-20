import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReadingsComponent } from './readings/readings.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [				
    AppComponent,
      ReadingsComponent,
      NavComponent,
      DashboardComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
