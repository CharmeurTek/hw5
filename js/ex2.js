const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Array : " + numbers);

const oddNumbers = numbers.filter(numbers => numbers % 2);

console.log(oddNumbers);

const divisible = numbers.filter(numbers => numbers % 2 == 0 || numbers % 5 == 0);

console.log(divisible);

const divisibleSquare = numbers.filter(numbers => Math.pow(numbers, 2) % Math.pow(3, 2) == 0).map(numbers => Math.pow(numbers, 2));

console.log(divisibleSquare);

const result = 0;
const sum = numbers.filter(numbers => numbers % 5 == 0).map(numbers => Math.pow(numbers, 2)).reduce((nb1, nb2) => nb1 + nb2, result);

console.log(sum);


