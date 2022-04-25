
document.querySelector('#season').addEventListener('click', () => {
    const request = prompt('Введите номер месяца');

    if (!request) {
        return;
    }

    const response = getSeason(request);

    if (response) {
        alert(response);
    } else {
        alert('Ошибка: номер месяца должен быть от 1 до 12');
    }
});


function getSeason(index) {
    const seasons = {
        1: 'Зима',
        2: 'Зима',
        3: 'Весна',
        4: 'Весна',
        5: 'Весна',
        6: 'Лето',
        7: 'Лето',
        8: 'Лето',
        9: 'Осень',
        10: 'Осень',
        11: 'Осень',
        12: 'Зима'
    };

    return seasons[index];
}
