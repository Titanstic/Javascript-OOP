export function person() {
  console.log('show your name');
}

export let Car = class {
  color = 'red';
  wheel = 4;
  drive() {
    console.log(`car color is ${this.color}`); 
  }
};
