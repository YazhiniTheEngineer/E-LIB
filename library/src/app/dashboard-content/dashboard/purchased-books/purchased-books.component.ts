import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserBooks } from 'src/app/model/UserBooks';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-purchased-books',
  templateUrl: './purchased-books.component.html',
  styleUrls: ['./purchased-books.component.css']
})
export class PurchasedBooksComponent {
  purchasedBooks : UserBooks[]=[];
  constructor(private libraryService : LibraryService, private route : Router,private cookie : CookieService){}
  ngOnInit(){
    this.getPurchasedBooks();
  }

  getPurchasedBooks(){
    this.libraryService.getPurchasedBook().subscribe(res => {
      this.purchasedBooks = res;
    },err => {
      console.log("No Purchased Books");
    })
  }


}
