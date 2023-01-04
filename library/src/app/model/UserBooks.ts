import { Book } from "./Book";
import { User } from "./User";

export class UserBooks{
    public id : number;
    public user : User;
    public book : Book;
    public issuedDate : Date;
    public returnDate : Date;
    
    constructor(id : number,user : User, book : Book,issueDate : Date,returnDate : Date){
        this.id = id;
        this.user = user;
        this.book = book;
        this.issuedDate = issueDate;
        this.returnDate = returnDate;
    }

}