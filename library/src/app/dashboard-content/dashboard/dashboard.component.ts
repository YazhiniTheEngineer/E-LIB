import { Component } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { User } from 'src/app/model/User';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

 
  }

  // isAllBooksActive = "none";
  // isBooksActive = "none";
  // book : Book = new Book(0,"","","","",new Date(),[]);


  // onAllBook(input: {isAllBookActive : string,Book : Book}){
  //     this.isAllBooksActive = input.isAllBookActive;
  //     this.book = input.Book;
  // }

  // closeBookComponent(activate : string){
  //   this.isAllBooksActive = activate;
  //   this.isBooksActive = "none";
  // }

  // passData = {
  //   book : this.book
  // }

  // ngOnInit(){
  //   this.isAllBooksActive = "block";
  //   this.isBooksActive = "none";
  //   this.book = new Book(0,"","","","",new Date(),[]);
  // }

  // showOnlyNewArrivals(event : Event){
  //   event.preventDefault();
  //   console.log("Clicked");
  //   this.isAllBooksActive = "none";
  //   this.isBooksActive = "none";
  // }


