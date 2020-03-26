import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { FormEntryComponent } from './form-entry/form-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    FormEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
