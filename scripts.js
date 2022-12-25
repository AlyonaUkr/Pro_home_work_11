let num;
const userArrey = [];

do {
    num = prompt('Введіть елемент масиву у числовому значенні, після введення останнього натисніть кнопку "Відміна" ?', 0);
    userArrey.push(num);
} while (num != null);

userArrey.pop();

console.log([userArrey]);

const copyArrey = userArrey.slice(0);
const sortArrey = copyArrey.sort((a, b) => a-b);
console.log(sortArrey);

sortArrey.splice(2, 3);
console.log(sortArrey);



