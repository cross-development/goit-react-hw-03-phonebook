# ReactJS Homework 3 - Phonebook

## Структура проекта

### Папка src

Данная папка содержит папку components и файл index.js

### Папка components

В папке components содержатся папки с компонентами, которые включают файлы компонента и файлы
css-модуля стиля. Имя компонента начинается с заглавной буквы в camelCase формате. Имя модуля
начинается с заглавной буквы в camelCase формате с приставкой .module

### Содержание файла компонента

Основная структура файла компонента может включать:

- импорты Core (из react)
- импорты зависимых компонентов проекта (из папки components)
- импорты установленных утилит (uuid)
- импорты модулей стиля
- объявление классового или функционального компонента

## Стили проекта

### Стили анимаций

К компонентам проекта не были применены стили анимации монтирования/входа/выхода компонента или его
элементов.

### Оформительные стили

К стилям оформления элементов компонента применяется подход CSS-модулей. Файл стиля находятся в
папке каждого компонента. Импортируется как объект стилей с именем styles без деструктуризации
свойств.
