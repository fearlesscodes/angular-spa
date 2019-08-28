import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page1Resolver1 } from './page1/page1.resolver';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Page1Resolver1],
  bootstrap: [AppComponent]
})
export class AppModule { }
