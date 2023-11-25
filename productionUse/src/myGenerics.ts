const score:Array<number> = [];
const names: Array<string> = [];


function identityOne(val:boolean|number):boolean|number{
    return val;
}
function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val;
}

identityThree("3");

function identityFour<T>(val:T):T{
    return val;
}

interface Bootle{
    brand:string,
    type:number
}

// identityFour<Bootle>({})

function getSearchProducts<T>(products:T[]):T{
    //do some database operations
    const myIndex = 3 ;
    return products[myIndex];
}

const getMoreSearchProducts =<T>(products:T[]):T=>{
    //database operations
    const myIndex = 4 ;
    return products[myIndex];
} 

interface Database{
    connection: string
    username: string
    password: string
}

function anotherFunction<T,U extends Database>(val1: T,val2: U):object{
    return {val1,val2};
}

anotherFunction(3,{connection:"as",username:"as",password:"as"});


interface Quiz{
    name: string
    type: string
}
interface Course{
    name: string
    author: string
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product:T){
        this.cart.push(product);
    }
}