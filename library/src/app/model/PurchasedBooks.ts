
export class PurchasedBooks {
    public bookName : string;
    public authorName : string;
    public publishedDate : Date;
    public issedDate : Date;
    public returnDate : Date;

    constructor(bookName : string,authorName : string,publishedDate : Date,issedDate : Date,returnDate : Date){
            this.bookName = bookName;
            this.authorName = authorName;
            this.publishedDate = publishedDate;
            this.issedDate = issedDate;
            this.returnDate = returnDate;
    }
  }