// import { person, Car } from './helper.js';

// // person();

// let car = new Car();

// // console.log(car.#hp);
// console.log(car.color);
// car.drive();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   run() {
//     console.log(`${this.name} is running`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`${this.name} is woof ... woof ..`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }

//   meow() {
//     console.log(`${this.name} is cat`);
//   }
// }

// let animal = new Dog('mg mg');
// animal.run();
// animal.bark();

// let cat = new Cat('shwe war', 'yellow');
// console.log(cat.color);
// cat.meow();

// function add1000() {
//   let result = 0;
//   for (let i = 0; i < 1000; i++) {
//     result += i;
//   }
//   return result;
// }

// function add1000later() {
//   return new Promise((resolve, reject) => {
//     let result = add1000();
//     if (result) resolve(result);
//     else reject();
//   });
// }

// add1000later()
//   .then((result) => result + 1000)
//   .then((result) => console.log(result))
//   .catch(console.log('error'));

fetch('https://api.covid19api.com/summary')
  .then((res) => res.json())
  .then((data) => {
    const global = data.Global;
    const allCountries = data.Countries;
    const myanmar = allCountries.find((c) => c.Country === 'Myanmar');
    console.log(myanmar);
  });

async function covidInfo() {
  const response = await fetch('https://api.covid19api.com/summary');
  const data = await response.json();
  const global = data.Global;
  const allCountries = data.Countries;
  const myanmar = allCountries.find((c) => c.Country === 'Myanmar');
  console.log(myanmar);
}
