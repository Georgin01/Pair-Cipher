// Функция для проверки ключа. Ключ должен включать исключительно русские буквы.
// Символы и знаки - запрещены!
function isCyrillic(str) {
  return (/^[А-ЯЁа-яё]+$/).test(str);
}

// Функция для удаления пробелов из строки. Используется для ключа
function fullTrim(str) {
  return str.replace(/\s/g, '');
}

// Функция для выбора символов строки по 1. Используется для ключа
function findUnique(str) {
  return str.split('').filter((item, i, ar) => ar.indexOf(item) === i).join('');
}

export default function inputValidation(input) {
 if (typeof input !== 'object') {
   throw new Error('Invalid input. Something went wrong!');
  }

 if (typeof input.key !== 'string' || !isCyrillic(fullTrim(input.key))) {
   throw new Error('Invalid keyword. Must be string and can only contain rus letters.');
 }

 input.key = fullTrim(input.key).toLowerCase();

 if (findUnique(input.key).length < 17) {
   throw new Error('Keyword doesn\'t have enough unique characters. Need 17');
 }

 return {
   text: input.msg,
   key: findUnique(input.key),
   flag: input.flag,
 };
}
