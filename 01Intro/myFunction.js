function addTwo(num) {
    return num + 2;
}
var myValue = addTwo(5);
// addTwo("5"); this will show an error
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("afser");
function signUpUser(name, email, password, isPaid) {
}
signUpUser("Afser", "Afser@afser.com", "asfasf", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("A", "a@a.com");
// function getValue(myVal:number):booelan{
//     if(myVal>5) return true;
//     return "200 Ok";
// }
var getHello = function (s) {
    return "";
};
var heroes = ["Shakib", "Taskin", "Mushfiq"];
// const heroes = [1,2,3]
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errorMessage) {
    console.log(errorMessage);
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
//to throw error message return type needs to defined as never
