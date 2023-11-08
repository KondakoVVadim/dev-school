let a = prompt("Введите число");
let n = 0;

while (a > 0) {
    n++;
    a = a - (n**3);
}

if (a===0){
    console.log(n)
} else{
    console.log(-1)
}