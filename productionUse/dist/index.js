"use strict";
// class User{
//     public email:string
//     public name:string
//     private readonly city:string ='Dhaka'
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Dhaka";
        this.email = email;
        this.name = name;
    }
    deleteToke() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const afser = new User("a@a.com", "Afser");
