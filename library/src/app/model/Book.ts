import { User } from "./User";

export class Book{
    public bookId : number;
    public bookName : string;
    public bookImg : string;
    public bookDescription : string;
    public authorName : string;
    public publishedDate : Date;
    public userList : User[];

    constructor(bookId : number, bookName : string, bookImg : string, bookDescription : string, authorName : string, publishedDate : Date, userList : User[]) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookImg = bookImg;
        this.bookDescription = bookDescription;
        this.authorName = authorName;
        this.publishedDate = publishedDate
        this.userList = userList;
        
    }

}