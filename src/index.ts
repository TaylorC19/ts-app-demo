console.log('hello')

function add(num1: number, num2: number, num3?: number): number { // the ? makes num3 optional
  return num1 + num2;
}

console.log(add(4,5));