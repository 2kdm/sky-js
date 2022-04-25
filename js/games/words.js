
document.querySelector('#words').addEventListener('click', () => {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const results = {
        0: 'Вы ответили не верно.',
        1: 'Вы были близки к победе!',
        2: 'Поздравляем! Вы победили!'
    }

    alert(words.sort(() => Math.random() - 0.5));

    const response1 = prompt('Чему равнялся первый элемент массива?');
    const response2 = prompt('Чему равнялся последний элемент массива?');

    if (!response1 && !response2) {
        return;
    }

    let score = 0;

    if (response1 === words[0]) {
        score++;
    }

    if (response2 === words[words.length -1]) {
        score++;
    }

    alert(results[score]);
});


