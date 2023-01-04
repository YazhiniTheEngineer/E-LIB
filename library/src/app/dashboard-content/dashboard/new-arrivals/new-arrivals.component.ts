import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent {

  books : Book[] = [];
  
  // @Output() onAllBook = new EventEmitter<{isAllBookActive : string,Book: Book}>();

  constructor(private libraryService : LibraryService, private route : Router){}
  ngOnInit(){
    this.newArrivals();
    
  }

  newArrivals(){
    this.libraryService.newArrivals().subscribe(res =>{ 
      this.books = res;
    },
    err =>{
      alert(err)
    })
  }

showBookComponent(book : Book){
  this.route.navigate(['dashboard/book',book.bookId]);
}

}
