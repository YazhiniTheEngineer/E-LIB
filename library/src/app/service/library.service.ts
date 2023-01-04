import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable} from 'rxjs';
import { Book } from '../model/Book';
import { User } from '../model/User';
import { UserBooks } from '../model/UserBooks';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  
  userUrl : string;
  bookUrl : string;

  bookName : string = "";
  userBooksUrl: string;

  constructor(private http : HttpClient,private cookie : CookieService) { 
    this.userUrl = "http://localhost:8080/user/";
    this.bookUrl =  "http://localhost:8080/book/";
    this.userBooksUrl = "http://localhost:8080/userbooks/";
  }

  checkUserExitenceForSignIn(emailId : string) : Observable<boolean>{
    return this.http.get<boolean>(this.userUrl+'email/'+emailId);
  }

  addUser(user: User) : Observable<User>{
    return this.http.post<User>(this.userUrl,user); 
  }

  checkUserExitence(emailId : string, password : string) : Observable<number>{
    return this.http.get<number>(this.userUrl+'email/'+emailId+'/password/'+password);
  }

  getAllBooks() : Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }

  addToCart(userbook : UserBooks) : Observable<UserBooks>{
      return this.http.post<UserBooks>(this.userBooksUrl,userbook).pipe(
       catchError( err => {
        alert("Book Already Purchased");
        throw new Error(err);
       })
        )
  }
  
  newArrivals() : Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl+"newarrivals");
  }
  
  getUser() : Observable<User>{
    return this.http.get<User>(this.userUrl+this.cookie.get("UserId"));
  }

  getSearchedBooks(bookName : string) : Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl+"bookName/"+bookName);
  }

  getBook(bookId : number) : Observable<Book>{
    return this.http.get<Book>(this.bookUrl+bookId);
  }

  getPurchasedBook() : Observable<UserBooks[]>{
    return this.http.get<UserBooks[]>(this.userBooksUrl+"userId/"+this.cookie.get("UserId"));
}

 

}
