let numberInput = prompt("Введите число:");
let a = 0;

for (let i = 0; i <= numberInput; ++i) {
  if (i % 3 === 0) {
    a += i;
  } else if (i % 5 === 0) {
    a += i;
  }
}

console.log('Сумма чисел равна:',a);
