// let originalPrice = 2025;
// let discount = 20;
// let extradiscount= 15;
// let price = originalPrice - (originalPrice*20/100);
// let total = price- (price*15/100)
// console.log(total)



/////////////
//  * ID3
//  * Decision tree
//  * Market basket analysis



/////////////////

let originalPrice = 3001;
let finalPrice;

if (originalPrice >= 500 && originalPrice <= 1000) {
    // let discount= rajkumar-50;
    finalPrice = originalPrice - 50;
    console.log("discount will be 50rs")
} else if (originalPrice >= 1001 && originalPrice <= 5000) {
    finalPrice = originalPrice - (originalPrice * 20 / 100);
    console.log('discount 20%')
} else if (originalPrice > 5001) {
    finalPrice = originalPrice - (originalPrice * 30 / 100)
    console.log('discount 30%')
}
else {
    finalPrice= originalPrice
    console.log("no discount")
}
console.log(finalPrice)