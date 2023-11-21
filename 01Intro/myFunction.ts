function addTwo(num:number):number{
    return num+2;
}
let myValue = addTwo(5);

// addTwo("5"); this will show an error

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper("afser");


function signUpUser(name:string,email:string,password:string,isPaid:boolean){

}
signUpUser("Afser","Afser@afser.com","asfasf",true);

let loginUser = (name:string,email:string,isPaid:boolean=false) =>{

}

loginUser("A","a@a.com");


// function getValue(myVal:number):booelan{
//     if(myVal>5) return true;
//     return "200 Ok";
// }

const getHello = (s:string):string =>{
    return "";
}

const heroes = ["Shakib","Taskin","Mushfiq"]
// const heroes = [1,2,3]

heroes.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errorMessage:string):void{
    console.log(errorMessage);
    
}

function handleError(errorMessage:string):never{
    throw new Error(errorMessage);
}

//to throw error message return type needs to defined as never



