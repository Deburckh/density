import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DsNavigationBarModule } from '@bmw-ds/components';
import { DsHeaderModule } from '@bmw-ds/components';
import { DsImprintModule } from '@bmw-ds/components';
import { DsBoxModule } from '@bmw-ds/components';
import { DsButtonModule } from '@bmw-ds/components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DsNavigationBarModule,
    DsHeaderModule,
    DsImprintModule.forRoot({
    phone: '55555555',
    electronicContact: 'y'
      }),
    DsBoxModule,
    DsButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
