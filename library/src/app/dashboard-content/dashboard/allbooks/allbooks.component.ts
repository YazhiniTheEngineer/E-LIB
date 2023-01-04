import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent {
  books : Book[] = [];
  
  //@Output() onAllBook = new EventEmitter<{isAllBookActive : string,Book: Book}>();

  constructor(private libraryService : LibraryService, private route : Router){}
  ngOnInit(){
    this.getAllBooks();
    
  }

  getAllBooks(){
    this.libraryService.getAllBooks().subscribe(res =>{ 
      this.books = res;
    },
    err =>{
      alert(err)
    })
  }

showBookComponent(book : Book){
  let bookId = book.bookId;
  this.route.navigate(['/dashboard/book',bookId]);



}


}
