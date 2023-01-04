import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
   
    constructor(private searchBook : SearchService){}

    bookName = "";

    ngOnInit(){
      this.searchBook.currentName.subscribe(bookName => (
        this.bookName = bookName
      ));
      console.log("Searchbar : ",this.bookName)
    }

    onSubmit(form : NgForm){
      this.searchBook.changeName(form.value.search);
      form.reset();
    }

    

}
