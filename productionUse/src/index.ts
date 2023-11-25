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
  
  protected _courseCount = 1;
  private readonly city: string = "Dhaka";
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  private deleteToke(){
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User{
  isFamily:boolean = true;

  changeCourseCount(){
    this._courseCount = 4 ;
  }
}

const afser = new User("a@a.com", "Afser");
