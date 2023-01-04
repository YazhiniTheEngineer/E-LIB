import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashboardComponent } from './dashboard-content/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookComponent } from './dashboard-content/dashboard/book/book.component';
import { NewArrivalsComponent } from './dashboard-content/dashboard/new-arrivals/new-arrivals.component';
import { PurchasedBooksComponent } from './dashboard-content/dashboard/purchased-books/purchased-books.component';
import { AllbooksComponent } from './dashboard-content/dashboard/allbooks/allbooks.component';
import { SearchedBooksComponent } from './dashboard-content/dashboard/searched-books/searched-books.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signin', component: SigninComponent},

    { path: 'dashboard', component: DashboardComponent,children: [
      { path: 'allbooks', component: AllbooksComponent},
      { path: 'book/:id', component: BookComponent },
      { path: 'new-arrivals', component: NewArrivalsComponent },
      { path: 'purchased-books', component: PurchasedBooksComponent },
      { path: 'search', component: SearchedBooksComponent },
      { path: '**', component: AllbooksComponent }
    ],
    canActivate : [LoginGuard]
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations : []
})
export class AppRoutingModule { }