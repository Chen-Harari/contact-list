import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactItemComponent} from "./components/contact-item/contact-item.component";
import { HeaderComponent } from './components/header/header.component';
import { ContactSearchComponent } from './components/contact-search/contact-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactItemComponent,
    HeaderComponent,
    ContactSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
