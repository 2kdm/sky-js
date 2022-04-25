/*  1
    Дан массив: `[1, 5, 4, 10, 0, 3]`

    Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.

    После вывода в консоль значения 10 цикл должен прекратить свою работу.
 */

{
    const numbers = [1, 5, 4, 10, 0, 3];

    for (const num of numbers) {
        console.log(num);

        if (num === 10) {
            break;
        }
    }
}




/*  2
    Дан массив: `[1, 5, 4, 10, 0, 3]`

    Найдите позицию числа 4 в этом массиве.
 */

{
    const numbers = [1, 5, 4, 10, 0, 3];
    console.log(numbers.findIndex(n => n === 4));
}




/*  3
    Дан массив чисел: `[1, 3, 5, 10, 20]`

    С помощью метода `join` выведите элементы массива через пробел (пустую строку ‘ ‘).
 */

{
    const numbers = [1, 3, 5, 10, 20];
    console.log(numbers.join(' '));
}



/*  4
    Создайте массив, состоящий из 10 значений.
    Значения массива необходимо сгенерировать с помощью метода `Math.random()` в диапазоне от 0 до 10.

    В данном массиве найдите все четные значения и добавьте их в новый массив.
    Результат работы программы необходимо вывести в консоль, это будет два массива: исходный массив и массив с четными значениями.
 */

const array = [];

for (let i = 0; i < 10; ++i) {
    array.push(Math.floor(Math.random() * 10))
}

const even = array.filter(n => n % 2 === 0);

console.log(array);
console.log(even);




/*  5
    С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
 */

const nestedArray = [];

for (let i = 0; i < 3; ++i) {
    nestedArray.push([]);

    for (let j = 0; j < 3; ++j) {
        nestedArray[i].push(1);
    }
}

console.log(nestedArray);



/*  6
    Дан массив: `[1, 1, 1]`

    Добавьте в конец массива значения 2, 2, 2.
 */

{
    const array = [1, 1, 1];

    array.push(2);
    array.push(2);
    array.push(2);

    console.log(array)
}





/*  7
    Дан массив: `[9, 8, 7, 'a', 6, 5]`

    С помощью метода `sort` отсортируйте массив и удалите букву ‘a’ из данного массива.
    В результате работы программы вывести массив, состоящий из цифр.
 */

{
    let array = [9, 8, 7, 'a', 6, 5];

    array = array.filter(el => !isNaN(el));

    array.sort();

    console.log(array);
}


/*  8
    Дан массив: `[9, 8, 7, 6, 5]`

    Пользователь с клавиатуры вводит число от 1 до 10 (использовать `prompt()`).
    Необходимо проверить, содержится ли введенное пользователем число в данном массиве.

 */

{
    const array = [9, 8, 7, 6, 5];

    const userInput = prompt('Введите число от 1 до 10');

    verify(array, userInput);

    function verify(array, input) {
        if (isNaN(userInput)) {
            console.error('User input is not a number');
            return;
        }

        if (+input < 1 || +input >= 10) {
            console.error('Number should be in range: 1 to 10');
            return;
        }

        console.log(`Number '${input}' is ${!array.includes(+input) ? 'not ' : ' '}included`);
    }
}


/*  9
    Дана строка: `‘abcdef’`

    Необходимо, чтобы программа вывела в консоль `‘fedcba’`
 */

const row = 'abcdef';

console.log(row.split('').reverse().join(''));



/*  10
    Создайте массив, состоящий из 6 элементов.  Элементы массива необходимо сгенерировать с помощью `Math.random()` в диапазоне от 1 до 10.

    Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

    *Для получения среднего арифметического необходимо все значения массива сложить и разделить на количество элементов в массиве.*
 */

{
    const array = [];

    for (let i = 0; i < 6; ++i) {
        array.push(Math.floor(Math.random() * (10 - 1) + 1))
    }

    console.log(array.reduce((prev, current) => prev + current, 0) / array.length);
}


/*  11
    Дан массив: `[[1, 2, 3,],[4, 5, 6]]`

    Выведите в консоль массив вида: `[1, 2, 3, 4, 5, 6]`
 */

{
    const array = [[1, 2, 3,],[4, 5, 6]];

    console.log(array.flat());
}



/*  12
    Создайте массив с произвольными числами (диапазон от 1 до 10).
    Переберите его с помощью цикла `for` и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

    Следующий элемент массива можно получить с помощью индекса: `i + 1`.
    Обратите внимание, что у последнего элемента нет следующего.
 */

{
    const array = [];

    for (let i = 0; i < 10; ++i) {
        array.push(Math.floor(Math.random() * (10 - 1) + 1))
    }

    for (let i = 0; i < array.length; ++i) {
        console.log(array[i] + (array[i + 1] || 0));
    }
}



/*  14
    С помощью рекурсии необходимо создать функцию, которая будет считать 2 в степени n.
    Формула, по которой рассчитывается 2 в степени n: 2^n = 2^(n-1) * 2
 */

function pow(number, n) {
    if (n === 0) {
        return 1;
    }

    const initialNumber = number;

    if (n < 0) {
        return 1 / recursivePow(number, n * -1);
    }

    return recursivePow(number, n);

    function recursivePow(number, n) {
        if (n === 1) {
            return number;
        } else {
            number = number * initialNumber;
            n--;
            return recursivePow(number, n);
        }
    }
}

console.log(pow(2, 5));



