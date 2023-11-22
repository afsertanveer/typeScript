const user:(string|number)[] = ["AT",1] //no restriction in serial
let tupleUser:[string,number,boolean] ;
tupleUser=["a",1,false]; //tuple is making sure the order of the array index value and its type

let rgb:[number,number,number]=[255,123,121];

type User = [number,string]

const newUser:User =[112,"a@gmail.com"]

newUser[1]="afser@gmail.com";
// newUser.push("asda");