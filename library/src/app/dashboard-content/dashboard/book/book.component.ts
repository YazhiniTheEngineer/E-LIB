import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Book } from 'src/app/model/Book';
import { User } from 'src/app/model/User';
import { UserBooks } from 'src/app/model/UserBooks';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  user! : User;
  book! : Book;
  userbook! : UserBooks;
  toggle = true;
  status = "Purchase"

  constructor(private libraryService : LibraryService, private route : ActivatedRoute,private cookie : CookieService){}

  ngOnInit() {
    this.getUser();
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      let id = params.get('id');
      if(typeof(id)==='string'){
        let bookId = parseInt(id);
        this.getBook(bookId);
      }
  });
  
    
  }

  getUser() {
    this.libraryService.getUser().subscribe(res => {
      this.user = res;
      console.log(this.user);
    },err => {
      console.log("Cant set user");
    })
  }

  getBook(bookId : number){
    this.libraryService.getBook(bookId).subscribe(res => {
      this.book = res;
    },err => {
      alert(err);
    })
  }

  
  addtoPurchase(book : Book){
    this.userbook = new UserBooks(0,this.user,book,new Date(),new Date());
    this.libraryService.addToCart(this.userbook).subscribe(res => {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Purchase" : "Purchased";
    },(err: any) =>{
      console.log(err);
    });

   }

  
  

}
