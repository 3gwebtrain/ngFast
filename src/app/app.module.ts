import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { SupportComponent } from './support/support.component';
import { SizerDirective } from './sizer.directive';
import { HovererDirective } from './hoverer.directive';
import { CarComponent } from './car.component';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SupportComponent,
    SizerDirective,
    HovererDirective,
    CarComponent,
    CustomerComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
