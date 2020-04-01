// Експортируем вспомогательную функцию
// Последующие операции служат для вывода закодированного и розшифрованного сообщения
// "Вешаем" обработчик на каждое событие и применяем функцию шифрования к объекту вывода

export default function outputFunc(message, key, decode, output, pairCipher) {
  message.addEventListener('input', () => {
    const { value } = this;
    output.textContent = pairCipher({
      msg: value,
      key: key.value,
      flag: 1,
    });
  });
  key.addEventListener('keyup', () => {
    const { value } = this;
    output.textContent = pairCipher({
      msg: message.value,
      key: value,
    });
  });
  decode.addEventListener('input', () => {
    const { value } = this;
    output.textContent = pairCipher({
      msg: value,
      key: key.value,
      flag: 0,
    });
  });
}
