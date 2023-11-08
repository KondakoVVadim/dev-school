function findMinMax(inputString) {
    let numbers = inputString.split(' ').map(Number);
    numbers.sort((a, b) => a - b);
  
    let min = numbers[0];
    let max = numbers[numbers.length - 1];
  
    return { min, max };
  }
  
let a = findMinMax(prompt("Введите числа"));
console.log("Максимальное число:",a.max);
console.log("Минимальное число:",a.min);
