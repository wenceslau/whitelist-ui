import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './@main/main.module';
import { WhitelistComponent } from './whitelist/whitelist.component';

@NgModule({
  declarations: [
    AppComponent,
    WhitelistComponent
  ],
  imports: [
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
