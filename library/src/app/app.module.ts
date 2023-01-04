import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardContentModule } from './dashboard-content/dashboard-content.module';
import { LoginGuard } from './guard/login.guard';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    DashboardContentModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
