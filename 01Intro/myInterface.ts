interface User {
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string,
    // start:()=>string,
    start():string,
    getCoupon(couponName:string,value:number):number
}

interface User{
    githubToken:string
}

interface Admin extends User{
    role:"admin"|"ta"|"learner"
}

const afser:Admin={
    dbId:21,
    role:"admin",
    email:"a@a.com",
    githubToken:"a@g.com",
    userId:123,
    start:()=>{
        return "started";
    },
    getCoupon:(name:"afser",off:10)=>{
        return 10;
    }
}
