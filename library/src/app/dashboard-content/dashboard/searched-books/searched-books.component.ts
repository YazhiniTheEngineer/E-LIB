import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { LibraryService } from 'src/app/service/library.service';
import { SearchService } from 'src/app/service/search.service';



@Component({
  selector: 'app-searched-books',
  templateUrl: './searched-books.component.html',
  styleUrls: ['./searched-books.component.css'],
})
export class SearchedBooksComponent {
 
  books : Book[] = [];
  bookName : string = "";

  constructor(private libraryService : LibraryService, private route : Router,private searchService : SearchService){
}

  ngOnInit(){
    this.searchService.currentName.subscribe(bookName => {
      this.bookName = bookName
      //this.getSearchedBooks(this.bookName);
      console.log("In onit subscribe : ",this.bookName);
      this.searchService.currentName.subscribe(bookName => {
        this.getSearchedBooks(this.bookName);
      })
    });
    //this.getSearchedBooks(this.searchService.currentName);
    //console.log("Searchbooks in OnInit : ",this.bookName);
  }


  getSearchedBooks(name : string){
    console.log("Searchbooks in Function Start : ",this.bookName);
    // this.searchService.currentName.subscribe(bookName => {
    //   this.bookName = bookName
    //   console.log("In function subscribe : ",this.bookName);
    // });
    if(name !== "default message"){
      this.libraryService.getSearchedBooks(name).subscribe(res =>{ 
        this.books = res;
        console.log("Searchbooks in Function in 1st sunscribe : ",this.bookName);
      },
      err =>{
        console.log("First Search Function")
      })
    }
    
    console.log("Searchbooks in Function in End  : ",this.bookName);
  }

showBookComponent(book : Book){
  this.route.navigate(['dashboard/book',book.bookId]);
}


}
