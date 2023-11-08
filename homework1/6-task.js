function number(int) {
    let numbers = int.split('').map(Number);
    numbers.sort((a, b) => a - b);
    numbers = numbers.reverse().join('');
    return numbers;
}

let a = number(prompt("Введите число"));
console.log(a);