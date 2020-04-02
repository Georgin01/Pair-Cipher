// Функция для проверки ключа. Ключ должен включать исключительно русские буквы.
// Символы и знаки - запрещены!
function isCyrillic(str) {
  return (/^[А-ЯЁа-яё]+$/).test(str);
}

// Функция для удаления пробелов из строки. Используется для ключа
function fullTrim(str) {
  return str.replace(/\s/g, '');
}

export default function inputValidation(input) {
 if (typeof input !== 'object') {
   throw new Error('Invalid input. Something went wrong!');
  }

 if (typeof input.key !== 'string' || !isCyrillic(fullTrim(input.key))) {
   throw new Error('Invalid keyword. Must be string and can only contain rus letters.');
 }

 return {
   text: input.msg,
   key: fullTrim(input.key).toLowerCase(),
   flag: input.flag,
 };
}
