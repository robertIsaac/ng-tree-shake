import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SECURITY_CONTEXT } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: SECURITY_CONTEXT,
      useValue: SecurityContext.HTML,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

