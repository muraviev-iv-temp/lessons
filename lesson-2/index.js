//Домашнее задание. Задача: антипаттерн - напиши данный код максимально коротко! Победит тот, чей код будет короче

let y;
const x = '' + prompt('Введите число', -1);

if (x < 0 && x > -2) {
 y = 0;
} else {
 y = 2;
}

if (y === 0) {
    alert('Делить на ноль нельзя')
}


//решение. раз уж антипаттерн и считаем символы, то и переносы строк ни к чему)
//поправка для условия, когда нет необходимости в y
const x=''+prompt('Введите число',-1);x<0&x>-2&&alert('Делить на ноль нельзя')