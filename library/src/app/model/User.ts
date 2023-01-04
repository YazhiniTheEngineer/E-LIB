import { Book } from "./Book";

export class User{
    public userId : number;
    public userName : string;
    public emailId : string;
    public password : string;
    public phoneNumber : number;
    public bookList : Book[];

    constructor(userId : number, userName : string, emailId : string, phoneNumber : number,password : string, bookList : Book[]){
        this.userId = userId;
        this.userName = userName;
        this.emailId = emailId;
        this.phoneNumber = phoneNumber;
        this.password = password
        this.bookList = bookList;
    }

}