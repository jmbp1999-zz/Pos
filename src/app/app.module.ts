import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { CustomerPageComponent } from './components/common/customer-page/customer-page.component';
import { ItemPageComponent } from './components/common/item-page/item-page.component';
import { OrderPageComponent } from './components/common/order-page/order-page.component';
import { OrderDetailPageComponent } from './components/common/order-detail-page/order-detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerPageComponent,
    ItemPageComponent,
    OrderPageComponent,
    OrderDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
