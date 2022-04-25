/*  1
    Создайте пустой массив arr, затем создайте переменную number, добавьте данную переменную в массив arr.
 */

const arr = [];
const number = 2;

arr.push(number);



/*  2
    Выведете в консоль 2 раза слово “Привет”.
 */

for (let i = 0; i < 2; ++i) {
    console.log('Привет');
}




/*  3
    Выведете в консоль цифры от 1 до 5.
 */

for (let i = 1; i < 6; ++i) {
    console.log(i);
}



/*  4
    Выведите в консоль числа от 7 до 22.
 */

for (let i = 7; i < 23; ++i) {
    console.log(i);
}


/*  5
    Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.
 */

function printRandomInt(min, max) {
    console.log(Math.floor(Math.random() * (max - min) + min))
}

printRandomInt(1, 10);



/*  6
    1. Создайте функцию, которая принимает параметр `n` — число и генерирует массив до значения `n`.

    **Например:** `nameFunction(5); // [1, 2, 3, 4, 5]`.

    1. Выведите в консоль сумму элементов массива `( [1, 2, 3, 4, 5] сумма элементов равна 15)`.

    **Для решения задачи можете использовать цикл `for` или метод `forEach`*
 */

function generateArray(size) {
    const arr = [];

    for (let i = 1; i <= size; i++) {
        arr.push(i);
    }

    return arr;
}

let sum = 0;

generateArray(5).forEach(el => sum += el);

console.log(sum);




/*  7
    Дан массив: `[10, 27, 33, 67, 90, 235, 353, 987, 1000]` .

    Необходимо вывести в консоль данный массив в обратном порядке.

    **Подсказка: для решения задачи используйте метод `reverse()`.*
 */

const array = [10, 27, 33, 67, 90, 235, 353, 987, 1000];

console.log(array.reverse());



/*  9
    Дан массив: `[10, 12, 15, 22, 33, 37, 45, 50]` .

    Необходимо вывести в консоль числа, которые начинаются на 1, 3.
 */

const numbers = [10, 12, 15, 22, 33, 37, 45, 50];

numbers.forEach(num => {
    const firstNum = Number(num.toString().charAt(0));

    if (firstNum === 1 || firstNum === 3) {
       console.log(num);
   }
});





/*  10
    Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

    Придумайте, как должна работать функция, если ей передать неправильный параметр.

    Выведите пример использования функции в консоль.

    **Подсказка: для решения задачи используйте `switch`.*
 */

function getDayOfWeek(index) {
    switch (index) {
        case 1: return 'Понедельник';
        case 2: return 'Вторник';
        case 3: return 'Среда';
        case 4: return 'Четверг';
        case 5: return 'Пятница';
        case 6: return 'Суббота';
        case 7: return 'Воскресенье';
        default: throw new Error(`Day index should be in range 1 - 7`);
    }
}

// w/o switch
// function getDayOfWeek(index) {
//     const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//
//     if (!days[index - 1]) {
//         throw new Error(`Day index should be in range 1 - ${days.length}`);
//     }
//
//     return days[index - 1];
// }

console.log(getDayOfWeek(2));

