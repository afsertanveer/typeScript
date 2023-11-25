"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
anotherFunction(3, { connection: "as", username: "as", password: "as" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
