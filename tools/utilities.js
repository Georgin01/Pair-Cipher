// Функция для проверки ключа. Ключ должен включать исключительно русские буквы.
// Символы и знаки - запрещены!
export function isCyrillic(str) {
  return (/^[А-ЯЁа-яё]+$/).test(str);
}

// Функция для удаления пробелов из строки. Используется для ключа
export function fullTrim(str) {
  return str.replace(/\s/g, '');
}

// Функция для выбора символов строки по 1. Используется для ключа
export function findUnique(str) {
  return str.split('').filter((item, i, ar) => ar.indexOf(item) === i);
}
