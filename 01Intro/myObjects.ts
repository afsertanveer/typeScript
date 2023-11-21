// // const user ={
// //     name:"A",
// //     email:"a@a.com",
// //     isActive:true
// // }

// // function createUser({name:string, isPaid:boolean}){

// // }

// // let newUser ={name:"a",isPaid:false,email:"a@a.com"};

// // createUser(newUser)


// // function createCourse():{name:string, isPaid:boolean}{
// //     return {name:"reactJs",isPaid:true}
// // }

// type User = {
//     name: string,
//     email:string,
//     isActive:boolean
// }



// function createUser(user:User):User{
//     return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true});


type User ={
    readonly _id:string, //this cannot be changed
    name:string,
    email:string,
    isActive:boolean,
    credCardDetails?:number  // ? this will make this property optional
} 

let myUser:User ={
    _id:"q12313",
    name:"afser",
    email:"a@a.com",
    isActive:true
}


type CardNumber ={
    cardNo:string
}

type cardDate ={
    cardTime:string
}


type cardDetails = CardNumber & cardDate &{
    cvv:number
}

let myCardDetails:cardDetails ={
    cardNo:"asdad",
    cardTime:"asdada",
    cvv:12312
}
// myUser._id="asdasda"; Cannot assign to '_id' because it is a read-only property.