import inputValidation from '../tools/validation.js';

// Функция шифровки/дешифровки
export default function pairCipher(input) {
  try {
    const { text, key } = inputValidation(input);
    const remainChar = [...'абвгдеёжзийклмнопрстуфхцчшщъыьэюя '].filter((s) => !key.includes(s));

    let result = '';

    for (let i = 0; i < text.length; i++) {
      if (key.includes(text[i])) result += remainChar[key.indexOf(text[i])];
      else result += key[remainChar.indexOf(text[i])];
    }
    return result;
  } catch (e) {
    return e.message;
  }
}
