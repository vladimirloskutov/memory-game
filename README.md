# Игра "Память" (Memory Game)

## Описание игры:
    1 Нажать на кнопку "START", чтобы запустить игровой таймер.

    2 Поочередно нажимать на карточки, чтобы они открывались и можно было видеть символы, которые они скрывают.
        - Если символы двух открытых карт совпадают - карты удаляются.
        - Если символы двух открытых карт не совпадают - карты закрываются.
        - Если после открытия первой карты прошло 5 секунд и не открыта вторая карта - первая карта закрывается.

    3 Игра заканчивается, когда все карты отгаданы.
        - Таймер игры останавливается.
        - Результат раунда можно увидеть в таблице слева под таймером.
        - Повторное нажатие на кнопку "START" запустит новый раунд игры.

### Пример игры: [vladimirloskutov.github.io/memory-game/](https://vladimirloskutov.github.io/memory-game/)

## Установка, запуск и сборка проекта:
    * Клонировать проект: git clone https://github.com/vladimirloskutov/memory-game.git
    * Установить зависимости: npm install
    * Запусить проект: npm start
    *  Сборка проекта: npm run build

    Дополнительные команды
        * Запуск линтера: npm run lint
        