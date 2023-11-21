let score:number|string =33;

score = "zero";


type User ={
    name:string,
    id:number
}

type Admin ={
    username:string,
    id:number
}

let afser:User|Admin = {
    name:"Afser",id:123
}
afser ={
    username:"asfer",id:123
}

// function getDbId(id:number|string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }

getDbId(3);
getDbId("3")


function getDbId(id:number|string){
    //making some API calls
    if(typeof id==="string"){
        id.toLowerCase();
    }
    console.log(`DB id is: ${id}`);
}

//array

const mixedData: number[]|string[]=[1,2,3]
const mixedDataString: number[]|string[]=["1",'2' ]

const data:(number|string)[] =[1,3,"5"];

let pi:3.14=3.14

let seatAllotment : "aisle" | "middle" |"window"

seatAllotment="aisle";

