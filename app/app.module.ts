import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { TestHttpService } from './test-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
