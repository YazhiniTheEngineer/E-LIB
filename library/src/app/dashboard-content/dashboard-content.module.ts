import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchbarComponent } from './dashboard/searchbar/searchbar.component';
import { AllbooksComponent } from './dashboard/allbooks/allbooks.component';
import { BookComponent } from './dashboard/book/book.component';
import { NewArrivalsComponent } from './dashboard/new-arrivals/new-arrivals.component';
import { PurchasedBooksComponent } from './dashboard/purchased-books/purchased-books.component';
import { SearchedBooksComponent } from './dashboard/searched-books/searched-books.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuard } from '../guard/login.guard';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    SearchbarComponent,
    AllbooksComponent,
    BookComponent,
    NewArrivalsComponent,
    PurchasedBooksComponent,
    SearchedBooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    SidebarComponent,
    SearchbarComponent,
    AllbooksComponent,
    BookComponent,
    NewArrivalsComponent,
    PurchasedBooksComponent,
    SearchedBooksComponent
  ],providers: [
    CookieService,
    LoginGuard
  ]
})
export class DashboardContentModule { }

