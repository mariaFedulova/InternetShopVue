// class Hamburger {
//     constructor(size, stuffing) {
//         this.size = size;
//         this.stuffings = [stuffing];
//         this.toppings = [];
//         this.price = size === "S" ? 50 : 100;
//         this.calorific = size === "S" ? 20 : 40;
//     }

//     addTopping(topping) {
//         this.toppings.push(topping);
//     }

//     removeTopping(topping) {
//         this.toppings = this.toppings.filter((item) => item.name !== topping.name);
//     }

//     getToppings() {
//         return this.toppings;
//     }

//     getSize() {
//         return this.size;
//     }

//     getStuffing() {
//         return this.stuffings;
//     }

//     calculatePrice() {
//         let price = this.price;
//         this.toppings.forEach(topping => {
//             price += topping.price;
//         })
//         this.stuffings.forEach(stuffing => {
//             price += stuffing.price;
//         })

//         return price;
//     }

//     calculateCalories() {
//         let calorific = this.calorific;
//         this.toppings.forEach(topping => {
//             calorific += topping.calorific;
//         })
//         this.stuffings.forEach(stuffing => {
//             calorific += stuffing.calorific;
//         })

//         return calorific;
//     }
// }

// class Topping {
//     constructor(name, price, calorific) {
//         this.name = name;
//         this.price = price;
//         this.calorific = calorific;
//     }
// }

// class Stuffing extends Topping { }

// const CHEESE_STUFFING = new Stuffing("Cheese", 10, 100);
// const MAYONNAISE_TOPPING = new Topping("Mayonnaise", 10, 200);

// const smallHamburger = new Hamburger("S", CHEESE_STUFFING);
// smallHamburger.addTopping(MAYONNAISE_TOPPING);

// console.log(smallHamburger);
// console.log(smallHamburger.calculatePrice());
// console.log(smallHamburger.getToppings());

// smallHamburger.removeTopping(MAYONNAISE_TOPPING);

// console.log('NEW!!!!!!!!!1')
// console.log(smallHamburger);
// console.log(smallHamburger.calculatePrice());
// console.log(smallHamburger.calculateCalories());

// let text = `'Vsem Pri'vet',  - skazal avtor. 'Skoro ya vernus', - vdrug skazal malchick`;
// const regExpText = /(\b')|('\b)/gi;
// const newText = text.replace(regExpText, `"`);
// console.log(newText);