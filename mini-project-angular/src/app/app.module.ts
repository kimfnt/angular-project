import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { OrderBoxComponent } from './order-box/order-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ProductsListComponent,
    OrdersListComponent,
    UsersListComponent,
    UserBoxComponent,
    ProductBoxComponent,
    OrderBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
