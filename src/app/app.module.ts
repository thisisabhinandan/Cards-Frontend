import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./guard/auth.guard";
import { CreateCardComponent } from './components/create-card/create-card.component';
import { FetchCardComponent } from './components/fetch-card/fetch-card.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateCardComponent,
    FetchCardComponent,
    DeleteCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
